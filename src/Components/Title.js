import React from "react";
export default function Title({ name, title }) {
  return (
    <div className="row">
      <div>
        <h1>
          {name}
          <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
}
