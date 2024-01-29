// ==UserScript==
// @name         Remove Idlix Banned Ads
// @namespace    http://tampermonkey.net/
// @version      2024-01-29
// @description  dont use this. because merugikan idlix.
// @author       MBY.ARF
// @match        https://tv1.idlixofficials.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @icon         https://tv1.idlixofficials.com/wp-content/uploads/2020/06/idlix-150x150.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    console.log('==== IDLIX BANNER REMOVER LOADED', "V290124");

    $(window).on("load", function(){
        try{myrepop()} catch {}
        $(".kalongkalongrow,.module_single_ads").remove();
    });
})();
