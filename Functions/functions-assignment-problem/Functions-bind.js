/**
 * bind() come in handy in situations where you wan't to pre-configure a function's argument, 
 * when you're not calling the functions on your own
 */


const combine = (resultHandler,operation,...numbers)=>{
    let result = 0;
    for(let item of numbers){
        if(operation=='ADD'){
            result += item;
        }
        else{
            result  -= item;
        }
    }

    resultHandler(result);
};

const showResult = (msg,res)=>console.log(`${msg} ${res}`);

combine(showResult.bind(this,'The result of Adding the numbers is'),'ADD',1,2,3,4,5);
combine(showResult.bind(this,'The result of subtracting the numbers is'),'SUBTRACT',1,2,3,4,5);
