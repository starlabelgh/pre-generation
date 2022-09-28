import { getBookFromId, getBooks } from "../../utils/api-utils"

function BookDetail({book}) {
    return (
        <div>
            <h1>{ book.name }</h1>
            <p>{ book.description }</p>
        </div>
    )
}

export default BookDetail

export async function getStaticProps({params}) {
    const book = await getBookFromId(params.id)
    return {
        props: {
            book,
        }
    }
}


export async function getStaticPaths() {
    const books = await getBooks()
    const paths = books.map((book)=>({params:{id: book.id}}))
    return {
        paths: paths,
        fallback: false,
    }
}