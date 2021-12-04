import React from "react";

export const Card = () => {
  const colors = ["green", "orange", "red"];
  return (
    <div className="card">
      <span className={`color ${colors[Math.floor(Math.random() * 3)]}`}></span>
      <span className="message">message to update</span>
    </div>
  );
};
