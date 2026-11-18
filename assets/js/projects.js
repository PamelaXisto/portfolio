/*
  Para adicionar um projeto, copie um objeto abaixo e preencha:
  - kind:  "pro" (profissional) ou "pessoal"
  - org:   texto do selo no cartão (opcional)
  - img:   imagem em assets/img (proporção 4:5 fica melhor)
  - links: lista de { label, url } — deixe vazia se não houver link público
*/
window.PROJECTS = [
  {
    title: "Colunistas Jovem Pan",
    kind: "pro",
    org: "Jovem Pan",
    img: "assets/img/colunistas.jpg",
    alt: "Página de colunistas da Jovem Pan com cards de foto, biografia e última matéria",
    desc: "Listagem de colunistas em cards com foto, biografia e a última matéria, ordenados pela publicação mais recente. A matéria abre direto no card; a biografia leva à página da colunista, com todas as matérias e o perfil completo.",
    tags: ["PHP", "WordPress", "Gutenberg", "HTML/CSS"],
    links: [{ label: "Ver no ar", url: "https://jovempan.com.br/colunistas/" }]
  },
  {
    title: "Copa — Estatísticas de jogadores",
    kind: "pro",
    org: "Jovem Pan",
    img: "assets/img/copa.jpg",
    alt: "Dashboard de estatísticas da Copa com ranking de artilharia",
    desc: "Dashboard com rankings de artilharia, assistências, gols esperados (xG) e minutos jogados. Um servidor Node.js consulta o FotMob, guarda em cache e entrega JSON para a interface em React.",
    tags: ["Node.js", "Express", "React", "Vite", "API FotMob"],
    links: []
  },
  {
    title: "Cotações do mercado",
    kind: "pro",
    org: "Jovem Pan",
    img: "assets/img/cotacao.jpg",
    alt: "Painel de cotações de ativos brasileiros",
    desc: "Painel de ativos brasileiros com busca, ordenação e paginação. A API em Express consome a BRAPI, protege a chave em variáveis de ambiente e mantém cache em memória.",
    tags: ["Node.js", "Express", "React", "Vite", "BRAPI"],
    links: []
  },
  {
    title: "Eleição — Fotos de candidatos",
    kind: "pro",
    org: "Jovem Pan",
    img: "assets/img/eleicao.jpg",
    alt: "Script Node.js que baixa fotos de candidatos por cargo e UF",
    desc: "Automação que consulta a API da Mix Art e baixa em lote as fotos oficiais de presidente, governador e senador nas 27 UFs, salvando cada arquivo pelo número de urna na biblioteca da redação.",
    tags: ["Node.js", "Axios", "Automação"],
    links: []
  },
  {
    title: "Pipeline IoT",
    kind: "pessoal",
    img: "assets/img/iot.jpg",
    alt: "Dashboard de temperaturas IoT",
    desc: "Pipeline que recebe leituras de sensores de temperatura, grava em PostgreSQL e exibe um dashboard com médias por dispositivo e leituras por hora. Tudo sobe com Docker.",
    tags: ["Python", "Docker", "PostgreSQL"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/PIPELINE_IOT_DOCKER" }]
  },
  {
    title: "Sistema Veicular com CRUD",
    kind: "pessoal",
    img: "assets/img/veicular.jpg",
    alt: "Sistema de cadastro e catálogo de veículos",
    desc: "Cadastro, consulta e exclusão de veículos novos e seminovos, com catálogo e busca por marca.",
    tags: ["Java", "Spring Boot", "MySQL"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/Automocao_Veicular_-CRUD" }]
  },
  {
    title: "Sistema de Estoque",
    kind: "pessoal",
    img: "assets/img/estoque.jpg",
    alt: "Tabela de produtos com entrada e saída de estoque",
    desc: "Controle de produtos com quantidade mínima, entrada e saída de estoque e edição de registros.",
    tags: ["Java", "Spring Boot", "MySQL"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/SISTEMA_DE_ESTOQUE_CRUD" }]
  },
  {
    title: "API Rick and Morty",
    kind: "pessoal",
    img: "assets/img/rick-morty.jpg",
    alt: "Site sobre Rick and Morty com personagens carregados de uma API",
    desc: "Site que consome uma API REST para listar personagens da série, com busca por nome.",
    tags: ["API REST", "JavaScript", "HTML/CSS"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/RICK_AND_MORTY_API" }]
  },
  {
    title: "Biblioteca Digital",
    kind: "pessoal",
    img: "assets/img/biblioteca-digital.jpg",
    alt: "Gerenciador de livros com cadastro, busca e lista",
    desc: "Gerenciamento de livros: cadastro com capa e sinopse, busca por título e exclusão, manipulando o DOM.",
    tags: ["JavaScript", "DOM", "CRUD"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/Biblioteca_Digital" }]
  },
  {
    title: "Catálogo Interativo Mobile",
    kind: "pessoal",
    img: "assets/img/catalogo-mobile.jpg",
    alt: "Catálogo de produtos em layout mobile",
    desc: "Catálogo de produtos pensado para celular, com abas por categoria e dados vindos de uma API.",
    tags: ["API REST", "JavaScript", "Mobile first"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/API-APP-MOBILE-CATALOGO-PRODUTOS" }]
  },
  {
    title: "Conversor de Moedas",
    kind: "pessoal",
    img: "assets/img/conversor.jpg",
    alt: "Conversor de moedas web",
    desc: "Converte valores entre moedas a partir de cotações consultadas em uma API.",
    tags: ["JavaScript", "API REST"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/CONVERSOR_DE_MOEDAS_WEB" }]
  },
  {
    title: "Biblioteca UniFECAF",
    kind: "pessoal",
    img: "assets/img/unifecaf.jpg",
    alt: "Site da biblioteca digital UniFECAF",
    desc: "Site institucional de biblioteca digital, com seções de acervo, unidades e contato.",
    tags: ["HTML", "CSS"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/WEBSITE_BIBLIOTECA_UNIFECAF" }]
  },
  {
    title: "Website Supernatural",
    kind: "pessoal",
    img: "assets/img/supernatural.jpg",
    alt: "Site sobre a série Supernatural",
    desc: "Site sobre a série, com sinopse, personagens, temporadas e curiosidades.",
    tags: ["HTML", "CSS"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/WEBSITE_SUPERNATURAL" }]
  },
  {
    title: "LinkTree",
    kind: "pessoal",
    img: "assets/img/linktree.jpg",
    alt: "Página de links pessoais",
    desc: "Página única com meus links profissionais, feita para o celular.",
    tags: ["HTML", "CSS"],
    links: [{ label: "Código no GitHub", url: "https://github.com/PamelaXisto/MEU_LINKTREE" }]
  }
];
