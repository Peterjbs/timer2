# GitHub Copilot Instructions for timer2

## Project Overview

This repository contains a dual-player timer web application designed for gaming or competitive scenarios. The application features video background clips with customizable themes and timer functionalities.

## Technology Stack

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Architecture**: Client-side only, standalone HTML files
- **Media**: Video clips stored in the `/clips` directory with references in `clips.json`

## Key Files

- `2playertimer.html` - Main dual-quadrant timer UI with built-in clips fallback and vibe themes
- `gameui.html` - Full ferocity quadrant timers with challenge features (v16)
- `Quadrant Timers — Dual Overlay.html` - Alternative timer overlay implementation
- `clips.json` - JSON array containing paths to video clip files
- `/clips/` - Directory containing MP4 video files for backgrounds

## Code Style and Conventions

### HTML/CSS
- Use semantic HTML5
- CSS custom properties (CSS variables) for theming stored in `:root`
- Inline styles within `<style>` tags in HTML files
- Mobile-first responsive design with `clamp()` for fluid typography
- Dark theme color palette with customizable accent colors

### JavaScript
- Vanilla JavaScript (no dependencies or frameworks)
- Use modern ES6+ features
- Event-driven architecture for UI interactions
- DOM manipulation for dynamic content updates

### Theming
- Color scheme defined with CSS variables:
  - `--bg`: Background color
  - `--fg`: Foreground/text color
  - `--panel`: Panel background
  - `--accent`: Accent color
  - `--border`: Border color
  - Theme-specific variables: `--themeAccent`, `--themeBase`

### Media Files
- Video clips are MP4 format
- Clip paths follow pattern: `/clips/[alphanumeric identifier].mp4`
- All clips referenced in `clips.json` for programmatic access

## Development Guidelines

### When Making Changes
1. **HTML Files**: Maintain the inline style approach - do not extract CSS to separate files
2. **Styling**: Keep consistent with existing dark theme and color palette
3. **Media**: When adding video clips, update `clips.json` with new file paths
4. **Compatibility**: Ensure changes work in modern browsers (Chrome, Firefox, Safari, Edge)
5. **Mobile**: Test responsive behavior - the app should work on mobile devices

### Testing
- Open HTML files directly in a browser (no build process required)
- Test timer functionality and video playback
- Verify theme switching if applicable
- Test on different screen sizes for responsive design

### File Organization
- Keep HTML files at repository root for easy browser access
- Store all media in `/clips` directory
- Do not add build tools or dependencies unless absolutely necessary

## Common Tasks

### Adding a New Timer Feature
1. Work in the relevant HTML file (`2playertimer.html` or `gameui.html`)
2. Add necessary HTML structure within existing layout
3. Style using CSS variables for consistency
4. Implement functionality with vanilla JavaScript
5. Test timer accuracy and UI responsiveness

### Adding Video Clips
1. Place MP4 file in `/clips` directory
2. Update `clips.json` with the new clip path
3. Ensure file naming follows existing convention
4. Test video playback in the application

### Updating Themes
1. Modify CSS variables in `:root`
2. Ensure contrast ratios remain accessible
3. Test theme changes across all interactive elements
4. Maintain visual consistency with existing design

## Important Notes

- This is a standalone web application - no server required
- No package.json or build process exists
- Keep the application lightweight and fast
- Prioritize simplicity and minimal dependencies
- The application is designed to run directly from HTML files in a browser

## Repository Maintenance

- Keep code clean and well-organized
- Use descriptive commit messages
- Document significant changes in comments if complexity warrants it
- Avoid adding unnecessary dependencies or build complexity
