let todoList = [];

let count = 0;

var addTodo = document.querySelector(".add-list"); 
var page = document.querySelector(".page"); 

var popupAdd = document.querySelector(".new-list");
var addBtn = document.querySelector("#add");
var addsubtaskBtn = document.querySelector("#addSubtask");


var todoTitle = document.querySelector("#todoTitle");
var newTask = document.querySelector("#newTask");
var value = newTask.value.trim();

var popupaddSubtask = document.querySelector(".new-subtask");

var newSubtask = document.querySelector("#newsubTask");

var subtasks

let list
let todo;

let listsSection = document.querySelector(".listsSection")
/* Add task */

addTodo.addEventListener("click", () => { 
    page.style.filter = "blur(4px)";
    popupAdd.style.visibility =  "visible";
    // console.log("add btn clicked");
});

function cancelPopup() { 
    popupAdd.style.visibility =  "hidden";
    popupaddSubtask.style.visibility =  "hidden";
    page.style.filter = "blur(0)";
}

/*dynamically adds task card*/ 

function addCard(){
    
    newTask.setAttribute("value", "defaultValue"); 
    const title = newTask.value; 
    
     todo = { 
        id: Date.now(),
        heading: title,
     }



    popupAdd.style.visibility =  "hidden";
    page.style.filter = "blur(0)";
    
    const nodeCard = document.createElement("card"); 
    nodeCard.setAttribute("class", `card`);
    nodeCard.setAttribute("id", `${todo.id}`);

    nodeCard.innerHTML = `  <div class="cardsSection" id = "${todo.id}">
                            <p id="todoTitle" > ${todo.heading} </p>
                            <hr/>
                            <div class = "listsSection">
                            <ul class = "pending"> 
                            
                            </ul>
                            </div>
                            <div class="icon functions">
                            <div id="iconSubtask" onclick="addSubtask(event) ; parentCard(event)">
                            <i class="fas fa-plus-circle"></i>
                            </div>

                            <div id = "iconDelete" onlick="deleteCard()">
                            <i class="fas fa-trash-alt"></i>
                            </div>
                            </div>
                            </div>`;

    document.getElementsByTagName("section")[0].appendChild(nodeCard); 
        todoList.push(todo);
        
}

/*adding subtasks*/

function addSubtask(event) { 
    popupaddSubtask.style.visibility = "visible";
    page.style.filter = "blur(4px)";
    // console.log("add sub-task clicked");
      
}


function parentCard(event) { 
    let cards = document.querySelectorAll(".card");

    // console.log(cards);

    let cardId = event.path[3].getAttribute("id"); 
    console.log("card id", cardId);

    cards.forEach(card => { 
        if(card.getAttribute("id") === cardId) { 
             console.log(card.getElementsByClassName("listsSection")[0])
             console.log("card id", card.getAttribute("id"));
            list = card.getElementsByClassName("listsSection")[0];
            console.log("id matched")
        } 
        else { 
            console.log("id unmatched")
        }
        console.log(card)
    } )
    

console.log(list)

}

function addLists(listsSection) {

    popupaddSubtask.style.visibility = "hidden";
    page.style.filter = "blur(0)";
    console.log("add subtask btn clicked");


    newSubtask.setAttribute("value", "defaultValue" );
    const subtaskTitle = newSubtask.value;

    const subtaskLists = { 
        listId: count++,
        list: subtaskTitle
    }

    const nodeList = `<li id="${subtaskLists.listId}"> ${subtaskLists.list} </li>`;

    listsSection.innerHTML += nodeList ;

    
    console.log(listsSection);
        // console.log(todoList);
        
    }