console.log("i can smell you.");

function setupLocalStorageVariable(item_key) {
  if (item_key == "date") {
    var date_data = String(new Date().getDate())+String(new Date().getMonth())+String(new Date().getFullYear())
    localStorage.setItem("gooderprojectsdate", date_data)
  } else {
    if (localStorage.getItem("gooderprojects"+item_key) == null) {
      localStorage.setItem("gooderprojects"+item_key, false);
    }
  }
}

function onOpen() {
  setupLocalStorageVariable("date");
  // Add all wordles here
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
  var date_data = String(new Date().getDate())+String(new Date().getMonth())+String(new Date().getFullYear());
  if (localStorage.getItem("gooderprojectsdate") != date_data) {
    // Add all wordles here
    localStorage.setItem("wordle", false);
  }
  // Add all wordles here
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
