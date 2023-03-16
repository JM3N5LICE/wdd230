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


// spotlight gold and silver member generator

const businessDataUrl = "./data/business.json";
const spotlight1img = document.querySelector('#spotlight1img');
const spotlight2img = document.querySelector('#spotlight2img');
const spotlight3img = document.querySelector('#spotlight3img');
const sl1name = document.querySelector('#sl1name');
const sl2name = document.querySelector('#sl2name');
const sl3name = document.querySelector('#sl3name');
const sp1email = document.querySelector('#sp1email');
const sp2email = document.querySelector('#sp2email');
const sp3email = document.querySelector('#sp3email');
const address1 = document.querySelector('#address1');
const address2 = document.querySelector('#address2');
const address3 = document.querySelector('#address3');
const zipcode1 = document.querySelector('#zipcode1');



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
  const sln1 = spotlights[0][0].name;
  sl1name.textContent = sln1;
  const sle1 = spotlights[0][0].websiteURL;
  sp1email.textContent = sle1;
  const sla1 = spotlights[0][0].streetAddress;
  address1.textContent = sla1;
  const zc1 = spotlights[0][0].cityStateZip;
  zipcode1.textContent = zc1;

  const img2 = spotlights[1][0].imageURL;
  spotlight2img.setAttribute('src', img2);
  const sln2 = spotlights[1][0].name;
  sl2name.textContent = sln2;
  const sle2 = spotlights[1][0].websiteURL;
  sp2email.textContent = sle2;
  const sla2 = spotlights[1][0].streetAddress;
  address2.textContent = sla2;
  const zc2 = spotlights[1][0].cityStateZip;
  zipcode2.textContent = zc2;

  const img3 = spotlights[2][0].imageURL;
  spotlight3img.setAttribute('src', img3);
  const sln3 = spotlights[2][0].name;
  sl3name.textContent = sln3;
  const sle3 = spotlights[2][0].websiteURL;
  sp3email.textContent = sle3;
  const sla3 = spotlights[2][0].streetAddress;
  address3.textContent = sla3;
  const zc3 = spotlights[2][0].cityStateZip;
  zipcode3.textContent = zc3;
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