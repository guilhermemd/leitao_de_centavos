import './App.css';
import React from 'react';
import api from './api';

function App() {
  const classImg = (tag) => {
    if (tag === 'celular') return 'celular';
    return 'produto';
  };
  return (
    <>
      <nav className="header">
        <div className="header__infos">
          <h4>R$ 1500,00</h4>
          <h1>Leião de centavos</h1>
        </div>
      </nav>
      <div className="card__container">
        {api.map(({
          image, tag,
        }) => (
          <div className="card">
            <h4 className="card__title">Titulo</h4>
            <img
              src={image}
              alt="celular"
              className={classImg(tag)}
            />
            <p className="card__price">R$ 200,00</p>
            <button
              type="button"
              className="card__button"
            >
              Dar Lance
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
