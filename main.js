/*
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
//forEach ,map,filter
//foreach
todos.forEach(function(todo){
    console.log(todo.text);
});



//map
const todoText= todos.map(function(todo){
    return todo.id;
});
console.log(todoText);


//filter
const todoComplete=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})

console.log(todoComplete);
*/

/*
const x=4;
const y=10;

if(x >5 || y >10){
    console.log("x is 10");
}
else if(x>10){
    console.log('x is greater than 10');
}
else {
    console.log('x is not 10');
}

*/

const x=11;
const color=x>10 ? 'red' :'blue';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


