const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let todays = new Date();
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0'
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((todays.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", todays.toLocaleDateString());