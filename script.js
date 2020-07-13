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
const deleteButton = document.querySelector(`btn-delete`);

// Set a date

const today =  new Date();

// Hide and show form

hideButton.addEventListener('click', (event) => {
  if (form.classList.contains("hidden")!== true) {
      form.classList.add('hidden');
      hideButton.textContent = "Add a post";
  } else {
      form.classList.remove('hidden');
      hideButton.textContent = "Hide form";
  };
});


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
      <div class="card-footer text-muted">${today.toLocaleDateString()}</div>
    </div>`;

newPost.insertAdjacentHTML(`afterbegin`, myHtml)

// Number of the words user should enter

const numberOfWords = textarea.value.split(" ").length;
    if(numberOfWords < 20){ 
      textarea.classList.add(`is-invalid`);
      errorMsg.classList.remove(`hidden`);

    } else {
      textarea.classList.remove(`is-invalid`);
      textarea.style.border = `thin solid green`;
      errorMsg.classList.add(`hidden`);
    }


     form.reset();
  });


 const handleDelete = (event) => {
   if (event.target.classList.contains(`btn-delete`)) {
     deleteButton.closest(`.card`).remove();
   }
 }
 document.addEventListener(`click`, handleDelete);