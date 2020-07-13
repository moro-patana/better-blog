console.log('it works');
// Grab elements

const newPost = document.getElementById(`post-list`);
const titleInput = document.querySelector(`#postTitle`);
const authorInput = document.querySelector(`
[name='postAuthor']`);
const sourceInput = document.querySelector(`[name="postImg"]`);
const submitButton = document.querySelector('.btn-primary');
const textarea = document.querySelector(`.form-control[name="postContent"]`);
const form = document.querySelector(`#post-form`);
const hideButton = document.querySelector(`#show-form`);
const errorMsg = document.querySelector(`#error-message`);


const today =  new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// Add eventListener to the submit button

submitButton.addEventListener(`click`, ($event) => {
    $event.preventDefault();
const myHtml = `
    <div class="card">
      <img class="card-img-top" src="${sourceInput.value}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${titleInput.value} <small>by ${authorInput.value}</small></h5>
        <p class="card-text">${textarea.value}</p>
        <button type="button" class="btn btn-sm btn-light btn-delete">Delete entry</button>
      </div>
      <div class="card-footer text-muted">${today}</div>
    </div>`;

newPost.insertAdjacentHTML(`afterbegin`, myHtml)

     form.reset();
  });

  textarea.addEventListener(`blur`, ($event) => {
    if (textarea.value > 20) {
      textarea.style.border = `thin solid green`;
      errorMsg.style.display = `none`;
    } else {
      textarea.style.border = `thin solid red`;
   errorMsg.style.display = `block`;
    }
  });
  
  

  hideButton.addEventListener('click', (event) => {
    if (form.classList.contains("hidden")!== true) {
        form.classList.add('hidden');
        hideButton.textContent = "Add a post";
    } else {
        form.classList.remove('hidden');
        hideButton.textContent = "Hide form";
    };
});
 
  // deleteButton.addEventListener(`click`, (event) => {
  //   if (deleteButton.clicked === true) {

  //   }
  // })