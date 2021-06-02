const localStorageKey = "BOOKS_DATA";

const title = document.querySelector("#inputBookTitle");
const errorTitle = document.querySelector("#errorTitle");
const sectionTitle = document.querySelector("#sectionTitle");

const author = document.querySelector("#inputBookAuthor");
const errorAuthor = document.querySelector("#errorAuthor");
const sectionAuthor = document.querySelector("#sectionAuthor");

const year = document.querySelector("#inputBookYear");
const errorYear = document.querySelector("#errorYear");
const sectionYear = document.querySelector("#sectionYear");

const readed = document.querySelector("#inputBookIsComplete");

const btnSubmit = document.querySelector("#bookSubmit");

const searchValue = document.querySelector("#searchBookTitle");
const btnSearch = document.querySelector("#searchSubmit");

let checkInput = [];
let checkTitle = "";
let checkAuthor = "";
let checkYear = "";

window.addEventListener("load", function(){
    if (localStorage.getItem(localStorageKey) !== "") {    
        const booksData = getData();
        showData(booksData);
    }
})

btnSubmit.addEventListener("click", function() {
    if (btnSubmit.value == "") {
        checkInput = [];

        title.classList.remove("error");
        author.classList.remove("error");
        year.classList.remove("error");

        errorTitle.classList.add("error-display");
        errorAuthor.classList.add("error-display");
        errorYear.classList.add("error-display");

        if (title.value == "") {
            checkTitle = false;
        }else{
            checkTitle = true;
        }

        if (author.value == "") {
            checkAuthor = false;
        }else{
            checkAuthor = true;
        }

        if (year.value == "") {
            checkYear = false;
        }else{
            checkYear = true;
        }

        checkInput.push(checkTitle,checkAuthor,checkYear);
        let resultCheck = validation(checkInput);

        if (resultCheck.includes(false)) {
            return false;
        }else{
            const newBook = {
                id: +new Date(),
                title: title.value.trim(),
                author: author.value.trim(),
                year: year.value,
                isCompleted: readed.checked
            }
            insertData(newBook);

            title.value = '';
            author.value = '';
            year.value = '';
            readed.checked = false;
        }    
    }
})

function validation(check) {
    let resultCheck = [];
    
    check.forEach((a,i) => {
        if (a == false) {
            if (i == 0) {
                title.classList.add("error");
                errorTitle.classList.remove("error-display");
                resultCheck.push(false);
            }else if (i == 1) {
                author.classList.add("error");
                errorAuthor.classList.remove("error-display");
                resultCheck.push(false);
            }else{
                year.classList.add("error");
                errorYear.classList.remove("error-display");
                resultCheck.push(false);
            }
        }
    });

    return resultCheck;
}