// ==UserScript==
// @name         Remove Idlix Banned Ads
// @namespace    http://tampermonkey.net/
// @version      2024-01-25
// @description  remove annoying image GIF Ads
// @author       MBY.ARF
// @match        https://tv1.idlixofficials.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @icon         https://tv1.idlixofficials.com/wp-content/uploads/2020/06/idlix-150x150.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    console.log('==== IDLIX BANNER REMOVER LOADED');

    $(window).on("load", function(){
        try{myrepop()} catch {}
        $(".kalongkalongrow,.module_single_ads").remove();
    });
})();
