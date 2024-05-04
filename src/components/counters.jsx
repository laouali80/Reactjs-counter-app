import React, { useState } from "react";
import Counter from "./Counter";

const Counters = ({
  onAdd,
  onReset,
  onIncrease,
  onDecrease,
  onDelete,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <button onClick={onAdd} className="btn btn-success btn-sm m-2">
        Add
      </button>
      {counters.length === 0 && <h1>Please Add a counter</h1>}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          data={counter}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
};

export default Counters;
