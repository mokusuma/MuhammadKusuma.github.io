// scroll animation
function showAnimation(showAnimate, observer) {
    showAnimate.forEach(show => {
        if (show.isIntersecting) {
            show.target.classList.add('animate');
        } else {
            show.target.classList.remove('animate');
        }
    });
}

const observer = new IntersectionObserver(showAnimation, {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5, 
});

document.querySelectorAll('.show').forEach(element => {
    observer.observe(element);
});

// mengubah scroll
const scroller = document.querySelector('.healtcare');

    window.addEventListener('wheel', e => {
    scroller.scrollLeft += e.deltaY;
    });
