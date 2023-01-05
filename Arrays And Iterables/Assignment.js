let arr =[];

let i =0;
while(i<10){
    const num = ~~(Math.random()*10);
    arr.push(num);
    i++;
}

let filteredArr = arr.filter((item, idx, array)=> item >= 5);

let mappedArr = arr.map((item, idx, array)=>({num : item}));

let reducedArr = arr.filter((item, idx, array)=>item > 0).reduce((prev, cur, idx, arr)=>{
   return prev*cur
},1)


function findMaxMin(arr){
return  [Math.max(...arr), Math.min(...arr)];
}

[max, min]=findMaxMin(arr);


let set =  new Set();
let j =0;
while(j<10){
    const num = ~~(Math.random()*10);
    set.add(num);
    j++;
}

