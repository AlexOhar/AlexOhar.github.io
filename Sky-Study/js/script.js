"use strict";

const slider = document.querySelector('.firstScreen_slider'),
    slideFirst = document.querySelector('.firstScreen_slideOne'),
    slideSecond = document.querySelector('.firstScreen_slideTwo'),
    rotateBlock = document.querySelector('.programming'),
    slideThree = document.querySelector('.firstScreen_slideThree'),
    dropDown = document.querySelector('.dropDown'),
    hamburger = document.querySelector('.dropDown_hamburger'),
    hamburgerLink = document.querySelectorAll('.link_hamburger'),
    hamburgerActive = document.querySelector('.hamburger_active'),
    sendBtn = document.querySelector('.footer_subscribe-btn'),
    sendBtnBefore = window.getComputedStyle(sendBtn, '::before');

slideSecond.addEventListener('mouseover', () => {
    slideFirst.classList.toggle('active');
    slideSecond.classList.toggle('active');
    slider.classList.toggle('slider-step2');
});
slideSecond.addEventListener('mouseout', () => {
    slideFirst.classList.toggle('active');
    slideSecond.classList.toggle('active');
    slider.classList.toggle('slider-step2');
});
slideThree.addEventListener('mouseover', () => {
    slideFirst.classList.toggle('active');
    slideThree.classList.toggle('active');   
    slider.classList.toggle('slider-step3'); 
});
slideThree.addEventListener('mouseout', () => {
    slideFirst.classList.toggle('active');
    slideThree.classList.toggle('active');
    slider.classList.toggle('slider-step3'); 
});

if (screen.width < 993) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active'),
        dropDown.classList.toggle('close');
    });
    if(hamburger.classList.contains('active')) {
        hamburgerActive.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active'),
            dropDown.classList.toggle('close');
        });
    }
}

const wrapper = document.querySelector('.choosingProfession_categories'),
    line = document.querySelector('.moveLine'),
    blockLine = document.querySelector('.choosingProfession_line');
blockLine.style.width =`${wrapper.offsetWidth}px`; // - wrapper.offsetWidth * 0.33

function handleHover(e) {
  if (e.toElement.outerText == 'All Categories') {
    if (screen.width > 1800) {
      line.style.left = '2%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    } else if (screen.width > 1400) {
      line.style.left = '1%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    } else if (screen.width > 1200) {
      line.style.left = '0%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    }
  } else if (e.toElement.outerText == 'Testing') {
    line.style.left = '21%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
    if (screen.width > 1200 && screen.width < 1400) {
      line.style.left = '20%';
    }
    // if (screen.width > 768 && screen.width < 992) {
    //   line.style.left = '22%';
    // }
  } else if (e.toElement.outerText == 'Programming') {
    line.style.left = '33%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
    // if (screen.width > 768 && screen.width < 992) {
    //   line.style.left = '34%';
    // }
  } else if (e.toElement.outerText == 'Marketing') {
    line.style.left = '52%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
    // if (screen.width > 768 && screen.width < 992) {
    //   line.style.left = '54%';
    // }
  } else if (e.toElement.outerText == 'Design') {
    line.style.left = '67%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
    // if (screen.width > 768 && screen.width < 992) {
    //   line.style.left = '69%';
    // }
  } else if (e.toElement.outerText == 'Management') {
    line.style.left = '79%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
    // if (screen.width > 768 && screen.width < 992) {
    //   line.style.left = '80%';
    // }
  }
}
function handleOut() {
  if (screen.width > 1800) {
    line.style.left = '2%'
    line.style.width = `200px`;
  } else if (screen.width > 1400) {
    line.style.left = '1%'
    line.style.width = `200px`;
  } else if (screen.width > 1200) {
    line.style.left = '0%'
    line.style.width = `200px`;
  } else if (screen.width > 992) {
    line.style.left = '2%'
    line.style.width = `165px`;
  } else if (screen.width > 768) {
    line.style.left = '0%'
    line.style.width = `144px`;
  } else {
    line.style.left = '0%'
  }
}
wrapper.addEventListener('mouseover', handleHover);
wrapper.addEventListener('mouseout', handleOut);

if (screen.width > 992) {
  $('.feedback_slider').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.control-prev'),
    nextArrow: $('.control-next'),
  });
}
if (screen.width > 576) {
  $('.feedback_slider').not('.slick-initialized').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.control-prev'),
    nextArrow: $('.control-next'),
  });
}
if (screen.width > 319) {
  $('.feedback_slider').not('.slick-initialized').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: true,
    prevArrow: $('.control-prev'),
    nextArrow: $('.control-next'),
  });
}

const mobileCategories = document.querySelector('.choosingProfession_mobileCategory'),
    modalOverlay = document.querySelector('.choosingProfession_overlay'),
    mobileModal = document.querySelector('.choosingProfession_overlay_modal');

mobileCategories.addEventListener('click', () => {
  mobileModal.classList.toggle('modal_active');
  modalOverlay.classList.toggle('overlay_active');
});
modalOverlay.addEventListener('click', () => {
  mobileModal.classList.toggle('modal_active');
  modalOverlay.classList.toggle('overlay_active');
});

// validation form
const emailArea = document.querySelector('#footer input');

function valideForm(form) {
  $(form).validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "",
        email: ""
      }
    }
  });
}
valideForm('#footer form');

$('form').submit(function(e) {
  e.preventDefault();
  if(!$(this).valid()) {
    return;
  }
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('form').trigger('reset');
    myBtn.style.setProperty('--before-color', '#59ff57');
  });
  return false;
});