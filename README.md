# js-drum-kit
A browser-based drum kit built to practice JavaScript event listeners, keyboard event mapping, and HTML5 audio integration.

## Overview
This project maps specific keyboard keys (W, A, S, D, J, K, L) and on-screen HTML buttons to unique drum sounds. It also features a quick CSS animation that triggers whenever a drum is played, providing visual feedback to the user.

## Tech Stack
* **JavaScript (Vanilla):** Handles click and keydown event listeners, audio object generation, and DOM manipulation for animations.
* **HTML5:** Structure and button elements.
* **CSS3:** Styling, layout, and visual feedback animations.

## What I Learned
Building this project expanded my understanding of DOM manipulation and event handling in JavaScript:
* **Advanced Event Listeners:** Implementing both `click` and `keydown` event listeners to give users multiple ways to interact with the app.
* **Audio Objects:** Using the `Audio` constructor in JavaScript to dynamically load and play `.mp3` files.
* **Switch Statements:** Utilizing `switch` statements to efficiently route different inputs (keys/buttons) to their corresponding audio files.
* **Dynamic CSS Classes:** Using `classList.add()` and `classList.remove()` paired with `setTimeout()` to create temporary, interactive animations.

## Acknowledgements
The HTML and CSS skeleton for this project was provided by Dr. Angela Yu's Full Stack Web Development Bootcamp on Udemy.
