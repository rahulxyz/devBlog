import React from "react";

const ListItem = ({ key }) => {
  return (
    <li key={key}>
      <div>
        <div className="description">
          <h2>Title</h2>
          <p>
            Well. 2020 is finally over! What a strange, challenging and draining
            year that was! As I’m sure you are, I’m really hoping 2021 will
            start…
          </p>
        </div>
        <div className="author">
          <title>Max Payne</title>
          <p>Jan 7, 2021</p>
        </div>
      </div>
      <img src="" alt="Image" />
    </li>
  );
};

export default ListItem;
