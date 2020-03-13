// up button

(function() {
    'use strict';
  
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    let goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

// menu

(function(){
    window.addEventListener('click',(element)=>{
    let a = document.querySelectorAll('.singolo .menu a'),
        li=document.querySelectorAll('.singolo li')
        el = element.target;
      a.forEach((e,i) => {
        if(el == e){
            li.forEach((element) => {
                if( element.classList.contains('activeMenu')){
                    element.classList.remove('activeMenu')
                }
            });

            li[i].classList.add('activeMenu');

        }
      });
  })
})()

// slider


    let left = document.querySelector('.left img'),
      right = document.querySelector('.right img'),
      slide1 = document.querySelector('.slide1'),
      slide2= document.querySelector('.slide2'),
      slider = document.querySelector('.singolo main'),
      blackHor = document.querySelector('.blackHor'),
      blackVert = document.querySelector('.blackVert'),
      i = 0;


  window.addEventListener('click', (e) => {

      function removeClass(a,b){
        a.classList.remove('moveToCenter','moveToLeft','moveToRight','moveL');
        b.classList.remove('moveToCenter','moveToLeft','moveToRight','moveL');
      }

      if (e.target == left || e.target == right){
        if (slider.classList.contains('bgSlide')){
          slider.classList.remove('bgSlide');
        } else if (!slider.classList.contains('bgSlide')){
          slider.classList.add('bgSlide');
        }
      }


      if (e.target == left){
        if (i == 0){
          removeClass(slide1,slide2);
          slide1.classList.add('moveToLeft');
          slide2.classList.add('moveToLeft');
          i = 1;

        }else if (i == 1){
          removeClass(slide1,slide2);
          slide1.classList.add('moveToCenter');
          slide2.classList.add('moveL');
          i=0;

        }
      }

      if (e.target == right){
        if (i == 0){
          removeClass(slide1,slide2);
          slide1.classList.add('moveToRight');
          slide2.classList.add('moveToLeft');
          i=1;

        }else if (i == 1){
          removeClass(slide1,slide2);
          slide1.classList.add('moveToCenter');
          slide2.classList.add('moveToCenter');
          i = 0;
        }
    }

    if (e.target == blackHor ){
      if(blackHor.classList.contains('blackOpa') ){
        blackHor.classList.remove('blackOpa');
      }else if(!blackHor.classList.contains('blackOpa') ){
        blackHor.classList.add('blackOpa');
      }
    }

    if (e.target == blackVert ){
      if(blackVert.classList.contains('blackOpa') ){
        blackVert.classList.remove('blackOpa');
      }else if(!blackVert.classList.contains('blackOpa') ){
        blackVert.classList.add('blackOpa');
      }
    }


  });

// Tabs

let tabs = document.querySelectorAll('.nav li'),
    img = document.querySelectorAll('.content .img img'),
    imgDiv= document.querySelectorAll('.content .img'),
    content = document.querySelector('.content');

window.addEventListener('click', e => {
  tabs.forEach((element,i)=>{
    if(e.target == element){
      tabs.forEach((element) => {
        if( element.classList.contains('navActive')){
            element.classList.remove('navActive')
        }
    });

    tabs[i].classList.add('navActive');
    if (i==0){
      content.classList.remove('flexStart');
      imgDiv.forEach(element => {
        element.classList.remove('imgNone');
      });
    } else if (i==1){
      imgDiv.forEach(element => {
        element.classList.add('imgNone');
        if(element.classList.contains('web')){
          element.classList.remove('imgNone');
          content.classList.add('flexStart');
        }
      });
    }else if (i==2){
      imgDiv.forEach(element => {
        element.classList.add('imgNone');
        if(element.classList.contains('design')){
          element.classList.remove('imgNone');
          content.classList.add('flexStart');
        }
      });
    }else if (i==3){
      imgDiv.forEach(element => {
        element.classList.add('imgNone');
        if(element.classList.contains('art')){
          element.classList.remove('imgNone');
          content.classList.add('flexStart');
        }
      });
    }

    }
  })

  img.forEach((element,i)=>{
    if(e.target == element){
      img.forEach((element) => {
        if( element.classList.contains('imgActive')){
            element.classList.remove('imgActive')
        }
    });

    img[i].classList.add('imgActive');
    }
  })

})

// modal

let submit = document.querySelector('button[type="submit"]'),
    modal = document.querySelector('.modal'),
    ok = document.querySelector('.ok'),
    subject = document.querySelector('input[name="subject"]'),
    description = document.querySelector('textarea[name="description"]'),
    modalSubject = document.querySelector('.subject'),
    modalDescription = document.querySelector('.description');

   console.log(subject,modalSubject)
window.addEventListener('click', e =>{
  if (e.target == submit){
    e.preventDefault();
    modal.style.visibility = 'visible';
    modal.style.opacity = '100';
  }

  if (e.target == ok){
    e.preventDefault();
    modal.style.opacity = '0';
    setTimeout(()=>{modal.style.visibility = 'hidden'},1000)
  }
});

window.addEventListener('change', e =>{
  if (e.target == subject){
    modalSubject.innerHTML = subject.value
  }

  if (e.target == description){
    modalDescription.innerHTML = description.value
  }

});

if(!subject.value){
  modalSubject.innerHTML = 'Без темы'
}

if(!description.value ){
  modalDescription.innerHTML = 'Без описания'
}
  
    
  