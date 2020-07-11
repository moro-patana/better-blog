console.log('it works');
// Grab elements

const newPost = document.getElementById(`post-list`);
const titleInput = document.querySelector(`#postTitle`);
const authorInput = document.querySelector(`
[name='postAuthor']`);
const sourceInput = document.querySelector(`[name="postImg"]`);
const button = document.querySelector('.btn-primary');
const textarea = document.querySelector(`.form-control[name="postContent"]`);
const form = document.querySelector(`#post-form`);


// hideButton.addEventListener(`click`, (event) => {
//   if (hideButton.clicked === true) {
//     form.style.display = "none";
//     hideButton.textContent.style = "none";
//   } else {
//     form.style.display = "block";
//     hideButton.textContent = `Add post`;
//   }
// })
// const image = document.getElementsByClassName(`card-img-top`);
// const newHeading = document.querySelector(`.card-title`);
// const newParagraph = document.querySelector(`.card-text`);
// const deleteButton = document.querySelector(`.btn-delete`);
// const cardFooter = document.querySelector(`text-muted`);

// Add eventListener to the submit button

button.addEventListener(`click`, ($event) => {
    $event.preventDefault();
const myHtml = `
    <div class="card">
      <img class="card-img-top" src="${sourceInput.value}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${titleInput.value}</h5>
        <p class="card-text">${textarea.value}</p>
        <button type="button" class="btn btn-sm btn-light btn-delete">Delete entry</button>
      </div>
      <div class="card-footer text-muted></div>
    </div>`;

newPost.insertAdjacentHTML(`afterbegin`, myHtml)

     form.reset();
  });

  // deleteButton.addEventListener(`click`, (event) => {
  //   if (deleteButton.clicked === true) {

  //   }
  // })