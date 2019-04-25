
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
        var dropDownList = document.getElementById("searchSelect");
        var randomButton = document.getElementById("button");
        randomButton.addEventListener("click",getRandomElement);
            
        input.addEventListener("input",filterElements);
        
        
        dropDownList.addEventListener("change",selectChange);
        
           
        //using chaining and the .map method, tells code to access elements var (json data), and target atomic_mass and return a new array rounded to nearest whole number. 
    elements 
        .map(function(el) {
        
            el.atomic_mass = +(el.atomic_mass).toFixed(1);
        
            return el;
        })
        
        .forEach(function (el) {
            
            var listItem = document.createElement('li'); //creates item in memory
                listItem.addEventListener("click",popupCard);
            var atomicNumber = document.createElement('p');
            var atomicMassValue = document.createElement('p');
            var abbreviationSymbol = document.createElement('abbr');
            var abbrTitle = document.createAttribute('title');
            var elementTitle = document.createElement('p');
        
                atomicNumber.textContent = el.number;
                atomicMassValue.textContent = el.atomic_mass;
                abbreviationSymbol.textContent = el.symbol;
                abbrTitle.textContent = el.name;
                elementTitle.textContent = el.name;
       
                //sets the element's category as the class
                listItem.setAttribute('class', el.category);
                listItem.setAttribute('id', el.name);
                atomicNumber.id = "number";
                atomicMassValue.className = "atomic-mass";
                abbreviationSymbol.className = "element";
                elementTitle.className = "element-name";
        
                orderList.appendChild(listItem); // adds to the DOM
                listItem.appendChild(atomicNumber);
                listItem.appendChild(atomicMassValue);
                listItem.appendChild(abbreviationSymbol);
                listItem.appendChild(elementTitle);
                abbreviationSymbol.setAttributeNode(abbrTitle);  //adds title attr to abbr element
        
        function popupCard() {
            var cardMainDiv = document.getElementById('popupCard');
                cardMainDiv.style.display = "flex";
                
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
            var cardCloseButton = document.createElement('button');
            var closeButtonDiv = document.createElement('div');
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
        
                cardDiv.className = "card";
                imgDiv.className = "bg-img";
                contentDiv.className = "content";
                image.id = "showImage";
                cardCloseButton.id = "close";
                closeButtonDiv.className = "closeButtonDiv";
       
                discoveredByTitle.appendChild(discoveredByText); 
                appearanceTitle.appendChild(appearanceText); 
                boilingPointTitle.appendChild(boilingPointText); 
                densityTitle.appendChild(densityText); 
                summaryTitle.appendChild(summaryText);
                cardCloseButton.appendChild(buttonText);
                cardMainDiv.appendChild(cardDiv);
                cardDiv.appendChild(imgDiv);
                imgDiv.appendChild(image);
                document.getElementById("showImage").src = `http://chemistry.bd.psu.edu/jircitano/${el.symbol}.gif` // https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/${el.name}_Spectra.jpg/120px-${el.name}_Spectra.jpg`//el.spectral_img;
                document.getElementById("showImage").alt = "Unknown Spectral Image for Selected Element . . .";
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
                imgDiv.appendChild(closeButtonDiv);
                closeButtonDiv.appendChild(cardCloseButton);
        
                cardCloseButton.addEventListener('click', event => {
                    cardMainDiv.style.display = "none";
                }); 
                
// filterElements(JSON.parse(json).elements);
    console.log(elements);    
        }
         
    console.log('finish');
    
     });
    function selectChange() {
        filterElements.call(input);
    }
      
     //function for search box
    function filterElements() {
        var elementSearch = this.value;
        var selectBoxOption = dropDownList.value;
        console.log(elementSearch);
        console.log(selectBoxOption);
     
        for (var i= 0; i < elements.length; i++) {
            var element = elements[i];
            var dataConfirmation = element[selectBoxOption];
            
            
            if(dataConfirmation == null) {
                continue;
            }
            
                dataConfirmation = "" + dataConfirmation;
            

            var elementHtml = document.getElementById(element.name);
            
            var searchBoxLowerCase = elementSearch.toLowerCase();
            var dataConfirmationLowerCase = dataConfirmation.toLowerCase();
            if (selectBoxOption.value == "number") {
              var match = element.number;
            }
            else {
            //variable for partial match search. Using .indexOf method
             match = dataConfirmationLowerCase.indexOf(searchBoxLowerCase);
            
            }
            
            //if statement for displaying hidden when no match or partial match has been
            if(match == -1) {
                elementHtml.style.display = "none";
            }
                else {
                    elementHtml.style.display = "flex";
                }
        }
    } 

  });
  
}  

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
console.log(getRandomIntInclusive(1, 119));

function getRandomElement(){
    var randomElement = getRandomIntInclusive(1, 119);
    var inputBox = document.getElementById("elementSearch");
    var selectOption = document.getElementById("searchSelect");
    
    selectOption.value = "number";
    inputBox.value = randomElement;
    
    var event = new Event("input");
    
    console.log(event);
    
    inputBox.dispatchEvent(event);
    

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

a(); 
//var myNode = document.getElementById("popupCard");
           // myNode.innerHTML = '';
           
           var el = document.getElementById('div-02'); */
           
           