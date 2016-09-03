// ==UserScript==
// @name Hide Earned Badges
// @author Janos Gyerik
// @description Show a link in Help Center > Badges to hide earned badges.
// @namespace https://github.com/janosgyerik/userscripts
// @match *://*.stackexchange.com/review*
// @match *://*.stackoverflow.com/review*
// @match *://*.superuser.com/review*
// @match *://*.serverfault.com/review*
// @match *://*.askubuntu.com/review*
// @match *://*.stackapps.com/review*
// @match *://*.mathoverflow.net/review*
// ==/UserScript==

if (window.location.href.indexOf('/help/badges') !== -1) {
    var hideEarnedLink = $('<a>hide earned</a>');

    hideEarnedLink.click(function() {
        $('.badge-earned-check').parents('.badge-row').remove();
        $('.badge-hierarchy').filter(function() { return $(this).text().trim().length == 0; }).hide();
    });

    $('#h-badges').append(' (').append(hideEarnedLink).append(')');
}
