//function for search box

function searchElement(form) {
   var listItems = document.getElementsByTagName('li'); 
   var elementSearch = document.getElementById('elementSearch').value;
   var atomicMass= document.getElementsByClassName('atomic-mass');
   console.log(elementSearch);
   
   //for loop to loop through list items
   
    for (var index= 0; index < listItems.length; index++)
    {
        var element = listItems[index];
        var searchMass = atomicMass[index];
    //variables for case sensitive search .toLowerCase method
        var searchBoxLowerCase = elementSearch.toLowerCase();
        var listItemLowerCase = element.id.toLowerCase();
        var atomicMassValue = searchMass.innerHTML;
    //variable for partial match search. Using .indexOf method
    
        var num = listItemLowerCase.indexOf(searchBoxLowerCase);
        var massNum = atomicMassValue.indexOf(searchBoxLowerCase);
    //if statement for displaying none when no match or partial match has been found
        if(num == -1 && massNum == -1 )
        {
            element.style.display = "none";
        }
    }
}

//function for reset button, resets periodic table

function resetElements(form) {
   var listItems = document.getElementsByTagName('li'); 
   var elementSearch = document.getElementById('elementSearch').value;
   console.log(elementSearch);
//for loop, to loop through all list items
   for (var index= 0; index < listItems.length; index++) {
       var element = listItems[index];
       {
           element.style.display = "flex";
       }
   }
}