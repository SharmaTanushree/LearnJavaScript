let obj={
    name: 'jill',
    age: 54,
    profession: 'professor'
};

console.log(obj.retired); //undefined

obj.age = undefined;
console.log(obj);   //{name: 'jill', age: undefined, profession: 'professor'}

obj.age = null;
console.log(obj);  //{name: 'jill', age: null, profession: 'professor'}


delete obj.age;
console.log(obj);  //{name: 'jill', profession: 'professor'}
