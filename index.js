for(let age=30; age<40 ; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}


const gifts = ["teddy bear", "drone", "doll"];


function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}


wrapGifts(gifts);

function writeCards(people,event){
    const messages = [];
    for (let i = 0; i < people.length; i++) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
        console.log[messages];
      }
      return messages;
}



function countDown(numb){
    
    while(numb>=0){
    console.log(numb--)
 }

}
