import { Button, Text, Input } from "@chakra-ui/react";
import React from "react";

const Gapp = () => {
    const [items, setItems] = React.useState([]);
    const [text, setText] = React.useState("");
  
    const handleChange = e => setText(e.target.value);
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (!text.length) {
        return;
      }
  
      const newItem = {
        text,
        id: Date.now()
      };
  
      setText("");
      setItems(items.concat(newItem));
    };
  
    return (
      <div>
        <Text>TODOs</Text>
  
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
  
        <form onSubmit={handleSubmit}>
          <Input aria-label="cost-input" onChange={handleChange} value={text} placeholder="Enter Value" />
          <Button onClick={(e) => handleSubmit(e)}>Add #{items.length + 1}</Button>
        </form>
      </div>
    );
  };
  
export default Gapp;