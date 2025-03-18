function show(s) {
    document.getElementById(s).style.display = 'block';
    document.getElementById(s).scrollIntoView();
    document.getElementById(s).focus(); 
    var displaycache = JSON.parse(sessionStorage.getItem("displaycache" + aufgabennummer));
    displaycache[s] = "block";
    sessionStorage.setItem("displaycache" + aufgabennummer, JSON.stringify(displaycache));
}

function show_delayed(s,seconds) {
    setTimeout(function(){show(s);},seconds*1000);
}

function hide(s) {
    document.getElementById(s).style.display = 'none';
    var displaycache = JSON.parse(sessionStorage.getItem("displaycache" + aufgabennummer));
    displaycache[s] = "none";
    sessionStorage.setItem("displaycache" + aufgabennummer, JSON.stringify(displaycache));
}

function hide_delayed(s,seconds) {
    setTimeout(function(){hide(s);},seconds*1000);
}

function hideFeedback(s) {
    document.getElementById(s).style.display = 'none';
}
  
function setTrue(v) {
    var variablecache = JSON.parse(sessionStorage.getItem("variablecache" + aufgabennummer));
    if (variablecache == null) {
      variablecache = {}
    }    
    variablecache[v] = true;
    sessionStorage.setItem("variablecache" + aufgabennummer, JSON.stringify(variablecache));
}

function setFalse(v) {
    var variablecache = JSON.parse(sessionStorage.getItem("variablecache" + aufgabennummer));
    if (variablecache == null) {
      variablecache = {}
    } 
    variablecache[v] = false;
    sessionStorage.setItem("variablecache" + aufgabennummer, JSON.stringify(variablecache));
}

function showIfTrue(s,v) {
    var displaycache = JSON.parse(sessionStorage.getItem("displaycache" + aufgabennummer));
    var variablecache = JSON.parse(sessionStorage.getItem("variablecache" + aufgabennummer));
    if (variablecache[v]) {
        show(s);
    }
}

function hideIfTrue(s,v) {
    var displaycache = JSON.parse(sessionStorage.getItem("displaycache" + aufgabennummer));
    var variablecache = JSON.parse(sessionStorage.getItem("variablecache" + aufgabennummer));
    if (variablecache[v]) {
        hide(s);
    }
}
  
function set_empty_cache(){
    liste=Array.prototype.slice.call(document.querySelectorAll('[id^=zwischen]')).map(function(x) {return x['id'];});
    displaycache={};
    variablecache = {};
    for(x in liste){displaycache[liste[x]]='none'};
    sessionStorage.setItem("displaycache" + aufgabennummer, JSON.stringify(displaycache));
    for (key in displaycache) {
      document.getElementById(key).style.display = displaycache[key];
    }; 
}

function startup(){
  aufgabennummer=document.querySelectorAll('input[id^=q]')[0]['id'].split('_')[0];
  
  var variablecache = JSON.parse(sessionStorage.getItem("variablecache" + aufgabennummer));
  if (variablecache == null) {
    variablecache = {}
  }
  var displaycache = JSON.parse(sessionStorage.getItem("displaycache" + aufgabennummer));
  if (displaycache !== null) {
    for (key in displaycache) {
      if(document.getElementById(key)!== null) {
        document.getElementById(key).style.display = displaycache[key];
      }
    }

  } else {
    set_empty_cache();
  }
}

var aufgabennummer;

document.addEventListener("DOMContentLoaded", function (event) { startup() });

startup();