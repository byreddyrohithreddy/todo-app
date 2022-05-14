const list3=document.querySelector(".list");
function func()
{
    var today = new Date();
    var options = { month: 'long'};
    var month=new Intl.DateTimeFormat('en-US', options).format(today);
    var date = (month)+' '+today.getDate()+', '+today.getFullYear();
    var name=document.getElementById("text").value;
    if(name=="")
    {
        alert("eneter text to add task");
    }
    else 
    {
        document.getElementsByClassName("no-list")[0].style.display="none";
        var dd=`<i style="color:solid-black">${date}</i>
        <b>${name}</b>
        <div>
            <input type="checkbox" class="check" onclick="checkItem(this)">
            <a  class="material-icons" id="one" title="add item" style="cursor:pointer" onclick="deleteItem(this)">delete</a>
        </div>`;

        let li=document.createElement("div");
        li.className="list-item";
        li.innerHTML=dd;
        list3.append(li);
    }
}
function func1()
{
    list3.innerHTML="";
    document.getElementsByClassName("no-list")[0].style.display="block";
}

function checkItem(e)
{
    console.log(e.parentNode.parentNode.children[1]);
    let item = e.parentNode.parentNode.children[1];
    if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = "none";
        item.style.color = "white";
    } else {
        item.style.textDecoration = "line-through";
        item.style.color = "lightgrey";
    }
}
function deleteItem(e)
{
    let item = e.parentNode.parentNode;
    item.remove();
    const list4=document.querySelectorAll(".list-item");
    console.log(list4);
    if(list4.length===0)
    {
        document.getElementsByClassName("no-list")[0].style.display="block";
    }
}