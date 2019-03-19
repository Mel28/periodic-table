function printFile(elementData) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
    reader.readAsText(file);
}

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

loadJSON(function(json) {
  console.log(json); // this will log out the json object 
  console.log(JSON.parse(json));
});

var hydrogen = {
    name: "Hydrogen",
    appearance : "colorless gas",
    atomic_mass  : 1.008,
    element_detail : function() {
       return this.name + " " + this.atomic_mass;
    }
};

