import React from 'react';

const Book = ({ book }) => {//Destructuring keys of book
    const {
        title,
        author_name,
        key,
        first_publish_year,
        edition_count
    } = book;

    return(
        <div className="card">
            <div className='card-container'>
                <p className='title'>{title}</p>
                <p className='id'>ID book:{key}</p>
                {author_name && <p className='subtitle'>by {author_name.join(', ')}</p>}
                <p>First published: {first_publish_year}</p>
                <p>Editions: {edition_count}</p>
            </div>
        </div>
    )
};

export default Book;