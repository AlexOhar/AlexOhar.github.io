import { dropdownMenu, fixLinksMenu, handleDocumentClick } from '../js/modules.js';
document.addEventListener('DOMContentLoaded', () => {
  dropdownMenu();
  fixLinksMenu();
  document.addEventListener('click', handleDocumentClick);
});

// global variables:
let radius = 240; // start radius
const autoRotate = true;
const rotateSpeed = 60; // seconds/360 degrees
const imgWidth = 120;
const imgHeight = 170;

// ===================== start =======================
setTimeout(init, 1000); // animation start after 1000 miliseconds

const odrag = document.querySelector('#drag-container');
const ospin = document.querySelector('#spin-container');
const arrayImg = ospin.querySelectorAll('img');
const arrayCard = ospin.querySelectorAll('.card');
const allElements = [...arrayImg, ...arrayCard];

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
const ground = document.querySelector('#ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.transform = "rotateY(" + (i * (360 / allElements.length)) + "deg) translateZ(" + radius + "px)";
    allElements[i].style.transition = "transform 1s";
    allElements[i].style.transitionDelay = delayTime || (allElements.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(translateY > 180) translateY = 180;
  if(translateY < 0) translateY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-translateY) + "deg) rotateY(" + (translateX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

let startX, startY, newX, newY,
    deltaX = 0,
    deltaY = 0,
    translateX = 0,
    translateY = 10;

// auto spin
if (autoRotate) {
  const animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (event) {
  clearInterval(odrag.timer);
  event = event || window.event;
  let startX = event.clientX,
      startY = event.clientY;

  this.onpointermove = function (event) {
    event = event || window.event;
    let newX = event.clientX,
        newY = event.clientY;
    deltaX = newX - startX;
    deltaY = newY - startY;
    translateX += deltaX * 0.1;
    translateY += deltaY * 0.1;

    applyTranform(odrag);
    startX = newX;
    startY = newY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      deltaX *= 0.95;
      deltaY *= 0.95;
      translateX += deltaX * 0.1;
      translateY += deltaY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onwheel = function(event) {
  event = event || window.event;
  let delta = event.deltaY,
      newRadius = radius + delta;

  if(newRadius < 450 && newRadius > 190) {
    radius += delta;
  }
  init(1);
};