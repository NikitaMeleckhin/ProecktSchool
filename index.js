document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const header = document.querySelector('#header');

    const headerFixed = () => {
        let scrolTop = window.scrollY;
        let logoCenter = logo.offsetHeight * 4;//  "/2"

        if (scrolTop >= logoCenter) {
            header.classList.add('fixed')
            logo.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            logo.style.marginTop = `0px`;
        }
    };

    // Певый блок

    const bloc = document.querySelector(".bloc_important");

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
        }
      });
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    
    const myObserver = new IntersectionObserver(callback, options);
    myObserver.observe(bloc);

    // Второй блок

    const bloc_2 = document.querySelector(".bloc_bloc_about_the_course");

    const callback_2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation_2");
        }
      });
    };
    const options_2 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    
    const myObserver_2 = new IntersectionObserver(callback_2, options_2);
    myObserver_2.observe(bloc_2);


    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
    });
});