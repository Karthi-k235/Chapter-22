Skip to content
Karthi-k235
Chapter-22
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Files
Go to file
t
T
.github
assets
README.md
index.html
script.js
style.css
Chapter-22
/
script.js
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing script.js file contents
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
/* ==========================================================================
   CHAPTER 22 — GAME LOGIC & CONFIGURATION
   ========================================================================== */

// ==========================================
// BIRTHDAY CONFIGURATION
// EDIT THIS SECTION TO CUSTOMIZE THE GAME
// ==========================================
const birthdayGirl = {
  name: "Haripriya",
  age: 22
};

/*
  GIFT TYPES SUPPORTED:
  - "message"  : Displays the heartfelt birthday letter.
  - "photo"    : Displays a photo gallery/image URL.
  - "video"    : Embeds a video (e.g. YouTube or mp4).
  - "playlist" : Embeds/links a Spotify or music playlist.
  - "link"     : Secret button leading to any external URL.
  - "custom"   : Custom HTML block.
*/
const giftType = "message";

const giftContent = {
  messageTitle: "Happy 22nd Birthday, Haripriya ❤️",
  messageSubtitle: "Welcome to Chapter 22",
  messageText: [
    "You started with a bunch of shadows.",
    "One by one, you found the people hiding behind them.",
    "And maybe that's what this chapter is really about.",
    "Not just turning 22.",
    "But about all the people, memories, chaos, laughter and little moments that made it here with you.",
    "So here's to Chapter 22.",
    "Make it ridiculous. Make it unforgettable. Make it yours.",
    "Happy Birthday! ❤️"
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
