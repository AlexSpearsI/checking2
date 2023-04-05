"use strict"
let vInterval;

function vibrate(val){
    if("vibrate" in navigator)  return navigator.vibrate(val);
    if("oVibrate" in navigator)  return navigator.oVibrate(val);
    if("mozVibrate" in navigator)  return navigator.mozVibrate(val);
    if("webkitVibrate" in navigator)  return navigator.webkitVibrate(val);
    document.getElementById('error').innerHTML = "Ваш браузер не поддерживает vibration Api .. попробуйте открыть пример в мобильном fixefox, там все точно работает";
  }
  
  function infiniteVibrate(val, interval) {
    stopVibrate();
    vInterval = setInterval(function() {
       vibrate(val);
    }, interval);
  }
  
  function stopVibrate() {
    if(typeof(vInterval)!=="undefined") clearInterval(vInterval);
    vibrate(0);
  }