# Default Arguments in Function

<div style='box-shadow: 0 0 40px 10px #aaa4'>

- In javascript we can call a function with more number of parameters with less number of arguments.

```js
function declareWinner(player1Score, player2Score){
let result;
if(player1Score === player2Score) result="it's a draw."
else if(player1Score > player2Score) result='Player1 won!';
else if(player2Score > player1Score) result = 'Player2 won!';
return result;
}

declareWinner(10,15);  //player1 won!
declareWinner(15,15);  //it's a draw
declareWinner(10);     //undefined
```
- In the example above (line no. 16) function call with one argument is not throwing any error .The second parameter of the function becomes undefined as no value is passed for it.

</div>
<br>

<div style='box-shadow: 0 0 40px 10px #aaa4'>

- We can provide default values to function parameters.On function call if the parameter remains <strong>undefined</strong> then it's value is set to default value.


```js
function declareWinner(player1Score, player2Score = 10){
let result;
if(player1Score === player2Score) result="it's a draw."
else if(player1Score > player2Score) result='Player1 won!';
else if(player2Score > player1Score) result = 'Player2 won!';
return result;
}

declareWinner(15,15);     //"it's a draw."
declareWinner(15);        //'Player1 won!'
declareWinner(7)          //'Player2 won!'
declareWinner(7,'');      //'Player1 won!'
declareWinner(7,0);       //'Player1 won!'
declareWinner(7,null);    //'Player1 won!'
```

</div>

<div style='box-shadow: 0 0 40px 10px #aaa4'>

- In Javascript we can even define a function parameter with default value prior to undefined parameters.
```js
function declareWinner(player1Score = 10,player2Score){
let result = `Player1 has scored ${player1Score} points. Player2 has scored ${player2Score} points. `;
if(player1Score === player2Score) result +="it's a draw."
else if(player1Score > player2Score) result +='Player1 won!';
else if(player2Score > player1Score) result += 'Player2 won!';
return result;
}

declareWinner(20,30) //'Player1 has scored 20 points. Player2 has scored 30 points. Player2 won!'

declareWinner(20);  //'Player1 has scored 20 points. Player2 has scored undefined points. '

```

</div>

<div style='box-shadow: 0 0 40px 10px #aaa4'>

- We can even use a defined param to define another param.
```js
function declareWinner(player1Score,player2Score = player1Score%2==0 ? player1Score : 20){
let result = `Player1 has scored ${player1Score} points. Player2 has scored ${player2Score} points. `;
if(player1Score === player2Score) result +="it's a draw."
else if(player1Score > player2Score) result +='Player1 won!';
else if(player2Score > player1Score) result += 'Player2 won!';
return result;
}

declareWinner(30); //"Player1 has scored 30 points. Player2 has scored 30 points. it's a draw."

declareWinner(15);  //'Player1 has scored 15 points. Player2 has scored 20 points. Player2 won!'
```
- In the above code player1Score is a predefined parameter which is used to define player2Score parameter

</div>
  


