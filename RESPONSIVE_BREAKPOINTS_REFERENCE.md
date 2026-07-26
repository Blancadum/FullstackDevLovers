# Landing Hero Responsive Breakpoints Quick Reference

## Standard Breakpoints

### Desktop (1025px and above)
```css
/* Default CSS applies */
.landing-hero-content { grid-template-columns: 1fr 1fr; }
h1 { font-size: 3.2rem; }
.hero-icon img { max-height: 400px; }
.landing-hero-buttons { flex-direction: row; }
padding: 2rem;
```

### Tablet Large (769px - 1024px) ← FIXED IN AUDIT
```css
@media (max-width: 1024px) {
  grid-template-columns: 1fr;  /* Changed from 1fr 1fr */
  flex-direction: column;       /* Buttons now stack */
  h1 { font-size: 2.8rem; }
  .hero-icon img {
    max-height: 250px;
    max-width: 250px;          /* Added explicit width */
  }
  padding: 1.5rem;
  min-height: 350px;           /* Added minimum height */
}
```

### Tablet (481px - 768px)
```css
@media (max-width: 768px) {
  grid-template-columns: 1fr;
  flex-direction: column;
  h1 { font-size: 2.2rem; }
  .hero-icon img {
    max-height: 200px;         /* Improved from 180px */
    max-width: 200px;
  }
  padding: 1.5rem 1rem;
  min-height: 320px;
}
```

### Mobile (375px - 480px)
```css
@media (max-width: 480px) {
  grid-template-columns: 1fr;
  flex-direction: column;
  h1 { font-size: 1.8rem; }
  .hero-icon img {
    max-height: 140px;         /* Improved from 120px */
    max-width: 140px;
  }
  padding: 1rem 0.75rem;
  min-height: 300px;
  .btn { min-height: 44px; }   /* WCAG compliance */
}
```

### Small Mobile (≤375px) ← NEW BREAKPOINT
```css
@media (max-width: 375px) {
  h1 { font-size: 1.6rem; }    /* Optimized for small phones */
  .hero-icon img {
    max-height: 120px;
    max-width: 120px;
  }
  padding: 0.75rem 0.5rem;
  min-height: 280px;
  gap: 0.75rem;
}
```

### Extra Small (≤360px)
```css
@media (max-width: 360px) {
  h1 { font-size: 1.5rem; }
  .hero-icon img {
    max-height: 110px;
    max-width: 110px;
  }
  /* Minimal adjustments */
}
```

---

## Key Properties by Breakpoint

### Heading Sizes Progression
| Viewport | H1 Size | Ratio |
|----------|---------|-------|
| 1280px+  | 3.2rem  | 100%  |
| 1024px   | 2.8rem  | 87.5% |
| 768px    | 2.2rem  | 68.75%|
| 480px    | 1.8rem  | 56.25%|
| 375px    | 1.6rem  | 50%   |
| 360px    | 1.5rem  | 46.87%|

### Image Sizing Progression
| Viewport | Max Height | Max Width | Ratio |
|----------|------------|-----------|-------|
| 1280px+  | 400px      | auto      | 100%  |
| 1024px   | 250px      | 250px     | 62.5% |
| 768px    | 200px      | 200px     | 50%   |
| 480px    | 140px      | 140px     | 35%   |
| 375px    | 120px      | 120px     | 30%   |
| 360px    | 110px      | 110px     | 27.5% |

### Button Layout Strategy
- **Desktop (1025px+)**: `flex-direction: row`, wrap allowed
- **All tablets & mobile (≤1024px)**: `flex-direction: column`, full width
- **All sizes**: `min-height: 44px` for WCAG AAA compliance

### Padding Progression
| Viewport | Padding | Ratio |
|----------|---------|-------|
| 1280px+  | 2rem    | 100%  |
| 1024px   | 1.5rem  | 75%   |
| 768px    | 1rem    | 50%   |
| 480px    | 0.75rem | 37.5% |
| 375px    | 0.5rem  | 25%   |

---

## Files to Modify

When making responsive changes to landing heroes:

1. **`/src/styles/landing-shared.css`** - Main responsive rules
2. **`/src/styles/landing-hero-buttons.css`** - Button-specific responsive
3. **`/src/styles/landing-hero-text.css`** - Text sizing responsive
4. **`/src/components/Hero.css`** - Primary Hero component responsive

Do NOT modify:
- `/src/components/LandingHero.jsx` - Component structure is optimal
- Individual landing page files - Use shared CSS

---

## Validation Commands

```bash
# Test build with optimized CSS
npm run build

# Check responsive at specific widths in DevTools
# Dimensions to test: 375px, 480px, 768px, 1024px, 1280px

# Verify button sizes (min 44x44px)
# Inspect .landing-btn, .btn-primary, .btn-secondary
```

---

## Common Issues & Solutions

### Issue: Image too large on tablet
**Solution:** Ensure `max-width` is set equal to `max-height` at 1024px and below

### Issue: Buttons not stacking on mobile
**Solution:** Verify `flex-direction: column` is applied at ≤1024px breakpoint

### Issue: Text overlaps on 375px phones
**Solution:** Check that 375px breakpoint reduces h1 to 1.6rem (not 1.8rem)

### Issue: Hero section too tall on mobile
**Solution:** Verify min-height is ≤300px at mobile breakpoints

### Issue: Buttons don't meet touch target size
**Solution:** Ensure all buttons have `min-height: 44px` at all breakpoints

---

## Testing Devices by Breakpoint

- **375px**: iPhone SE, iPhone 12/13 Mini
- **480px**: iPhone 6/7/8/X/11/12/13/14 (portrait)
- **768px**: iPad Mini, iPad (7th-8th gen)
- **1024px**: iPad (9th gen+), iPad Air, iPad Pro 10.5"
- **1280px+**: iPad Pro 12.9", Desktop monitors
- **1920px+**: Wide desktop displays, 4K monitors

---

## Last Updated
2026-07-26 - Responsive Audit Complete
