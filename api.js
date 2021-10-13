// const myInit = {
//   mothod:'GET',
//   Headers:{
//       'Content-Type': 'application/json' 
//   },
//   mode:'cors',
//   cache:'default'
// };

// const myRequest = new Request("./db.json", myInit)

// fetch(myRequest)
// .then(function(resp){
//   return resp.json()
// })
// .then(function(data){
//   console.log(data.users);
// })



const myList = document.querySelector('ul');
const myRequest = new Request('db.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
  
  })
  .catch(console.error);