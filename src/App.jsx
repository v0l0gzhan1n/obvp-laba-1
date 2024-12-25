import './App.css';
import React, { useState } from "react";

function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <h1>Пользователь {isBanned ? "Забанен" : "не забанен"}</h1>
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>Забанить</button>
      )}
    </div>
  );
}

export default App;
