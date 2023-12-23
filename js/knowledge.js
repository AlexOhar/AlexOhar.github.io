import { dropdownMenu, fixLinksMenu, handleDocumentClick } from '../js/modules.js';

document.addEventListener('DOMContentLoaded', () => {
  dropdownMenu();
  fixLinksMenu();
  document.addEventListener('click', handleDocumentClick);

  let index = document.querySelectorAll(".education_item").length;
  const allInfo = document.querySelector('.education');
  
  const content = document.querySelector('.education');
  console.log(content.clientHeight - 53);
  // allInfo.style.top = '-453px';
  allInfo.style.top = `${-content.clientHeight + 53}px`;
  
  function addDisplayBlock() {
    let element = document.querySelector(`.education_item:nth-child(${index})`);
    const pulseCircle = document.querySelectorAll('.education_item_circles_small');
        pulseCircle.forEach(circle => {
          circle.style.animationPlayState = 'running';
        });
    
    if (index > 0) {

      if (element.clientHeight) {
        const ellHeight = element.clientHeight;
        setTimeout(() => {
          const currPos = parseFloat(allInfo.style.top.slice(0, -2));
          const distance = parseFloat(currPos) + ellHeight + 10;

          allInfo.style.top = `${distance}px`;
        },800);
        
      }

      setTimeout(() => {
        element.querySelectorAll("h3").forEach((h) => {
          h.style.visibility = "visible";
        });
      }, 1600);
      
      setTimeout(() => {
        element.querySelectorAll("p").forEach((p) => {
          p.style.visibility = "visible";
        });
      },2400);
      
      setTimeout(() => {
        element.querySelectorAll("h4").forEach((h) => {
          h.style.visibility = "visible";
        });
      },3200);

      setTimeout(() => {
        const currCirc = element.querySelector('.education_item_circles_small')
        currCirc.style.animation = 'none';
      }, 4800);
      
      index--;
      

      setTimeout(addDisplayBlock, 3200);
      
    } else {
      setTimeout(() => {
        const blinkCard = document.querySelector('.blink');
        blinkCard.style.animation = 'animateBlinkCard 2s linear';
      }, 500);
      
      // pulseCircle.forEach(circle => {
      //   circle.style.animation = 'none';
      // });
    }
  }

  addDisplayBlock();

});