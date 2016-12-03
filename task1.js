let ul = document.createElement('ul');
let userPrompt;
while (userPrompt = prompt()) {
  let li = document.createElement('li');
  li.textContent = userPrompt;
  ul.insertBefore(li, null);
}
document.body.insertBefore(ul, null);