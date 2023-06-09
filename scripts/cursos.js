$(document).ready(function() {
  const cursos = [
    {
      tipo: "CAI",
      descricao: "Aprendizagem Industrial",
      img: "https://jaguariuna.sp.senai.br/Img/logo-senai2.png",
      cursos: [
        {
          area: "Eletroeletrônica - Eletricidade",
          nome: "ELETRICISTA DE MANUTENÇÃO ELETROELETRÔNICA",
          modalidade: "Presencial",
          cargaHoraria: "1600 horas",
          resumo: "O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.",
          link: "https://jaguariuna.sp.senai.br/curso/94691/513/eletricista-de-manutencao-eletroeletronica"
        },
        {
          area: "Metalmecânica - Mecânica",
          nome: "MECÂNICO DE BOMBAS, MOTORES, COMPRESSORES E EQUIPAMENTOS DE TRANSMISSÃO",
          modalidade: "Presencial",
          cargaHoraria: "800 horas",
          resumo: "O curso de Aprendizagem Industrial Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão tem por objetivo proporcionar qualificação profissional para a realização da manutenção corretiva e preventiva em conjuntos mecânicos de máquinas e equipamentos, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade.",
          link: "https://jaguariuna.sp.senai.br/curso/82897/513/mecanico-de-bombas-motores-compressores-e-equipamentos-de-transmissao"
        },
        {
          area: "Metalmecânica - Mecânica",
          nome: "MECÂNICO DE USINAGEM",
          modalidade: "Presencial",
          cargaHoraria: "1600 horas",
          resumo: "O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade.",
          link: "https://jaguariuna.sp.senai.br/curso/76298/513/mecanico-de-usinagem"
        }
      ]
    }
  ];

  const cursosContainer = $("#cursos-container");

  const cursoCai = cursos.find(function(curso) {
    return curso.tipo === "CAI";
  });

  if (cursoCai) {
    cursoCai.cursos.forEach(function(curso) {
      const cursoCard = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${curso.nome}</h5>
          </div>
        </div>
      `;
      const cardElement = $(cursoCard);
      cardElement.on("click", function() {
        window.location.href = `detalhes.html?curso=${encodeURIComponent(curso.nome)}`;
      });
      cursosContainer.append(cardElement);
    });
  }
});
