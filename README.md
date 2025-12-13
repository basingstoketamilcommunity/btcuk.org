# Basingstoke Tamil Community (BTCUK) – Official Website

This repository contains the source code for the **Basingstoke Tamil Community (BTCUK)** official website.

The website is designed to be:
- Fully responsive (mobile, tablet, desktop)
- Free to host (GitHub Pages)
- Easy to maintain by community volunteers
- Dynamically driven using Google Drive for media content

🌐 **Live Website:** https://btcuk.org

---

## 📌 Features

- Modern, responsive design
- Community-focused layout
- Events listing (Pongal, Deepavali, Tamil New Year, etc.)
- Event registration-ready architecture
- Trustees & committee members listing
- Discussion forum (planned)
- Dynamic loading of:
  - Event posters
  - Photos
  - Videos
- Free HTTPS (Let’s Encrypt via GitHub Pages)

---

## 🏗️ Project Structure
/
├── index.html # Homepage
├── events.html # Events listing
├── trustees.html # Trustees & committee
├── forum.html # Community forum (placeholder)
│
├── assets/
│ ├── js/
│ │ └── data-loader.js # Dynamic content loader
│ └── images/
│ └── btc-logo.png # BTCUK logo
│
└── data/
└── content.json # Google Drive-based content mapping


---

## 🗂️ Dynamic Content Management (Google Drive)

All images and videos are hosted in **Google Drive** to keep hosting free and lightweight.

### How it works:
1. Upload posters, photos, or videos to Google Drive
2. Make files public (Anyone with link)
3. Copy the file ID
4. Update `data/content.json`

### Example:
```json
{
  "events": [
    {
      "title": "Pongal 2026",
      "date": "14 January 2026",
      "poster": "https://drive.google.com/uc?id=FILE_ID"
    }
  ]
}


No coding knowledge required for updates.

🚀 Deployment

This site is hosted using GitHub Pages.

Steps:

Push code to the main branch

Go to Settings → Pages

Select:

Source: main

Folder: /root

Save

The site will be live at:

https://<username>.github.io/<repository-name>/


Custom domain:

https://btcuk.org

🔐 Security & Performance

HTTPS enabled by default

No server-side code

No personal data stored

Fast loading using lightweight assets

🔮 Future Enhancements

Stripe payment integration for events

Firebase-based community forum

Admin dashboard for content updates

Tamil language toggle

Membership registration

🤝 Contributions

This is a community project.
Suggestions, improvements, and contributions are welcome via pull requests.

📧 Contact

Basingstoke Tamil Community (BTCUK)
📧 Email: basingstoketamilcommunity@gmail.com

🌐 Website: https://btcuk.org

