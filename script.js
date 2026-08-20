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
  ],
  // Used if giftType === "photo"
  photoUrl: "assets/shill/final.png",
  // Used if giftType === "video"
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  // Used if giftType === "playlist" or "link"
  externalLink: "https://open.spotify.com"
};

// FRIEND DATA ARRAY — 8 HIDDEN MYSTERIES
// Add as many friends as you want here! The game dynamically calculates everything.
const friends = [
  {
    id: 1,
    name: "Ananya",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/shill/final.png",
    question: "Who is always 20 minutes late to every single hangout but shows up with an iced coffee in hand?",
    answers: ["ananya", "brunch", "breakfast", "coffee", "every meeting", "everything", "hangout", "lunch"],
    hint: "Think about the friend who always shows up with an iced latte apologizing...",
    message: "Haripriya! Happy 22nd! I might be late to our hangouts, but I'll always be early to celebrate you! ☕❤️"
  },
  {
    id: 2,
    name: "Karthik",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/friends/friend2.png",
    question: "Similarities are everywhere in this world, but ours are way more than coincidences. The last words we said together before going were...?",
    answers: ["Pichi Palu Rakalu"],
    hint: "At the bench we said it at the same time...",
    message: "Some words become special because two people say them together. Happy 22nd Birthday, Haripriya! 💕"
  },
  {
    id: 3,
    name: "Farzana",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/friends/friend3.png",
    question: "Three bikes, dead phones, and absolute panic in Kerala! After an entire hour of frantically searching for each other, where did our lost group finally reunite?",
    answers: ["MattuPetty Dam", "Mattupetty Dam", "Mattu Petty Dam", "Mattupetty"],
    hint: "The pineapples and fridge magnets were great from this place.",
    message: "Happy Birthday Haripriya! From three bikes and dead phones to finding each other at Mattupetty Dam, every adventure with you becomes a memory worth keeping! 💕"
  },
  {
    id: 4,
    name: "Diwakar",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/friends/friend4.png",
    question: "Two college entrepreneurs, Three chaotic days, and a whole lot of deep-fried goodness. I was there, you were there, all of our friends were there, but what was the name of the 'royal' stall we ruled for three days?",
    answers: ["Crispy Kingdom"],
    hint: "Rajulu Unde Placee",
    message: "Three chaotic days, one royal stall, and countless crispy memories. Happy Birthday, Diwakar! 👑✨"
  },
  {
    id: 5,
    name: "Riya",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/shill/final.png",
    question: "Which friend plays Taylor Swift on repeat the second she gets the aux cord in the car?",
    answers: ["riya", "taylor swift", "taylor", "swift", "ariana", "dupa lipa", "bts"],
    hint: "She knows every single lyric from '1989' and 'Red'...",
    message: "Happy 22nd Birthday Haripriya! Playing '22' on repeat for you all day today! 🎧🎶"
  },
  {
    id: 6,
    name: "Kavya",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/shill/final.png",
    question: "Who goes full FBI detective mode the second someone sends a mysterious 2-word text?",
    answers: ["kavya", "stalking", "fbi mode", "overthinking", "screenshots", "detective", "fbi"],
    hint: "She finds their location, horoscope, and 2016 Facebook posts in 3 minutes flat...",
    message: "Haripriya, you survived 21 chapters of chaos! Here's to making Chapter 22 even more legendary! 🕵️‍♀️✨"
  },
  {
    id: 7,
    name: "Nitya",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/shill/final.png",
    question: "Who has over 1,000 funny candid photos of Haripriya saved in a secret vault folder?",
    answers: ["nitya", "1000", "thousands", "too many", "million", "endless", "500"],
    hint: "Enough funny camera roll memories to blackmail you for the next 50 years...",
    message: "Happy Birthday my sweetest Haripriya! Your Chapter 22 photo album starts today! 📸🌸"
  },
  {
    id: 8,
    name: "Shreya",
    silhouette: "assets/shill/final.png",
    revealedImage: "assets/shill/final.png",
    question: "Who screams 'SLAYYY QUEEN!' the second Haripriya walks into the room looking gorgeous?",
    answers: ["shreya", "slay", "ate", "mother", "gorgeous", "queen", "stunning", "slayyy"],
    hint: "Your biggest hype woman on the planet who always yells your praises...",
    message: "SLAYYY HARIPRIYA! Happy 22nd Birthday! You are the brightest star in our universe! 🌟💖"
  }
];

// PLAYFUL RETRY RESPONSES ON INCORRECT GUESS
const playfulErrorMessages = [
  "Hmm... the shadows disagree 👀",
  "Close... but you know them better than that.",
  "Not this friend. Think again ✦",
  "Nice try, detective! 🕵️‍♀️",
  "The mystery isn't giving up yet... ✨"
];

// TOOLTIP PHRASES FOR UNREVEALED CARDS
const tooltipPhrases = [
  "I think you know me... 👀",
  "Have we met before? ✦",
  "You definitely know this one. ✨",
  "Trust your instincts. ♡",
  "Someone who loves you dearly... 💖"
];

// ==========================================
// GAME STATE MANAGEMENT
// ==========================================
let gameState = {
  playerName: birthdayGirl.name,
  revealedIds: [],
  currentFriendId: null,
  audioEnabled: false
};

const LOCAL_STORAGE_KEY = "chapter22Progress";

// ==========================================
// AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
let audioCtx = null;

function playAmbientSound(type = 'chime') {
  if (!gameState.audioEnabled) return;
  
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'chime') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.35); // C6
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.45);
    } else if (type === 'wrong') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(175, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'celebrate') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.55);
        o.start(audioCtx.currentTime + idx * 0.08);
        o.stop(audioCtx.currentTime + idx * 0.08 + 0.55);
      });
    }
  } catch (e) {
    console.warn("Audio playback not allowed yet", e);
  }
}

// Toggle Audio
document.getElementById('audio-toggle-btn').addEventListener('click', () => {
  gameState.audioEnabled = !gameState.audioEnabled;
  const btn = document.getElementById('audio-toggle-btn');
  btn.querySelector('.audio-label').textContent = gameState.audioEnabled ? "Sound On" : "Music Off";
  btn.querySelector('.audio-icon').textContent = gameState.audioEnabled ? "♫" : "🔇";
  if (gameState.audioEnabled) playAmbientSound('chime');
});

// ==========================================
// INITIALIZATION & PERSISTENCE
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initBackgroundParticles();
  initLandingInteractions();
  initDreamBubbles();
  loadProgress();
});

// Add small, optional interactions to the landing-page decorations.
function initLandingInteractions() {
  const balloons = document.getElementById('balloons-interaction');
  const cake = document.getElementById('cake-interaction');
  const message = document.getElementById('landing-fun-message');

  if (!balloons || !cake || !message) return;

  let balloonTimer;
  let messageTimer;

  const showLandingMessage = (text) => {
    message.textContent = text;
    message.classList.add('is-visible');
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => message.classList.remove('is-visible'), 2200);
  };

  const createFunSparks = (target, symbols) => {
    const bounds = target.getBoundingClientRect();
    symbols.forEach((symbol, index) => {
      const spark = document.createElement('span');
      spark.className = 'fun-spark';
      spark.textContent = symbol;
      spark.style.left = `${bounds.left + bounds.width * (0.25 + index * 0.16)}px`;
      spark.style.top = `${bounds.top + bounds.height * 0.35}px`;
      spark.style.setProperty('--spark-x', `${(index - 2) * 28}px`);
      spark.style.setProperty('--spark-y', `${-50 - (index % 2) * 25}px`);
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1050);
    });
  };

  const popBalloons = () => {
    if (balloons.classList.contains('is-popping')) return;

    balloons.classList.add('is-popping');
    createFunSparks(balloons, ['✦', '●', '✨', '●', '✦']);
    showLandingMessage('Pop pop! Make a wish! 🎈');
    playAmbientSound('celebrate');

    clearTimeout(balloonTimer);
    balloonTimer = setTimeout(() => balloons.classList.remove('is-popping'), 1500);
  };

  const blowCandles = () => {
    const isBlownOut = cake.classList.toggle('is-blown-out');
    createFunSparks(cake, isBlownOut ? ['💨', '✦', '✨'] : ['🔥', '✦', '✨']);
    showLandingMessage(isBlownOut ? 'Whoosh! Candles blown out! Make a wish! 🎂' : 'The candles are glowing again! ✨');
    playAmbientSound(isBlownOut ? 'chime' : 'celebrate');
  };

  balloons.addEventListener('click', popBalloons);
  cake.addEventListener('click', blowCandles);
  balloons.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      popBalloons();
    }
  });
  cake.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      blowCandles();
    }
  });
}

// Create Floating Stars & Hearts in Background
function initBackgroundParticles() {
  const container = document.getElementById('bg-stars-container');
  if (!container) return;

  for (let i = 0; i < 35; i++) {
    const star = document.createElement('div');
    star.className = 'star-particle';
    const size = Math.random() * 4 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(star);
  }

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.textContent = Math.random() > 0.5 ? '✨' : '💖';
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(heart);
  }
}

// Translucent Dream Bubbles for Page 2
function initDreamBubbles() {
  const container = document.getElementById('p2-bubbles-container');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'dream-bubble';
    const size = Math.random() * 32 + 16;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 94}%`;
    bubble.style.top = `${Math.random() * 85 + 10}%`;
    bubble.style.animationDelay = `${Math.random() * 8}s`;
    bubble.style.animationDuration = `${Math.random() * 8 + 10}s`;
    container.appendChild(bubble);
  }
}

// Load LocalStorage Progress
function loadProgress() {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.playerName) gameState.playerName = parsed.playerName;
      if (Array.isArray(parsed.revealedIds)) gameState.revealedIds = parsed.revealedIds;
      
      const nameInput = document.getElementById('player-name-input');
      if (nameInput) nameInput.value = gameState.playerName;
      
      if (gameState.revealedIds.length > 0) {
        const enterBtn = document.getElementById('enter-btn');
        if (enterBtn) {
          enterBtn.textContent = "CONTINUE CHAPTER ✦";
        }
      }
    } catch (e) {
      console.error("Failed to parse progress", e);
    }
  }
}

// Save LocalStorage Progress
function saveProgress() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
    playerName: gameState.playerName,
    revealedIds: gameState.revealedIds
  }));
}

// ==========================================
// SCREEN TRANSITIONS & PAGE 2 GAME ENGINE
// ==========================================

function startChapter(isReturning = false) {
  const nameInput = document.getElementById('player-name-input');
  if (nameInput && nameInput.value.trim()) {
    gameState.playerName = nameInput.value.trim();
  }
  
  saveProgress();

  const displayNameEl = document.getElementById('display-player-name');
  if (displayNameEl) displayNameEl.textContent = gameState.playerName;

  const giftPlayerNameEl = document.getElementById('gift-player-name');
  if (giftPlayerNameEl) giftPlayerNameEl.textContent = gameState.playerName;

  const welcomeMsgEl = document.getElementById('welcome-message-text');
  if (welcomeMsgEl) welcomeMsgEl.textContent = `Welcome, ${gameState.playerName}. ♡`;

  const transitionNote = document.getElementById('transition-note');
  if (transitionNote && !isReturning) {
    transitionNote.classList.remove('hidden');
    playAmbientSound('celebrate');
  }

  // Smooth delay for transition
  setTimeout(() => {
    const landingScreen = document.getElementById('landing-screen');
    if (landingScreen) {
      landingScreen.classList.remove('active');
      landingScreen.classList.add('hidden');
    }
    
    const gameScreen = document.getElementById('game-screen');
    if (gameScreen) {
      gameScreen.classList.remove('hidden');
      gameScreen.classList.add('active');
    }

    initDreamBubbles();
    renderFriendsGrid();
    updateProgressBar();
    playAmbientSound('chime');
  }, isReturning ? 0 : 1200);
}

// Ambient Drifting Memory Dust for Popup
function initMemoryDust() {
  const container = document.getElementById('memory-dust-container');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.className = 'memory-dust-particle';
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 80 + 10}%`;
    particle.style.top = `${Math.random() * 60 + 30}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
    container.appendChild(particle);
  }
}

// Interactive Corner Sticker Peel Mechanic
function toggleCornerPeel() {
  const peel = document.getElementById('interactive-peel-cover');
  const label = document.getElementById('peel-cover-label');
  if (!peel || !label) return;

  const isPeeking = peel.classList.toggle('is-peeking');
  label.textContent = isPeeking ? "Psst... peek? 👀" : "A LITTLE SECRET...";
  playAmbientSound('chime');
}

// Render the 8 Individual Mystery Memory Cards (4 Top, 4 Bottom)
function renderFriendsGrid() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  grid.innerHTML = '';
  document.getElementById('friends-total-count').textContent = friends.length;

  friends.forEach((friend, idx) => {
    const isDiscovered = gameState.revealedIds.includes(friend.id);
    const tiltIndex = (idx % 8) + 1;
    const floatIndex = (idx % 8) + 1;

    const card = document.createElement('div');
    card.id = `mystery-card-${friend.id}`;
    card.className = `mystery-memory-card card-tilt-${tiltIndex} floating-card-${floatIndex} ${isDiscovered ? 'is-revealed' : ''}`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', isDiscovered ? `Friend ${friend.name}` : `Mystery Card #${idx + 1}`);

    const randomHint = tooltipPhrases[idx % tooltipPhrases.length];

    card.innerHTML = `
      <div class="card-hover-hint">${isDiscovered ? 'Found you! ♡' : randomHint}</div>

      <div class="card-portrait-frame">
        <img 
          src="${isDiscovered ? friend.revealedImage : friend.silhouette}" 
          alt="${isDiscovered ? friend.name : 'Mystery silhouette'}" 
          class="${isDiscovered ? 'card-revealed-img' : 'card-silhouette-img'}"
        >
      </div>

      <div class="card-label-badge">
        <span class="card-star-accent">${isDiscovered ? '✓' : '✦'}</span>
        <span class="card-label-text">${isDiscovered ? friend.name + ' ♡' : '✦ ♡ ???? ♡ ✦'}</span>
      </div>
    `;

    card.addEventListener('click', () => openCardMystery(friend.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCardMystery(friend.id);
      }
    });

    grid.appendChild(card);
  });
}

// Open Mystery Card Puzzle or Solved Memory View
function openCardMystery(friendId) {
  const friend = friends.find(f => f.id === friendId);
  if (!friend) return;

  const isDiscovered = gameState.revealedIds.includes(friendId);
  playAmbientSound('chime');
  openPuzzleModal(friend, isDiscovered);
}

// Update Friend Collection Indicator Stars & diya
function updateProgressBar() {
  const foundCount = gameState.revealedIds.length;
  const totalCount = friends.length;

  document.getElementById('friends-found-count').textContent = foundCount;

  // Render 8 Stars (✦ ✦ ☆ ☆ ☆ ☆ ☆ ☆)
  const starsContainer = document.getElementById('collection-stars-bar');
  if (starsContainer) {
    let starsHtml = '';
    for (let i = 0; i < totalCount; i++) {
      if (i < foundCount) {
        starsHtml += `<span id="collection-star-${i}" class="collection-star star-collected">✦</span>`;
      } else {
        starsHtml += `<span id="collection-star-${i}" class="collection-star star-empty">☆</span>`;
      }
    }
    starsContainer.innerHTML = starsHtml;
  }

  // Completion State Banner (When all 8 friends are found)
  const completionBanner = document.getElementById('all-friends-completed-banner');
  if (completionBanner) {
    if (foundCount === totalCount && totalCount > 0) {
      completionBanner.classList.remove('hidden');
    } else {
      completionBanner.classList.add('hidden');
    }
  }
}

// Star Collection Flight Animation from Card to Top Collection Bar
function animateFlyingStar(friendId, onComplete) {
  const card = document.getElementById(`mystery-card-${friendId}`);
  const targetStarIndex = gameState.revealedIds.length - 1;
  const targetStar = document.getElementById(`collection-star-${targetStarIndex}`);
  const flightLayer = document.getElementById('star-flight-layer');

  if (!card || !targetStar || !flightLayer) {
    if (onComplete) onComplete();
    return;
  }

  const cardRect = card.getBoundingClientRect();
  const starRect = targetStar.getBoundingClientRect();

  const flyer = document.createElement('div');
  flyer.className = 'flying-star-element';
  flyer.textContent = '✦';
  flyer.style.left = `${cardRect.left + cardRect.width / 2}px`;
  flyer.style.top = `${cardRect.top + cardRect.height / 2}px`;

  flightLayer.appendChild(flyer);

  // Force reflow to initiate smooth transition
  flyer.getBoundingClientRect();

  requestAnimationFrame(() => {
    flyer.style.left = `${starRect.left + starRect.width / 2}px`;
    flyer.style.top = `${starRect.top + starRect.height / 2}px`;
    flyer.style.transform = 'translate(-50%, -50%) scale(1.6)';
  });

  setTimeout(() => {
    flyer.remove();
    playAmbientSound('chime');
    if (onComplete) onComplete();
  }, 950);
}

// ==========================================
// ENCHANTED MEMORY CARD POPUP & MULTI-STAGE REVEAL
// ==========================================

function openPuzzleModal(friend, isSolved = false) {
  gameState.currentFriendId = friend.id;

  const idx = friends.findIndex(f => f.id === friend.id) + 1;
  const formattedNum = idx < 10 ? '0' + idx : idx;
  
  document.getElementById('modal-mystery-num').textContent = `MYSTERY No. ${formattedNum}`;
  document.getElementById('modal-silhouette-img').src = friend.silhouette;
  document.getElementById('peel-photo-teaser').src = friend.revealedImage;
  document.getElementById('modal-revealed-img').src = friend.revealedImage;
  document.getElementById('modal-question').textContent = `"${friend.question}"`;

  // Reset interactive peel cover
  const peel = document.getElementById('interactive-peel-cover');
  if (peel) {
    peel.classList.remove('is-peeking');
    document.getElementById('peel-cover-label').textContent = "A LITTLE SECRET...";
  }

  // Clear previous celebration sparkles
  const sparkleBurst = document.getElementById('polaroid-sparkle-burst');
  if (sparkleBurst) sparkleBurst.innerHTML = '';

  const expandedCard = document.getElementById('expanded-card');
  if (expandedCard) {
    expandedCard.classList.remove('shake-card');
    if (isSolved) {
      expandedCard.classList.add('is-solved');
    } else {
      expandedCard.classList.remove('is-solved');
    }
  }

  const clueNote = document.getElementById('modal-clue-note');
  const formSection = document.getElementById('modal-form-section');
  const celebrateSection = document.getElementById('modal-celebrate-section');
  const silhouetteLayer = document.getElementById('modal-silhouette-layer');
  const revealedLayer = document.getElementById('modal-revealed-layer');

  if (isSolved) {
    // Solved Memory View
    if (silhouetteLayer) silhouetteLayer.style.display = 'none';
    if (peel) peel.style.display = 'none';
    if (revealedLayer) revealedLayer.classList.remove('hidden');
    if (clueNote) clueNote.style.display = 'none';
    if (formSection) formSection.classList.add('hidden');
    if (celebrateSection) celebrateSection.classList.remove('hidden');

    document.getElementById('modal-solved-friend-name').textContent = friend.name;
    document.getElementById('modal-solved-friend-message').textContent = `"${friend.message}"`;
  } else {
    // Unsolved Guessing View
    if (silhouetteLayer) {
      silhouetteLayer.style.display = 'flex';
      silhouetteLayer.style.opacity = '1';
    }
    if (peel) peel.style.display = 'flex';
    if (revealedLayer) revealedLayer.classList.add('hidden');
    if (clueNote) clueNote.style.display = 'block';
    if (formSection) formSection.classList.remove('hidden');
    if (celebrateSection) celebrateSection.classList.add('hidden');

    const input = document.getElementById('answer-input');
    if (input) {
      input.value = '';
      input.disabled = false;
    }
    
    document.getElementById('error-feedback').classList.add('hidden');
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('hint-text-content').textContent = friend.hint || "Think about your favorite memories together!";
  }

  const modal = document.getElementById('puzzle-modal');
  modal.classList.remove('hidden');
  initMemoryDust();

  if (!isSolved) {
    setTimeout(() => {
      const input = document.getElementById('answer-input');
      if (input) input.focus();
    }, 200);
  }
}

function closePuzzleModal() {
  document.getElementById('puzzle-modal').classList.add('hidden');
}

function toggleHint() {
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.toggle('hidden');
  playAmbientSound('chime');
}

// Multi-Stage Cinematic Answer Reveal Sequence (Photo is the Hero)
function checkAnswer() {
  const input = document.getElementById('answer-input');
  const inputVal = input.value.trim();
  const friend = friends.find(f => f.id === gameState.currentFriendId);
  
  if (!friend || !inputVal) return;

  // Clean answer string (lowercase, trim whitespace & basic punctuation)
  const cleanedInput = inputVal.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();

  // Validate against acceptable answers
  const isCorrect = friend.answers.some(ans => {
    const cleanedAns = ans.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    return cleanedInput === cleanedAns || cleanedInput.includes(cleanedAns);
  });

  if (isCorrect) {
    // PHASE 1: Correct Answer Recognition & Audio (0-200ms)
    input.disabled = true;
    playAmbientSound('celebrate');

    const expandedCard = document.getElementById('expanded-card');
    const silhouetteLayer = document.getElementById('modal-silhouette-layer');
    const peel = document.getElementById('interactive-peel-cover');
    const revealedLayer = document.getElementById('modal-revealed-layer');
    const clueNote = document.getElementById('modal-clue-note');
    const formSection = document.getElementById('modal-form-section');
    const celebrateSection = document.getElementById('modal-celebrate-section');
    const sparkleBurst = document.getElementById('polaroid-sparkle-burst');

    // PHASE 2: Photo Becomes Hero + Ambient Glow Aura (250ms)
    setTimeout(() => {
      if (expandedCard) expandedCard.classList.add('is-solved');

      // Sparkles placed purely around the outside of the frame
      if (sparkleBurst) {
        sparkleBurst.innerHTML = `
          <span style="position:absolute; top:-12px; left:12%; color:#E9B85C; font-size:17px; text-shadow:0 0 8px #E9B85C; animation:starCollectPulse 1.2s infinite alternate;">✦</span>
          <span style="position:absolute; top:-10px; right:15%; color:#F6C8D2; font-size:15px; text-shadow:0 0 8px #F6C8D2; animation:starCollectPulse 1s infinite alternate;">✧</span>
          <span style="position:absolute; bottom:-12px; left:15%; color:#F3D58A; font-size:14px; text-shadow:0 0 8px #F3D58A; animation:starCollectPulse 1.4s infinite alternate;">⋆</span>
          <span style="position:absolute; bottom:-10px; right:12%; color:#E9B85C; font-size:18px; text-shadow:0 0 8px #E9B85C; animation:starCollectPulse 1.1s infinite alternate;">✦</span>
        `;
      }
    }, 250);

    // PHASE 3 & 4: Peel Lifts Away & Clean Photo Materializes with Focus (500ms)
    setTimeout(() => {
      if (peel) peel.style.display = 'none';
      if (silhouetteLayer) {
        silhouetteLayer.style.opacity = '0';
        setTimeout(() => { silhouetteLayer.style.display = 'none'; }, 400);
      }
      if (revealedLayer) revealedLayer.classList.remove('hidden');
    }, 500);

    // PHASE 5: Transition to Personal Stationery Letter (850ms)
    setTimeout(() => {
      if (clueNote) clueNote.style.display = 'none';
      if (formSection) formSection.classList.add('hidden');
      
      if (celebrateSection) {
        document.getElementById('modal-solved-friend-name').textContent = friend.name;
        document.getElementById('modal-solved-friend-message').textContent = `"${friend.message}"`;
        celebrateSection.classList.remove('hidden');
      }

      if (!gameState.revealedIds.includes(friend.id)) {
        gameState.revealedIds.push(friend.id);
        saveProgress();
      }

      // PHASE 6: Star Collection Flight to Header Bar
      animateFlyingStar(friend.id, () => {
        renderFriendsGrid();
        updateProgressBar();
      });
    }, 850);

  } else {
    // Incorrect Answer - Playful Card Shake & Microcopy
    playAmbientSound('wrong');
    const expandedCard = document.getElementById('expanded-card');
    if (expandedCard) {
      expandedCard.classList.remove('shake-card');
      void expandedCard.offsetWidth; // Reflow
      expandedCard.classList.add('shake-card');
    }

    const feedback = document.getElementById('error-feedback');
    const retryPhrases = [
      "Hmm... not quite, detective ✦",
      "The mystery is still keeping its secret 👀",
      "Close! You know this person... think again ♡",
      "The shadows aren't convinced yet ✨"
    ];
    feedback.textContent = retryPhrases[Math.floor(Math.random() * retryPhrases.length)];
    feedback.classList.remove('hidden');
  }
}

// ==========================================
// FRIEND REVEALED CELEBRATION MODAL
// ==========================================

function showFriendRevealModal(friend, isNewDiscovery = true) {
  document.getElementById('reveal-friend-img').src = friend.revealedImage;
  document.getElementById('reveal-friend-name').textContent = friend.name;
  document.getElementById('reveal-friend-message').textContent = `"${friend.message}"`;

  const modal = document.getElementById('reveal-modal');
  modal.classList.remove('hidden');
}

function closeRevealModal() {
  document.getElementById('reveal-modal').classList.add('hidden');
}

// ==========================================
// FINAL UNLOCK & GIFT SYSTEM
// ==========================================

function showFinalCompleteScreen() {
  const completeScreen = document.getElementById('chapter-complete-screen');
  completeScreen.classList.remove('hidden');
  playAmbientSound('celebrate');
}

function openGift() {
  document.getElementById('chapter-complete-screen').classList.add('hidden');
  
  const giftModal = document.getElementById('gift-modal');
  giftModal.classList.remove('hidden');

  renderGiftContent();
  launchConfetti();
  playAmbientSound('celebrate');
}

function closeGiftModal() {
  document.getElementById('gift-modal').classList.add('hidden');
}

// Render Customizable Gift Payload
function renderGiftContent() {
  const container = document.getElementById('gift-content-container');
  container.innerHTML = '';

  if (giftType === "message") {
    let html = '';
    giftContent.messageText.forEach(p => {
      html += `<p class="letter-paragraph">${p}</p>`;
    });
    container.innerHTML = html;
  } else if (giftType === "photo") {
    container.innerHTML = `
      <div style="text-align:center;">
        <img src="${giftContent.photoUrl}" alt="Gift Photo" style="max-width:100%; border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,0.15);">
        <p style="margin-top:16px; font-weight:700;">Happy 22nd Birthday, ${gameState.playerName}! ❤️</p>
      </div>
    `;
  } else if (giftType === "video") {
    container.innerHTML = `
      <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:16px;">
        <iframe src="${giftContent.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
      </div>
    `;
  } else if (giftType === "playlist" || giftType === "link") {
    container.innerHTML = `
      <div style="text-align:center; padding:20px 0;">
        <p style="font-size:18px; margin-bottom:20px; font-weight:700;">A special Chapter 22 surprise has been prepared for you!</p>
        <a href="${giftContent.externalLink}" target="_blank" class="primary-btn" style="display:inline-block; width:auto; padding:14px 28px; text-decoration:none;">
          OPEN SURPRISE LINK ✦
        </a>
      </div>
    `;
  }
}

// ==========================================
// RESTART & RESET PROGRESS
// ==========================================

document.getElementById('restart-btn').addEventListener('click', () => {
  document.getElementById('restart-modal').classList.remove('hidden');
});

function closeRestartModal() {
  document.getElementById('restart-modal').classList.add('hidden');
}

function confirmRestart() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  gameState.revealedIds = [];
  closeRestartModal();
  renderFriendsGrid();
  updateProgressBar();
  
  // Return to landing screen
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('landing-screen').classList.remove('hidden');
  document.getElementById('landing-screen').classList.add('active');
}

// ==========================================
// CANVASES & CONFETTI ENGINE
// ==========================================

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#F8C8DC', '#E88785', '#E6E6FA', '#E0F2FE', '#D4AF37', '#FFF3BF'];
  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 5 - 2.5
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    animationFrame = requestAnimationFrame(render);
  }

  render();

  // Stop confetti after 6 seconds to save CPU
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 6500);
}
