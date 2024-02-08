document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      // Options
      type: 'slide',
      rewind: true,
      arrows: false,
      pagination: false
      // Add more options as needed
  }).mount();
});

const imgContainer = document.getElementById('img-container')
const mobileNav = document.getElementById('nav-menu-mobile')
const crossIcon = document.querySelector('.cross')

imgContainer.addEventListener('click', showMobileMenu)
crossIcon.addEventListener('click', hideMobileMenu)

function showMobileMenu() {
  mobileNav.style.display = 'flex'

}

function hideMobileMenu() {
  mobileNav.style.display = 'none'
}



// GSAP

/*

gsap.from('#page1 nav', {
  y: -50,
  duration: .8,
  opacity: 0,
  ease: 'slow'
})

gsap.from('#page1 #hero-section', {
  y: 150,
  duration: 1,
  opacity: 0,
  ease: 'slow'
})

gsap.from('#video-section', {
  y: 150,
  delay: .4,
  duration: 1,
  opacity: 0,
  ease: 'slow'
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: 'body',
    start: 'top 100%',
    end: 'bottom 50%',
  }
})


tl.from('#page2 .heading', {
  y: 100,
  opacity: 0,
  duration: .8,
})


gsap.from('#page2 .sub-heading', {
  y: 150,
  opacity: 0,
  duration: .8,

  scrollTrigger: {
    trigger: '#page2 .sub-heading',
    start: 'top 80%',
    end: 'bottom 50%'
  }
})

gsap.from('#page2 #cards-container', {
  y: 200,
  opacity: 0,
  duration: .8,

  scrollTrigger: {
    trigger: '#page2 #cards-container',
    start: 'top 80%',
    end: 'bottom 50%'
  }
})

gsap.from('#page2 .bottom-heading', {
  y: 200,
  opacity: 0,
  duration: .8,

  scrollTrigger: {
    trigger: '#page2 .bottom-heading',
    start: 'top 80%',
    end: 'bottom 50%'
  }
})
gsap.from('#page2 .last-heading', {
  y: 200,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page2 .last-heading',
    start: 'top 80%',
    end: 'bottom 50%'
  }
})


gsap.from('#page3 .heading', {
  y: 150,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page3 .heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})
gsap.from('#page3 .sub-heading', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .2,

  scrollTrigger: {
    trigger: '#page3 .sub-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page3 #cards-holder .card1', {
  y: 100,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page3 #cards-holder .card1',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page3 #cards-holder .card2', {
  y: 150,
  opacity: 0,
  duration: .7,
  delay: .2,
  scrollTrigger: {
    trigger: '#page3 #cards-holder .card2',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page3 #cards-holder .card3', {
  y: 250,
  opacity: 0,
  duration: .7,
  delay: .3,

  scrollTrigger: {
    trigger: '#page3 #cards-holder .card3',
    start: 'top bottom',
    end: 'bottom center'
  }
})



gsap.from('#page4 .heading', {
  y: 150,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page4 .heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})
gsap.from('#page4 .sub-heading', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .2,

  scrollTrigger: {
    trigger: '#page4 .sub-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page4 .second-last-heading', {
  y: 200,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page4 .second-last-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})
gsap.from('#page4 .last-heading', {
  y: 200,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page4 .last-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card1 .heading', {
  y: 100,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card1 .heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card1 .sub-heading', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card1 .sub-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card1 .text', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card1 .text',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card1 #frame-holder', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card1 #frame-holder',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card1 .image-holder', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card1 .image-holder',
    start: 'top bottom',
    end: 'bottom center'
  }
})



gsap.from('#page5 #cards-holder .card2 .heading', {
  y: 100,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card2 .heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card2 .sub-heading', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card2 .sub-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card2 .text', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card2 .text',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card2 #frame-holder', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card2 #frame-holder',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page5 #cards-holder .card2 .image-holder', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page5 #cards-holder .card2 .image-holder',
    start: 'top bottom',
    end: 'bottom center'
  }
})


gsap.from('#page6 .heading', {
  y: 100,
  opacity: 0,
  duration: .7,

  scrollTrigger: {
    trigger: '#page6 .heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page6 .sub-heading', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .1,

  scrollTrigger: {
    trigger: '#page6 .sub-heading',
    start: 'top bottom',
    end: 'bottom center'
  }
})
gsap.from('#carousel-holder', {
  y: 100,
  opacity: 0,
  duration: .7,
  delay: .2,

  scrollTrigger: {
    trigger: '#carousel-holder',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page7 div', {
  y: 30,
  opacity: 0,
  duration: .7,
  delay: .3,

  scrollTrigger: {
    trigger: '#page7 div',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page7 div h2', {
  y: 50,
  opacity: 0,
  duration: .7,
  delay: .2,

  scrollTrigger: {
    trigger: '#page7 div h2',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('#page7 div button', {
  y: 50,
  opacity: 0,
  duration: .7,
  delay: .2,

  scrollTrigger: {
    trigger: '#page7 div button',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('footer #footer-container .left-footer', {
  x: -80,
  opacity: 0,
  duration: .8,
  delay: .3,

  scrollTrigger: {
    trigger: 'footer #footer-container .left-footer',
    start: 'top bottom',
    end: 'bottom center'
  }
})

gsap.from('footer #footer-container .right-footer', {
  x: 80,
  opacity: 0,
  duration: .8,
  delay: .3,

  scrollTrigger: {
    trigger: 'footer #footer-container .right-footer',
    start: 'top bottom',
    end: 'bottom center'
  }
})
*/