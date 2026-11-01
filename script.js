'use strict';

const score0El = document.getElementById('score--0');

const score1El = document.querySelector('#score--1');

score0El.textContent = 0;
score1El.textContent = 0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
