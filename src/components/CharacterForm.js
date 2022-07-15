import React, { useState } from "react";

function CharacterForm({ addCharacter }) {
  const initialObject = {
    id: "",
    name: "",
    gender: "",
    description: "",
    imageURL: "",
    anime_name: "",
    anime_imageURL: "",
  };

  const [formData, setFormData] = useState(initialObject);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("name:", name);
    console.log("value:", value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => addCharacter(data));
    setFormData(initialObject);
  }

  return (
    <div>
      CharacterForm
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Character name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={formData.imageURL}
          onChange={handleChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          placeholder="Character gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          placeholder="Character description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label>Anime Name:</label>
        <input
          type="text"
          name="anime_name"
          placeholder="Character's Anime Name"
          value={formData.anime_name}
          onChange={handleChange}
        />
        <br />
        <label>Anime Image URL:</label>
        <input
          type="text"
          name="anime_imageURL"
          placeholder="Character's Anime URL"
          value={formData.anime_imageURL}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CharacterForm;
