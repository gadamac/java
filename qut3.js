function changeFirstAndLast() {
    let str = document.getElementById("inputStr").value;
    if (str.length >= 1) {
      let newStr = str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1);
      document.getElementById("para").innerHTML ='this is new ' + newStr;
    } else {
      document.getElementById("para").innerHTML = "String length must be broader than or equal to 1.";
    }
  }
  