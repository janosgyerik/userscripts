// ==UserScript==
// @name         CodeMentor common messages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easily add common messages in chat conversations
// @author       Janos Gyerik <info@janosgyerik.com>
// @match        https://www.codementor.io/m/dashboard/open-requests*
// @grant        none
// ==/UserScript==

const presets = [
    {
        label: 'happy-to-help',
        text: 'Hi, I saw your request, and I am happy to help if you still need'
    },
    {
        label: 'need-details',
        text: 'Hi, this request is interesting, can you share more details? Do you have the complete problem description?'
    }
];

const appendPresets = () => {
    console.log('foo');
    presets.forEach(x => {
        console.log(x);
        $('.navigation').append(`<li><a class="preset" href="#" data-text="${x.text}">${x.label}</a></li>`);
    });
    console.log('end');
    $('.preset').click(function() {
        addToChat($(this).attr('data-text'));
    });
};

const addToChat = text => {
    $('textarea').val(text);
};

(function() {
    setTimeout(appendPresets, 5000);
})();
