/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "some"];
  let adj = ["awesome", "big", "shiny"];
  let noun = ["dude", "oaktree", "caterpillar"];
  let com = [".com", ".org", ".com.au", ".cl"];

  let domain = "";
  let dominios = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < com.length; l++) {
          domain = pronoun[i] + adj[j] + noun[k] + com[l];
          dominios.push(domain);
          console.log(domain);
        }
      }
    }
  }

  Document;

  console.log("Hello Rigo from the console!");

  function makeUL(array) {
    // Create the list element:
    var list = document.createElement("p");

    for (let i = 0; i < array.length; i++) {
      //Create the list item:
      var item = document.createElement("p");

      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));

      // Add it to the list:
      list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
  }

  // Add the contents of options[0] to #foo:
  document.getElementById("#lista").appendChild(makeUL(dominios));
};
