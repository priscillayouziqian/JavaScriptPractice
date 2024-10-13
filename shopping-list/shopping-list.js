let array = [];
const shoppingList = document.getElementById("shoppingList");
document.getElementById("printButton").addEventListener("click", printList);

function printList() {
    window.print(); // Calls the print dialog
}

function getItem(){
    event.preventDefault();

    const item = document.getElementById("item").value;
    // console.log(item);

    if(item.trim() === ''){
        alert("Please enter a valid item");
        return;
    }
    try{
        if(item &&!array.includes(item)){
            array.push(item);
            array.sort();
            removeList();
            makeList()
        }else{
            throw new Error(`Item ${item} already exists in the array`);
        }
        document.getElementById("myForm").reset(); //Clear the input box form so that the user can enter another item 
        console.log(array);
        
    } catch(error){
        console.error("Error adding item to array:", error);
    }
    
}

function makeList(){
    // shoppingList.innerHTML = ''; //a easy way to clear the list （only works on the chrome browser)
    for(const arrayItem of array){
        listItem = document.createElement('li'); //create a element
        listItem.textContent = arrayItem; //manipulate the element
        listItem.addEventListener("click", removeItem);
        shoppingList.appendChild(listItem); //add the element to the DOM
    }
}

function removeList(){
    while(shoppingList.firstChild){
        shoppingList.removeChild(shoppingList.firstChild);
    }
}

function removeItem(event) {
    try{
        const item = event.currentTarget.textContent;
        const index = array.indexOf(item); 

        if (index !== -1) { // Check if the item exists in the array
            array.splice(index, 1);
            removeList();
            makeList();
        } else {
            console.warn("Item not found in the array."); 
        }
    } catch(error){
        console.error("Error removing item from array:", error);
    }   
}
