const todos=[
   {
        id:1,
        text:"Take out trash",
        isCompleted:true
    },
    {
        id:2,
        text:"meeting ",
        isCompleted:true
    },
    {
        id:3,
        text:"Dentist appointment",
        isCompleted:true
    }
];


/*
//For loop
for (let i =0; i<10;i++) {
    console.log(`for loop number: ${i}`);
}

//while
let i=0;
while(i<10){
    console.log(`while loop number :${i}`);
    i++;
}


//For loop
for (let i =0; i<todos.length;i++) {
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.ids);
}
    */
//forEach ,map,filter
/*
todos.forEach(function(todo){
    console.log(todo.text);
});

*/

/*
const todoText= todos.map(function(todo){
    return todo.id;
});
console.log(todoText);
*/

//filter
const todoComplete=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})

console.log(todoComplete);

