// ==UserScript==
// @name         Conjugation-fr auto-focus on input
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Put the focus on the search field
// @author       Janos Gyerik <info@janosgyerik.com>
// @match        http://www.conjugation-fr.com/*
// ==/UserScript==

(function() {
    document.getElementsByClassName("input-search")[0].focus()
})();
