import React from "react";

function CharacterForm() {
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
        <input type="text" name="description " />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CharacterForm;
