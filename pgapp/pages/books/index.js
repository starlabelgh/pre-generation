import { getBooks } from "../../utils/api-utils"
import Link from 'next/link'
function BookHome({ books }) {
    return <div>
        <ul>
            {books.map((book) => (
                <li>
                    <div>
                        <h1>{book.name}</h1>
                        <p>{book.description}</p>
                        <article><Link href={`/books/${book.id}`}> Go to book</Link></article>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}

export default BookHome

export async function getStaticProps() {
    const books = await getBooks();
    return {
        props: {
            books: books,
        },
    }
}