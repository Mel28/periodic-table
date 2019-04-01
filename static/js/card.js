
function myFunction() {
const li = document.querySelector('li');
li.addEventListener('click', event => {
  li.innerHTML = `Click count: ${event.detail}`;
});
}




// When the user clicks on <li>, open the popup
//function myFunction() {
//  var popup = document.getElementById("myPopup");
  
//}
/*<div class="popup" onclick="myFunction()">Click me!
  <span class="popuptext" id="myPopup">Popup text...</span>
</div>*/

//class="popup" onclick="myFunction()"
// popup.classList.toggle("show");



  //var popup = document.getElementById("myPopup");
/* var listItem = document.createElement('li');
  var popup = document.getElementsByTagName("li");
   popup.addEventListener('click', event => {
  listItem.innerHTML = `onClick: popup.toggle("show")`;
  
  var popUpClick = document.createAttribute('onclick="myFunction()"');
  popUpClick.textContent = myFunction();
  listItem.setAttributeNode(popUpClick); */