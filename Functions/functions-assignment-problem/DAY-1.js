// Get random number between two numbers.

const getRandomNumber = function(max,min){
return (~~(Math.random()*(max-min)))+min;
}

getRandomNumber(0,5)