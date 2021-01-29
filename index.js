'use strict';

module.exports = function(number,currency) {
    return (currency.toUpperCase()+': '+parseFloat(number).toFixed(2));
}