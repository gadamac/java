function char(){
    var string = document.getElementById("originalstring").value;
    var index1 = parseInt(document.getElementById("index").value);
    var removestr =string.slice(index1) ;
    var newstring = string.slice(0,index1) + string.slice(index1+1);
    document.getElementById("para").innerHTML="The new string is " + newstring;
}
   