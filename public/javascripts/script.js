// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                addImage(steak.jpg,'#table')
  })
})
})
})
})
})
})
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() =>
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')).then(()=>
    addFood(mashPotatoes[2], '#mashPotatoes')).then(()=>
      addFood(mashPotatoes[3], '#mashPotatoes')).then(()=>
        addFood(mashPotatoes[4], '#mashPotatoes'))
 
*/
// Iteration 3 using async and await

  async function makeFood(steps,id) {
    for (let step of steps){
      await addFood(step,`#${id}`);
    }
    // ... your code here
    document.getElementById('table').innerHTML += `<img src='public/images/${id}.jpg'>`
  }

  async function makeFood2(steps, id){
    steps.forEach(async element => {
      await addFood(element,id)
  })}
   
  
  async function makeFood3(steps, id){
    for(let i=0; i<steps.length;i++){
      await addFood(steps[i],id)
    }
         
  }
   
  
  

  //makeFood3(brusselSprouts,'#brusselSprouts');



// makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([
  
  makeFood(mashPotatoes, 'mashPotatoes'),
  makeFood(steak, 'steak'),
  makeFood(brusselSprouts, 'brusselSprouts')
 
])
.then(()=> document.body.innerHTML += `<button>Dinner is served!</button>`)