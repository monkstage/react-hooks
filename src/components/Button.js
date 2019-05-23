import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click the button");
  const [count, setCount] = useState(0);

  function handleClick() {
    setButtonText("Button was clicked");
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      {`${buttonText} ${count ? count + " times" : ""}`}
    </button>
  );
}
