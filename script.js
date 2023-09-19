// scroll animation
let preventScroll = true

function showAnimation(showAnimate, observer) {
    showAnimate.forEach(show => {
        if (show.isIntersecting) {
            show.target.classList.add('animate');
        } else {
            show.target.classList.remove('animate');
        }
    });

    const healthcare1 = document.querySelector('.healthcare1');
    const healthcare2 = document.querySelector('.healthcare2');

    if(healthcare1.classList.contains('animate')) {
        document.querySelector('.penutup').style.display = "none";
        document.querySelector('.education').style.display = "none";
        document.querySelector('footer').style.display = "none";
        document.querySelector('header').style.display = "flex";
        document.querySelector('.business').style.display = "block";
        document.querySelector('.pengenalan').style.display = "flex";
        document.querySelector('.pengertian').style.display = "flex";
    }  
    
    if(healthcare2.classList.contains('animate')) {
        document.querySelector('header').style.display = "none";
        document.querySelector('.business').style.display = "none";
        document.querySelector('.pengenalan').style.display = "none";
        document.querySelector('.pengertian').style.display = "none";
        document.querySelector('.penutup').style.display = "block";
        document.querySelector('.education').style.display = "block";
        document.querySelector('footer').style.display = "block";
    }
    if (healthcare1.classList.contains('animate') || healthcare2.classList.contains('animate')) {
        preventScroll = false;
      } else {
        preventScroll = true;
      }

    addEventListener('wheel', event => {
        const edu = document.querySelector('.edu-scroll');
        const edu1 = document.querySelector('.edu-1');
        const edu2 = document.querySelector('.edu-2');
    
        if (viewport(edu)) {
            edu.style.overflow = 'auto';
        } else {
            edu.style.overflow = 'hidden';
        }
    
        if (event.deltaY < 0 && edu1.classList.contains('animate')) {
          edu.style.overflow = 'hidden';
        } else if(event.deltaY > 0 && edu2.classList.contains('animate')) {
          edu.style.overflow = 'hidden';
        }
    });
    
}

const observer = new IntersectionObserver(showAnimation, {
    root: null, 
    rootMargin: '0px',
    threshold: 0.3, 
});

document.querySelectorAll('.show').forEach(element => {
    observer.observe(element);
});

// mengubah scroll
const scroller = document.querySelector('.healtcare');

scroller.addEventListener('wheel', scroll => {
    if (preventScroll){
        scroll.preventDefault();
    }
  scroller.scrollLeft += scroll.deltaY;
});

// scroll education
function viewport(a) {
    const VP = a.getBoundingClientRect();
    return VP.top <= 0;
}

function overflowViewport() {
    const edu = document.querySelector('.edu-scroll');

    if (viewport(edu)) {
        edu.style.overflow = 'auto';
    } else {
        edu.style.overflow = 'hidden';
    }

}

addEventListener('scroll', overflowViewport);
addEventListener('load', overflowViewport);

