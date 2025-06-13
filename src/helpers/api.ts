import { IDataPost } from "./interfaces"

const db: IDataPost[] = [
  {
    codename: "Águia Curiosa",
    markdown: "Hoje tivemos uma palestra incrível sobre sustentabilidade no auditório! Aprendi muito sobre reciclagem e como podemos ajudar o meio ambiente. Pena que o ar-condicionado estava um pouco fraco, mas a mensagem foi poderosa!"
  },
  {
    codename: "Gato Escondido",
    markdown: "A cantina está servindo uns lanches maravilhosos essa semana. O pão de queijo quentinho no recreio é a melhor parte do dia! Só queria que tivessem mais opções vegetarianas, mas já é um começo."
  },
  {
    codename: "Lobo Solitário",
    markdown: "Alguém mais achou a prova de matemática de hoje impossível? Tinha umas questões que nunca vi na vida. Acho que deveríamos ter mais aulas de reforço para esses tópicos mais difíceis."
  },
  {
    codename: "Coruja Sábia",
    markdown: "Quero parabenizar o professor de história pela aula de ontem sobre a Revolução Francesa. Ele consegue tornar um assunto complexo tão interessante e fácil de entender. As discussões foram super ricas!"
  },
  {
    codename: "Raposa Astuta",
    markdown: "O grêmio estudantil está organizando uma festa junina no próximo mês! Vai ter barraca de pescaria, quadrilha e muita comida boa. Animadíssima para ver os professores dançando quadrilha, vai ser hilário!"
  },
  {
    codename: "Urso Sonolento",
    markdown: "Mais uma vez, o Wi-Fi da escola está lento demais. É quase impossível fazer pesquisas para os trabalhos durante o horário de aula. Poderíamos ter uma internet mais robusta para todos os alunos."
  },
  {
    codename: "Panda Gentil",
    markdown: "Estou adorando o projeto de arrecadação de agasalhos que a escola começou. É muito bom ver todos se unindo para ajudar quem precisa. Pequenas atitudes fazem uma grande diferença na comunidade."
  },
  {
    codename: "Coelho Saltitante",
    markdown: "O campo de futebol está em péssimas condições. É difícil jogar sem escorregar ou tropeçar. Precisamos de uma manutenção urgente para evitar acidentes durante as aulas de educação física."
  },
  {
    codename: "Pinguim Aventureiro",
    markdown: "A viagem de campo para o museu foi sensacional! Aprendi muito sobre arte e cultura. Foi uma experiência muito enriquecedora e diferente da rotina da sala de aula."
  },
  {
    codename: "Baleia Calma",
    markdown: "Gostaria de elogiar a nova iniciativa de clubes extracurriculares. Participei do clube de leitura e já fizemos várias discussões interessantes sobre livros que nunca pensei em ler. É ótimo ter opções para todos os gostos."
  },
  {
    codename: "Falcão Vigilante",
    markdown: "A iluminação nos corredores está um pouco escura em alguns pontos, especialmente no final da tarde. Sugiro verificar e talvez adicionar mais lâmpadas para melhorar a segurança e o conforto."
  },
  {
    codename: "Cobra Silenciosa",
    markdown: "O novo bebedouro do terceiro andar está sempre com defeito. É um transtorno ter que descer todos os lances de escada para pegar água. Precisamos de equipamentos que funcionem corretamente."
  },
  {
    codename: "Formiga Trabalhadora",
    markdown: "A equipe de limpeza da escola faz um trabalho excelente! As salas de aula e os banheiros estão sempre impecáveis. É bom estudar em um ambiente limpo e organizado."
  },
  {
    codename: "Tartaruga Paciente",
    markdown: "As aulas de robótica estão me surpreendendo muito! Estou aprendendo a programar e construir coisas incríveis. É um desafio, mas a satisfação de ver o robô funcionando é enorme."
  },
  {
    codename: "Elefante Gentil",
    markdown: "Ontem, durante o intervalo, vi alguns alunos jogando lixo no chão, mesmo com lixeiras por perto. É importante que todos colaborem para manter a escola limpa e agradável para todos."
  },
  {
    codename: "Macaco Travesso",
    markdown: "As cadeiras em algumas salas de aula estão bem velhas e desconfortáveis. Passamos muitas horas sentados e seria bom ter um mobiliário mais adequado para o estudo."
  },
  {
    codename: "Leão Corajoso",
    markdown: "Parabéns aos organizadores do torneio de basquete! Foi super divertido e a competição foi acirrada. Eventos como esse ajudam a integrar os alunos e a praticar esportes."
  },
  {
    codename: "Borboleta Leve",
    markdown: "O jardim da escola está lindo com as novas flores! Deixa o ambiente muito mais alegre e acolhedor. É um cantinho perfeito para relaxar durante o intervalo."
  },
  {
    codename: "Aranha Tecladora",
    markdown: "Os computadores da sala de informática estão muito desatualizados. Programas básicos demoram muito para carregar e travam com frequência. Precisamos de uma atualização para as aulas de tecnologia."
  },
  {
    codename: "Esquilo Ativo",
    markdown: "A aula de educação física dessa semana foi muito divertida, com jogos diferentes e dinâmicos. O professor está sempre inovando e nos incentivando a praticar exercícios."
  },
  {
    codename: "Camaleão Adaptável",
    markdown: "Estou gostando bastante das novas metodologias de ensino que alguns professores estão aplicando. As aulas estão mais interativas e estimulantes. É bom ver a escola buscando sempre melhorar."
  },
  {
    codename: "Girafa Curiosa",
    markdown: "A biblioteca da escola está cada vez mais completa, com novos livros e materiais de pesquisa. É um ótimo lugar para estudar e encontrar informações para os trabalhos."
  },
  {
    codename: "Zebra Listrada",
    markdown: "As filas na cantina durante o almoço são enormes e demoram muito. Seria bom se houvesse mais atendentes ou um sistema mais eficiente para agilizar o serviço."
  },
  {
    codename: "Pato Nadador",
    markdown: "O projeto de horta comunitária da escola é uma ideia fantástica! É gratificante ver os vegetais crescendo e saber que estamos contribuindo para um ambiente mais verde."
  },
  {
    codename: "Centopeia Andarilha",
    markdown: "A quadra coberta está precisando de alguns reparos no telhado, especialmente em dias de chuva. Fica difícil usar o espaço quando está molhando por dentro."
  },
  {
    codename: "Abelha Ocupada",
    markdown: "Os seminários de apresentação de trabalhos estão sendo muito produtivos. É uma excelente oportunidade para aprimorar nossas habilidades de comunicação e aprender com os colegas."
  },
  {
    codename: "Peixe Dourado",
    markdown: "A comunicação entre a escola e os pais poderia ser mais ágil. Às vezes, as informações chegam um pouco tarde e perdemos alguns prazos importantes."
  },
  {
    codename: "Pássaro Cantador",
    markdown: "O festival de talentos da escola foi um sucesso! Foi incrível ver tantos colegas mostrando seus dons na música, dança e teatro. Um evento que deveria acontecer mais vezes!"
  },
  {
    codename: "Cão Leal",
    markdown: "As palestras sobre orientação profissional estão sendo muito úteis para me ajudar a decidir qual carreira seguir. É bom ter o apoio da escola nesse momento tão importante."
  },
  {
    codename: "Gato Preto",
    markdown: "O sistema de matrículas online estava um pouco confuso este ano. Demorou para conseguir finalizar o processo e tive que ligar várias vezes para a secretaria."
  }
];

export function getPosts(): Promise<IDataPost[]>{

	return Promise.resolve(db);
}