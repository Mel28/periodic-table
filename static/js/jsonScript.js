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
    var input = document.getElementById("elementSearch");
    var elements = JSON.parse(json).elements;
    //rendering HTML with JavaScript adding list item to ordered list
    var orderList = document.querySelector('.periodic-table');
    
    input.addEventListener("input",filterElements);
    
    //using chaining and the .map method, tells code to access elements var (json data), and target atomic_mass and return a new array rounded to nearest whole number. 
    elements 
      .map(function(el) {
        
        el.atomic_mass = +(el.atomic_mass).toFixed(1);
        
        return el;
      })
      .forEach(function (el) {
        var listItem = document.createElement('li'); //creates item in memory
        listItem.addEventListener("click",popupCard);
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
        
         function popupCard() {
     //var popupCard = this.value;
     var cardMainDiv = document.getElementById('popupCard');
          while (cardMainDiv.firstChild) {
             cardMainDiv.removeChild(cardMainDiv.firstChild);
        }
        var cardDiv = document.createElement('div');
        var imgDiv = document.createElement('div');
        var image = document.createElement('img');
        var contentDiv = document.createElement('div');
        var cardTitle = document.createElement('h4');
        var discoveredByTitle = document.createElement('p');
        var discoveredBy = document.createElement('p');
        var appearanceTitle = document.createElement('p');
        var appearance = document.createElement('p');
        var boilingPointTitle =document.createElement('p');
        var boilingPoint = document.createElement('p');
        var densityTitle = document.createElement('p');
        var density = document.createElement('p');
        var summaryTitle = document.createElement('p');
        var summary = document.createElement('p');
        //var srcImage = document.createAttribute('src');
        var cardCloseButton = document.createElement('button');
        var buttonText = document.createTextNode("Close"); 
        var discoveredByText = document.createTextNode("Discovered By:"); 
        var appearanceText = document.createTextNode("Appearance:"); 
        var boilingPointText = document.createTextNode("Boiling Point (K):"); 
        var densityText = document.createTextNode("Density (g/mL):"); 
        var summaryText = document.createTextNode("Summary:");
        
        cardTitle.textContent = el.name;
        discoveredBy.textContent = el.discovered_by;
        appearance.textContent = el.appearance;
        boilingPoint.textContent = el.boil;
        density.textContent = el.density;
        summary.textContent = el.summary;
       // srcImage.textContent = el.spectral_img;
        
       cardDiv.className = "card";
       imgDiv.className = "bg-img";
       contentDiv.className = "content";
       image.id = "showImage";
       
        //document.getElementById('old-block').innerHTML +=
        discoveredByTitle.appendChild(discoveredByText); 
        appearanceTitle.appendChild(appearanceText); 
        boilingPointTitle.appendChild(boilingPointText); 
        densityTitle.appendChild(densityText); 
        summaryTitle.appendChild(summaryText);
        cardCloseButton.appendChild(buttonText);
        cardMainDiv.appendChild(cardDiv);
        cardDiv.appendChild(imgDiv);
        imgDiv.appendChild(image);
        document.getElementById("showImage").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/${el.name}_Spectra.jpg/120px-${el.name}_Spectra.jpg`//el.spectral_img;
       // image.setAttributeNode(srcImage);
        imgDiv.appendChild(contentDiv);
        contentDiv.appendChild(cardTitle);
        contentDiv.appendChild(discoveredByTitle);
        contentDiv.appendChild(discoveredBy);
        contentDiv.appendChild(appearanceTitle);
        contentDiv.appendChild(appearance);
        contentDiv.appendChild(boilingPointTitle);
        contentDiv.appendChild(boilingPoint);
        contentDiv.appendChild(densityTitle);
        contentDiv.appendChild(density);
        contentDiv.appendChild(summaryTitle);
        contentDiv.appendChild(summary);
        contentDiv.appendChild(cardCloseButton);

        
        
         //console.log();
        
// filterElements(JSON.parse(json).elements);
   console.log(elements);    
 }
    console.log('finish');
        
      })
      
     //function for search box
    function filterElements() {
      var elementSearch = this.value;
      // var elementsName = document.getElementsById('element-name');
      console.log(elementSearch);
     
      for (var i= 0; i < elements.length; i++) 
      {
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
          if(match == -1 && massNumMatch == -1 ) {
            elementHtml.style.visibility = "hidden";
          }
          else {
            elementHtml.style.visibility = "unset";
          }
        }
      } 

  });
  
}  
  
    //  window.onload = popupCard;

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

a(); 
//var myNode = document.getElementById("popupCard");
           // myNode.innerHTML = ''; */