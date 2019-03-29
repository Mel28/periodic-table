/*function printFile(elementData) {
 var reader = new FileReader();
  reader.onload = function(evt) {
   console.log(evt.target.result);
  };
    reader.readAsText(file);
}*/
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'static/data/elementData.json', true); // Makes the call to the file path
  
  //onreadystatechange contains the event handler to be called when the readystatechange event is fired
  xobj.onreadystatechange = function () {
      //readystate must be: complete and response received (4) or status 200 in console
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send();  
}
//binds to html input box
function load() {
 
loadJSON(function(json) {
  
    var elements = JSON.parse(json).elements;
    
    //rendering HTML with JavaScript adding list item to ordered list
    var orderList = document.querySelector('.periodic-table');
    
    //using chaining and the .map method, tells code to access elements var (json data), and target atomic_mass and return a new array rounded to nearest whole number. 
    elements 
    .map(function(el) {
      
    el.atomic_mass = +(el.atomic_mass).toFixed(1);
      
      return el;
    })
    
    .forEach(function (el) {
      
     var listItem = document.createElement('li'); //creates item in memory
     var atomicMassValue = document.createElement('p');
     var abbreviationSymbol = document.createElement('abbr');
     var abbrTitle = document.createAttribute('title');
     var elementTitle = document.createElement('p');
      
      atomicMassValue.textContent = el.atomic_mass;
      abbreviationSymbol.textContent = el.symbol;
      abbrTitle.textContent = el.name;
      elementTitle.textContent = el.name;
     
   //sets the element's category as the class
      listItem.setAttribute('class', el.category);
      listItem.setAttribute('id', el.name);
      atomicMassValue.className = "atomic-mass";
      abbreviationSymbol.className = "element";
      elementTitle.className = "element-name";
      
      orderList.appendChild(listItem); // adds to the DOM
      listItem.appendChild(atomicMassValue);
      listItem.appendChild(abbreviationSymbol);
      listItem.appendChild(elementTitle);
      abbreviationSymbol.setAttributeNode(abbrTitle);  //adds title attr to abbr element
    }) 
     //function for search box
function filterElements(elements) {
  
     var input = document.getElementById("elementSearch");
  input.addEventListener("input",filterElements);
     var elementSearch = this.value;
 // var elementsName = document.getElementsById('element-name');
  console.log(elementSearch);
 
  for (var i= 0; i < elements.length; i++) {
     var element = elements[i];
     var elementHtml = document.getElementById(element.name);
   //sets atomic mass to 1 dp 
      var searchMass = element.atomic_mass.toFixed(1);
      //variables for case sensitive search .toLowerCase method
      var searchBoxLowerCase = elementSearch.toLowerCase();
      var elementsLowerCase = element.name.toLowerCase();
  //variable for partial match search. Using .indexOf method
  
      var match = elementsLowerCase.indexOf(searchBoxLowerCase);
      var massNumMatch = searchMass.indexOf(searchBoxLowerCase);
  //if statement for displaying hidden when no match or partial match has been
      if(match == -1 && massNumMatch == -1 )
      {
        elementHtml.style.visibility = "hidden";
      }
      else {
        elementHtml.style.visibility = "unset";
      }
      
      
  }
} 
 
 filterElements(JSON.parse(json).elements);
    
  });
   
}

window.onload = load;


//tried:

//document.getElementsByClassName(".elementId")
//getAttribute('id').
//document.querySelectorAll()
//className += "elementId"; 

/*function a() {
   var x = 5,
      obj = {};
   function b(){
      // access x or obj...
      console.log(x)
   }
   b();
}

a(); */