"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];
const teamSelectorEl = document.getElementById("teamSelector");
function playerDropDown() {
 
  for (let i = 0; i < teams.length; i++) {
    let optionEl = document.createElement("option");
    const team = teams[i];
    optionEl.textContent = team.name;
    optionEl.value = team.code;
    teamSelectorEl.appendChild(optionEl);
  }
}

playerDropDown();

function onSubmitclickChanged() {
    let selectedValue = teamSelectorEl.value;
let selectedTeam = teams.length;
for ( let i = 0;i<selectedTeam;i++) {
    console.log(teams[i].teamSelectorEl);
}
    

  console.log(selectedValue);
}

const submitEl = document.getElementById(`submitBtn`);

submitEl.onclick = onSubmitclickChanged;
