// function hypolite(){
//     var name = document.getElementById("name").value;
//     var num = parseFloat( document.getElementById("mark").value);
//     var nu =  parseFloat(document.getElementById("mar").value);
//     var n =  parseFloat(document.getElementById("ma").value);
//     var d =  parseFloat(document.getElementById("m").value);
//     var e =  parseFloat(document.getElementById("mg").value);
//     var f = num + nu + n + d + e
//     var aver = f/5
//     alert("Enter name =" +name)
//     alert("Math =" +num)
//     alert("JS =" +nu)
//     alert("Vue =" +n)
//     alert("UX =" +d)
//     alert("CVC =" +e)
//     alert("sum =" +f)
//     alert("Average =" +aver)
// }
let table = document.querySelector("table")
// table above
var namme = document.getElementById("namme").value;
var num = parseFloat( document.getElementById("mark").value);
var nu =  parseFloat(document.getElementById("mar").value);
var n =  parseFloat(document.getElementById("ma").value);
var d =  parseFloat(document.getElementById("m").value);
var e =  parseFloat(document.getElementById("mg").value);
var f = num + nu + n + d + e
var aver = f/5
function hypolite(){
    // document.write("Enter name =" +name)
    // document.write("Math =" +num)
    // document.write("JS =" +nu)
    // document.write("Vue =" +n)
    // document.write("UX =" +d)
    // document.write("CVC =" +e)
    // document.write("sum =" +f)
    // document.write("Average =" +aver)
    table.innerHTML +=`
    <tr>
    <td>${namme.value}</td>
    <td>${names.value}</td>
    <td>${marks.value}</td>
</tr>
    `
}
