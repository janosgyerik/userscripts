// ==UserScript==
// @name         Filter Problems on Leetcode
// @namespace    http://www.janosgyerik.com/
// @version      0.1
// @description  enter something useful
// @author       janos
// @match        https://leetcode.com/problemset/algorithms/
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    // hide locked
    $('.fa-lock').parent('td').parent('tr').hide()
    
    var toolbar = $('<div/>');
    toolbar.append(
        $('<button/>').append('Hide Easy').click(function() { $('td:contains("Easy")').parent('tr').hide(); }),
        $('<button/>').append('Hide Medium').click(function() { $('td:contains("Medium")').parent('tr').hide(); }),
        $('<button/>').append('Hide Completed').click(function() { $('td span.ac').parent('td').parent('tr').hide(); })
    );
    $('#brief_stats').prepend(toolbar);
});
