# PPC Flexible Packaging – five-page static website

The site was created for the proposed `ppcflexible.com` domain and is ready to upload to a GitHub repository as static files. The five pages are `index.html`, `solutions.html`, `industries.html`, `about.html`, and `contact.html`. CSS, JavaScript, and favicon files are in the website root.

## Preview / Publishing

Open `index.html` locally or use GitHub Pages (Settings → Pages → Deploy from branch → main / root). A `CNAME` file is included for `ppcflexible.com`. Make sure the custom-domain configuration and DNS records match before expecting the domain to work. Later, confirm you own the domain, configure the GitHub Pages custom domain and verified registrar DNS records, and then enable HTTPS.

## Images / attribution

The product visuals are PPC Flex images referenced remotely from the established company website `ppcflex.com`:
- `https://ppcflex.com/wp-content/uploads/2025/11/bags.png`
- `https://ppcflex.com/wp-content/uploads/2024/10/rollstock.png`
- `https://ppcflex.com/wp-content/uploads/2024/03/2024_PPCFLEX_Thrive-1.jpg`
- `https://ppcflex.com/wp-content/uploads/2024/03/prototype-packaging-768x768.png`
- `https://ppcflex.com/wp-content/uploads/2024/01/PPC-Pillow-bags-1-768x768.png`

These are existing company product visuals, not AI-generated images. They are externally hosted, so the browser needs an internet connection and the upstream site must allow serving them. Before official publication, use authorized, locally hosted originals supplied by the company to avoid dependence on an external website. The small header logo mark is a provisional CSS/vector mark; replace it with the official vector PPC Flex logo if available/required. The brand typography is original website styling, not an exact reproduction of the company's existing logo.

## Information verified from existing site

- Corporate headquarters: 1111 Busch Pkwy, Buffalo Grove, IL 60089
- Contact phone for this site: 786-745-8523
- Contact email for this site: info@ppcflexible.com
- Packaging portfolio: bags/pouches, rollstock, reclosable packaging, cleanroom stock products, prototype packaging
- Markets: food, healthcare/specialty, pet care, nutraceuticals, produce, floral, consumer packaging
- Recyclable and compostable packaging options

Sources: https://ppcflex.com/ ; https://ppcflex.com/product-packaging/ ; https://ppcflex.com/markets/ ; https://ppcflex.com/sustainability/ ; https://ppcflex.com/about/ ; https://ppcflex.com/contact/ .

## Contact form: visitor's email application

The inquiry form is functional without a backend. When a visitor fills it out and clicks **Send Email**, the site constructs a `mailto:` link to `info@ppcflexible.com` with the name, company, email, phone, packaging type, and project details already in the message. The browser attempts to open the visitor's default email application or email handler. **The visitor must click Send in that email application; the website cannot send automatically or verify delivery.** If no email application is configured, a fallback link is shown under the form. For server-side delivery without relying on visitor email configuration, add a form backend/service in a future update.

## Domain migration

`ppcflex.com` is the current public site; `ppcflexible.com` was requested for this new website. No existing redirects, email domains, or DNS configurations were modified. Coordinate a proper redirect and mail DNS plan separately, with company administrator access.

### Updated PPC logo and favicon
The brand uses the custom, flat folded-film logo found at `assets/logo.svg`. The dark-footer variant is `assets/logo-reverse.svg`. Browser favicons are `assets/favicon.svg`, `assets/favicon.ico`, and `assets/apple-touch-icon.png`. PNG versions are included for Outlook and other uses.
