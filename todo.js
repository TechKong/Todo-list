//const addForm = document.querySelector('.add');
//const list = document.querySelector('.todos');
//
//const generateTemplate = todo =>{
//    const html = `<li class="list-group-item d-flex align-items-center justify-content-between">
//    <span>${todo}</span>
//    <i class="fa-solid fa-trash-can delete"></i>
//</li>`;
//
//    list.innerHTML += html;
//};

//addForm.addEventListener('submit', e =>{
//    e.preventDefault();
//
//    const todo = addForm.add.value.trim();
//    if(todo.length){
//        generateTemplate(todo);
//        addForm.reset();
//    }
//    
//    
//});


const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search input');

const generateTemplate = (todo) =>{
    const html = `
    <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>`;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
    
});

//delete items
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    } 
});

//search items
const searchFilter = (item) =>{
    Array.from(list.children)
    //Using the chaining method
        .filter((todo) =>{
           
            return !todo.textContent.toLowerCase().includes(item);
            //this exclamation mark migates the boolean. i.e if its true, it's gonna turn it to false.
        })
        .forEach((todo) =>{
            todo.classList.add('filtered');
        });

        Array.from(list.children)
        .filter((todo) =>{
           
            return todo.textContent.toLowerCase().includes(item);
            //This part filters the elements that do match because we want to remove that class 'filtered'.
            //we have to remove the exclamation mark and also the add, below and replace it with  remove.
            //This happens when we get a class, we take it back off.
        })
        .forEach((todo) =>{
            todo.classList.remove('filtered');
        });
    
};


searchForm.addEventListener('keyup', () =>{
    const item = searchForm.value.trim().toLowerCase();
    searchFilter(item);
    
});
