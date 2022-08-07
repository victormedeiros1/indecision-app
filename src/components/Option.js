import React from 'react';

const Option = ({ count, text, handleDeleteOption }) => (
  <div className="option">
    <p className="option__text">{`${count}. ${text}`}</p>
    <button
      className="button button--link"
      onClick={() => handleDeleteOption(text)}
    >
      Remove
    </button>
  </div>
);

export default Option;
