function addlater1st_last()
{
    let str1 =document.getElementById("orginalstr").value;
    console.log(str1)
    let newStr = str1.charAt(0) + str1.slice(0) + str1.charAt(0);
    document.getElementById("result").innerHTML = newStr;
}