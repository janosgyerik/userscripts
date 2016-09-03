// ==UserScript==
// @name Hide Earned Badges
// @author Janos Gyerik
// @description Show a link in Help Center > Badges to hide earned badges.
// @namespace https://github.com/janosgyerik/userscripts
// @match *://*.stackexchange.com/help/badges*
// @match *://*.stackoverflow.com/help/badges*
// @match *://*.superuser.com/help/badges*
// @match *://*.serverfault.com/help/badges*
// @match *://*.askubuntu.com/help/badges*
// @match *://*.stackapps.com/help/badges*
// @match *://*.mathoverflow.net/help/badges*
// ==/UserScript==

var hideEarnedLink = $('<a>hide earned</a>');

hideEarnedLink.click(function() {
    $('.badge-earned-check').parents('.badge-row').remove();
    $('.badge-hierarchy').filter(function() { return $(this).text().trim().length == 0; }).hide();
});

$('#h-badges').append(' (').append(hideEarnedLink).append(')');
