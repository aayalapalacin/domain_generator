/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let outcomes = "";
window.onload = function() {
  pronoun.forEach(pro => {
    adj.forEach(a => {
      noun.forEach(n => {
        let domain = `<li>${pro}${a}${n}.com</li>`;
        outcomes += domain;
      });
    });
  });
  document.getElementById("domain").innerHTML = outcomes;
  console.log(outcomes, "outcomes");
};
