# Big Screen Stories

A static site showcasing CTV / Glance TV ad work — connected-television case studies for the Roshini Krishna portfolio.

> Live page: `index.html` (in this folder)
> Designed to be hosted on **Vercel** and embedded into the existing Framer portfolio (or linked to directly).

---

## What's in here

```
site/
├── index.html        ← the page
├── styles.css        ← all the styling
├── script.js         ← tiny scroll-reveal + sticky nav
├── assets/           ← all ad images (Fossil, NBA, GAP)
└── README.md         ← you're here
```

That's it. No build step, no framework, no node_modules. You can open `index.html` in a browser and it just works.

---

## How to publish it (no code needed)

You have two options. Either is fine — pick what feels less scary.

### ✦ Option A — Drag-and-drop to Vercel (easiest, ~2 min)

1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in (use your GitHub account if you already have one).
2. Click **"Deploy" → "Browse all templates" → "Other"**, or just scroll down to the area that says **"Or drag a folder here"**.
3. Drag the **whole `site/` folder** onto that drop zone.
4. Vercel asks for a project name — type something like `big-screen-stories`, hit **Deploy**.
5. ~30 seconds later you have a live URL like `https://big-screen-stories.vercel.app` — that's the page.

To update the page later, repeat step 3 with the updated folder. Vercel keeps every deploy and lets you roll back.

### ✦ Option B — GitHub → Vercel (recommended for ongoing edits)

This wires GitHub to Vercel so every time you change a file in GitHub, your site auto-updates.

1. **Make a new GitHub repo.** Go to [github.com/new](https://github.com/new), name it `big-screen-stories`, leave it public or private — doesn't matter — and click **Create**.
2. **Upload the files.** On the new empty repo page, click **"uploading an existing file"** and drag everything in this `site/` folder (`index.html`, `styles.css`, `script.js`, the whole `assets/` folder, this README). Click **Commit changes**.
3. **Connect Vercel.** Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → pick your new repo → **Deploy**.
4. Done. Any time you edit a file directly on GitHub (click the pencil icon ✎), Vercel rebuilds the site in ~20 seconds.

---

## How to embed this in your Framer site

Once it's live on Vercel, you can do either:

### Just link to it
On your `/interactive-ads` Framer page, add a card or link that goes to `https://big-screen-stories.vercel.app` (or whatever your Vercel URL is). Easiest — opens as a real page.

### Embed it inside Framer
1. In Framer, drop an **Embed** component on the page where you want the showcase.
2. Set the URL to your Vercel URL (e.g. `https://big-screen-stories.vercel.app`).
3. Set height to something tall — like **6000px** — since it's a long scroll.

If you'd rather have it on a custom subdomain (like `stories.roshinikrishna.com`), Vercel can do that for free in **Project → Settings → Domains** — but it's optional.

---

## How to make changes

You have **no code experience** — that's fine. Most edits are just typing in plain HTML.

### Change copy (text on the page)
Open `index.html`. Look for the headline or sentence you want to change — it's just plain English between `>` and `<` symbols. Edit, save, re-upload to GitHub (or drag-redeploy on Vercel).

### Swap an image
Drop the new image into the `assets/` folder using the same filename as the one you're replacing. Done.

### Add the Fossil video
1. Put the video file in `assets/` — call it `fossil-bigtic-30s.mp4` (or whatever).
2. In `index.html`, find the block tagged `<!-- TV frame, video coming soon -->` near the Fossil section.
3. Replace this whole block:
   ```html
   <div class="tv-frame__screen">
     <div class="video-coming">…</div>
     <img …/>
   </div>
   ```
   with:
   ```html
   <div class="tv-frame__screen">
     <video src="assets/fossil-bigtic-30s.mp4" autoplay muted loop playsinline class="tv-frame__poster"></video>
   </div>
   ```
4. Save → re-upload → site updates.

If any of that feels scary, just send me the video and I'll wire it up.

### Add a new ad story
Copy one of the `<article class="story">` blocks (the whole thing, top to bottom), paste it below the last one, and edit the text + swap the image. The numbering, the TV frame, and the stats will all keep working.

---

## Notes on the design

- **Type:** JetBrains Mono throughout, to match your existing portfolio.
- **Color:** warm off-white (`#F4F2EE`) background, near-black text, one warm accent for hover states. Almost no color elsewhere — the work brings the color.
- **TV frames:** every ad creative sits inside a neutral matte-black 16:9 silhouette so it reads as "this lived on a TV," without competing with the brand inside.
- **Stats are real:** Fossil and NBA numbers come straight from the Glance post-campaign reports. GAP doesn't have numbers yet, so it gets a softer placeholder grid.
- **Voice:** first person, designer-talking-about-her-work. Tweak freely — it should sound like you.

---

## If something breaks

- The site shows a blank page → the `assets/` folder probably didn't upload. Check it's there next to `index.html`.
- An image is missing → check the filename in `assets/` matches what's referenced in `index.html`.
- Fonts look wrong → JetBrains Mono comes from Google Fonts (line 11 of `index.html`) — make sure the page has internet access.

Anything else, just ping me.
