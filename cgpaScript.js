function fun(x){
    return Number.parseFloat(x).toFixed(2);
}
function sum(){
    var x=document.getElementById("total").value/document.getElementById("no").value;
    document.getElementById("cgpa").value=fun(x);
    event.preventDefault();
}