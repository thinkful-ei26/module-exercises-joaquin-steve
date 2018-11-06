/*eslint-env jquery*/
'use strict';

/* global shoppingList, Item, store */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});
