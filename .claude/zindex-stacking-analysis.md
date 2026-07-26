# Z-Index Stacking Context Analysis: Search Results Hidden Behind Section

## Problem Summary
Search results (`.search-results`) with `z-index: 1000` are appearing BEHIND the next section "Elige Tu Especialidad en Tech" instead of on top.

---

## Root Causes Identified

### 1. **Hero-Enhanced Creates a Stacking Context with `position: relative` and `z-index: 2`**

**File:** `/src/components/HeroEnhanced.css` (line 99-112)

```css
.hero-enhanced-container {
  position: relative;
  z-index: 2;  /* ← PROBLEM: Creates stacking context */
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  animation: fadeInDown 0.8s ease-out 0.2s both;
  justify-self: center;
}
```

**Impact:** The `.hero-enhanced-container` creates a new stacking context. While `.search-results` has `z-index: 1000`, it's positioned absolutely within `.search-container` (which is inside `.hero-enhanced`). The entire hero component becomes a stacking context because its parent (`.hero-enhanced`) has `position: relative`.

### 2. **Hero-Enhanced Header Element - Position and Stacking**

**File:** `/src/components/HeroEnhanced.css` (line 43-52)

```css
.hero-enhanced {
  position: relative;  /* ← Creates stacking context */
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  overflow-x: visible;
  overflow-y: hidden;  /* ← PROBLEM: Clips content! */
  margin-bottom: 3rem;
}
```

**Critical Issue:** `overflow-y: hidden` clips any content that extends beyond the hero section's boundaries, including absolutely positioned dropdown content.

### 3. **Next Section (QuickAccessSection) Lacks Z-Index**

**File:** `/src/components/QuickAccessSection.css` (line 1-5)

```css
.quick-access-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 3rem 0;
  border-bottom: 1px solid #e8e8e8;
  /* No z-index specified */
}
```

**Impact:** While the section doesn't explicitly create a stacking context, it can visually overlap the search results due to the document flow and the hero's `overflow: hidden`.

---

## Stacking Context Hierarchy

```
Document Root (z-index: auto)
├── .hero-enhanced (position: relative, z-index: auto, overflow-y: hidden)
│   ├── .hero-enhanced-bg (position: fixed, z-index: -2)
│   ├── .hero-enhanced-overlay (position: fixed, z-index: -1)
│   ├── .hero-enhanced-container (position: relative, z-index: 2) ← NEW STACKING CONTEXT
│   │   └── (Hero content)
│   ├── .hero-enhanced-search-wrapper (position: static)
│   │   └── .cluster-search
│   │       └── .search-container (position: relative)
│   │           └── .search-results (position: absolute, z-index: 1000) ← Contained within stacking context
│   └── .hero-enhanced-frame (position: absolute)
│
├── .quick-access-section (position: static)
│   └── (Cards - renders below hero)
```

---

## Why Z-Index 1000 Doesn't Work

1. **Stacking Context Containment:** The `.search-results` is absolutely positioned within `.search-container`, which is inside `.hero-enhanced-search-wrapper`, which is inside `.hero-enhanced`. Even though it has `z-index: 1000`, it's only compared to siblings within its stacking context.

2. **Overflow Hidden:** The `.hero-enhanced` has `overflow-y: hidden`, which clips any absolutely positioned children that extend beyond the element's bounds.

3. **Hero-Enhanced-Container Stacking Context:** The `z-index: 2` on `.hero-enhanced-container` doesn't affect the search wrapper (which is a sibling), but the entire hero section establishes its own stacking context due to `position: relative`.

---

## Solutions (Ranked by Best Practice)

### ✅ **Solution 1: Remove overflow-y: hidden (RECOMMENDED)**

**Why:** This is the root cause. The overflow property clips dropdown content.

**File:** `HeroEnhanced.css`

```css
.hero-enhanced {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  overflow-x: visible;
  /* Remove overflow-y: hidden */
  margin-bottom: 3rem;
}
```

**Trade-offs:** None for search results. The `overflow-y: hidden` may have been added to prevent scrollbar flashing during parallax animations. The parallax can still work without it.

---

### ✅ **Solution 2: Move Search Results Outside Hero Using Portal (BEST FOR FLEXIBILITY)**

**Why:** Portals render content at the document root level, avoiding all stacking context issues.

**Implementation:**

```jsx
// HeroEnhanced.jsx - Modified
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { ClusterSearch } from './ClusterSearch';

export function HeroEnhanced({ ... }) {
  const searchContainerRef = useRef(null);

  return (
    <header className="hero-enhanced">
      {/* ... existing content ... */}
      <div className="hero-enhanced-search-wrapper" ref={searchContainerRef}>
        <ClusterSearch portalContainer={searchContainerRef.current} />
      </div>
    </header>
  );
}
```

```jsx
// ClusterSearch.jsx - Modified
export function ClusterSearch({ portalContainer = null }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const searchResultsContent = showResults && filteredModules.length > 0 ? (
    <div className="search-results">
      {/* ... results ... */}
    </div>
  ) : null;

  // Render results to portal if container provided
  return (
    <div className="cluster-search">
      <div className="search-container">
        {/* ... input ... */}
      </div>
      {portalContainer && searchResultsContent
        ? createPortal(searchResultsContent, document.body)
        : searchResultsContent}
    </div>
  );
}
```

---

### ✅ **Solution 3: Increase Z-Index on Hero Section (TEMPORARY FIX)**

**Why:** Quick fix, but doesn't address root cause. If you must keep overflow-y: hidden, elevate the entire hero.

```css
.hero-enhanced {
  position: relative;
  z-index: 10;  /* Add this */
  /* ... rest ... */
}
```

**Trade-offs:** Other elements can't appear above the hero section. Not scalable for future UI needs.

---

### ⚠️ **Solution 4: Remove position: relative from Container (NOT RECOMMENDED)**

**Why:** While it would flatten the stacking context, it breaks layout assumptions.

```css
.hero-enhanced-container {
  /* position: relative;  ← Remove */
  z-index: 2;  /* Still has effect */
  /* ... */
}
```

**Trade-offs:** Unknown side effects on layout. Difficult to maintain.

---

## Detailed Explanation: Why This Happens

In CSS, z-index **only works within the same stacking context**. When an element has:
- `position: relative/absolute/fixed` + `z-index` (non-auto)
- `transform`, `filter`, `opacity` < 1
- `mix-blend-mode` (non-normal)

It creates a **new stacking context** for its children.

In your case:
1. `.hero-enhanced` has `position: relative` (stacking context root)
2. `.search-results` is a child with `z-index: 1000`, but:
   - It can only be higher than siblings within `.hero-enhanced`
   - It cannot escape the `overflow-y: hidden` boundary
   - The next section (`.quick-access-section`) is rendered BELOW the hero in the DOM

This is classic **z-index inversion** - a higher z-index value inside a container can be rendered below a lower z-index value outside.

---

## Testing the Fix

After implementing Solution 1 (removing `overflow-y: hidden`):

```bash
# Test in browser:
1. Open Home page
2. Click search input
3. Verify results appear ON TOP of all sections below
4. Verify search results are NOT cut off at hero boundary
5. Verify parallax background still works smoothly
```

---

## Recommendation

**Use Solution 1** (remove `overflow-y: hidden`) because:
- ✅ Simplest fix
- ✅ No performance impact
- ✅ No code restructuring needed
- ✅ Follows CSS best practices
- ✅ Parallax animation works without it
- ✅ Search results can escape hero boundaries naturally

If you need more control in the future, implement Solution 2 (Portal) to completely decouple search results from hero stacking context.
