// App.js
import React, { useState } from 'react';
import AddDataForm from './AppDataForm';
import DisplayData from './Display';


function App() {
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const handleUpdateData = (updatedData) => {
    const updatedList = data.map(item => item.id === updatedData.id ? updatedData : item);
    setData(updatedList);
  };

  const handleDeleteData = (id) => {
    const updatedList = data.filter(item => item.id !== id);
    setData(updatedList);
  };

  return (
    <div>
      <AddDataForm onAddData={handleAddData} />
      <DisplayData 
        data={data} 
        onUpdateData={handleUpdateData} 
        onDeleteData={handleDeleteData} 
      />
    </div>
  );
}

export default App;

