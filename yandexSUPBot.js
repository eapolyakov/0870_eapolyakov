// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
    "crushdrummers.ru":['Барабанное шоу','Заказать барабанное шоу','Шоу барабанщиков в Москве']
};
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let googleInput = document.getElementsByName('q')[0];
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let btnK = document.getElementsByName('btnK')[0];
let i =0;
let links = document.links;
let yandexInput = document.getElementById('text');
let yandexNextClick = document.getElementsByClassName('pager__item_kind_next').value;
let yandexStopClick = document.getElementsByClassName('pager_items').innerText;


let searchButton = document.getElementsByClassName('button_theme_websearch ')[0];



if (btnK != undefined){
    document.cookie = "site="+site;
}else if (location.hostname == "www.google.com"){
    site = getCookie("site");
}else{
    site = location.hostname;
}


if (btnK != undefined){
    document.cookie = "site="+site;
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i];
        i++;
        if (i==keyword.length){
            clearInterval(timerId);
            btnK.click();
        }
    },100);
}else if(location.hostname == site){
    setInterval(()=>{
        let index = getRandom(0,links.length);
        if (getRandom(0,101)>=80){
            location.href = 'https://www.yandex.ru/';
        }
        else if (links[index].href.indexOf(site) != -1)
            links[index].click();
    },getRandom(300,700));
}else{
    let nextGooglePage = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf(site) != -1){
            let link = links[i];
            nextGooglePage = false;
            setTimeout(()=>{link.click();},getRandom(100,400));
            break;
        }
    }
    if (document.querySelector('.YyVfkd').innerText=="10"){
        nextGooglePage = false;
        location.href = 'https://www.google.com/';
    }

    if (nextGooglePage){
        setTimeout(()=>{pnnext.click();},getRandom(100,400));
    }
}



let timerId;

if (searchButton != undefined) {
  document.cookie = "site=" + site;
} else if (location.hostname == "yandex.ru") {
  site = getCookie("site");
} else {
  site = location.hostname;
}


if (searchButton != undefined) {
  document.cookie = "site=" + site;
  timerId = setInterval(() => {
    yandexInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      searchButton.click();
    }
  }, 100);

} else if (location.hostname == site) {
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 80) {
      setTimeout(() => {
      location.href = 'https://google.com';
    } , getRandom(300, 700));

    } else if (links[index].href.indexOf(site) != -1)
      links[index].click();
  }, getRandom(300, 700));

} else {
  let nextYandexPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf(site) != -1) {
      let link = links[i];
      links[i].removeAttribute("target");
      nextYandexPage = false;
      setTimeout(() => {
        link.click();
      }, getRandom(100, 400));
      break;
    }
  }

  if (document.querySelector(".pager__item_current_yes").innerText == "8") {
    nextYandexPage = false;
    location.href = 'https://yandex.ru/';
  }

  if (nextYandexPage) {
    setTimeout(() => {
      yandexNextClick.click();
    }, getRandom(100, 400));
  }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
