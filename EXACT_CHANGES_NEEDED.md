# Exact Changes Needed to Fix Hero Layout

## File 1: /src/styles/landing-shared.css

### Change 1: Fix hero text container and title selectors (Lines 76-93)

**FIND THIS:**
```css
/* Direct h1 in hero-content - spans full width */
.landing-hero-content > h1 {
  grid-column: 1 / -1;
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

/* h1 inside hero-text (for older structure) */
.hero-text h1 {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
```

**REPLACE WITH:**
```css
/* Landing hero text container */
.landing-hero-content > .landing-hero-text {
  grid-column: 1;
}

/* Landing hero text component styling */
.landing-hero-text .landing-hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.2;
}

/* Backwards compatibility - old .hero-text structure if still used elsewhere */
.hero-text h1 {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
```

---

### Change 2: Fix hero subtitle selectors (Lines 96-110)

**FIND THIS:**
```css
/* Direct subtitle in hero-content - spans full width */
.landing-hero-content > .hero-subtitle {
  grid-column: 1 / -1;
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0 0 1rem 0;
  font-weight: 600;
}

/* Subtitle in general */
.hero-subtitle {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0 0 1rem 0;
  font-weight: 600;
}
```

**REPLACE WITH:**
```css
/* Landing hero subtitle in component */
.landing-hero-text .landing-hero-subtitle {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}

/* Subtitle in general - for pages still using old structure */
.hero-subtitle {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0 0 1rem 0;
  font-weight: 600;
}
```

---

### Change 3: Add hero description styling (Lines after 110, add new)

**ADD THIS NEW SECTION:**
```css
/* Landing hero description in component */
.landing-hero-text .landing-hero-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}
```

---

### Change 4: Fix hero container layout (Lines 113-132)

**FIND THIS:**
```css
/* hero-text container */
.landing-hero-content > .hero-text {
  grid-column: 1;
}

/* hero-icon container */
.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 3;
  align-self: center;
}

/* LandingHeroButtons wrapper div - last div that contains buttons */
.landing-hero-content > div:last-child {
  grid-column: 1 / -1;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**REPLACE WITH:**
```css
/* hero-icon container */
.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
}

/* Landing hero buttons - FULL WIDTH */
.landing-hero-content > .landing-hero-buttons {
  grid-column: 1 / -1;
  margin-top: 1rem;
}

/* Backwards compatibility - old .hero-cta if still used */
.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0 4rem 0;
}
```

---

## File 2: /src/styles/landing-hero-text.css

This file is already correct, but verify it has this content:

```css
/* ==========================================
   LANDING HERO TEXT - GENERALIZED STYLING
   ========================================== */

.landing-hero-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}

.landing-hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0;
  line-height: 1.2;
}

.landing-hero-subtitle {
  font-size: 1.2rem;
  color: var(--primary-color, #2196f3);
  margin: 0;
  font-weight: 600;
}

.landing-hero-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .landing-hero-title {
    font-size: 2.2rem;
  }

  .landing-hero-subtitle {
    font-size: 1.1rem;
  }

  .landing-hero-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .landing-hero-title {
    font-size: 1.8rem;
  }

  .landing-hero-subtitle {
    font-size: 1rem;
  }

  .landing-hero-description {
    font-size: 0.9rem;
  }
}
```

---

## File 3: /src/styles/landing-hero-buttons.css

This file is already correct, but add if missing:

```css
/* Container principal de botones */
.landing-hero-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  margin: 2rem auto 4rem;
  padding: 0 2rem;
}
```

Make sure it includes:
- `.landing-btn { ... }`
- `.landing-btn-primary { ... }`
- `.landing-btn-secondary { ... }`
- `.landing-btn-tertiary { ... }`
- Responsive breakpoints

---

## Verification Script

After making changes, verify CSS rules apply correctly:

**In browser DevTools, for hero section:**

1. Inspect the h1 with class `.landing-hero-title`
   - Should show: `font-size: 3.2rem`
   - Should show: Applied from landing-hero-text.css line 12
   - Check if `grid-column` inherited from parent

2. Inspect the subtitle p with class `.landing-hero-subtitle`
   - Should show: `color: var(--primary-color, #2196f3)` OR the resolved color
   - Should show: Applied from landing-hero-text.css line 20

3. Inspect the buttons container div with class `.landing-hero-buttons`
   - Should show: `display: flex`
   - Should show: `justify-content: center`
   - Check if `grid-column: 1 / -1` is applied (from updated landing-shared.css line ~125)

---

## Testing After Changes

### Quick Test 1: Desktop Layout
```
Expected:
- Hero title text spans full width
- Hero subtitle text spans full width
- Buttons are centered below
- Hero icon appears on right side
- All elements properly aligned in grid
```

### Quick Test 2: Mobile Layout (< 768px)
```
Expected:
- Grid becomes single column
- All elements stack vertically
- Icon appears below text
- Buttons full width on small screens
```

### Quick Test 3: Colors
```
Expected (for each theme):
- AWS: Orange (#ff9800)
- Docker: Blue (#2196f3)
- SQL: Blue (#1976d2)
- Git: Red (#d32f2f)
- etc.
```

---

## Summary of Changes

### landing-shared.css Changes:
1. Lines 76-93: Replace `.hero-text h1` with `.landing-hero-text .landing-hero-title`
2. Lines 96-110: Replace selectors to match `.landing-hero-text .landing-hero-subtitle`
3. Add: `.landing-hero-text .landing-hero-description` styles
4. Lines 113-132: Replace old selectors with `.landing-hero-text`, `.landing-hero-buttons`

### Result:
- All hero elements align to correct CSS rules
- Full-width layout works for title and subtitle
- Buttons properly positioned below
- Mobile responsive layout preserved

---

## Alternative: One-Line Quick Fix

If you only want to fix the layout without understanding everything:

**In landing-shared.css, find line 125 and change:**
```css
.landing-hero-content > div:last-child {
  grid-column: 1 / -1;
  ...
}
```

**To:**
```css
.landing-hero-content > .landing-hero-text,
.landing-hero-content > .landing-hero-buttons {
  grid-column: 1 / -1;
  ...
}
```

This single change will make hero title, subtitle, and buttons span full width.

---

## Why These Changes Work

1. **`.landing-hero-text` has `grid-column: 1`** (left column only)
   - But wait, that's wrong! It should be full width for title/subtitle
   - Actually, the grid layout is: title/subtitle in left column, icon in right
   - So `.landing-hero-text` SHOULD be column 1 (not full width)
   - But `.landing-hero-buttons` SHOULD be full width (column 1 / -1)

2. **Actually, the grid structure is:**
   ```
   Grid Template: 1fr 1fr (two equal columns)

   Row 1:
   - Column 1: Hero text (h1, subtitle, description)
   - Column 2: Hero icon

   Row 2:
   - Column 1-2: Buttons (FULL WIDTH)
   ```

3. **So the correct CSS is:**
   ```css
   .landing-hero-content > .landing-hero-text {
     grid-column: 1;        /* LEFT column only */
   }

   .landing-hero-content > .hero-icon {
     grid-column: 2;        /* RIGHT column only */
   }

   .landing-hero-content > .landing-hero-buttons {
     grid-column: 1 / -1;   /* BOTH columns (full width) */
   }
   ```

This is EXACTLY what the corrected CSS achieves.

---

## Files That DON'T Need Changes (Correct Already)

- `/src/components/LandingHeroText.jsx` ✓
- `/src/components/LandingHeroButtons.jsx` ✓
- `/src/styles/landing-hero-text.css` ✓ (mostly)
- `/src/styles/landing-hero-buttons.css` ✓

Only `/src/styles/landing-shared.css` needs updates to match these components.

