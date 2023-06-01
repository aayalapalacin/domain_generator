/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let outcomes = [];
window.onload = function() {
  pronoun.forEach(pro => {
    adj.forEach(a => {
      noun.forEach(n => {
        let domain = `${pro}${a}${n}.com`;
        outcomes.push(domain);
      });
    });
  });
  console.log(outcomes, "outcomes");
  outcomes.forEach(outcome => {
    document.querySelectorAll("#domain").innerHTML = `<li>${outcome}</li>`;
  });
};
