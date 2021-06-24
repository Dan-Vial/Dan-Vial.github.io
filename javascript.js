/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let navLink = document.getElementsByClassName("nav-link");
let navInput = document.getElementById("nav-input");

for (let i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function () {        
        navInput.checked = !navInput.checked;
    };
};
