// Minimal interactivity for navigation and footer year
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(btn && nav){btn.addEventListener('click',function(){nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';});}
  var yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();
});
// HOW TO BET GUIDES
const guideData={
  1:{img:"bet-1.png",title:"1. User ID, Game ID, Date, Time",text:"2. The Best Horse of Each Category"},
  2:{img:"how-to-bet-2.png",title:"Step 2: Best Horse Categories",text:"See the best horse recommendations based on acceleration, finishes, jockey records, mean index, and stamina."},
  3:{img:"how-to-bet-3.png",title:"Step 3: Track Information",text:"Check weather, track condition, and humidity before betting."},
  4:{img:"how-to-bet-4.png",title:"Step 4: Menu Access",text:"Open the menu to adjust settings and view options."},
  5:{img:"how-to-bet-5.png",title:"Step 5: Place Bet",text:"Tap the BET icon to place your wager."},
  6:{img:"how-to-bet-6.png",title:"Step 6: Confirm Bet",text:"Review and confirm your selected bet."},
  7:{img:"how-to-bet-7.png",title:"Step 7: Live Race",text:"Watch the live race and track progress."},
  8:{img:"how-to-bet-8.png",title:"Step 8: Results",text:"Check race results and payouts."},
  9:{img:"how-to-bet-9.png",title:"Step 9: History",text:"Review your betting history and records."}
};

document.querySelectorAll(".guide-nav button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".guide-nav .active").classList.remove("active");
    btn.classList.add("active");
    const step=btn.dataset.step;
    document.getElementById("guideImage").src="assets/images/"+guideData[step].img;
    document.getElementById("guideText").innerHTML=
      `<h3>${guideData[step].title}</h3><p>${guideData[step].text}</p>`;
  });
});
