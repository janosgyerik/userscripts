// ==UserScript==
// @name SE Timeline
// @author Janos Gyerik
// @description Add timeline link to questions and answers
// @namespace https://github.com/janosgyerik/userscripts
// @version 0.1
// @match *://*.stackexchange.com/questions/*
// @match *://*.stackoverflow.com/questions/*
// @match *://*.superuser.com/questions/*
// @match *://*.serverfault.com/questions/*
// @match *://*.askubuntu.com/questions/*
// @match *://*.stackapps.com/questions/*
// @match *://*.mathoverflow.net/questions/*
// @grant none
// ==/UserScript==

(function() {
  'use strict';

  $('.post-menu .short-link').each((_, shortLink) => {
    // Example short links:
    // https://stackoverflow.com/q/47462904/641955
    // https://stackoverflow.com/a/47463378/641955
    //
    var lastSlash = shortLink.href.lastIndexOf('/');
    var secondLastSlash = shortLink.href.lastIndexOf('/', lastSlash - 1);
    var postId = shortLink.href.substring(secondLastSlash + 1, lastSlash);
    var $timelineLink = $('<a>timeline</a>')
      .addClass("timeline")
      .css({ color: 'purple' })
      .attr('href', '/posts/' + postId + '/timeline');

    var $shortLink = $(shortLink);
    var $separator = $shortLink.next();

    $shortLink.parent()
      .append($separator)
      .append($timelineLink);
  });
})();
