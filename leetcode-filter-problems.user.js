// ==UserScript==
// @name         Filter Problems on Leetcode
// @namespace    http://www.janosgyerik.com/
// @version      0.2
// @description  Add buttons on the problem listing page to apply various filters
// @author       janos
// @match        https://leetcode.com/problemset/algorithms/
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    var toolbar = $('<div/>');
    toolbar.append(
        $('<button/>').append('Hide Locked').click(function() { $('.fa-lock').parent('div').parent('td').parent('tr').hide(); }),
        $('<button/>').append('Hide Easy').click(function() { $('td:contains("Easy")').parent('tr').hide(); }),
        $('<button/>').append('Hide Medium').click(function() { $('td:contains("Medium")').parent('tr').hide(); }),
        $('<button/>').append('Hide Completed').click(function() { $('.fa-check').parent('td').parent('tr').hide(); })
    );
    $('#question-app').prepend(toolbar);
});
