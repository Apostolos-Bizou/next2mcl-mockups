# Next2MCL — Connected Demo (Mockups)

Clickable HTML mockups for the **Next2MCL** maritime clinic/console demo. These are
static prototypes with **fake data** — no real records, no PII, no backend.

## Entry point

**Start here → [`mcl-shell-v0.2.html`](mcl-shell-v0.2.html)**

Opening the repo root (`index.html`) redirects there automatically. On GitHub Pages
the live hub is served from the repo root.

## What's inside

| File | Role |
|------|------|
| `mcl-shell-v0.2.html` | **MCL Shell** — the hub / entry point that launches the other apps |
| `next2peme-console-v0.4.html` | **Next2Peme Console** — PEME workflow console |
| `next2dms-v0.6.html` | **Next2DMS** — document management |
| `seafarer-360-folder.html` | **Seafarer 360** — the seafarer folder view |

## Link map (how the apps talk to each other)

```
MCL Shell ──▶ Next2Peme Console
          ──▶ Next2DMS            (next2dms-v0.6.html?tenant=next2mcl)
          ──▶ Seafarer 360

Next2Peme ──▶ Next2DMS            (?source=peme&q=SF-PH-039281  → seafarer Juan D. Santos)

Next2DMS  ──▶ back to MCL Shell / Next2Peme Console
```

## ⚠️ Keep these files together

All four apps talk to each other through **relative links** (and query params like
`?tenant=`, `?source=`, `?q=`). They **must stay side-by-side in the repo root** —
do **not** move them into per-product subfolders, or the cross-app links break.

Per-product repos come later, in the real build. This repo is the connected demo.
