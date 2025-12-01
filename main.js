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
const x=6;
const y=10;

if(x >5 && y >10){
    console.log("x is 10");
}
else if(x>10){
    console.log('x is greater than 10');
}
else {
    console.log('x is not 10');
}


const x=11;
//const color=x>10 ? 'red' :'blue';
const color='green';
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

function addNums(num1,num2){
    console.log(num1+num2);
}

addNums();


function subNums(num1,num2){
    console.log(num1-num2);
}

subNums(7,5);

function subNums(num1,num2){
    return num1-num2;
}

console.log(subNums(7,5));



const subNums = (num1,num2) => {
    return num1-num2;
}
console.log(subNums(20,4));
*/
//constructor
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName = lastName;
    this.dob =new Date(dob);
    this.getBirthyear=function(){
        return this.dob.getFullYear();
    }
    this.getFullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object
const person1 = new Person('john', 'doe', '2004-07-13');
const person2 = new Person('Mary', 'smith', '2005-08-15');


console.log(person1.dob.getFullYear());//
//console.log(person2.getBirthyear());//2005
//console.log(person1.getFullName());//john doe