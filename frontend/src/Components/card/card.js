import axios from "axios";
import React, { useState, useEffect } from "react";
import "./card.css";

const Card = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function data() {
      await axios
        .get("/api/v1/note")
        .then((res) => setNotes(res.data.data.notes))
        .catch((err) => console.log(err));
    }
    data();
  });
  return (
    <>
      {notes.map((note) => {
        return (
          <div className="card">
            <li>{note.name}</li>
          </div>
        );
      })}
    </>
  );
};

export default Card;
