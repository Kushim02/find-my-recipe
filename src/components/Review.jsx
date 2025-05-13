import React, { useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Sarah M.',
      text: 'This app helped me find dinner in seconds! Super easy and delicious.',
    },
    {
      name: 'James K.',
      text: 'I love how clean and fast the app is. The instructions are very clear.',
    },
  ]);

  const [newReview, setNewReview] = useState('');
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim() || !name.trim()) return;

    const review = { name, text: newReview };
    setReviews([review, ...reviews]);
    setNewReview('');
    setName('');
    setShowForm(false) // hide form after submit
  };

  return (
    <div className="review-section">
        <h2 className='review-title'> What Our Users are Saying</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">"{review.text}"</p>
            <span className="review-author">— {review.name}</span>
          </div>
        ))}
        </div>
        <div className='showcase'>
        {!showForm? (
            <button className='show-form-button' onClick={() => setShowForm(true)}>
                Add a Review
            </button>
        ) : (
            <form onSubmit={handleSubmit} className='review-form'>
                <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)}/>
                <textarea
                placeholder='Write a review...'
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}/>
                <button type='submit'>Submit Review</button>
            </form>
        ) 
        }
        </div>
      
    </div>
  );
};

export default Review;
