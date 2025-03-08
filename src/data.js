export const escenas = {
    inicio: {
      id: "inicio",
      titulo: "Introducción",
      imagen: "/campos.jpg",
      texto: "Hace mucho tiempo, en un reino muy, muy lejano... Había un pequeño pueblo entre las montañas de Sierra Nevada llamado Lanjarón. Has trabajado todo el día en los campos y ahora solo piensas en descansar...",
      opciones: [{ texto: "Entrar en la taberna", nextId: "taberna" },],
    },
    taberna: {
      id: "taberna",
      titulo: "Taberna de Lanjarón",
      imagen: "/tavern.jpg",
      texto: "La taberna es acogedora y está llena de campesinos charlando amistosamente.",
      opciones: [
        { texto: "Pedir una bebida caliente", nextId: "paco" },
        { texto: "Pedir una bebida fría", nextId: "paco" },
        { texto: "Salir de la taberna", nextId: "pueblo" },
      ],
    },
    paco: {
      id: "paco",
      titulo: "Paco el Tabernero",
      imagen: "/paco.jpg",
      texto: "El tabernero te sirve una cerveza. Te refresca tras un día de trabajo.",
      opciones: [
        { texto: "Volver a la taberna", nextId: "taberna" },
        { texto: "Salir de la taberna", nextId: "pueblo" },
      ],
    },
    pueblo: {
      id: "pueblo",
      titulo: "Las Calles de Lanjarón",
      imagen: "/Lanjaron.jpg",
      texto: "Sales de la taberna y el aire frío de la noche te envuelve.",
      opciones: [{ texto: "Entrar en la taberna", nextId: "taberna" }],
    },
  };
  