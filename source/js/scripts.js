// Mobile menu

var mobileMenu = document.querySelector(".main-nav"),
    mobileMenuBtnToggle = document.querySelector(".main-nav__toggle");

function menuInit() {
  if (mobileMenu.classList.contains("main-nav--no-script")) {
    mobileMenu.classList.remove("main-nav--no-script");
  }
};

menuInit();

mobileMenuBtnToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mobileMenu.classList.contains("main-nav--open")) {
    mobileMenu.classList.remove("main-nav--open");
    mobileMenuBtnToggle.classList.remove("main-nav__toggle--open");
  } else {
    mobileMenu.classList.add("main-nav--open");
    mobileMenuBtnToggle.classList.add("main-nav__toggle--open");
  }
});

// Popup

var linkOrder = document.querySelector(".offer__btn"),
    popupOrder = document.querySelector(".popup-add-to-cart"),
    popupInner = document.querySelector(".popup__wrapper");

linkOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOrder.classList.add("popup--show");
});

popupOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOrder.classList.remove("popup--show");
});

popupInner.addEventListener("click", function (evt) {
  evt.stopPropagation();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popupOrder.classList.contains("popup--show")) {
      popupOrder.classList.remove("popup--show");
    }
  }
});


// Map

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938835634855174,30.323183246032713],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icon-map-pin.svg',
            // Размеры метки.
            iconImageSize: [66, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-33, -70]
        });

    myMap.geoObjects
        .add(myPlacemark);
});
