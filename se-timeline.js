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

  let addTimelineLink = function($shortLink, postId) {
    let $timelineLink = $('<a>timeline</a>')
      .addClass("timeline")
      .attr('href', `/posts/${postId}/timeline`);

    let $separator = $shortLink.next();

    $shortLink.parent()
      .append($separator)
      .append($timelineLink);
  };

  $('#question').each((_, question) => {
    let $shortLink = $(question).find('.short-link');
    let postId = question.dataset.questionid;
    addTimelineLink($shortLink, postId);
  });

  $('.answer').each((_, answer) => {
    let $shortLink = $(answer).find('.short-link');
    let postId = answer.dataset.answerid;
    addTimelineLink($shortLink, postId);
  });
})();
