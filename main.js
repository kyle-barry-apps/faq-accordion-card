let accs = document.getElementsByClassName('accordion')

const itemsAnswers = {
  items: [],
  answers: []
}

// Populating an object with all the accordion items and answers
for (i = 0; i < accs.length; i++) {
  const item = document.getElementById(`item-${i+1}`)
  const answer = document.getElementById(`answer-${i+1}`)
  itemsAnswers.items.push(item)
  itemsAnswers.answers.push(answer)
}

let selected = null

// Creating an event listener for each accordion item
for (i = 0; i < accs.length; i++) {
  accs[i].addEventListener("click", (e) => {

    // Resetting all answers and items to original state so more than one can't be open at once
    for (const answering of itemsAnswers.answers) {
      answering.style.display = 'none'
    }
    for (const item of itemsAnswers.items) {
      item.classList.remove('active-item')
    }

    // Grabbing values from currently selected item
    const currAcc = e.target
    const id = currAcc.id.split('-')[1]
    const answer = document.getElementById(`answer-${id}`)
    const arrow_img = currAcc.querySelector('img')

    // If the one already selected is clicked again, this keeps it folded up
    if (selected === id) {
      arrow_img.classList.remove('active-arrow')
      selected = null
    } else {
      answer.style.display = 'block'
      currAcc.classList.add('active-item')
      arrow_img.classList.add('active-arrow')
      selected = id
    }
  })
}