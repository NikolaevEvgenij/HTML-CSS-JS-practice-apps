// const { request } = require("express");

/*jshint esversion: 8 */

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {

   tabs();
   modal('[data-modal]', '.modal');
   timer();
   cards();
   forms();
   slider();
   calc();
   //TABS

   //TIMER

   //MODAL

   //Card patterns. Classes

   // Forms

   // Slider

   //CALC

});

