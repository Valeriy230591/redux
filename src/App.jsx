import React, { useState } from "react";

import "./App.css";

function App() {
  const [checkItems, setCheckItems] = useState([
    { id: 1, label: "all", completed: false },
    { id: 2, label: "1", completed: false },
    { id: 3, label: "2", completed: false },
    { id: 4, label: "3", completed: false },
    { id: 5, label: "4", completed: false },
  ]);
  const handleChange = (inpId) => {
    if (inpId === 1) {
      setCheckItems(
        checkItems.map((item) => {
          return { ...item, completed: !item.completed };
        })
      );
    } else {
      setCheckItems(
        checkItems.map((item) => {
          if (item.id !== inpId) return item;
          return { ...item, completed: !item.completed };
        })
      );
    }
  };
  return (
    <div className="App">
      {checkItems.map((item) => {
        return (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(item.id)}
            />
            {item.label}
          </label>
        );
      })}
    </div>
  );
}
export default App;
