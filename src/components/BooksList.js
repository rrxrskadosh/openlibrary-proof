import React from 'react';
import Book from './Book';
import Loader from './Loader';

const BookList = ({loading = false, books = [], count = 0 }) => {
    
return(
    <section className='section_booklist'>
        <div className='container_booklist'>
            {loading && <Loader />}
            {books.length > 0 &&(
                <p>
                    See <bold>{books.length}</bold> all <bold>{count}</bold>{' '}
                    results.
                </p>
            )}
            {books.map(book => (
                <Book book={book} key={book.key} />
            ))}
        </div>
    </section>
)

}

export default BookList;