document.addEventListener('DOMContentLoaded', function (){

  let burger_btn_menu = document.querySelector('.burger-btn');
  let burger_menu = document.querySelector('.header__nav');
  let close_menu = document.querySelector('.close-menu-btn');
  let menu_link = document.querySelectorAll('.header__link');

  menu_link.forEach(element => element.addEventListener('click', function() {
    burger_menu.classList.remove('header__nav--active');
    document.body.classList.remove('burger-active');
  }))

  burger_btn_menu.addEventListener('click', function () {
    burger_menu.classList.add('header__nav--active');
    document.body.classList.add('burger-active');
  })

  close_menu.addEventListener('click', function () {
    burger_menu.classList.remove('header__nav--active');
    document.body.classList.remove('burger-active');
  })


  let list = document.querySelectorAll('.drop-down-list');
  let drop_list = document.querySelectorAll('.drop-down-block');

  list.forEach((el, index) => {
    el.addEventListener('click', function () {
      drop_list.forEach((elList, indexList) => {
        if (index == indexList) {
            elList.classList.toggle('drop-down-block--active');
          } else elList.classList.remove('drop-down-block--active');
        })
      })
    })

  //
  const swiper_hero = new Swiper('.hero-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    interval: 50000
  });

  let hero_height = document.querySelectorAll('.hero-slide');
  let hero_content = document.querySelector('.hero-content');

  let timer = setInterval(function(){
    hero_height.forEach(el => {
      el.style.height = JSON.stringify(hero_content.offsetHeight) + 'px';
    });
  }, 1)

  //
  const swiper_gallery = new Swiper('.gallery-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    autoScrollOffset: 3,
    autoScrollOffset: 1,

    pagination: {
      el: '.gallery-swipper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev'
    },

    breakpoints: {
      321: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },

    }
  })

  const element = document.querySelector('.gallery-select');

  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
  })

  $('.catalog-accordion').accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true
  })

  document.querySelectorAll('.doer-item').forEach(function(tabsItem){
    tabsItem.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.doer-item').forEach(function(item) {
        item.classList.remove('doer-item--active')
      });

      e.currentTarget.classList.add('doer-item--active');

      document.querySelectorAll('.catalog-doer').forEach(function(tabsItem){
        tabsItem.classList.remove('catalog-doer--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-doer--active');
    });
  });

  //
  const swiper_event = new Swiper('.event-swiper', {
    direction: 'horizontal',
    autoHeight: false,
    slidesPerView: 1,
    spaceBetween: 0,
    autoScrollOffset: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.swiper-button-event',
    },

    pagination: {
      el: '.swiper-pagination-event',
    },

    breakpoints: {

      641: {
        slidesPerView: 2,
        spaceBetween: 34,
        autoScrollOffset: 1,
        slidesPerGroup: 2,
      },

      868: {
        slidesPerView: 3,
        spaceBetween: 27,
        autoScrollOffset: 3,
        slidesPerGroup: 3,
        },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

  })

  //
  const swiper_project = new Swiper('.project-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoScrollOffset: 1,

    navigation: {
      nextEl: '.project-swiper-button-next',
      prevEl: '.project-swiper-button-prev'
    },

    breakpoints: {
      120: {
        slidesPerView: 1,
        spaceBetween: 8,
        autoScrollOffset: 1,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 33,
        autoScrollOffset: 1,
        slidesPerGroup: 2,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        loop: true,
      }
    }
  })

  const media320 = window.matchMedia('(max-width: 640px)');
  const resetMedia320 = window.matchMedia('(min-width: 640px');

  function myMediaReq(e) {
    if (e.matches) {
      let contacts_submit = document.querySelector('.contacts-submit');
      contacts_submit.setAttribute('value', 'Заказать');
    }
  }

  function resetmyMediaReq(e) {
    if (e.matches) {
      let contacts_submit = document.querySelector('.contacts-submit');
      contacts_submit.setAttribute('value', 'Заказать обратный звонок');
    }
  }

  media320.addListener(myMediaReq);
  myMediaReq(media320);

  resetMedia320.addListener(resetmyMediaReq);
  resetmyMediaReq(resetMedia320);

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.60],
      zoom: 15,
    });

    var myCircle = new ymaps.Circle([[55.76, 37.60],20], {}, {
      fillColor: "#9D5CD0",
      strokeColor: '#fff',
      stroke: '#fff'
    });

    myMap.geoObjects.add(myCircle);
  }

  //
  let selector = document.querySelector("input[type='tel']");
  let inp = new Inputmask("+375 (99) 99-999-99");

  inp.mask(selector);
  const validation = new JustValidate('.contacts__form');

  validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать не менее 3 символов',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Имя должно содержать не ,более 20 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Введите имя'
    },
  ])

  let search_btn = document.querySelector('.header-search-btn');
  let search_block = document.querySelector('.search-block');
  let close_search = document.querySelector('.search-block-closed');

  search_btn.addEventListener('click', function () {
    search_block.classList.add('search-block--active');
  })

  close_search.addEventListener('click', function () {
    search_block.classList.remove('search-block--active');
  })

  let doer_active = document.querySelector('.doer-item-one');

  doer_active.focus();

})




