import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

function App() {
  const [tags, setTags] = useState({
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  });

  return (
    <>
      <NavBar
        totalCounters={
          tags.counters.filter((counter) => counter.value > 0).length
        }
      />
      <main className="container">
        <Counters
          onAdd={handleAdd}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          counters={tags.counters}
        />
      </main>
    </>
  );

  function handleIncrease(counter) {
    // making a copy of counters to reuse it to set the state
    const counters = [...tags.counters];
    // getting the index of the counter pass
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setTags({ counters });
  }

  function handleDecrease(counter) {
    // making a copy of counters to reuse it to set the state
    const counters = [...tags.counters];
    // getting the index of the counter pass
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0 ? counters[index].value-- : counters[index].value;
    setTags({ counters });
  }

  function handleDelete(count_id) {
    // console.log("increase: ", count_id);
    const counters = tags.counters.filter((counter) => count_id !== counter.id);
    // console.log(counters);
    setTags({ counters: counters });
    // console.log("delete: ", count_id);
  }

  function handleReset() {
    const counters = tags.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    setTags({ counters });
  }

  function handleAdd() {
    const newCounter = {
      id: tags.counters.length + 1,
      value: 0,
    };

    setTags({ counters: [...tags.counters, newCounter] });
  }
}

export default App;
