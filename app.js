"use strict";

// active class toggle

function activeClassToggle(id1, id2) {
  const removeClassElement = document.getElementById(id1);
  const addClassElement = document.getElementById(id2);
  removeClassElement.classList.remove("active");
  addClassElement.classList.add("active");
}

function menuToggle(id) {
  const menu = document.getElementById(id);
  menu.classList.toggle("active");
}
