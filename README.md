# locallink shop

Personal online shop for locallink (https://locallink.store/) — NFC stands,
cards and stickers that open a business's Google review page with one phone tap.

Static site: plain HTML/CSS/JS, no build step, no framework, no backend.
Hosted on GitHub Pages.

## How ordering works

The cart lives in the browser (localStorage). When a customer submits the
order form, the site opens WhatsApp with the order text addressed to
+995 597 777 619, clears the cart and shows a confirmation popup.
Payment is cash, in person, on delivery.

## Files

- `index.html` — page shell (top bar, header, footer mount, popup, toast)
- `styles.css` — all styles (60-30-10: `#0A0D14` / `#17243B` / `#3978FF`)
- `app.js` — hash routing (`#/`, `#/product/<slug>`, `#/cart`), the i18n
  dictionary (Georgian / English / Russian), cart and WhatsApp order flow
- `images/` — product photos (3:4) and `logo.png`

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/

## Adding a product

1. Add a 3:4 photo to `images/<slug>.jpg`.
2. Add an entry to `PRODUCTS` in `app.js` with the price and the name +
   description in all three languages.
