export async function getBooks() {
    const res = await fetch("https://nextjs-fa4a0-default-rtdb.firebaseio.com/books.json")
    const data = await res.json()
    return data
}

export async function getBookFromId(id){
    const books = await getBooks()
    const fetchedBook = books.find((book) => book.id === id)
    return fetchedBook
}