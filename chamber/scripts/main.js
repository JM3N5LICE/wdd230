function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active');
    document.querySelector("#menu-closed").classList.toggle('menu-active');
    document.querySelector("#menu-open").classList.toggle('menu-active');
}

// document.querySelector("#hamburger-menu").onclick = toggleMenu;

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

var messagedate = new Date();
if (messagedate.getDay()==1 || messagedate.getDay()==2){
    document.querySelector("#meet-greet").classList.add('active')
}





const businessDataUrl = "./data/business.json";
const spotlight1img = document.querySelector('#spotlight1img');
const spotlight2img = document.querySelector('#spotlight2img');
const spotlight3img = document.querySelector('#spotlight3img');
const sl1name = document.querySelector("#sl1name");
const sl2name = document.querySelector("#sl2name");
const sl3name = document.querySelector("#sl3name");


function displaySpotlights(businessList){
  businessList = businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
  spotlights = []
  for (let i=0; i < 3; i++){
    var elt = Math.floor(Math.random() * businessList.length)
    spotlights.push(businessList.splice(elt, 1));
  }

  // Now display stuff
  console.info(spotlights);
  const img1 = spotlights[0][0].imageURL;
  spotlight1img.setAttribute('src', img1);
  const img2 = spotlights[1][0].imageURL;
  spotlight2img.setAttribute('src', img2);
  const img3 = spotlights[2][0].imageURL;
  spotlight3img.setAttribute('src', img3);
}

async function getBusinessData() {
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.businesses);
  } else {
    console.error("There was an error loading the data.");
  }
}

getBusinessData();