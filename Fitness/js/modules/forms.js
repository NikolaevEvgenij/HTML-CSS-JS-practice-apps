/*jshint esversion: 8 */
import { modalClose, modalOpen } from './modal'

function forms() {

   //forms

   const forms = document.querySelectorAll('form');

   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то не так...'
   };

   forms.forEach(item => {
      bindPostData(item);
   });

   const postData = async (url, data) => {// говорим, что это ассинхронный запрос
      const res = await fetch(url, {// говорим, что надо подождать выполнения, иначе дальше в res будет undefined
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: data
      });

      return await res.json();// ждём выполнения, иначе заретёрнит необработанный res
   };

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;
         form.append(statusMessage);
         form.insertAdjacentElement('afterend', statusMessage);

         // const request = new XMLHttpRequest();
         // request.open('POST', 'server.php');
         // request.setRequestHeader('Content-type', 'application/json');
         // request.send(json);


         // Если исползуем XMLHttpRequest + formData, то не нужен setRequestHeader, он назначается сам
         const formData = new FormData(form); // в вёрске у инпутов обязательно должен быть name = ''(FormData парсит форму)

         const json = JSON.stringify(Object.fromEntries(formData.entries()));
         // превращаем formData в матрицу(массив из массивов, для удобства), потом в объект, потом в JSON.

         //        object = {};
         // formData.forEach((value, key) => {
         //    object[key] = value;
         // });

         postData('http://localhost:3000/requests', json)
            .then(data => {
               console.log(data);
               showThanksModal(message.success);
               statusMessage.remove();
            }).catch(() => {
               showThanksModal(message.failure);
            }).finally(() => {
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
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      modalOpen(modalWin);

      const thanksModal = document.createElement('div');
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
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         modalClose(modalWin);
      }, 4000);
   }

   fetch('http://localhost:3000/menu')
      .then(data => data.json())
      .then(res => console.log(res));

}

export default forms;