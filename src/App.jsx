import React from "react";

export default function App() {
  return (
    <main>
      <div>Hello world!</div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </main>
  );
}
