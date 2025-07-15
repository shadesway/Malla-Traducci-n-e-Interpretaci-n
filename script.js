function mostrarInfo(nombre) {
  const infoCursos = {
    'Inglés I': 'Curso de nivel básico que introduce habilidades de lectura, escritura y conversación en inglés.',
    'Inglés II': 'Requiere Inglés I. Desarrollo de estructuras gramaticales básicas y comprensión lectora.',
    'Tecnologías Emergentes y sus Aplicaciones': 'Requiere Computación I. Análisis de nuevas tecnologías y su impacto.',
    'Estadística y Análisis de Datos': 'Requiere Computación II. Introducción a herramientas estadísticas.',
    'Inglés III': 'Requiere Inglés II. Continuación del desarrollo de habilidades en inglés.',
    // Agrega más cursos y descripciones según necesites
  };

  const info = infoCursos[nombre] || 'Información no disponible.';
  document.getElementById('info').innerHTML = `
    <h2>${nombre}</h2>
    <p>${info}</p>
  `;
}

