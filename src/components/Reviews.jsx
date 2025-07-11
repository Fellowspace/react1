import React, { useState } from 'react';

import { FaStar ,FaTrashAlt} from 'react-icons/fa';

const initialReviews = [
  {
    name: 'Ayesha Khan',
    text: 'Great service and support!',
    rating: 5,
  },
  {
    name: 'Ali Raza',
    text: 'Product quality was good but delivery was late.',
    rating: 4,
  },
  {
    name: 'Fatima Noor',
    text: 'Amazing experience. Would definitely recommend!',
    rating: 5,
  },
  {
    name: 'Usman Tariq',
    text: 'Decent but could be improved in customer service.',
    rating: 3,
  },
  {
    name: 'Zainab Ali',
    text: 'Very satisfied with the overall service.',
    rating: 4,
  },
  {
    name: 'Hassan Javed',
    text: 'Not worth the price.',
    rating: 2,
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [startIndex, setStartIndex] = useState(0);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const visibleCards = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCards + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCards) % reviews.length);
  };

  const getVisibleReviews = () => {
    let visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i) % reviews.length;
      visible.push({ ...reviews[index], index });
    }
    return visible;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim() && rating > 0) {
      const newReview = { name, text, rating };
      setReviews([newReview, ...reviews]);
      setName('');
      setText('');
      setRating(0);
      setStartIndex(0); // show the new review
    }
  };

  const handleDelete = (indexToDelete) => {
    const filtered = reviews.filter((_, index) => index !== indexToDelete);
    setReviews(filtered);
    setStartIndex(0);
  };

  return (
  
    <div className="reviews-container" id="reviews">

    
      <h2 className="reviews-heading">Customer Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="star-select">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              onClick={() => setRating(i + 1)}
              color={i < rating ? '#ffc107' : '#444'}
              style={{ cursor: 'pointer', fontSize: '1.5rem' }}
            />
          ))}
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={handlePrev}>⟨</button>
        <div className="reviews-carousel">
          {getVisibleReviews().map((review, idx) => (
            <div key={idx} className="review-card">
              <p className="review-text">"{review.text}"</p>
              <p className="review-name">- {review.name}</p>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < review.rating ? '#ffc107' : '#444'} />
                ))}
              </div>
              <button
  className="delete-btn"
  onClick={() => handleDelete(review.index)}
  title="Delete Review"
>
  <FaTrashAlt />
</button>

            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={handleNext}>⟩</button>
      </div>
    </div>
  );
};

export default Reviews;
