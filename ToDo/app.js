let btn = document.querySelector("button");
let ul = document.querySelector("ul")
btn.addEventListener("click",demo)

function demo(){

    let input = document.querySelector("input");
    let task = document.createElement('li');

    if(input.value==""){
        alert("First Enter the Task");
    }
    else{
        
        task.innerHTML=`<li> ${input.value}`;
        // count=count+1;
        document.querySelector('ul').append(task);
        task.classList.add("list"); //add css class
        input.value="";
        
        let delbtn = document.createElement("button");
        delbtn.innerText="Delete";
        delbtn.classList.add("delbtn");
        task.appendChild(delbtn);
    }
}
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
