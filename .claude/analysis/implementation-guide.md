# Z-Index Fix: Implementation Guide

## Status Summary

**Current State**: z-index: 1000 is a band-aid covering architectural issues

**Root Causes Identified**:
1. No stacking context on parent container
2. Absolute positioning in document flow
3. Missing portal for overlay component
4. Scattered z-index values without strategy

**Impact**: Low (works but fragile), Medium (mobile performance), High (maintainability)

---

## Quick Fix (5 minutes)

### Step 1: Establish Stacking Context

File: `/src/components/ClusterSearch.css`

```css
.cluster-search {
  padding: 0;
  background: transparent;
  width: 100%;
  box-sizing: border-box;

  /* ADD THESE LINES */
  position: relative;
  z-index: 50;  /* Create stacking context; doesn't affect layout */
}
```

**Why**: Creates explicit stacking context so `.search-results` z-index is scoped, not global.

### Step 2: Reduce Search Results Z-Index

File: `/src/components/ClusterSearch.css` (Line 83)

**Before**:
```css
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e9ecef;
  z-index: 1000;  /* TOO HIGH */
}
```

**After**:
```css
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e9ecef;
  z-index: 1;  /* Relative to .cluster-search context */
}
```

**Why**: With parent stacking context (z-index:50), the dropdown competes at z-index:50, not 1000.

### Step 3: Add Safety Comment

File: `/src/components/ClusterSearch.css`

```css
/*
  Stacking Context Strategy:
  .cluster-search (z-index: 50) creates new stacking context
  .search-results (z-index: 1) is relative to .cluster-search only
  This prevents conflicts with navbar (z-index: 100) and sidebar (z-index: 500)

  Z-Index Hierarchy:
  - Page level: 100+ (navbar, fixed elements)
  - Component contexts: 50-99 (dropdowns, popovers)
  - Base content: 1-49 (form elements, inline)
*/
```

**Result**: Takes 5 minutes, zero breaking changes, fixes hierarchy.

---

## Medium Fix (90 minutes)

### Proper Solution: Portal Pattern

This is the professional approach used by Material-UI, Chakra, Headless UI.

#### Step 1: Create Dropdown Root

File: `/index.html`

**Before**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**After**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>
    <div id="root"></div>
    <div id="dropdown-root"></div>
  </body>
</html>
```

#### Step 2: Update ClusterSearch.jsx

File: `/src/components/ClusterSearch.jsx`

**Before**:
```jsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import { MODULE_LOGOS } from '../constants/logos';
import './ClusterSearch.css';

export function ClusterSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return modulesWithLessons.filter(module =>
      module.name.toLowerCase().includes(query) ||
      module.description.toLowerCase().includes(query) ||
      module.id.toLowerCase().includes(query)
    ).slice(0, 12);
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="cluster-search">
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Busca una tecnología: React, Java, Docker..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => searchQuery && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={handleClear}>
              ✕
            </button>
          )}
          <span className="search-icon">🔍</span>
        </div>

        {showResults && filteredModules.length > 0 && (
          <div className="search-results">
            {filteredModules.map((module) => {
              const logo = MODULE_LOGOS[module.id];
              return (
                <Link
                  key={module.id}
                  to={`/${module.id}`}
                  className="result-item"
                  onClick={() => handleClear()}
                >
                  <div className="result-logo">
                    {logo ? (
                      <img src={logo} alt={module.name} />
                    ) : (
                      <span className="result-icon">{module.icon}</span>
                    )}
                  </div>
                  <div className="result-info">
                    <div className="result-name">{module.name}</div>
                    <div className="result-desc">{module.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {showResults && searchQuery && filteredModules.length === 0 && (
          <div className="search-no-results">
            No se encontraron resultados para "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
```

**After**:
```jsx
import { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import { MODULE_LOGOS } from '../constants/logos';
import './ClusterSearch.css';

export function ClusterSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);
  const [inputRect, setInputRect] = useState(null);

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return modulesWithLessons.filter(module =>
      module.name.toLowerCase().includes(query) ||
      module.description.toLowerCase().includes(query) ||
      module.id.toLowerCase().includes(query)
    ).slice(0, 12);
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  // Calculate input position for portal dropdown
  useEffect(() => {
    if (inputRef.current && showResults) {
      const rect = inputRef.current.getBoundingClientRect();
      setInputRect({
        top: rect.bottom,
        left: rect.left,
        width: rect.width
      });
    }
  }, [showResults]);

  const searchResultsContent = showResults && (
    <>
      {filteredModules.length > 0 && (
        <div className="search-results" style={inputRect ? {
          top: `${inputRect.top}px`,
          left: `${inputRect.left}px`,
          width: `${inputRect.width}px`
        } : {}}>
          {filteredModules.map((module) => {
            const logo = MODULE_LOGOS[module.id];
            return (
              <Link
                key={module.id}
                to={`/${module.id}`}
                className="result-item"
                onClick={() => handleClear()}
              >
                <div className="result-logo">
                  {logo ? (
                    <img src={logo} alt={module.name} />
                  ) : (
                    <span className="result-icon">{module.icon}</span>
                  )}
                </div>
                <div className="result-info">
                  <div className="result-name">{module.name}</div>
                  <div className="result-desc">{module.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {searchQuery && filteredModules.length === 0 && (
        <div className="search-no-results" style={inputRect ? {
          top: `${inputRect.top}px`,
          left: `${inputRect.left}px`,
          width: `${inputRect.width}px`
        } : {}}>
          No se encontraron resultados para "{searchQuery}"
        </div>
      )}
    </>
  );

  return (
    <div className="cluster-search">
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Busca una tecnología: React, Java, Docker..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => searchQuery && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={handleClear}>
              ✕
            </button>
          )}
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Portal the dropdown to document root */}
      {createPortal(searchResultsContent, document.getElementById('dropdown-root'))}
    </div>
  );
}
```

#### Step 3: Update CSS for Fixed Positioning

File: `/src/components/ClusterSearch.css`

**Before**:
```css
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e9ecef;
  border-top: none;
  border-radius: 0 0 12px 12px;
  margin-top: -2px;
  max-height: 600px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
```

**After**:
```css
.search-results {
  position: fixed;  /* Changed from absolute */
  top: 0;           /* Will be set via inline styles */
  left: 0;          /* Will be set via inline styles */
  right: auto;      /* Remove right positioning */
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 0 0 12px 12px;
  max-height: 600px;
  overflow-y: auto;
  z-index: 100;     /* Reduced, no longer needs 1000 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.search-no-results {
  position: fixed;  /* Add this */
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 0 0 12px 12px;
  padding: 2rem 1.2rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.95rem;
  z-index: 100;     /* Matched with results */
}
```

**Alternative: More Maintainable CSS Variable Approach**

```css
:root {
  --z-dropdown: 100;
  --z-navbar: 100;
  --z-sidebar: 500;
  --z-modal: 1000;
}

.search-results {
  position: fixed;
  z-index: var(--z-dropdown);
  /* ... rest of styles */
}

.navbar {
  z-index: var(--z-navbar);
}
```

---

## Long-Term Fix (Weekly)

### Centralize Z-Index Strategy

File: `/src/styles/z-index.css` (NEW)

```css
/**
 * Z-INDEX STRATEGY
 *
 * All z-index values should be defined here to prevent conflicts.
 * Do NOT use inline z-index values elsewhere in codebase.
 *
 * Ranges:
 * 1-49:     Component internal stacking contexts
 * 50-99:    Dropdowns, popovers, tooltips
 * 100-199:  Navigation (navbar, sidebar toggle)
 * 200-299:  Fixed headers, footers
 * 500-599:  Page-level sidebars
 * 1000+:    Modal/overlay system
 */

:root {
  /* Dropdowns & Popovers */
  --z-cluster-search-context: 50;
  --z-dropdown: 100;
  --z-tooltip: 101;

  /* Navigation */
  --z-navbar: 100;
  --z-breadcrumb: 99;
  --z-sidebar-toggle: 99;

  /* Page Structure */
  --z-sidebar-overlay: 499;
  --z-sidebar: 500;

  /* System */
  --z-modal: 1000;
  --z-notification: 1100;
  --z-scroll-to-top: 100;
}
```

File: `/src/App.css` (Update)

```css
.navbar {
  z-index: var(--z-navbar);  /* Instead of 100 */
}

.breadcrumb {
  z-index: var(--z-breadcrumb);  /* Instead of 99 */
}

.hamburger-menu {
  z-index: var(--z-sidebar-toggle);  /* Instead of 101 */
}
```

File: `/src/components/LessonSidebar.css` (Update)

```css
.lesson-sidebar-toggle {
  z-index: var(--z-sidebar-toggle);  /* Instead of 999 */
}

.lesson-sidebar-overlay {
  z-index: var(--z-sidebar-overlay);  /* Instead of 499 */
}

.lesson-sidebar {
  z-index: var(--z-sidebar);  /* Instead of 500 */
}
```

File: `/src/components/ClusterSearch.css` (Update)

```css
.cluster-search {
  position: relative;
  z-index: var(--z-cluster-search-context);  /* Instead of 50 */
}

.search-results {
  position: fixed;
  z-index: var(--z-dropdown);  /* Instead of 1000 or 1 */
}
```

File: `/src/components/ScrollToTop.css` (Update)

```css
.scroll-to-top {
  z-index: var(--z-scroll-to-top);  /* Instead of 1000 */
}
```

---

## Testing Strategy

### Unit Tests

File: `/src/components/ClusterSearch.test.jsx` (NEW)

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import { ClusterSearch } from './ClusterSearch';
import { BrowserRouter } from 'react-router-dom';

describe('ClusterSearch Z-Index & Positioning', () => {
  test('dropdown appears at correct z-index', () => {
    render(
      <BrowserRouter>
        <ClusterSearch />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/Busca una tecnología/);
    input.focus();
    input.value = 'Java';

    const dropdown = waitFor(() =>
      document.getElementById('dropdown-root').querySelector('.search-results')
    );

    expect(dropdown).toBeTruthy();
    const computedStyle = window.getComputedStyle(dropdown);
    expect(computedStyle.zIndex).toBe('100');
    expect(computedStyle.position).toBe('fixed');
  });

  test('dropdown is rendered in portal root', () => {
    render(
      <BrowserRouter>
        <ClusterSearch />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/Busca una tecnología/);
    input.value = 'Python';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const dropdownRoot = document.getElementById('dropdown-root');
    expect(dropdownRoot.innerHTML).toContain('search-results');
  });

  test('dropdown does not get clipped by hero overflow', () => {
    render(
      <BrowserRouter>
        <ClusterSearch />
      </BrowserRouter>
    );

    const hero = document.querySelector('.hero');
    const dropdown = document.querySelector('.search-results');

    // Hero should not have overflow: hidden
    const heroStyle = window.getComputedStyle(hero);
    expect(heroStyle.overflow).not.toBe('hidden');
  });
});
```

### Integration Tests

```jsx
test('search dropdown appears above sidebar', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Open lesson page with sidebar
  const lessonLink = screen.getByText(/Lesson/);
  fireEvent.click(lessonLink);

  // Open sidebar
  const toggleButton = screen.getByTestId('sidebar-toggle');
  fireEvent.click(toggleButton);

  // Open search
  const searchInput = screen.getByPlaceholderText(/Busca/);
  fireEvent.click(searchInput);
  fireEvent.change(searchInput, { target: { value: 'Java' } });

  // Check z-indices
  const searchResults = document.querySelector('.search-results');
  const sidebar = document.querySelector('.lesson-sidebar');

  const searchZ = parseInt(window.getComputedStyle(searchResults).zIndex);
  const sidebarZ = parseInt(window.getComputedStyle(sidebar).zIndex);

  expect(searchZ).toBeGreaterThanOrEqual(sidebarZ);
});
```

---

## Rollout Plan

### Phase 1: Quick Fix (TODAY - 5 min)
- Add stacking context to `.cluster-search`
- Reduce `.search-results` z-index to 1
- Add comment documenting strategy
- No test changes needed
- **Risk**: Minimal, changes are isolated

### Phase 2: Portal Implementation (THIS WEEK - 90 min)
- Create `#dropdown-root` in index.html
- Update ClusterSearch.jsx with createPortal
- Update CSS for fixed positioning
- Add tests
- Deploy with feature flag if possible
- **Risk**: Low, widely used pattern

### Phase 3: Centralization (NEXT WEEK - 2-3 hours)
- Create `/src/styles/z-index.css`
- Update all z-index values to use CSS variables
- Audit for other position:absolute/fixed issues
- Add documentation
- **Risk**: Medium, affects multiple components

### Phase 4: Prevention (ONGOING)
- Add linting rule to catch hardcoded z-index
- Document z-index strategy in wiki
- Code review checklist for positioning
- Monitor for new stacking conflicts

---

## Files Summary

### Quick Fix Only
```
Modified:
  /src/components/ClusterSearch.css
```

### Portal Implementation
```
Modified:
  /index.html
  /src/components/ClusterSearch.jsx
  /src/components/ClusterSearch.css

New:
  None (uses existing React)
```

### Full Centralization
```
Modified:
  /src/App.css
  /src/components/LessonSidebar.css
  /src/components/ClusterSearch.css
  /src/components/ScrollToTop.css
  /src/pages/ModulePage.css (if applicable)
  /src/pages/SectionPage.css (if applicable)

New:
  /src/styles/z-index.css
  /src/components/ClusterSearch.test.jsx
```

---

## Validation Checklist

Before deploying:

- [ ] Stacking context created on `.cluster-search`
- [ ] Search dropdown z-index reduced to 1 (or removed)
- [ ] Dropdown appears above navbar (z-index: 100)
- [ ] Dropdown appears above sidebar (z-index: 500)
- [ ] No visual regressions on home page
- [ ] No visual regressions on lesson pages
- [ ] Mobile search still works (including scroll)
- [ ] Dropdown closes on blur (200ms timeout)
- [ ] Dropdown clears on item click
- [ ] No console errors related to positioning
- [ ] Portal renders to correct element (if implemented)
- [ ] All tests pass
- [ ] Documentation updated

---

## References

- [MDN: CSS Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [React: createPortal](https://react.dev/reference/react-dom/createPortal)
- [Chakra UI: Positioning Pattern](https://chakra-ui.com/docs/components/menu)
- [Material-UI: Z-Index Strategy](https://mui.com/material-ui/customization/z-index/)
- [Web.dev: Positioning Performance](https://web.dev/rendering-performance/)
