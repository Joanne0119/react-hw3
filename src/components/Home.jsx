import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books_reviews.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, []);

    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 pb-4">Book Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.ID} className="card bg-base-100 shadow-xl border-2 border-base-200 border-white">
              <figure>
                <img src={book.cover} alt={book.title} className="w-full h-100 object-cover" />
              </figure>
              <div className="card-body flex flex-col justify-start items-start">
                <h2 className="card-title">{book.title}</h2>
                <p>by {book.author}</p>
                <p>$ {book.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/book/${book.ID}`} className="btn btn-primary mt-4"><p className='text-white'>View Details</p></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Home
