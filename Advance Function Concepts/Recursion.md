## Recursion

```js
  const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));
```