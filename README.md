# ❌⭕ Tic Tac Toe(https://sayalikale318.github.io/odin-tic-tac-toe/)
A browser-based Tic Tac Toe game built with **HTML, CSS, and JavaScript** using modular JavaScript design (Module Pattern + Factory Functions).
This project was created to practice structuring JavaScript applications and separating game logic from UI logic.

---
## 🚀 Features
* 👤 Two-player game (custom player names)
* ❌⭕ Player X vs Player O
* 🧠 Automatic win detection
* 🤝 Draw detection
* 🔄 Restart game functionality
* 🖥️ Dynamic board rendering
* 📦 Clean modular JavaScript structure (no global variables)

---

## 🛠️ Technologies Used
* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📁 Project Structure
```
tic-tac-toe/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧠 JavaScript Architecture

### 1️⃣ Gameboard Module
* Stores the board as an array of 9 cells
* Provides methods to:
  * Update a cell
  * Reset the board
  * Access board data

### 2️⃣ Player Factory Function
* Creates player objects with:
  * Name
  * Marker (X or O)

### 3️⃣ GameController Module
* Controls:
  * Turn switching
  * Win checking
  * Draw checking
  * Game restart
* Contains all game logic

### 4️⃣ DisplayController Module
* Handles:
  * Rendering board to DOM
  * Updating status messages
  * Connecting UI with game logic

---

## 🎮 How to Play
1. Enter Player 1 and Player 2 names.
2. Click **Start Game**.
3. Players take turns clicking on empty squares.
4. First player to align 3 markers wins.
5. If all cells are filled without a winner, the game ends in a draw.
6. Click **Restart** to play again.

---

## 📚 Concepts Practiced
* Module Pattern (IIFE)
* Factory Functions
* Closures
* DOM Manipulation
* Event Handling
* Array Methods
* Clean Code Organization

---

## 📌 Future Improvements
* 🤖 Add AI (Play vs Computer)
* 🏆 Add score tracking
* 💾 Store scores in Local Storage
* 🎨 Improve UI with animations
* 📱 Make fully responsive

---

## 🎯 Learning Outcome
This project helped strengthen:
* Understanding of JavaScript architecture
* Writing modular and maintainable code
* Implementing real-world game logic
* Separating business logic from UI logic

---

⭐ This project demonstrates strong fundamentals in JavaScript and application structure.

---
