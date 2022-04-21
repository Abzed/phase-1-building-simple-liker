// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', changeheart)

function changeheart(){
  const btn = document.querySelector('.like-glyph')
  btn.addEventListener('click', () => {
    mimicServerCall().then(res => {
      if(btn.className == 'like-glyph'){
        btn.innerHTML = FULL_HEART
        btn.className = 'activated-heart like-glyph'
        console.log(res);
      }
      else{
        btn.className = 'like-glyph'
        btn.innerHTML = EMPTY_HEART
      }
    }).catch(error => {
      btn.className = 'like-glyph'
      btn.innerHTML = EMPTY_HEART
      modal.className = ''
      setTimeout(() => modal.className= 'hidden', 3000)
      console.log(error);
    })
  })
}
// btn.addEventListener('click', () => {
//   if(btn.className == 'activated-heart like-glyph'){
//     btn.className = 'like-glyph'
//     btn.innerHTML = EMPTY_HEART
//   }
// })



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
