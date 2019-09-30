const mul = (x, y, z) => { return x * y * z }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) 
  {
    event.target.nextElementSibling.innerHTML = ''
  } 
  else 
  {
    event.target.nextElementSibling.innerHTML = ''
    event.target.focus()
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#length').checkValidity() && document.querySelector('#breadth').checkValidity() && document.querySelector('#height').checkValidity())
   {
    const i = parseInt(document.querySelector('#length').value)
    const j = parseInt(document.querySelector('#breadth').value)
    const k = parseInt(document.querySelector('#height').value)
    const ans = ` Volume of Box with length:${i}, breadth:${j}, height:${k} is ${mul(i, j, k)} `
    document.querySelector('#result').innerHTML = ans
  }
}
/*
const updateWithJoke = async (event) => {
  document.querySelector('#result').innerHTML = ''
  const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
  const response = await fetch(url)
  const obj = await response.json()
  const joke = obj.value.joke || 'No joke for you.'
  document.querySelector('#result').innerHTML = joke
}
*/
// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'length') ||
    (event.target && event.target.id === 'breadth') || 
    (event.target && event.target.id === 'height')) 
  {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'mulButton')
   { 
     updateWithMultiply(event)
   }
})
/*
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})
*/