let todoList = [];

var addTodo = document.querySelector(".add-list"); 
var page = document.querySelector(".page"); 

var popupAdd = document.querySelector(".new-list");
var addBtn = document.querySelector("#add");

var todoTitle = document.querySelector("#todoTitle");
var newTask = document.querySelector("#newTask");
var value = newTask.value.trim();

// var todoCard = document.querySelector(".card1");

var cardSection = document.querySelector(".cardSection");



addTodo.addEventListener("click", () => { 
    page.style.filter = "blur(4px)";
    popupAdd.style.visibility =  "visible";
    console.log("add btn clicked");
});


addBtn.addEventListener("click", () => { 

    newTask.setAttribute("value", "defaultValue"); 
    // todoTitle.textContent += newTask.value;
    const title = newTask.value; 

    const todo = { 
        id: Date.now(),
        heading: title
    }
    console.log(todo);

    // todoCard.style.visibility =  "visible";
    popupAdd.style.visibility =  "hidden";
    page.style.filter = "blur(0)";
    

    const nodeCard = document.createElement("card1"); 
    nodeCard.setAttribute("class", `card1`);
    nodeCard.setAttribute("data-key", todo.id);


    
    nodeCard.innerHTML = `<p id="todoTitle"> ${todo.heading} </p>
                           <hr/> `;

    document.getElementsByTagName("section")[0].appendChild(nodeCard); 

    // return nodeCard;

     
    

});



