# Next2MCL — Connected Demo (Mockups)

Clickable HTML mockups for the **Next2MCL** maritime clinic/console demo. These are
static prototypes with **fake data** — no real records, no PII, no backend.

## Entry point

**Start here → [`mcl-shell-v84.html`](mcl-shell-v84.html)**

Opening the repo root (`index.html`) redirects there automatically. On GitHub Pages
the live hub is served from the repo root.

## What's inside

| File | Role |
|------|------|
| `mcl-shell-v84.html` | **MCL Shell** — the hub / entry point that launches the other apps |
| `next2peme-console-v84.html` | **Next2Peme Console** — PEME workflow console |
| `next2dms-v84.html` | **Next2DMS** — document management |
| `seafarer-360-folder-v84.html` | **Seafarer 360** — the seafarer folder view |
| `mcl-guide-v84.html` | **MCL Guide** — οδηγός χρήσης όλου του οικοσυστήματος (EL/EN) · tabs ανά app (MCL·Peme·360·DMS) + Γλωσσάριο · linked από το shell topbar · κάθε app έχει και δικό του in-app «Οδηγός» |

## Link map (how the apps talk to each other)

```
MCL Shell ──▶ Next2Peme Console
          ──▶ Next2DMS            (next2dms-v84.html?tenant=next2mcl)
          ──▶ Seafarer 360
          ──▶ MCL Guide           (mcl-guide-v84.html · topbar "📖 Guide")

Next2Peme ──▶ Next2DMS            (?source=peme&q=SF-PH-039281  → seafarer Juan D. Santos)

Next2DMS  ──▶ back to MCL Shell / Next2Peme Console
```

## ⚠️ Keep these files together

All four apps talk to each other through **relative links** (and query params like
`?tenant=`, `?source=`, `?q=`). They **must stay side-by-side in the repo root** —
do **not** move them into per-product subfolders, or the cross-app links break.

Per-product repos come later, in the real build. This repo is the connected demo.
