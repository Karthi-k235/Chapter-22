# ✦ Chapter 22 — Interactive Birthday Mystery ✦

A personalized, interactive birthday mystery game built for **Haripriya** turning **22**.

The experience is designed as an elegant scrapbook + magical mystery game + friendship memory book where the birthday girl discovers her group of friends standing in the shadows, solves personal riddles about each friend, reveals their real photos and heartfelt notes, and ultimately unlocks her secret birthday gift.

---

## 🌟 Features & Highlights

- **Personalized for Haripriya**: Customized landing page, pre-filled input, welcome sequence, and tailored friend riddles.
- **Constellation / Shadow Wall**: Friends arranged as mysterious silhouettes standing in soft spotlight glows.
- **Micro-Interactions**: Hovering over a silhouette makes it rise 15–20px with glowing spotlights and playful tooltips ("Someone is hiding here...", "You know this person 👀").
- **Forgiving Answer Validation**: Case-insensitive, whitespace-trimmed, punctuation-ignoring answer validation supporting multiple valid answers.
- **Playful Retry Responses**: Friendly, fun retries on wrong answers without resetting progress or punishing the player.
- **Visual Reveal Transformation**: Correct answers flip/morph silhouettes into charming Polaroid-style friend photos marked with `✓ FOUND` and personal messages.
- **Dynamic Progress Tracking**: Dynamic `Friends Found: X / N` counter and smooth animated progress bar.
- **Scalable Architecture**: Easily supports 8, 10, 12, 15+ friends by adding objects to the `friends` array in `script.js` without touching HTML/CSS layout logic!
- **Final Chapter Unlock**: Triggers a starry dark evening overlay when all friends are discovered, revealing a gently floating gift box.
- **Flexible Gift System**: Supports multiple gift modes (`message`, `photo`, `video`, `playlist`, `link`, `custom`) with celebratory confetti explosion!
- **Progress Persistence**: Uses `localStorage` (`chapter22Progress`) so progress is preserved if the page is refreshed or reopened.
- **Discreet Reset Option**: Allows restarting the game via a discreet footer option with confirmation modal.
- **Optional Sound FX**: Includes a top-corner sound toggle button `♫` with Web Audio API chime effects.

---

## 📁 File Structure

```text
Chapter-22/
├── index.html            # Main HTML document structure & modals
├── style.css             # Pastel color palette, glassmorphism, responsive grid & animations
├── script.js            # Editable birthday configuration & interactive game engine
├── assets/
│   ├── silhouettes/     # Transparent silhouette SVG/PNG graphics (friend1.svg ... friend8.svg)
│   ├── friends/         # Revealed polaroid friend avatars (friend1.svg ... friend8.svg)
│   └── gift/            # Floating giftbox SVG graphic
└── README.md            # Project documentation
```

---

## 🛠️ How to Customize

All customizable content is located right at the top of **`script.js`**:

```javascript
// ==========================================
// BIRTHDAY CONFIGURATION
// EDIT THIS SECTION TO CUSTOMIZE THE GAME
// ==========================================

const birthdayGirl = {
  name: "Haripriya",
  age: 22
};
```

### Adding New Friends

To add a new friend (e.g. Friend #9), simply append another object to the `friends` array in `script.js`:

```javascript
{
  id: 9,
  name: "Friend Name",
  silhouette: "assets/silhouettes/friend9.svg",
  revealedImage: "assets/friends/friend9.svg",
  question: "What is your custom question?",
  answers: ["answer1", "answer2"],
  hint: "Optional hint text",
  message: "Personal birthday message for Haripriya!"
}
```

---

## 🚀 How to Run

1. Simply double-click `index.html` or open it in any web browser (Chrome, Safari, Firefox, Edge, or mobile browser).
2. Or serve it locally using any static web server (e.g., Python `python -m http.server 8000` or Live Server).

## 🌐 Host on GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

1. Push the project files to the `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The workflow will deploy the site automatically after each push to `main`.

For this repository, the site URL will be:
`https://karthi-k235.github.io/Chapter-22/`

---

## 🎨 Color Palette & Typography

- **Ivory / Cream Background**: `#FFFDF9`
- **Soft Blush Pink**: `#FFECEC` / `#F8C8DC` / `#E88785`
- **Lavender**: `#E6E6FA`
- **Powder Blue**: `#E0F2FE`
- **Peach**: `#FFE5D9`
- **Champagne Gold**: `#D4AF37`
- **Typography**: `Plus Jakarta Sans`, `Nunito` & `Caveat` (via Google Fonts).
"# Chapter-22" 
