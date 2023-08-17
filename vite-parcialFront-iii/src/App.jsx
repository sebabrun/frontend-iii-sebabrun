import React, { useState } from 'react';
import Card from "./Components/Card/Card.jsx";
import Form from "./Components/Form/Form.jsx";
import './App.css'

function App() {
  const [datosUsuario, setUserData] = useState({
    name: '',
    auto: ''
  });

  return (
    <div>
      <h1>Carga de autos favoritos</h1>
      <Form submitForm={setUserData} />
      {datosUsuario.name && datosUsuario.auto && <Card name={datosUsuario.name} auto={datosUsuario.auto} />}
    </div>
  );
}

export default App;