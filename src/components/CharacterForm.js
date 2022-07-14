import React, { useState } from "react";

function CharacterForm() {
  const initialObject = {
    id: "",
    name: "",
    gender: "",
    description: "",
    imageURL: "",
    anime_name: "",
    anime_imageURL: "",
  };

  const [submitForm, setSubmitForm] = useState(initialObject);
  
  return (
    <div>
      CharacterForm
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <label>Anime Name:</label>
        <input type="text" name />
        <br />
        <label>Image URL:</label>
        <input type="text" name="image_url" />
        <br />
        <label>Gender:</label>
        <input type="text" name="gender" />
        <br />
        <label>Description:</label>
        <input type="text" name="description" />
        <br />
        <label>Anime Name:</label>
        <input type="text" name="anime_name" />
        <br />
        <label>Anime Image URL:</label>
        <input type="text" name="anime_imageURL" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CharacterForm;
