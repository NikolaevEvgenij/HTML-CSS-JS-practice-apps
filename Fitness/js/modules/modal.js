/*jshint esversion: 8 */

function modalOpen(modal) {
   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';
   clearInterval(modalTimerId);
}

function modalClose(modal) {
   // if (modalShow.display == 'block') {
   //    modalWin.style.display = 'none';
   //    document.body.style.overflow = '';
   // }
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {

   const modalTrigger = document.querySelectorAll(triggerSelector),
      modalWin = document.querySelector(modalSelector);


   // const modalShow = window.getComputedStyle(modal);
   modalTrigger.forEach((item) => {
      item.addEventListener('click', () => {
         // if (modalShow.display == 'none') {
         //    modalWin.style.display = 'block';
         //    document.body.style.overflow = 'hidden';
         // }
         modalOpen(modalWin);
      });
   });

   modalWin.addEventListener('click', e => {
      if (e.target === modalWin || e.target.getAttribute('data-close') == '') {
         modalClose(modalWin);
      }
   });

   document.addEventListener('keydown', e => {
      if (e.code === 'Escape' && modalWin.classList.contains('show')) {
         modalClose(modalWin);
      }
   });

   const modalTimerId = setTimeout(() => {
      modalOpen(modalWin);
   }, 10000);

   function openModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         modalOpen(modalWin);
         window.removeEventListener('scroll', openModalByScroll);
      }
   }

   window.addEventListener('scroll', openModalByScroll);

}

export default modal;
export { modalClose, modalOpen };