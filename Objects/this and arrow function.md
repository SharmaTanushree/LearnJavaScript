## this in arrow function

1. arrow function doesn't know this.
2. arrow function doesn't sets this.
3. this refernce inside an arrow function is same as this reference outside the arrow function.
   
 ```js
 console.log(this)  //window
 let printName = ()=>{
    console.log(this);   
 }
 printName();    //window
 ```


 ```js
 let person = {
    uid : 54,
    name : 'John',
    printName : ()=>{
        console.log(this);
        console.log(this.name);
    }
 }

 person.printName();
 //window
// undefined
 ```  


 ```js
 const members = {
    teamName : 'OxyFoxy',
    members : ['John','Jady','Jimmy'],
    getTeamMembers(){
        this.members.forEach(m=>{
            console.log(`${m} - ${this.teamName}`)
        })
    }
 }

 members.getTeamMembers();
 /*
 John - OxyFoxy
 Jady - OxyFoxy
 Jimmy - OxyFoxy
 */
// in the above code the function is executed by for-Each. since the function is arrow function it doesn't sets this inside it.
 ```


  ```js
 const members = {
    teamName : 'OxyFoxy',
    members : ['John','Jady','Jimmy'],
    getTeamMembers(){
        this.members.forEach(function(m){
            console.log(`${m} - ${this.teamName}`)
        })
    }
 }

 members.getTeamMembers();
 /*
John - undefined
Jady - undefined
Jimmy - undefined
 */

// in the above code the function is executed by for-Each and hence the function defined in line 57 sets this to window object.
 ```