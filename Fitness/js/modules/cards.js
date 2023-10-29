/*jshint esversion: 8 */
function cards() {

   //Card patterns. Classes

   class MenuCard {
      constructor(src, alt, title, text, cost, parentSelector, ...classes) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.text = text;
         this.cost = cost;
         this.classes = classes;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 27;
         this.changeToUAH();
      }

      changeToUAH() {
         this.cost = this.cost * this.transfer;
      }

      render() {
         const element = document.createElement('div');

         if (this.classes.length === 0) { // делаем так, что если в ...classes ничего нет(то есть пустой массив)
            this.element = 'menu__item';  // добавляется дефолтный класс menu__item
            element.classList.add(this.element);
         } else {
            this.classes.forEach(className => element.classList.add(className));
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
         throw new Error(`Could not fetch ${url}, status: ${res.status}`); // прокидываем ошибку сами
      }

      return await res.json();
   };

   // getResourse('http://localhost:3000/menu')              //// 2 способ
   //    .then(data => {
   //       data.forEach(({ img, altimg, title, descr, price }) => {
   //          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
   //       });
   //    });

   axios.get('http://localhost:3000/menu')                 // 4 cпособ(через библиотеку axios)
      .then(data => {
         data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
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

export default cards;