function MultipleOf3()
 {
    var number=document.getElementById("MultipleOf" ).value;
    if(number%3==0 && number%7===0)
        {
        document.getElementById("answer").innerHTML= number + "is multiple of 3 & 7";
        
    }
else if(number%7==0)
    {
    document.getElementById("answer").innerHTML= number + "is multiple of 7";
}
else if(number%3==0)
    {
    document.getElementById("answer").innerHTML= number + "is multiple of 3";
}
else
{
    document.getElementById("answer").innerHTML= number + "enter a positvie interger"; 
}
}