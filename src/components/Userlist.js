import React from "react";
import useFetch from "../hooks/useFetch";

export default function Userlist() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = useFetch(url);
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
