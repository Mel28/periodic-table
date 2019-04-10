function selectBoxSearch() {        
        var dropDownList = document.getElementById("searchSelect");
            dropDownList.addEventListener("change", function() {
        var dropDownOption = dropDownList.selectedOptions;
        
        for (var i=0; i<dropDownOption.length; i++);
        
        // display value property of select list (from selected option)
        console.log(dropDownList.value);

});
}
