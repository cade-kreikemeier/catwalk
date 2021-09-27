import React, { ReactElement, useEffect, useState, ChangeEvent } from 'react';

interface reviewForm {
  'product_id': number | null,
  rating: number | null,
  summary: string,
  body: string,
  recommend: boolean,
  name: string,
  email: string,
  photos?: string[],
  characteristics?: characteristic
}

interface characteristic {
  id?: number,
}

const reviewFormObj: reviewForm = {
  product_id: null,
  rating: null,
  summary: '',
  body: '',
  recommend: false,
  name: '',
  email: '',
  photos: [],
  characteristics: {}
};

export default function ReviewForm(): ReactElement {
  const [reviewForm, setReviewForm] = useState(reviewFormObj);

  const onRadioChange = () => {
    setReviewForm((reviewForm) => {
      return { ...reviewForm, recommend: !reviewForm.recommend };
    });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setReviewForm((reviewForm) => {
      return { ...reviewForm, [e.target.name]: e.target.value };
    });
  };

  const reviewBodyLengthCheck = () => {
    if (reviewForm.body.length < 50) {
      return <span>Minimum required characters left: [{50 - reviewForm.body.length}].</span>;
    } else {
      return null;
    }
  };

  useEffect(() => { reviewBodyLengthCheck(); }, [reviewForm]);


  return (
    <section id="reviewForm">
      <div id="formOverallRating">STARS FOR RATING</div>
      <div id="formRecommend">
        <h5>Do you recommend this product?</h5>
        <label htmlFor="recommend">Yes</label>
        <input type="radio"
          name="recommend"
          id="recommendTrue"
          checked={reviewForm.recommend}
          onChange={onRadioChange}
        />
        <label htmlFor="recommend">No</label>
        <input type="radio"
          name="recommend"
          id="recommendFalse"
          checked={!reviewForm.recommend}
          onChange={onRadioChange}
        />
      </div>
      <div id="formCharacteristics">
        <label htmlFor="characteristic">Characteristic</label>
        <input
          name="characteristic"
          type="range"
          min={1}
          max={5}
        />
      </div>
      <div id="formSummary">
        <input required type="text"
          name="summary"
          maxLength={60}
          placeholder="Best purchase ever!"
          onChange={onChange}
        />
      </div>
      <div id="formBody">
        <textarea id="reviewBody" required
          name="body"
          rows={5}
          cols={30}
          minLength={50}
          maxLength={1000}
          value={reviewForm.body}
          placeholder="Why did you like the product or not?"
          spellCheck={true}
          onChange={onChange}
        />
        {reviewBodyLengthCheck()}
      </div>
      <div id="formName">
        <input required type="text"
          name="name"
          maxLength={60}
          placeholder="Example: DogJoe"
          onChange={onChange}
        />
        <span>For privacy reasons, do not use your full name or email address</span>
      </div>
      <div id="formEmail">
        <input required type="email"
          name="email"
          maxLength={60}
          placeholder="Example: DogJoe@email.com"
          onChange={onChange}
        />
        <span>For authentication reasons, you will not be emailed</span>
      </div>
    </section>
  );
}