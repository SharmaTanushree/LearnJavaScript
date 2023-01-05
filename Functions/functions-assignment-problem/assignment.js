function sayHello(name) {
  console.log('Hi ' + name);
}

let sayHello = (greet = 'Hello',name)=>`${greet} ${name}`;


let sayHello = function(){
  console.log(` hi folks!`)
}


let res = sayHello();
console.log(res);


let checkInput = (cbFunction,...userInput)=>{
  let hasEmptyString = false;
if(userInput){
  for(let item of userInput){
    if(!userInput){
      hasEmptyString = true;
      break;
    }
  }
  if(!hasEmptyString){
    cbFunction();
  }
  return;
}
};

checkInput(()=>{console.log('CB executed')},'abc','defh')