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
let cardId
let cards
let listsSection = document.querySelector(".listsSection")

let cardLists

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
                            
                            <ul class = "listsSection"> 
                            
                            </ul>
                        
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

// assigning subtasks to main task card 

function parentCard(event) { 
     cards = document.querySelectorAll(".card");
    console.log(event)
    // console.log(cards);

     cardId = event.path[3].getAttribute("id"); 

    console.log("card id", cardId);
    
    cards.forEach(card => { 

            console.log(card.getElementsByClassName("listsSection")[0])

        if(card.getAttribute("id") === cardId) { 

            list = card.getElementsByClassName("listsSection")[0];
            
        } 
        else { 
            console.log("card id unmatched")
        }
        console.log(card)
    } )
    
console.log(list)

}

//adding subtasks 

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

    const nodeList = `<li class = "lists" id="${subtaskLists.listId}"> ${subtaskLists.list} <i class="far fa-check-circle" id="markDone" onclick = "markDone(event)"></i> <i class="far fa-times-circle"></i> </li>`;

    listsSection.innerHTML += nodeList ;

    console.log(listsSection);
    }


    //mark a subtask as completed 
function markDone(event) { 

        console.log(event)
        console.log(cardId)
        console.log(list)

    let listId = event.path[1].getAttribute("id"); 

    //get the list of subtasks from its main task card  
    cards.forEach(listSet => { 

        //matches card id with list id

         if(cardId === listSet.getAttribute("id")) { 
                
                cardLists = listSet.querySelectorAll(".lists");          
                console.log(cardLists)

                //get li elements within the ul set from the focusing card 

            cardLists.forEach(li => { 
                let cardList = li.id;
                console.log(cardList)

                //
                if(cardList === listId) { 
                    console.log("clicked list id:", li.id)

                    let clickedList = document.getElementById(li.id)
                    console.log(clickedList)
                    clickedList.style.textDecoration = "line-through";
                    clickedList.style.color = "green";
                }
                else { 
                    console.log("ID of selected list unmatched")
                }
            })      
                                
            }
        
        else { 
            console.log("Card Id and selected Card list unmatched")
        }
    
    } )

}
