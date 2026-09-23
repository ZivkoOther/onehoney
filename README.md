# Deacon Griffiths Photography Website

A simple static photography portfolio website made with HTML, CSS and JavaScript.

## Files

- `index.html` — the actual website
- `styles.css` — all visual styling
- `script.js` — navigation, gallery filters and lightbox
- `images/` — put your photography here

## Adding your photos

Put your images inside the `images` folder.

The website currently expects:

- `hero.jpg` — large hero image
- `about.jpg` — photo for the About section
- `photo-01.jpg`
- `photo-02.jpg`
- `photo-03.jpg`
- `photo-04.jpg`
- `photo-05.jpg`
- `photo-06.jpg`

You can use different filenames, but then change the corresponding `src="images/..."` in `index.html`.

To add another gallery image, copy one of the `<figure class="gallery-item">...</figure>` blocks and change:

1. The image filename
2. The `alt` text
3. `data-category`
4. The caption

Valid categories are:
- portraits
- events
- landscapes
- couples
- automotive
- creative

## GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the entire `images` folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.

GitHub will give you a public website address.

## Changing contact details

The current contact details are already set to:

WhatsApp: 067 362 7275
Email: deacongriffiths09@gmail.com
Instagram: @zivko.09

The WhatsApp button opens a chat with a pre-written enquiry message.

## Pricing

The current prices are:

Quick Session — R250
Full Session — R500
Event Flat Rate — R1,500 up to 3 hours
Event Hourly — R500/hour, maximum 8 hours
Additional edited photos — R30 each

The pricing note also explains that extra costs may apply for things such as film, specialised locations, travel outside the agreed area, permits or other third-party costs.

Edit the package text directly in `index.html` if your prices or services change.
