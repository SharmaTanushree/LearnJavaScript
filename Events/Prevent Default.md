## Prevent Default

- There are certain default actions assosciated with some element. Example Form - if submit event is triggered then it sends the data to the source and gets reload.

- If we want to prevent this deafult behaviour to take place instead define custom behaviour for that event, then we use preventDefault method on the event .
  
[Example](./prevent_default.html)

> In the above mentioned example, on clicking the submit button , submit event is triggered and we have added eventListener to the form.

> The dafault behaviour of submit event is prevented to take place.

> If we comment out the method call  ev.preventDefault() then the next statement won't get execute.
