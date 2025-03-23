import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'

const BookDetials = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch("/books_reviews.json")
          .then((res) => res.json())
          .then((data) => {
            const foundBook = data.find((b) => b.ID === parseInt(id));
            setBook(foundBook);
          });
      }, [id]);
    
    if (!book) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mx-auto p-6">
        <Link to="/" className="btn btn-outline mb-4 text-left">Back to Gallery</Link>
        <div className="card bg-base-100 shadow-xl p-6  border-2 border-base-200 border-white rounded-xl">
            <figure>
                <img src={book.cover} alt={book.title} className="w-60 h-80 object-cover" />
            </figure>
            <div className="card-body">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-xl">by {book.author}</p>
            <p className="text-gray-600 text-left">{book.summary}</p>
            <p className="text-lg font-semibold">Price: ${book.price}</p>
            <p className="text-lg">Stock: {book.stock}</p>
            <h2 className="text-2xl mt-4 text-left">Reviews:</h2>
            <div className="space-y-2">
                {book.reviews.length > 0 ? (
                book.reviews.map((review, index) => (
                    <div key={index} className="border p-3 rounded-lg">
                    <p className="font-semibold text-left">{review.reviewer} - {review.rating}⭐</p>
                    <p className='text-left'>{review.comment}</p>
                    </div>
                ))
                ) : (
                <p>No reviews yet.</p>
                )}
            </div>
            </div>
        </div>
        </div>

    )
}

export default BookDetials
