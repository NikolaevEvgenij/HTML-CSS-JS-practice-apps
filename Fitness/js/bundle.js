/******/ (() => {
   // webpackBootstrap
   /******/ var __webpack_modules__ = {
      /***/ "./js/modules/calc.js":
         /*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */
               }
            );
            /*jshint esversion: 8 */
            function calc() {
               const result = document.querySelector(
                  ".calculating__result span"
               );

               let sex, height, weight, age, ratio;

               if (localStorage.getItem("sex")) {
                  sex = localStorage.getItem("sex");
               } else {
                  sex = "female";
                  localStorage.setItem("sex", "female");
               }

               if (localStorage.getItem("ratio")) {
                  ratio = localStorage.getItem("ratio");
               } else {
                  ratio = "1.375";
                  localStorage.setItem("ratio", "1.375");
               }

               function initLocalProps(selector, localData) {
                  const input = document.querySelector(selector);

                  if (localStorage.getItem(localData)) {
                     input.value = localStorage.getItem(localData);
                     localData = localStorage.getItem(localData);
                  }
                  console.log(input);
               }

               initLocalProps("#height", "height");
               initLocalProps("#weight", "weight");
               initLocalProps("#age", "age");

               console.log(height);

               function initLocalSettings(selector, activeClass) {
                  const elements =
                     document.querySelectorAll(selector);

                  elements.forEach((elem) => {
                     elem.classList.remove(activeClass);
                     if (
                        elem.getAttribute("id") ===
                        localStorage.getItem("sex")
                     ) {
                        elem.classList.add(activeClass);
                     }
                     if (
                        elem.getAttribute("data-ratio") ===
                        localStorage.getItem("ratio")
                     ) {
                        elem.classList.add(activeClass);
                     }
                  });
               }

               initLocalSettings(
                  "#gender div",
                  "calculating__choose-item_active"
               );
               initLocalSettings(
                  ".calculating__choose_big div",
                  "calculating__choose-item_active"
               );

               function calcTotal() {
                  if (!sex || !height || !weight || !age || !ratio) {
                     result.textContent = "Введите данные";
                     return;
                  }

                  if (sex === "female") {
                     result.textContent = Math.round(
                        (447.6 +
                           9.2 * weight +
                           3.1 * height -
                           4.3 * age) *
                           ratio
                     );
                  } else {
                     result.textContent = Math.round(
                        (88.36 +
                           13.4 * weight +
                           4.8 * height -
                           5.7 * age) *
                           ratio
                     );
                  }
               }

               calcTotal();

               function getStaticInformation(selector, activeClass) {
                  const elements =
                     document.querySelectorAll(selector);

                  elements.forEach((elem) => {
                     elem.addEventListener("click", (e) => {
                        if (e.target.getAttribute("data-ratio")) {
                           ratio =
                              +e.target.getAttribute("data-ratio");
                           localStorage.setItem(
                              "ratio",
                              +e.target.getAttribute("data-ratio")
                           );
                        } else {
                           sex = e.target.getAttribute("id");
                           localStorage.setItem(
                              "sex",
                              e.target.getAttribute("id")
                           );
                        }

                        console.log(ratio, sex);

                        elements.forEach((elem) => {
                           elem.classList.remove(activeClass);
                        });

                        e.target.classList.add(activeClass);

                        calcTotal();
                     });
                  });

                  // document.querySelector(parentSelector).addEventListener('click', (e) => {
                  //    if (e.target.getAttribute('data-ratio')) {
                  //       ratio = +e.target.getAttribute('data-ratio');
                  //    } else {
                  //       sex = e.target.getAttribute('id');
                  //    }

                  //    console.log(ratio, sex);

                  //    elements.forEach(elem => {
                  //       elem.classList.remove(activeClass);
                  //    });

                  //    e.target.classList.add(activeClass);

                  //    calcTotal();

                  // });
               }

               getStaticInformation(
                  "#gender div",
                  "calculating__choose-item_active"
               );
               getStaticInformation(
                  ".calculating__choose_big div",
                  "calculating__choose-item_active"
               );

               function getDynamicInformation(selector) {
                  const input = document.querySelector(selector);

                  input.addEventListener("input", () => {
                     if (input.value.match(/\D/g)) {
                        input.style.border = "1px solid red";
                     } else {
                        input.style.border = "none";
                     }

                     switch (input.getAttribute("id")) {
                        case "height":
                           height = +input.value;
                           localStorage.setItem(
                              "height",
                              +input.value
                           );
                           break;
                        case "weight":
                           weight = +input.value;
                           localStorage.setItem(
                              "weight",
                              +input.value
                           );
                           break;
                        case "age":
                           age = +input.value;
                           localStorage.setItem("age", +input.value);
                           break;
                     }

                     calcTotal();
                  });
               }

               getDynamicInformation("#height");
               getDynamicInformation("#weight");
               getDynamicInformation("#age");
               calcTotal();
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               calc;

            /***/
         },

      /***/ "./js/modules/cards.js":
         /*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */
               }
            );
            /*jshint esversion: 8 */
            function cards() {
               //Card patterns. Classes

               class MenuCard {
                  constructor(
                     src,
                     alt,
                     title,
                     text,
                     cost,
                     parentSelector,
                     ...classes
                  ) {
                     this.src = src;
                     this.alt = alt;
                     this.title = title;
                     this.text = text;
                     this.cost = cost;
                     this.classes = classes;
                     this.parent =
                        document.querySelector(parentSelector);
                     this.transfer = 27;
                     this.changeToUAH();
                  }

                  changeToUAH() {
                     this.cost = this.cost * this.transfer;
                  }

                  render() {
                     const element = document.createElement("div");

                     if (this.classes.length === 0) {
                        // делаем так, что если в ...classes ничего нет(то есть пустой массив)
                        this.element = "menu__item"; // добавляется дефолтный класс menu__item
                        element.classList.add(this.element);
                     } else {
                        this.classes.forEach((className) =>
                           element.classList.add(className)
                        );
                     }

                     element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
            </div>
         `;
                     this.parent.append(element);
                  }
               }

               const getResourse = async (url) => {
                  const res = await fetch(url);

                  if (!res.ok) {
                     throw new Error(
                        `Could not fetch ${url}, status: ${res.status}`
                     ); // прокидываем ошибку сами
                  }

                  return await res.json();
               };

               // getResourse('http://localhost:3000/menu')              //// 2 способ
               //    .then(data => {
               //       data.forEach(({ img, altimg, title, descr, price }) => {
               //          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
               //       });
               //    });

               axios
                  .get("http://localhost:3000/menu") // 4 cпособ(через библиотеку axios)
                  .then((data) => {
                     data.data.forEach(
                        ({ img, altimg, title, descr, price }) => {
                           new MenuCard(
                              img,
                              altimg,
                              title,
                              descr,
                              price,
                              ".menu .container"
                           ).render();
                        }
                     );
                  });

               // getResourse('http://localhost:3000/menu')             // 3 способ
               //    .then(data => createCard(data));

               // function createCard(data) {
               //    data.forEach(({ img, altimg, title, descr, price }) => {
               //       const element = document.createElement('div');

               //       element.classList.add('menu__item');

               //       element.innerHTML = `
               //          <img src=${img} alt=${altimg}>
               //          <h3 class="menu__item-subtitle">${title}</h3>
               //          <div class="menu__item-descr">${descr}</div>
               //          <div class="menu__item-divider"></div>
               //          <div class="menu__item-price">
               //             <div class="menu__item-cost">Цена:</div>
               //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
               //          </div>
               //       `;

               //       document.querySelector('.menu .container').append(element);
               //    });
               // }

               // new MenuCard(              //// 1 способ
               //    "img/tabs/vegy.jpg",
               //    "vegy",
               //    'Меню "Фитнес"',
               //    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
               //    9,
               //    ".menu .container"
               // ).render();

               // new MenuCard(
               //    "img/tabs/post.jpg",
               //    "post",
               //    'Меню "Постное"',
               //    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
               //    14,
               //    ".menu .container",
               //    'menu__item'
               // ).render();

               // new MenuCard(
               //    "img/tabs/elite.jpg",
               //    "elite",
               //    'Меню “Премиум”',
               //    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
               //    21,
               //    ".menu .container",
               //    'menu__item'
               // ).render();
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               cards;

            /***/
         },

      /***/ "./js/modules/forms.js":
         /*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */
               }
            );
            /* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ =
               __webpack_require__(
                  /*! ./modal */ "./js/modules/modal.js"
               );
            /*jshint esversion: 8 */

            function forms() {
               //forms

               const forms = document.querySelectorAll("form");

               const message = {
                  loading: "img/form/spinner.svg",
                  success: "Спасибо! Скоро мы с вами свяжемся",
                  failure: "Что-то не так...",
               };

               forms.forEach((item) => {
                  bindPostData(item);
               });

               const postData = async (url, data) => {
                  // говорим, что это ассинхронный запрос
                  const res = await fetch(url, {
                     // говорим, что надо подождать выполнения, иначе дальше в res будет undefined
                     method: "POST",
                     headers: {
                        "Content-type": "application/json",
                     },
                     body: data,
                  });

                  return await res.json(); // ждём выполнения, иначе заретёрнит необработанный res
               };

               function bindPostData(form) {
                  form.addEventListener("submit", (e) => {
                     e.preventDefault();

                     const statusMessage =
                        document.createElement("img");
                     statusMessage.src = message.loading;
                     statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;
                     form.append(statusMessage);
                     form.insertAdjacentElement(
                        "afterend",
                        statusMessage
                     );

                     // const request = new XMLHttpRequest();
                     // request.open('POST', 'server.php');
                     // request.setRequestHeader('Content-type', 'application/json');
                     // request.send(json);

                     // Если исползуем XMLHttpRequest + formData, то не нужен setRequestHeader, он назначается сам
                     const formData = new FormData(form); // в вёрске у инпутов обязательно должен быть name = ''(FormData парсит форму)

                     const json = JSON.stringify(
                        Object.fromEntries(formData.entries())
                     );
                     // превращаем formData в матрицу(массив из массивов, для удобства), потом в объект, потом в JSON.

                     //        object = {};
                     // formData.forEach((value, key) => {
                     //    object[key] = value;
                     // });

                     postData("http://localhost:3000/requests", json)
                        .then((data) => {
                           console.log(data);
                           showThanksModal(message.success);
                           statusMessage.remove();
                        })
                        .catch(() => {
                           showThanksModal(message.failure);
                        })
                        .finally(() => {
                           form.reset();
                        });

                     // request.addEventListener('load', () => {
                     //    if (request.status == 200) {
                     //       console.log(request.response);
                     //       showThanksModal(message.success);
                     //       form.reset();
                     //       statusMessage.remove();
                     //    } else {
                     //
                     //    }
                     // });
                  });
               }

               function showThanksModal(message) {
                  const prevModalDialog =
                     document.querySelector(".modal__dialog");

                  prevModalDialog.classList.add("hide");
                  (0, _modal__WEBPACK_IMPORTED_MODULE_0__.modalOpen)(
                     modalWin
                  );

                  const thanksModal = document.createElement("div");
                  thanksModal.classList.add("modal__dialog");
                  thanksModal.innerHTML = `
         <div class = "modal__content">
            <div class = "modal__close">×</div>
            <div class = "modal__title">${message}</div>
         </div>
      `;

                  modalWin.append(thanksModal);
                  setTimeout(() => {
                     thanksModal.remove();
                     prevModalDialog.classList.add("show");
                     prevModalDialog.classList.remove("hide");
                     (0,
                     _modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)(
                        modalWin
                     );
                  }, 4000);
               }

               fetch("http://localhost:3000/menu")
                  .then((data) => data.json())
                  .then((res) => console.log(res));
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               forms;

            /***/
         },

      /***/ "./js/modules/modal.js":
         /*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */ modalClose: () =>
                     /* binding */ modalClose,
                  /* harmony export */ modalOpen: () =>
                     /* binding */ modalOpen,
                  /* harmony export */
               }
            );
            /*jshint esversion: 8 */

            function modalOpen(modal) {
               modal.classList.add("show");
               modal.classList.remove("hide");
               document.body.style.overflow = "hidden";
               clearInterval(modalTimerId);
            }

            function modalClose(modal) {
               // if (modalShow.display == 'block') {
               //    modalWin.style.display = 'none';
               //    document.body.style.overflow = '';
               // }
               modal.classList.add("hide");
               modal.classList.remove("show");
               document.body.style.overflow = "";
            }

            function modal(triggerSelector, modalSelector) {
               const modalTrigger =
                     document.querySelectorAll(triggerSelector),
                  modalWin = document.querySelector(modalSelector);

               // const modalShow = window.getComputedStyle(modal);
               modalTrigger.forEach((item) => {
                  item.addEventListener("click", () => {
                     // if (modalShow.display == 'none') {
                     //    modalWin.style.display = 'block';
                     //    document.body.style.overflow = 'hidden';
                     // }
                     modalOpen(modalWin);
                  });
               });

               modalWin.addEventListener("click", (e) => {
                  if (
                     e.target === modalWin ||
                     e.target.getAttribute("data-close") == ""
                  ) {
                     modalClose(modalWin);
                  }
               });

               document.addEventListener("keydown", (e) => {
                  if (
                     e.code === "Escape" &&
                     modalWin.classList.contains("show")
                  ) {
                     modalClose(modalWin);
                  }
               });

               const modalTimerId = setTimeout(() => {
                  modalOpen(modalWin);
               }, 10000);

               function openModalByScroll() {
                  if (
                     window.pageYOffset +
                        document.documentElement.clientHeight >=
                     document.documentElement.scrollHeight
                  ) {
                     modalOpen(modalWin);
                     window.removeEventListener(
                        "scroll",
                        openModalByScroll
                     );
                  }
               }

               window.addEventListener("scroll", openModalByScroll);
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               modal;

            /***/
         },

      /***/ "./js/modules/slider.js":
         /*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */
               }
            );
            /*jshint esversion: 8 */
            function slider() {
               const slides =
                     document.querySelectorAll(".offer__slide"),
                  slider = document.querySelector(".offer__slider"),
                  prev = document.querySelector(
                     ".offer__slider-prev"
                  ),
                  next = document.querySelector(
                     ".offer__slider-next"
                  ),
                  total = document.querySelector("#total"),
                  current = document.querySelector("#current"),
                  slidesWrapper = document.querySelector(
                     ".offer__slider-wrapper"
                  ),
                  slidesField = document.querySelector(
                     ".offer__slider-inner"
                  ),
                  width =
                     window.getComputedStyle(slidesWrapper).width;

               let slideIndex = 1;
               let offset = 0;

               if (slides.length < 10) {
                  total.textContent = `0${slides.length}`;
                  current.textContent = `0${slideIndex}`;
               } else {
                  total.textContent = slides.length;
                  current.textContent = slideIndex;
               }

               slidesField.style.width = 100 * slides.length + "%";
               slidesField.style.display = "flex";
               slidesField.style.transition = "0.5s all";

               slidesWrapper.style.overflow = "hidden";

               slides.forEach((slide) => {
                  slide.style.width = width;
               });

               slider.style.position = "relative";

               const indicators = document.createElement("ol"),
                  dots = [];

               indicators.classList.add("carousel-indicators");
               slider.append(indicators);

               for (let i = 0; i < slides.length; i++) {
                  const dot = document.createElement("li");
                  dot.setAttribute("data-slide-to", i + 1);
                  dot.classList.add("dot");

                  if (i == 0) {
                     dot.style.opacity = 1;
                  }
                  indicators.append(dot);

                  dots.push(dot);
               }

               function currentSlide() {
                  if (slides.length < 10) {
                     current.textContent = `0${slideIndex}`;
                  } else {
                     current.textContent = slideIndex;
                  }
               }

               function dotLighting() {
                  dots.forEach((dot) => (dot.style.opacity = 0.5));
                  dots[slideIndex - 1].style.opacity = 1;
               }

               function deleteNotDigits(str) {
                  return +str.replace(/[^\d.]/g, "");
               }

               next.addEventListener("click", () => {
                  if (
                     offset ==
                     deleteNotDigits(width) * (slides.length - 1)
                  ) {
                     offset = 0;
                  } else {
                     offset += deleteNotDigits(width);
                  }

                  slidesField.style.transform = `translateX(-${offset}px)`;

                  if (slideIndex == slides.length) {
                     slideIndex = 1;
                  } else {
                     slideIndex++;
                  }

                  currentSlide();

                  dotLighting();
               });

               prev.addEventListener("click", () => {
                  if (offset == 0) {
                     offset =
                        deleteNotDigits(width) * (slides.length - 1);
                  } else {
                     offset -= deleteNotDigits(width);
                  }

                  slidesField.style.transform = `translateX(-${offset}px)`;

                  if (slideIndex == 1) {
                     slideIndex = slides.length;
                  } else {
                     slideIndex--;
                  }

                  currentSlide();

                  dotLighting();
               });

               dots.forEach((dot) => {
                  dot.addEventListener("click", (e) => {
                     const slideTo =
                        e.target.getAttribute("data-slide-to");

                     slideIndex = slideTo;

                     offset = deleteNotDigits(width) * (slideTo - 1);

                     slidesField.style.transform = `translateX(-${offset}px)`;

                     currentSlide();

                     dotLighting();
                  });
               });

               // showSlide(slideIndex); // 1 вариант(тапорный)

               // if (slides.length < 10) {
               //    total.textContent = `0${slides.length}`;
               // } else {
               //    total.textContent = slides.length;
               // }

               // function showSlide(n) {
               //    if (n > slides.length) {
               //       slideIndex = 1;
               //    }

               //    if (n < 1) {
               //       slideIndex = slides.length;
               //    }

               //    slides.forEach(slide => slide.classList.add('hide'));

               //    slides[slideIndex - 1].classList.remove('hide');

               //    if (slides.length < 10) {
               //       current.textContent = `0${slideIndex}`;
               //    } else {
               //       current.textContent = slideIndex;
               //    }

               // }

               // function plusSlides(n) {
               //    showSlide(slideIndex += n);
               // }

               // prev.addEventListener('click', () => {
               //    plusSlides(-1);
               // });
               // next.addEventListener('click', () => {
               //    plusSlides(1);
               // });
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               slider;

            /***/
         },

      /***/ "./js/modules/tabs.js":
         /*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
         /***/ (module) => {
            function tabs() {
               //TABS

               const tabs = document.querySelectorAll(
                     ".tabheader__item"
                  ),
                  tabsContent =
                     document.querySelectorAll(".tabcontent"),
                  tabsParent = document.querySelector(
                     ".tabheader__items"
                  );

               function HideTabContent() {
                  tabsContent.forEach((item) => {
                     item.style.display = "none";
                  });

                  tabs.forEach((item) => {
                     item.classList.remove("tabheader__item_active");
                  });
               }

               function showTabContent(i = 0) {
                  tabsContent[i].style.display = "block";
                  tabs[i].classList.add("tabheader__item_active");
               }

               HideTabContent();
               showTabContent();

               tabsParent.addEventListener("click", (event) => {
                  console.log(event.target);
                  const target = event.target;

                  if (
                     target &&
                     target.classList.contains("tabheader__item")
                  ) {
                     tabs.forEach((item, i) => {
                        if (target == item) {
                           HideTabContent();
                           showTabContent(i);
                        }
                     });
                  }
               });
            }

            module.exports = tabs;

            /***/
         },

      /***/ "./js/modules/timer.js":
         /*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
         /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
         ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(
               __webpack_exports__,
               {
                  /* harmony export */ default: () =>
                     __WEBPACK_DEFAULT_EXPORT__,
                  /* harmony export */
               }
            );
            /*jshint esversion: 8 */
            function timer() {
               const deadline = "2024-06-07";

               function getTimeRemaining(endtime) {
                  const t =
                        Date.parse(endtime) - Date.parse(new Date()),
                     days = Math.floor(t / (24 * 3600 * 1000)),
                     hours = Math.floor((t / (3600 * 1000)) % 24),
                     minutes = Math.floor((t / (60 * 1000)) % 60),
                     seconds = Math.floor((t / 1000) % 60);

                  return {
                     total: t,
                     days: days,
                     hours: hours,
                     minutes: minutes,
                     seconds: seconds,
                  };
               }

               function getZero(num) {
                  if (num >= 0 && num < 10) {
                     return `0${num}`;
                  } else {
                     return num;
                  }
               }

               function setClock(selector, endtime) {
                  const timer = document.querySelector(selector),
                     days = timer.querySelector("#days"),
                     hours = timer.querySelector("#hours"),
                     minutes = timer.querySelector("#minutes"),
                     seconds = timer.querySelector("#seconds"),
                     timeInterval = setInterval(updateClock, 1000);

                  updateClock();

                  function updateClock() {
                     const t = getTimeRemaining(endtime);

                     days.innerHTML = getZero(t.days);
                     hours.innerHTML = getZero(t.hours);
                     minutes.innerHTML = getZero(t.minutes);
                     seconds.innerHTML = getZero(t.seconds);

                     if (t.total <= 0) {
                        clearInterval(timeInterval);
                     }
                  }
               }

               setClock(".timer", deadline);
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
               timer;

            /***/
         },

      /******/
   };
   /************************************************************************/
   /******/ // The module cache
   /******/ var __webpack_module_cache__ = {};
   /******/
   /******/ // The require function
   /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
         /******/ return cachedModule.exports;
         /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
         /******/ // no module.id needed
         /******/ // no module.loaded needed
         /******/ exports: {},
         /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](
         module,
         module.exports,
         __webpack_require__
      );
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
   }
   /******/
   /************************************************************************/
   /******/ /* webpack/runtime/compat get default export */
   /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
         /******/ var getter =
            module && module.__esModule
               ? /******/ () => module["default"]
               : /******/ () => module;
         /******/ __webpack_require__.d(getter, { a: getter });
         /******/ return getter;
         /******/
      };
      /******/
   })();
   /******/
   /******/ /* webpack/runtime/define property getters */
   /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
         /******/ for (var key in definition) {
            /******/ if (
               __webpack_require__.o(definition, key) &&
               !__webpack_require__.o(exports, key)
            ) {
               /******/ Object.defineProperty(exports, key, {
                  enumerable: true,
                  get: definition[key],
               });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
   /******/
   /******/ /* webpack/runtime/hasOwnProperty shorthand */
   /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
         Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
   })();
   /******/
   /******/ /* webpack/runtime/make namespace object */
   /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
         /******/ if (
            typeof Symbol !== "undefined" &&
            Symbol.toStringTag
         ) {
            /******/ Object.defineProperty(
               exports,
               Symbol.toStringTag,
               { value: "Module" }
            );
            /******/
         }
         /******/ Object.defineProperty(exports, "__esModule", {
            value: true,
         });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be in strict mode.
   (() => {
      "use strict";
      /*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ =
         __webpack_require__(
            /*! ./modules/tabs */ "./js/modules/tabs.js"
         );
      /* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default =
         /*#__PURE__*/ __webpack_require__.n(
            _modules_tabs__WEBPACK_IMPORTED_MODULE_0__
         );
      /* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ =
         __webpack_require__(
            /*! ./modules/modal */ "./js/modules/modal.js"
         );
      /* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ =
         __webpack_require__(
            /*! ./modules/timer */ "./js/modules/timer.js"
         );
      /* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ =
         __webpack_require__(
            /*! ./modules/cards */ "./js/modules/cards.js"
         );
      /* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ =
         __webpack_require__(
            /*! ./modules/forms */ "./js/modules/forms.js"
         );
      /* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ =
         __webpack_require__(
            /*! ./modules/slider */ "./js/modules/slider.js"
         );
      /* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ =
         __webpack_require__(
            /*! ./modules/calc */ "./js/modules/calc.js"
         );
      // const { request } = require("express");

      /*jshint esversion: 8 */

      window.addEventListener("DOMContentLoaded", () => {
         _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default()();
         (0, _modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)(
            "[data-modal]",
            ".modal"
         );
         (0, _modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)();
         (0, _modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
         (0, _modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)();
         (0, _modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)();
         (0, _modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)();
         //TABS

         //TIMER

         //MODAL

         //Card patterns. Classes

         // Forms

         // Slider

         //CALC
      });
   })();

   /******/
})();
//# sourceMappingURL=bundle.js.map
