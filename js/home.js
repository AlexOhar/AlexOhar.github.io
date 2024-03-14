import { dropdownMenu, fixLinksMenu, handleDocumentClick, moveBalls, headerFunk } from '../js/modules.js';

document.addEventListener('DOMContentLoaded', () => {
    dropdownMenu();
    fixLinksMenu();
    document.addEventListener('click', handleDocumentClick);

    let width = window.innerWidth;

    window.addEventListener('resize', function() {
        if(window.innerWidth !== width) {
            width = window.innerWidth;
            location.reload();
        }
    });

    // --------------------------------------------------------move balls
    moveBalls();

    // -------------------------------------------------------swiming button
    
    function animateButton(circleId, buttonId) {
        const circle = document.getElementById(circleId);
        const button = document.getElementById(buttonId);
        const bigRadius = circle.offsetWidth / 2;
        const btnRadius = button.offsetWidth / 2;
    
        function animate() {
            const circleRect = circle.getBoundingClientRect();
            let x = mouseX - circleRect.left - bigRadius;
            let y = mouseY - circleRect.top - bigRadius;
            let distanceToCenter = Math.sqrt(x * x + y * y);
    
            if (distanceToCenter + btnRadius > bigRadius) {
                const angle = Math.atan2(y, x);
                x = (bigRadius - btnRadius) * Math.cos(angle);
                y = (bigRadius - btnRadius) * Math.sin(angle);
            }
    
            button.style.transform = `translate3d(${x - btnRadius}px, ${y - btnRadius}px, 0)`;
            requestAnimationFrame(animate);
        }
    
        animate();
    }

    let mouseX = 0, 
        mouseY = 0;
    
    if (window.matchMedia("(min-width: 991px)").matches) {
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        animateButton('circle', 'button');
        animateButton('circleTwo', 'buttonTwo');
    }

    const btnsPorfolio = document.querySelectorAll('.firstScreen_card_circle');
    btnsPorfolio.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open('portfolio.html', '_blank');
        })
    })

    // --------------------------------------------------squares in the 'about' block
    const squaresCard = document.querySelector('.about_card');

    for (let i = 0; i < 680; i++) {
        const square = document.createElement('div');
        square.classList.add('about_card_square');
        squaresCard.appendChild(square);
    }

    const allSquares = document.querySelectorAll('.about_card_square');
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('squareActive');
            setTimeout(() => {
                square.classList.remove('squareActive');
            }, 300);
        });
    });

    
    //---------------------------------------------------custome section benefits
    const words = document.querySelectorAll('.word');
    
    function addBlurToList() {
        let windowHeight = window.innerHeight;
        let windowCenter = windowHeight / 2;

        words.forEach(function(word) {
            let wordRect = word.getBoundingClientRect();
            let wordCenter = wordRect.top + wordRect.height / 2;
            let distanceFromCenter = Math.abs(windowCenter - wordCenter);
        
            let blurAmount;
            if (distanceFromCenter <= windowCenter) {
                blurAmount = (distanceFromCenter / windowCenter) * 15;
            }
            word.style.filter = 'blur(' + blurAmount + 'px)';
        });
    };

    window.addEventListener('scroll', () => {
        addBlurToList();
    });


    // header
    headerFunk();
   
    //skills
    let skills = [
        {name: 'html', img: 'icons/html.svg'},
        {name: 'js', img: 'icons/js.svg'},
        {name: 'react', img: 'icons/react.svg'},
        {name: 'css', img: 'icons/css.svg'},
        {name: 'scss', img: 'icons/sass.svg'},
        {name: 'bootstrap', img: 'icons/bootstrap.svg'},
        {name: 'git', img: 'icons/git.svg'},
        {name: 'nodejs', img: 'icons/nodejs.svg'},
        {name: 'jquery', img: 'icons/jquery.svg'},
        {name: 'mongodb', img: 'icons/mongodb.svg'}
    ];
    
    let skillsElement = document.getElementById('skills');
    let observer;
    let intervalId;
    let isAnimating = false;
    
    
    let wrapp = document.createElement('div');
    wrapp.classList.add('skills_wrapp');
    skillsElement.appendChild(wrapp);
    
    function createDiv() {
        if (!isAnimating) return;
        let div = document.createElement('div');
        div.classList.add('skills_wrapp_skillCard');
    
        let img = document.createElement('img');
        let p = document.createElement('p');
        let skillObj = skills[Math.floor(Math.random() * skills.length)];
        img.src = skillObj.img;
        p.textContent = skillObj.name;
    
        div.appendChild(img);
        div.appendChild(p);

        let divWidth = div.offsetWidth;
        let padding = parseInt(window.getComputedStyle(skillsElement).paddingLeft);
    
        div.style.bottom = '0px';
        div.style.left = Math.random() * (skillsElement.offsetWidth - divWidth - 2 * padding) + 'px';
        wrapp.appendChild(div);
        requestAnimationFrame(() => moveDiv(div));
    }
    

    function moveDiv(div) {
        let speed = 2;
        let position = 0;
    
        function step() {
            position += speed;
            div.style.bottom = position + 'px';
            if (position < skillsElement.offsetHeight) {
                requestAnimationFrame(step);
            } else {
                wrapp.removeChild(div);
            }
        }
        requestAnimationFrame(step);
    }
    
    window.addEventListener('blur', stopAnimation);
    window.addEventListener('focus', startAnimation);

    function startAnimation() {
        isAnimating = true;
        intervalId = setInterval(createDiv, 1000);
    }
    
    function stopAnimation() {
        isAnimating = false;
        clearInterval(intervalId);
    }
    
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation();
            } else {
                stopAnimation();
            }
        });
    }, options);
    
    observer.observe(skillsElement);


    document.querySelector('.skillsText').addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.setProperty('--x', `${ x }px`);
        e.target.style.setProperty('--y', `${ y }px`);
    });



    //portfolio
    const cardPictures = [   
                            {header: 'Cotton Bro', dataLink: "https://alexohar.github.io/cotton-bro/", imageForSlider: "../img/CottBro-2.png"},
                            {header: 'Portfolio', dataLink: "https://alexohar.github.io/portfolio", imageForSlider: "../img/portfEx-3.png"},
                            {header: 'Sky Study', dataLink: "https://alexohar.github.io/skystudy/", imageForSlider: "../img/eng-1.png"},
                            {header: 'Run Smart', dataLink: "https://alexohar.github.io/runsmart", imageForSlider: "../img/runCard-6.png"},
                            {header: 'Fresh Food', dataLink: "https://alexohar.github.io/food/", imageForSlider: "../img/foodShop-4.png"},
                            {header: 'Uber', dataLink: "https://alexohar.github.io/uber/", imageForSlider: "../img/uberCard-5.png"}
                            // {header: 'Tetris', dataLink: "https://alexohar.github.io/tetris/", dataBgImg: "/img/tetris2.png"},
                            // {header: 'Marvel', dataLink: "https://alexohar.github.io/marvel", dataBgImg: "/img/marvel.jpg"}
                        ];
                        
    let radius = document.querySelector('.about_card').clientWidth / 3, // радиус
        spiralSpacing = document.querySelector('#portfolioCard').offsetHeight / 2, // Расстояние между карточками по оси Y (150 для 1920 или 50% от высоты карточки)
        translateX = 0,
        translateY = 10;
    
    const odrag = document.querySelector('#drag-container'),
          portfolio = document.querySelector('.portfolio'),
          arrayCard = odrag.querySelectorAll('.portfolio_card'),
          allElements = [...arrayCard];
          
    odrag.style.transform = "rotateY(" + (translateX) + "deg)";

    arrayCard.forEach((card, i) => {
        if (cardPictures[i]) {
            card.style.backgroundImage = `url("${cardPictures[i].imageForSlider}")`;
            card.querySelector('h3').innerText = `${cardPictures[i].header}`;

            card.addEventListener('click', () => {
                window.open(`${cardPictures[i].dataLink}`, "_blank");
            })
        }
        
    });     

    if (window.innerWidth > 767) {
        for (let i = 0; i < allElements.length; i++) {
            translateY = i * spiralSpacing;
            allElements[i].style.transform = "rotateY(" + (i * (360 / allElements.length)) + "deg) translateZ(" + radius + "px) translateY(" + translateY + "px)";
            allElements[i].style.transition = "transform 0s, background-size 0.8s ease"; 
        }
    
        let observerSliderStart = new IntersectionObserver(onTranslateStart, options);
        function onTranslateStart(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    translateX = 0;
                    odrag.style.transform = "rotateY(" + (translateX) + "deg)";
                    odrag.style.top = "0%";
                    portfolio.style.position = 'relative';
                }
            });
        }
        observerSliderStart.observe(document.querySelector('.skills'));

        let observerSliderEnd = new IntersectionObserver(onTranslate, options);
        function onTranslate(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    translateX = -310;
                    odrag.style.transform = "rotateY(" + (translateX) + "deg)";
                    odrag.style.top = "-96.4981%";
                    portfolio.style.position = 'relative';
                }
            });
        }
        observerSliderEnd.observe(document.querySelector('.experience'));

        // animation
        window.onscroll = function() {
            const portfolioTop = portfolio.getBoundingClientRect().top;

            if (portfolioTop <= 0 && portfolioTop >= -50) {
                document.addEventListener('wheel', porfolioControl);
            }
            // if (portfolioTop >= -20 && portfolioTop <= 20) {
            //     window.scrollTo({
            //         top: portfolio.offsetTop,
            //         behavior: 'smooth'
            //     });
            //     document.addEventListener('wheel', porfolioControl);
            // }
        };

        function porfolioControl(event) {
            if (event.deltaY < 0) {
                if (translateX === 0) {
                    portfolio.style.position = 'relative';
                    document.documentElement.style.overflow = 'auto';
                    document.removeEventListener('wheel', wheelHandler);
                    document.removeEventListener('wheel', porfolioControl);
                } else if (translateX === -310) {
                    document.documentElement.style.overflow = 'hidden';
                    portfolio.style = "position: sticky; top: 0;";
                    document.addEventListener('wheel', wheelHandler);
                }
            } 
            else if (event.deltaY > 0) {

                if (translateX === 0) {
                    document.documentElement.style.overflow = 'hidden';
                    portfolio.style = "position: sticky; top: 0;";
                    document.addEventListener('wheel', wheelHandler);
                } else if (translateX === -310) {
                    portfolio.style.position = 'relative';
                    document.documentElement.style.overflow = 'auto';
                    document.removeEventListener('wheel', wheelHandler);
                    document.removeEventListener('wheel', porfolioControl);
                }
            }  
        };

        // spin wheel
        function wheelHandler(event) {
            if (translateY < -300) {
                translateY = -310;
            } else if (translateY > 0) {
                translateY = 0;
            }
            const direction = event.deltaY > 0 ? -1 : 1;
            translateX += direction * 10;
            const newTop = 0 - (translateX / -310) * (96.4981 - 0); 
            odrag.style.top = newTop + '%';
            odrag.style.transform = "rotateY(" + (translateX) + "deg)";
        }
    }

    // let observerScroll = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Блок находится в пределах 100-150px от видимой области, плавно прокручиваем до него
    //             window.scrollTo({
    //                 top: entry.target.offsetTop,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // }, { rootMargin: '-150px 0px -100px 0px' }); // Отслеживаем, когда блок находится в пределах 100-150px от видимой области
    
    // observerScroll.observe(portfolio);






    // let radius = document.querySelector('.about_card').clientWidth / 3,
    // spiralSpacing = document.querySelector('#portfolioCard').offsetHeight / 2,
    // translateX = 0,
    // translateY = 10;

    // const odrag = document.querySelector('#drag-container'),
    //     portfolio = document.querySelector('.portfolio'),
    //     arrayCard = odrag.querySelectorAll('.portfolio_card'),
    //     allElements = [...arrayCard];

    // odrag.style.transform = "rotateY(" + (translateX) + "deg)";

    // arrayCard.forEach((card, i) => {
    //     if (cardPictures[i]) {
    //         card.style.backgroundImage = `url("${cardPictures[i].imageForSlider}")`;
    //         card.querySelector('h3').innerText = `${cardPictures[i].header}`;

    //         card.addEventListener('click', () => {
    //             window.open(`${cardPictures[i].dataLink}`, "_blank");
    //         })
    //     }
    // });     

    // if (window.innerWidth > 767) {
    //     for (let i = 0; i < allElements.length; i++) {
    //         translateY = i * spiralSpacing;
    //         allElements[i].style.transform = "rotateY(" + (i * (360 / allElements.length)) + "deg) translateZ(" + radius + "px) translateY(" + translateY + "px)";
    //         allElements[i].style.transition = "transform 0s, background-size 0.8s ease"; 
    //     }

    //     let observerSliderStart = new IntersectionObserver(onTranslateStart, { threshold: 1.0 });
    //     function onTranslateStart(entries, observer) {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 translateX = 0;
    //                 odrag.style.transform = "rotateY(" + (translateX) + "deg)";
    //                 odrag.style.top = "0%";
    //                 portfolio.style.position = 'relative';
    //             }
    //         });
    //     }
    //     observerSliderStart.observe(document.querySelector('.skills'));

    //     let observerSliderEnd = new IntersectionObserver(onTranslate, { threshold: 1.0 });
    //     function onTranslate(entries, observer) {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 translateX = -310;
    //                 odrag.style.transform = "rotateY(" + (translateX) + "deg)";
    //                 odrag.style.top = "-96.4981%";
    //                 portfolio.style.position = 'relative';
    //             }
    //         });
    //     }
    //     observerSliderEnd.observe(document.querySelector('.experience'));

    //     window.onscroll = function() {
    //         const portfolioTop = portfolio.getBoundingClientRect().top;

    //         if (portfolioTop <= 0 && portfolioTop >= -50) {
    //             document.addEventListener('wheel', porfolioControl);
    //         }
    //     };

    //     function porfolioControl(event) {
    //         if (event.deltaY < 0) {
    //             if (translateX === 0) {
    //                 portfolio.style.position = 'relative';
    //                 document.documentElement.style.overflow = 'auto';
    //                 document.removeEventListener('wheel', wheelHandler);
    //                 document.removeEventListener('wheel', porfolioControl);
    //             } else if (translateX === -310) {
    //                 document.documentElement.style.overflow = 'hidden';
    //                 portfolio.style = "position: sticky; top: 0;";
    //                 document.addEventListener('wheel', wheelHandler);
    //             }
    //         } 
    //         else if (event.deltaY > 0) {
    //             if (translateX === 0) {
    //                 document.documentElement.style.overflow = 'hidden';
    //                 portfolio.style = "position: sticky; top: 0;";
    //                 document.addEventListener('wheel', wheelHandler);
    //             } else if (translateX === -310) {
    //                 portfolio.style.position = 'relative';
    //                 document.documentElement.style.overflow = 'auto';
    //                 document.removeEventListener('wheel', wheelHandler);
    //                 document.removeEventListener('wheel', porfolioControl);
    //             }
    //         }  
    //     };

    //     function wheelHandler(event) {
    //         const direction = event.deltaY > 0 ? -1 : 1;
    //         translateX += direction * 10;
    //         const newTop = 0 - (translateX / -310) * (96.4981 - 0); 
    //         odrag.style.top = newTop + '%';
    //         odrag.style.transform = "rotateY(" + (translateX) + "deg)";

    //         if (translateX <= -310 || translateX >= 0) {
    //             portfolio.style.position = 'relative';
    //             document.documentElement.style.overflow = 'auto';
    //             document.removeEventListener('wheel', wheelHandler);
    //         }
    //     }
    // }




    

    //footer
    let observerFooter = new IntersectionObserver(onIntersect, options);
    
    function onIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let pElements = entry.target.querySelectorAll('p');
                for (let i = 0; i < pElements.length; i++) {
                    setTimeout(() => {
                        pElements[i].classList.add('hover-effect-footer');
                        setTimeout(() => {
                            pElements[i].classList.remove('hover-effect-footer');
                        }, 100);
                    }, 50 * i);
                }
            }
        });
    };

    observerFooter.observe(document.querySelector('footer'));

    if (window.innerWidth < 768) {
        const symbols = document.querySelectorAll('footer p');
    
        symbols.forEach(symb => {
            symb.addEventListener('touchstart', function() {
                this.classList.add('hover-effect-footer');
            });
    
            symb.addEventListener('touchend', function() {
                this.classList.remove('hover-effect-footer');
            });
    
            symb.addEventListener('touchmove', function(e) {
                var touch = e.touches[0];
                var element = document.elementFromPoint(touch.clientX, touch.clientY);
                if (element && element === symb) {
                    this.classList.add('hover-effect-footer');
                } else {
                    this.classList.remove('hover-effect-footer');
                }
            });
        });
    };
});