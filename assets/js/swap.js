function readedBook(id) {
    let cfm = confirm("Pindahkan buku ke rak yang [SELESAI DIBACA] ?");

    if (cfm == true) {
        const bookDataDetail = getData().filter(a => a.id == id);
        const newBook = {
            id: bookDataDetail[0].id,
            title: bookDataDetail[0].title,
            author: bookDataDetail[0].author,
            year: bookDataDetail[0].year,
            isCompleted: true
        }

        const bookData = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(bookData));

        insertData(newBook);
    }else{
        return 0;
    }
}

function unreadedBook(id) {
    let cfm = confirm("Pindahkan buku ke rak yang [BELUM SELESAI DIBACA] ?")

    if (cfm == true) {
        const bookDataDetail = getData().filter(a => a.id == id);
        const newBook = {
            id: bookDataDetail[0].id,
            title: bookDataDetail[0].title,
            author: bookDataDetail[0].author,
            year: bookDataDetail[0].year,
            isCompleted: false
        }

        const bookData = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(bookData));

        insertData(newBook);
    }else{
        return 0;
    }
}