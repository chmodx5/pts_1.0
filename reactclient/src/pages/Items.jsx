import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const Items = () => {
  const [values, setValues] = useState([]);
  const [newItem, setNewItem] = useState("afds");

  const getAllItems = useCallback(async () => {
    const items = await axios.get("/api/items");
    setValues(items.data);
  }, []);

  const saveItem = useCallback(
    async (item) => {
      await axios.post("/api/items", { value: item });
      setNewItem("");
      getAllItems();
    },
    [getAllItems, setNewItem]
  );

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <button onClick={getAllItems}>get all items</button>

      <ul>
        {values.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {newItem && newItem}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveItem(newItem);
        }}
      >
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Items;
