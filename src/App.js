import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['Node.js', 'React']);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </>
  );
}

export default App;
