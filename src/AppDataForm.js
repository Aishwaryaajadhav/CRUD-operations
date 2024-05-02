// AddDataForm.js
import React, { useState } from 'react';

const AddDataForm = ({ onAddData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    const newData = {
      id: Date.now(),
      name,
      description,
    };
    onAddData(newData);
    setName('');
    setDescription('');
  };

  return (
    <div>
    <br/>
      <h2>ADD STUDENT DETAILS</h2>
      <div class="form-container">
      <form onSubmit={handleSubmit}>
      <br/>
      <center>
        <input 
          type="text" 
          placeholder="Enter Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
       <br/><br/> 
        <input 
          type="text" 
          placeholder=" Enter Results" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        </center>
        <br/><br/>
        <center>
        <button type="submit">Add</button>
        </center>
      </form>
      </div>
    </div>
  );
};

export default AddDataForm;
