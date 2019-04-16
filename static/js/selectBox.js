function selectBoxSearch() {        
        var dropDownList = document.getElementById("searchSelect");
            dropDownList.addEventListener("change", function() {
        var dropDownOption = dropDownList.selectedOptions;
        
        for (var i=0; i<dropDownOption.length; i++);
        
        // display value property of select list (from selected option)
        console.log(dropDownList.value);

});
}
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

   function selectBoxSearch() { 
        var selectBoxOption = this.value;
        console.log(selectBoxOption);
    }
    
   // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


 function filterElements() {
        var elementSearch = this.value;
        var selectBoxOption = dropDownList.value;
        console.log(elementSearch);
        console.log(selectBoxOption);
     
        for (var i= 0; i < elements.length; i++) {
            var element = elements[i];
            var dropDownOptionList = element[selectBoxOption];
            console.log(dropDownOptionList);
            
           /*
            //sets atomic mass to 1 dp 
            var searchMass = element.atomic_mass.toFixed(1);
            var dropDownListNumber = element.number;
            //console.log(dropDownListNumber); */
            var elementHtml = document.getElementById(element.name);
             var searchMass = element.atomic_mass.toFixed(1);
            //variables for case sensitive search .toLowerCase method
            var searchBoxLowerCase = elementSearch.toLowerCase();
            var elementsLowerCase = element.name.toLowerCase();
            //var symbolsLowerCase = dropDownListSymbol.toLowerCase();
            //var summaryLowerCase = dropDownListSummary.toLowerCase();
            //var discoveredByLowerCase = dropDownListDiscoveredBy.toLowerCase(); 
            
            //variable for partial match search. Using .indexOf method
            var match = elementsLowerCase.indexOf(searchBoxLowerCase);
            var massNumMatch = searchMass.indexOf(searchBoxLowerCase);
           // var symbolMatch = symbolsLowerCase.indexOf(searchBoxLowerCase); 
            //var AtomicNumMatch = dropDownListNumber.indexOf(searchBoxLowerCase);
           // var summaryMatch = summaryLowerCase.indexOf(searchBoxLowerCase);
            
            //if statement for displaying hidden when no match or partial match has been
            if(match == -1 && massNumMatch == -1) {
                elementHtml.style.visibility = "hidden";
            }
                else {
                    elementHtml.style.visibility = "unset";
                }
        }
    } 

  });
  
}  

window.onload = load;


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// don't use Number!
  if(dataConfirmation == typeof 0) {
                dataConfirmation.toString();
            
            }
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours