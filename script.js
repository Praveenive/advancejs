

function value1()
{
    // document.getElementById("myForm");
    let first=document.getElementById("first").value;
    let last= document.getElementById("last").value;
    let add1= document.getElementById("address1").value;
    let add2= document.getElementById("address2").value;
    let pin= document.getElementById("pin").value;
    let state= document.getElementById("State").value;
    let country=document.getElementById("country").value;
    let ele = document.createElement("div");
    let i,ele1= document.getElementsByClassName("gender");
            for(let i=0;i<ele1.length;i++)
            {
                if(ele1[i].checked)
              i=(ele1[i].value);
            }
    document.body.append(ele);
let res = first+"<br>"+last+"<br>"+add1+"<br>"+add2+"<br>"+pin+"<br>"+state+"<br>"+country;
ele.innerHTML=res;
ele.setAttribute("class",align);
}
