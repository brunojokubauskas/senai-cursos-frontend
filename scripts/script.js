$(document).ready(function() {
    const cursos = [
      {
        tipo: "CAI",
        descricao: "Aprendizagem Industrial"
      },
      {
        tipo: "CT",
        descricao: "Técnicos"
      },
      {
        tipo: "FIC",
        descricao: "Formação Inicial e Continuada"
      }
    ];
  
    const cursosContainer = $("#cursos-container");
  
    const tiposDesejados = ["CAI", "CT", "FIC"];
  
    const cursosFiltrados = cursos.filter(function(curso) {
      return tiposDesejados.includes(curso.tipo);
    });
  
    cursosFiltrados.slice(0, 3).forEach(function(curso) {
      const cursoCard = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${curso.tipo}</h5>
            <p class="card-text">${curso.descricao}</p>
          </div>
        </div>
      `;
      cursosContainer.append(cursoCard);
    });
  });
  