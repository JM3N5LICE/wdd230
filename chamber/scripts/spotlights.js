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




function displaySpotlights(businessList){
  businessList = businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
  spotlights = []
  for (let i=0; i < 3; i++){
    var elt = Math.floor(Math.random() * businessList.length)
    spotlights.push(businessList.splice(elt, 1));
  }
// This way is more efficient but I don't want to figure out css
// spotlights.forEach(spotlight  => {
//   console.log(spotlight[0])
//   let section = document.createElement('section')
//   let h3 = document.createElement('h3')
//   let img = document.createElement('img')
//   let p = document.createElement('p')
//   h3.textContent = spotlight[0].name;
//   img.setAttribute('src', spotlight[0].imageURL)
//   p.textContent = spotlight[0].websiteURL
//   let spotlightContainer = document.querySelector('#spotlights')
//   section.appendChild(h3)
//   section.appendChild(img)
//   section.appendChild(p)
//   spotlightContainer.appendChild(section)}
// )
  // Now display stuff
  console.info(spotlights);
  const img1 = spotlights[0][0].imageURL;
  spotlight1img.setAttribute('src', img1);
  const sln1 = spotlights[0][0].name;
  sl1name.textContent = sln1;
  const sle1 = spotlights[0][0].websiteURL;
  sp1email.textContent = sle1;
  const description1 = spotlights[0][0].description;
  address1.textContent = description1;
  

  const img2 = spotlights[1][0].imageURL;
  spotlight2img.setAttribute('src', img2);
  const sln2 = spotlights[1][0].name;
  sl2name.textContent = sln2;
  const sle2 = spotlights[1][0].websiteURL;
  sp2email.textContent = sle2;
  const description2 = spotlights[1][0].description;
  address2.textContent = description2;
  

  const img3 = spotlights[2][0].imageURL;
  spotlight3img.setAttribute('src', img3);
  const sln3 = spotlights[2][0].name;
  sl3name.textContent = sln3;
  const sle3 = spotlights[2][0].websiteURL;
  sp3email.textContent = sle3;
  const description3 = spotlights[2][0].description;
  address3.textContent = description3;
  
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