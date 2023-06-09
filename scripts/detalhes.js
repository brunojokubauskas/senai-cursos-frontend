$(document).ready(function() {
  const cursos = [
    {
      tipo: "CAI",
      descricao: "Aprendizagem Industrial",
      cursos: [
        {
          nome: "ELETRICISTA DE MANUTENÇÃO ELETROELETRÔNICA",
          duracao: "1600 horas",
          resumo: "O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente."
        },
        {
          nome: "MECÂNICO DE BOMBAS, MOTORES, COMPRESSORES E EQUIPAMENTOS DE TRANSMISSÃO",
          duracao: "800 horas",
          resumo: "O curso de Aprendizagem Industrial Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão tem por objetivo proporcionar qualificação profissional para a realização da manutenção corretiva e preventiva em conjuntos mecânicos de máquinas e equipamentos, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade."
        },
        {
          nome: "MECÂNICO DE USINAGEM",
          duracao: "1600 horas",
          resumo: "O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade."
        }
      ]
    }
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const cursoNome = urlParams.get('curso');

  if (cursoNome) {
    const cursoCai = cursos.find(function(curso) {
      return curso.tipo === "CAI";
    });

    if (cursoCai) {
      const cursoSelecionado = cursoCai.cursos.find(function(curso) {
        return curso.nome === cursoNome;
      });

      if (cursoSelecionado) {
        $('#curso-nome').text(cursoSelecionado.nome);
        $('#curso-tipo').text("CAI");
        $('#curso-duracao').text(cursoSelecionado.duracao);
        $('#curso-resumo').text(cursoSelecionado.resumo);
      }
    }
  }
});
