function addPy() {
    var str = document.getElementById("inputField").value;
    var lowercaseStr = str.toLowerCase()
    //var result = " ";
    if (lowercaseStr.startsWith("py")) {
      document.getElementById("para").innerHTML += str;
      // same string
      //result=str;
    } else {
      document.getElementById("para").innerHTML= "Py" + str; // add Py to the beginning
     //result = "Py" + str;
    }
    //document.getElementById("para").innerHTML=result;
    
       
  }