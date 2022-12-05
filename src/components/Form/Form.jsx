import React from 'react'
import './form.scss'

function Form() {
  return (
    <section>
      <form action="" className="form">
        <h2 className="form__header">NewsLetter</h2>
        <p className="form__info">
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <div className="input">
          <input type="email" placeholder="Enter your Email" />
          <button className="btn">Subscribe</button>
        </div>
      </form>
    </section>
  );
}

export default Form