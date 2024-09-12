// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getAbsoluteHeight(ele) {
    el = (typeof el === 'string') ? document.querySelector(el) : el;
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
    return Math.ceil(el.offsetHeight + margin);
}
