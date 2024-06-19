
let input = document.querySelectorAll('input'),
  form = document.querySelector('form'),
  age = document.querySelector('select'),
  content = document.getElementById('content')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(input[2])
  let users = [
    {
      kitobnomi: input[0].value,
      kitobmualifi: input[1].value,
      miqdori: age.value,
    },
  ]
  if (
    users[0].kitobnomi === '' ||
    users[0].kitobmualifi === '' ||
    users[0].kitobnomi === null ||
    users[0].kitobmualifi === null
  ) {
    alert("Ma'lumotlaringizni kiriting")
  } else {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `<div id='row'><h2 class='alert alert-danger'>
  Kitob nomi: ${users[0].kitobnomi} 
  Kitob mualifi:  ${users[0].kitobmualifi}   
  Miqdori:  ${users[0].miqdori } 
  Tavsiya qilasizmi: ${input[2].checked ? 'Ha' : 'Yoq'} 
  <button class='btn btn-danger' onclick="remove(this)">O'chirish</button></h2></div>`
    content.append(newDiv)
    form.reset()
  }
})

function remove(btn) {
  btn.closest('div').remove()
}
