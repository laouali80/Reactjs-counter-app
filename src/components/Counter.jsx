import React, { useState } from "react";

const Counter = ({ data, onDelete, onIncrease, onDecrease }) => {
  //   const [count, setCount] = useState({
  //     counter: data.value,
  //   });
  return (
    <div>
      <span className={formatBadge()}>{formatCount()}</span>
      <button
        onClick={() => onIncrease(data)}
        className="btn btn-secondary btn-sm"
      >
        Increase
      </button>
      <button
        onClick={() => onDecrease(data)}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrease
      </button>
      <button
        onClick={() => onDelete(data.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );

  function formatCount() {
    const { value } = data;

    return value === 0 ? "Zero" : value;
  }

  function formatBadge() {
    const { value } = data;
    let className = "badge m-2 badge-";

    return value === 0 ? (className += "warning") : (className += "primary");
  }
};

export default Counter;
