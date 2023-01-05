class Course{
    #_price;
    constructor(title,length,price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    set price(price){
       if(price>0){
        this.#_price = price;
       }
       else{
        this.#_price = 0;
       }
    }

    get price(){
        return `$${this.#_price}`;
    }

    getPerPriceValue(){
        let courseDuration = this.length.toString();
       courseDuration = courseDuration.slice(0,courseDuration.length-3)
        return (courseDuration/this.price).toFixed(2);
    }

    getCourseSummary(){
        return `This Course offers you ${this.title} in ${this.price}.The duration of this course is ${this.length}.`;
    }
}

class PracticalCourse extends Course{
    constructor(title,length,price,numOfExercise){
        super(title,length,price)
     this.numOfExercise=numOfExercise;
    }
}

class TheoroticalCourse extends Course{

    constructor(title,length,price){
        super(title,length,price);
    }

    publish(){
        console.log('couseContent is published');
    }
}

const course1 = new TheoroticalCourse('JS-Complete','35Hrs',-3500);

const course2 = new PracticalCourse('css-from scratch','34Hrs',3500,76);

console.log(course1.price);
console.log(course2.getCourseSummary());
console.log(course2.numOfExercise);
console.log(course1.publish());