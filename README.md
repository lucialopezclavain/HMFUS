# HMFUS Scotland Website

**Hydatidiform Mole Follow-Up Service Scotland**  
Ninewells Hospital, Dundee

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Homepage |
| `patients.html` | Information for Patients |
| `professionals.html` | Information for Healthcare Professionals |
| `contact.html` | Contact page |
| `style.css` | NHS-style CSS (all pages share this) |
| `components.js` | Shared header/footer injected into all pages |
| `images/` | All images used across the site |

---

## How to Publish on GitHub Pages
1. **Upload all files** — keep the folder structure intact (all files + `images/` folder at the root level)
2. Your site will be live at:  
   `https://YOUR-USERNAME.github.io/hmfus-scotland/`

---

## Customising

- **Contact details / phone numbers**: Edit `components.js` (footer) and `contact.html`
- **Service hours**: Edit the callout boxes in `patients.html` and `professionals.html`
- **Images**: Replace files in the `images/` folder (keep the same filenames, or update the `<img>` tags in the HTML)
- **Adding a patient leaflet link**: Search for `(attach link)` in `patients.html` and replace with your URL
- **Adding patient stories**: Find the `Patients Stories` section in `patients.html` and add content there

---

## Notes

- No server required — pure HTML/CSS/JS, works on GitHub Pages for free
- All pages are mobile-responsive
- NHS-blue colour scheme (`#005eb8`) throughout
