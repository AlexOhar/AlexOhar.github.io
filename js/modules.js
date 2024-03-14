export function dropdownMenu() {
    const modal = document.querySelector('dialog');
    let btnContacts = document.querySelector('#contacts');

    if (window.innerWidth < 992) {
        btnContacts = document.querySelector('#contactsMobile');
    }

    btnContacts.addEventListener('click', () => {
        if (modal.open === true) {
            return
        }
        const cards = document.querySelectorAll('.allPortfolio_cards_card');
        if (cards) {
            cards.forEach(card => {
                card.style.filter = 'brightness(0.5)';
            })
        }
        let content = document.createElement('div');
        content.classList.add('modalContent');
        content.innerHTML = `
        <button id="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_157_242)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 11.7683L14.4192 16.1875C14.6537 16.422 14.9718 16.5537 15.3034 16.5537C15.635 16.5537 15.9531 16.422 16.1876 16.1875C16.4221 15.953 16.5538 15.635 16.5538 15.3033C16.5538 14.9717 16.4221 14.6537 16.1876 14.4192L11.7667 10L16.1867 5.58083C16.3028 5.46472 16.3948 5.32689 16.4576 5.17521C16.5204 5.02352 16.5527 4.86096 16.5527 4.69679C16.5526 4.53262 16.5203 4.37007 16.4574 4.21842C16.3946 4.06676 16.3024 3.92897 16.1863 3.81292C16.0702 3.69686 15.9324 3.60481 15.7807 3.54202C15.629 3.47924 15.4664 3.44694 15.3023 3.44698C15.1381 3.44702 14.9756 3.47939 14.8239 3.54225C14.6723 3.60511 14.5345 3.69722 14.4184 3.81333L10.0001 8.2325L5.58091 3.81333C5.46566 3.69389 5.32777 3.5986 5.1753 3.53302C5.02282 3.46744 4.85882 3.43288 4.69284 3.43136C4.52687 3.42984 4.36226 3.46139 4.20861 3.52417C4.05496 3.58694 3.91535 3.67969 3.79793 3.797C3.68051 3.91431 3.58763 4.05384 3.5247 4.20743C3.46178 4.36102 3.43008 4.5256 3.43144 4.69157C3.4328 4.85755 3.46721 5.02159 3.53264 5.17412C3.59808 5.32666 3.69324 5.46464 3.81258 5.58L8.23341 10L3.81341 14.42C3.69408 14.5354 3.59892 14.6733 3.53348 14.8259C3.46804 14.9784 3.43364 15.1425 3.43227 15.3084C3.43091 15.4744 3.46261 15.639 3.52554 15.7926C3.58846 15.9462 3.68134 16.0857 3.79876 16.203C3.91618 16.3203 4.05579 16.4131 4.20944 16.4758C4.36309 16.5386 4.5277 16.5702 4.69368 16.5686C4.85965 16.5671 5.02366 16.5326 5.17613 16.467C5.32861 16.4014 5.46649 16.3061 5.58174 16.1867L10.0001 11.7683Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_157_242">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
        <h2>Contacts</h2>
        <p>Contact me through any of the following channels:</p>
        <div class="wrapper">
            <!-- <a href="tel:+46700135583"> -->
                <div class="wrapper_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 25.5C50 39.3071 38.8071 50.5 25 50.5C11.1929 50.5 0 39.3071 0 25.5C0 11.6929 11.1929 0.5 25 0.5C38.8071 0.5 50 11.6929 50 25.5ZM22.357 23.9325L24.4245 22.0775C25.5845 21.0375 25.9795 19.4125 25.4295 17.9725L24.592 15.785C23.882 13.93 21.817 12.935 19.882 13.515C16.637 14.485 14.0345 17.33 14.5845 20.885C15.0802 24.0447 16.1784 27.0797 17.8195 29.825C19.4569 32.5832 21.5893 35.0156 24.1095 37C26.977 39.2525 30.807 38.485 33.2945 36.215C34.0037 35.5754 34.4361 34.6848 34.5 33.7319C34.5639 32.779 34.2544 31.8386 33.637 31.11L32.112 29.295C31.1145 28.1075 29.477 27.6325 27.977 28.095L25.2995 28.92C24.6047 28.2293 23.9984 27.455 23.4945 26.615C23.0102 25.7691 22.6284 24.8686 22.357 23.9325Z" fill="black"/>
                    </svg>
                    <h4 style="text-decoration: none;" class="wrapper_card_phone">+46700135583</h4>
                </div>
            <!-- </a> -->
            <a href="https://github.com/AlexOhar" target="_blank">
                <button class="wrapper_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path d="M25 0.5C10.9375 0.5 0 11.4375 0 25.5C0 41.9062 14.8438 48.9375 17.1875 48.9375C18.75 48.9375 18.75 48.1562 18.75 47.375V43.4688C13.2812 45.0312 10.9375 41.9062 10.1562 39.5625C10.1562 39.5625 10.1562 38.7812 8.59375 37.2188C7.8125 36.4375 4.6875 34.875 7.8125 34.875C10.1562 34.875 11.7188 38 11.7188 38C14.0625 41.125 17.1875 40.3438 18.75 39.5625C18.75 38 20.3125 36.4375 20.3125 36.4375C14.0625 35.6562 9.375 33.3125 9.375 24.7188C9.375 21.5938 10.1562 19.25 11.7188 17.6875C11.7188 17.6875 10.1562 14.5625 11.7188 10.6562C11.7188 10.6562 15.625 10.6562 18.75 13.7812C21.0938 12.2188 28.9062 12.2188 31.25 13.7812C34.375 10.6562 38.2812 10.6562 38.2812 10.6562C39.8438 16.125 38.2812 17.6875 38.2812 17.6875C39.8438 19.25 40.625 21.5938 40.625 24.7188C40.625 33.3125 35.1562 35.6562 29.6875 36.4375C30.4688 37.2188 31.25 38.7812 31.25 41.125V47.375C31.25 48.1562 31.25 48.9375 32.8125 48.9375C35.1562 48.9375 50 41.9062 50 25.5C50 11.4375 39.0625 0.5 25 0.5Z" fill="black"/>
                    </svg>
                    <h4>GitHub</h4>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/oleksandr-ohar-70093b229" target="_blank">
                <button class="wrapper_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path d="M0 4.08125C0 2.10313 1.64375 0.5 3.67187 0.5H46.3281C48.3563 0.5 50 2.10313 50 4.08125V46.9188C50 48.8969 48.3563 50.5 46.3281 50.5H3.67187C1.64375 50.5 0 48.8969 0 46.9188V4.08125ZM15.4469 42.3563V19.7781H7.94375V42.3563H15.4469ZM11.6969 16.6938C14.3125 16.6938 15.9406 14.9625 15.9406 12.7937C15.8937 10.5781 14.3156 8.89375 11.7469 8.89375C9.17813 8.89375 7.5 10.5813 7.5 12.7937C7.5 14.9625 9.12813 16.6938 11.6469 16.6938H11.6969ZM27.0344 42.3563V29.7469C27.0344 29.0719 27.0844 28.3969 27.2844 27.9156C27.825 26.5687 29.0594 25.1719 31.1344 25.1719C33.85 25.1719 34.9344 27.2406 34.9344 30.2781V42.3563H42.4375V29.4062C42.4375 22.4688 38.7375 19.2437 33.8 19.2437C29.8188 19.2437 28.0344 21.4312 27.0344 22.9719V23.05H26.9844C27.001 23.0239 27.0176 22.9979 27.0344 22.9719V19.7781H19.5344C19.6281 21.8969 19.5344 42.3563 19.5344 42.3563H27.0344Z" fill="black"/>
                    </svg>
                    <h4>LinkedIn</h4>
                </button>
            </a>
            <a href="https://t.me/shin_shila" target="_blank">
                <button class="wrapper_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path d="M50 25.5C50 32.1304 47.3661 38.4893 42.6777 43.1777C37.9893 47.8661 31.6304 50.5 25 50.5C18.3696 50.5 12.0107 47.8661 7.32233 43.1777C2.63392 38.4893 0 32.1304 0 25.5C0 18.8696 2.63392 12.5107 7.32233 7.82233C12.0107 3.13392 18.3696 0.5 25 0.5C31.6304 0.5 37.9893 3.13392 42.6777 7.82233C47.3661 12.5107 50 18.8696 50 25.5ZM25.8969 18.9563C23.4656 19.9688 18.6031 22.0625 11.3156 25.2375C10.1344 25.7062 9.5125 26.1687 9.45625 26.6187C9.3625 27.3781 10.3156 27.6781 11.6125 28.0875L12.1594 28.2594C13.4344 28.675 15.1531 29.1594 16.0437 29.1781C16.8562 29.1969 17.7594 28.8656 18.7563 28.1781C25.5656 23.5813 29.0813 21.2594 29.3 21.2094C29.4563 21.1719 29.675 21.1281 29.8187 21.2594C29.9656 21.3875 29.95 21.6344 29.9344 21.7C29.8406 22.1031 26.1 25.5781 24.1656 27.3781C23.5625 27.9406 23.1344 28.3375 23.0469 28.4281C22.8542 28.625 22.6583 28.8188 22.4594 29.0094C21.2719 30.1531 20.3844 31.0094 22.5063 32.4094C23.5281 33.0844 24.3469 33.6375 25.1625 34.1937C26.05 34.8 26.9375 35.4031 28.0875 36.1594C28.3781 36.3469 28.6594 36.55 28.9313 36.7437C29.9656 37.4812 30.9 38.1437 32.0469 38.0375C32.7156 37.975 33.4062 37.35 33.7562 35.475C34.5844 31.0469 36.2125 21.4562 36.5875 17.5031C36.6104 17.1745 36.5968 16.8444 36.5469 16.5187C36.5175 16.256 36.3903 16.0139 36.1906 15.8406C35.9063 15.6443 35.5673 15.5427 35.2219 15.55C34.2844 15.5656 32.8375 16.0688 25.8969 18.9563Z" fill="black"/>
                    </svg>
                    <h4>Telegram</h4>
                </button>
            </a>  
        </div>`;
        modal.append(content);
        modal.open = true;
        const btnCloseModal = document.querySelector('#closeModal');

        btnCloseModal.addEventListener('click', () => {
            const cards = document.querySelectorAll('.allPortfolio_cards_card');
            if (cards) {
                cards.forEach(card => {
                    card.style.filter = 'none';
                })
            }
            content.innerHTML = ``;
            content.remove();
            modal.close();
        })
    });
};

export function fixLinksMenu() {
    const linksBtn = document.querySelector('.allPortfolio_links_btn'),
          linksMenu = document.querySelector('.allPortfolio_links'),
          linkLinkedIn = document.querySelector('.allPortfolio_links_big'),
          linkGitHub = document.querySelector('.allPortfolio_links_big_middle'),
          linkTelegram = document.querySelector('.allPortfolio_links_big_middle_small');

    linksBtn.addEventListener('click', () => {
        if (!linksMenu.classList.contains('allPortfolio_links_openLinks')) {
            linksMenu.classList.add('allPortfolio_links_openLinks');
            linksBtn.classList.add('hover-effect');
        } else {
            linksMenu.classList.remove('allPortfolio_links_openLinks');
            linksBtn.classList.remove('hover-effect');
        }
    });

    linkLinkedIn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://www.linkedin.com/in/oleksandr-ohar-70093b229', '_blank');
    });

    linkGitHub.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://github.com/AlexOhar', '_blank');
    });

    linkTelegram.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://t.me/shin_shila', '_blank');
    });
};

export function handleDocumentClick(e) {
    const linksBtn = document.querySelector('.allPortfolio_links_btn'),
          linksMenu = document.querySelector('.allPortfolio_links'),
          hamburgerMenu = document.querySelector('.hamburger'),
          mobileMenu = document.querySelector('.mobileHeader'),
          modal = document.querySelector('dialog');
    let linkContact = document.querySelector('#contacts');

    if (window.innerWidth < 992) {
        linkContact = document.querySelector('#contactsMobile');
    }


    if (!linksBtn.contains(e.target) && linksMenu.classList.contains('allPortfolio_links_openLinks')) {
        linksMenu.classList.remove('allPortfolio_links_openLinks');
        linksBtn.classList.remove('hover-effect');
    }

    if (mobileMenu && hamburgerMenu && !mobileMenu.contains(e.target) && !hamburgerMenu.contains(e.target) && window.innerWidth < 992) {
        mobileMenu.classList.remove('show_menu');
        mobileMenu.classList.add('hidden_menu');
        hamburgerMenu.classList.add('show_menu');
    }

    if (modal && linkContact && !modal.contains(e.target) && !linkContact.contains(e.target) && modal.open) {
        modal.classList.remove('open');
        document.querySelector('.modalContent').remove();
        modal.close();
    }
};

// --------------------------------------------------------move balls
export function moveBalls() {
    const ballOr = document.querySelector('#ballOr');
    const ballBl = document.querySelector('#ballBl');
    const delay = 50; 
    
    function moveBall(object, targetPosition) {
        let start;
    
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
    
            if (progress > delay) {
                let scrollPosition = window.pageYOffset;
                object.style.top = (scrollPosition + targetPosition) + 'px';
            } else {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    let screenHeight = window.innerHeight;
    let heightBallBl = ballBl.offsetHeight;
    window.addEventListener('scroll', function() {
        moveBall(ballOr, 60);
        const topBallBl = screenHeight - heightBallBl - 30;
        moveBall(ballBl, topBallBl);
    });
};



//-------------------------------------------------------- header
export function headerFunk() {
    let timeout;
    document.addEventListener('wheel', function(e) {
        document.querySelector('header').style.transform = 'translateY(-100%) translateX(-50%)';
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            document.querySelector('header').style.transform = 'translateY(0) translateX(-50%)';
        }, 400);
    });

    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');

        if (window.pageYOffset > 0) {
            header.style.background = 'rgba(29, 29, 29, 0.434)';
        } else {
            header.style.background = 'rgba(29, 29, 29, 0)';
        }    
    });

    
    function addFuctionToLinks(array) {
        array.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                let targetId = button.getAttribute('data-target');
                if (targetId) {
                    let targetBlock = document.querySelector(`.${targetId}`);
                    let targetPosition = targetBlock.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
            });
        });
    }

    if (window.innerWidth > 991) {
        let buttons = document.querySelectorAll('header a');
        addFuctionToLinks(buttons);
        
    }

    const hamburger = document.querySelector('.hamburger'),
          mobileHeader = document.querySelector('.mobileHeader'),
          mobileCross = mobileHeader.querySelector('.mobileHeader_cross'),
          pcHeader = document.querySelector('header');
    
    if (window.innerWidth <= 991) {
        hamburger.classList.remove('hidden_menu');
        pcHeader.classList.add('hidden_menu');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                mobileHeader.classList.remove('hidden_menu');
                mobileHeader.classList.add('show_menu');
                hamburger.classList.remove('show_menu');
                hamburger.classList.add('hidden_menu');
    
                let mobileButtons = document.querySelectorAll('.mobileHeader a');
                addFuctionToLinks(mobileButtons);
    
                mobileButtons.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileHeader.classList.remove('show_menu');
                        mobileHeader.classList.add('hidden_menu');
                        hamburger.classList.remove('hidden_menu');
                        hamburger.classList.add('show_menu');
                    })
                })
            });
        }

        if (mobileHeader) {
            mobileCross.addEventListener('click', () => {
                mobileHeader.classList.remove('show_menu');
                mobileHeader.classList.add('hidden_menu');
                hamburger.classList.remove('hidden_menu');
                hamburger.classList.add('show_menu');
            });
        }
    }
}