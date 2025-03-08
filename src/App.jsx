import { useState } from "react";
import { escenas } from "./data"; // Importamos las escenas
import "./styles.css"; // Importamos los estilos

export default function Game() {
  const [inventory, setInventory] = useState(["5 dinares"]);
  const [character, setCharacter] = useState({
    nombre: "Nombre Jugador",
    fuerza: 1,
    agilidad: 1,
    resistencia: 1,
    inteligencia: 1,
    sabiduría: 1,
    carisma: 1,
    habilidades: ["Habilidad 1", "Habilidad 2", "Habilidad 3"],
  });
  
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("inventario");
  
  // Usamos useState para controlar la escena actual
  const [escenaActual, setEscenaActual] = useState(escenas.inicio);

  const cambiarEscena = (nextId) => {
    setEscenaActual(escenas[nextId]);
  };

  return (
    <>
       <h1 className="game-title">711 d.C.</h1>
      <div className="book-container">
        {/* Página izquierda - Historia */}
        <div className="page left">
          <h1 className="title">{escenaActual.titulo}</h1>
          <img src={escenaActual.imagen} alt={escenaActual.titulo} className="page-image" />
          <p className="story-text">{escenaActual.texto}</p>
          <div className="button-container">
            {escenaActual.opciones.map((opcion, index) => (
              <button key={index} onClick={() => cambiarEscena(opcion.nextId)} className="btn">
                {opcion.texto}
              </button>
            ))}
          </div>
        </div>
  
{/* Página derecha - Pestañas */}
<div className="page right">
          {/* Controles de pestañas */}
          <div className="tab-buttons">
            <button className={activeTab === "inventario" ? "active" : ""} onClick={() => setActiveTab("inventario")}>
              Inventario
            </button>
            <button className={activeTab === "ficha" ? "active" : ""} onClick={() => setActiveTab("ficha")}>
              PJ1
            </button>
          </div>

          {/* Contenido de la pestaña activa */}
          {activeTab === "inventario" ? (
            <div>
              <p className="inventory-title">Inventario:</p>
              <ul className="inventory-list">
                {inventory.map((item, index) => (
                  <li key={index} className="inventory-item">{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p className="inventory-title">Ficha de Personaje</p>
              <p><strong>Nombre:</strong> {character.nombre}</p>
              <p><strong>Fuerza:</strong> {character.fuerza}</p>
              <p><strong>Agilidad:</strong> {character.agilidad}</p>
              <p><strong>Resistencia:</strong> {character.resistencia}</p>
              <p><strong>Inteligencia:</strong> {character.inteligencia}</p>
              <p><strong>Sabiduría:</strong> {character.sabiduría}</p>
              <p><strong>Carisma:</strong> {character.carisma}</p>
              <p><strong>Habilidades:</strong></p>
              <ul>
                {character.habilidades.map((hab, index) => (
                  <li key={index}>{hab}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}