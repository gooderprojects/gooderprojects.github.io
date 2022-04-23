console.log("i can smell you.");

function setupLocalStorageVariable(item_key) {
  if (localStorage.getItem("gooderprojects"+item_key) == null) {
    localStorage.setItem("gooderprojects"+item_key, false);
  }
}

function onOpen() {
  setupLocalStorageVariable("wordle");
  setWebsiteDivs();
}

function setIndividualDiv(website_div) {
  if (localStorage.getItem("gooderprojects"+website_div) == "true") {
    document.getElementById(website_div+"-div").style.backgroundColor = "#6aaa64";
    document.getElementById(website_div+"-subtitle").innerHTML = "You have visited this site today"
  } else {
    document.getElementById(website_div+"-div").style.backgroundColor = "#c9b458";
    document.getElementById(website_div+"-subtitle").innerHTML = "You have not visited this site today"
  }
}

function setWebsiteDivs() {
  setIndividualDiv("wordle");
}

function returnToHomePage() {
  window.open("../index.html", '_self');
}

function openSite(site_name, site_link) {
  window.open(site_link, '_blank');
  localStorage.setItem("gooderprojects"+site_name, true);
  setIndividualDiv(site_name);
}

onOpen();
