# ThriveWell Website

A responsive, static website for ThriveWell — showcasing specialities, process steps, why choose us, team, testimonials, FAQs, and a lightweight chatbot. Built with plain HTML/CSS/JS and designed to be fast, accessible, and easy to host on GitHub Pages.

## Highlights
- Design system color: primary `#5481A8` with subtle fills and focus states.
- Buttons: outline variants (`.btn-outline-primary`, `.btn-outline-secondary`), sizes (`.btn-sm`, `.btn-md`, `.btn-lg`), and new icon-only (`.btn-icon`) and icon-text (`.btn-icon-text`) styles.
- Navigation: centered links, active pill style, soft background for the fixed-top navbar.
- Responsive layouts: single-column stacks on small screens for Specialities, Process steps, Why Choose grid, Footer columns; compact hero typography for mobile.
- Chatbot: client-side UI widget with a chat log and input; positioned bottom-right; adapts on very small screens.

## Project Structure
```
assets/           # Images and icons
css/styles.css    # Global styles and design system rules
index.html        # Main page markup
js/app.js         # Minimal interactivity (e.g., chatbot toggles)
```

## Run Locally
You can open `index.html` directly in a browser, or serve it to match production behavior.

- Quick static server (Python):
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000/`

## Chatbot
- UI only (no backend) for demo purposes.
- Container: `.chatbot` with `.chat-log` and input area.
- Mobile adjustments: expands width and reduces height on very small screens (`max-width: 420px`).
- Accessibility: use keyboard to focus input; non-interactive elements avoid tab traps.

## Responsive Details
- Breakpoints added for `max-width: 640px` (hero, steps, why-grid, footer-cols) and `max-width: 520px/420px` (specialities grid and chatbot).
- Hover/active states use subtle rgba fills for outline buttons to preserve contrast and clarity.

## Deploy to GitHub Pages
1. Push the repository to GitHub (already done).
2. In the repository, go to Settings → Pages.
3. Set Source to `Deploy from a branch`.
4. Select Branch `main` and Folder `/ (root)`.
5. Save — your site will be available at:
   - `https://pparupudi.github.io/Thrivewell/` (path case matches repo name).

## Maintenance Tips
- Update styles in `css/styles.css` to refine themes or responsive behavior.
- Use icon and icon-text button variants to keep CTAs consistent.
- Keep images optimized (`assets/`) for faster loads.

## Future Enhancements
- Wire chatbot to an API for real conversations.
- Add accessibility audits (skip links, ARIA roles, reduced motion preferences).
- Add a `Contact` form with validation and spam protection.