function searchElement(form) {
   var listItems = document.getElementsByTagName('li'); 
   var elementSearch = document.getElementById('elementSearch').value;
   console.log(elementSearch);
    for (var index= 0; index< listItems.length; index++)
    {
        var element = listItems[index];
        
        var searchBoxLowerCase = elementSearch.toLowerCase();
        var listItemLowerCase = element.id.toLowerCase();
        
        var num = listItemLowerCase.indexOf(searchBoxLowerCase);
        
        if(num  == -1)
        {
            element.style.display = "none";
        }
    }
}



