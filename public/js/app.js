// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// let title = 'title';
// const articleDeleteButtons = document.querySelectorAll('.delete-article');
// const articleToggleButton = document.querySelector('.hide-articles')

// var abc = "doesn't matter"

// // Able to change this value
// title = document.querySelector('h1');

// // this doesn't work
// // buttons = "Something else";

// // Manipulate something about the title
// title.textContent = 'Some new value';

// // Events
// function deleteArticles() {
//     articleDeleteButtons.forEach(function foo(button) {
//         button.addEventListener('click', function onButtonClick() {
//             const articleToDelete = this.parentElement.parentElement
//             // console.log(articleToDelete)
//             console.log(articleToDelete.remove())
//         })
//     })
// }

// articleToggleButton.addEventListener('click', () => {
//     toggleHide(document.querySelector('.article-container'))
// });

function toggleHide(element) {
    element.classList.toggle('hide')
}

function run() {
    deleteArticles()
}

// run()

module.exports = {
    toggleHide: toggleHide,
    run: run
}