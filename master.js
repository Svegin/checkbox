let checkbox;
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkbox);

let lastChecked;

function handleCheck(e) {
  // check of they had the shift key down
  // and check that theyare checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
