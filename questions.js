const QUESTIONS = [
  {
    c: "Português",
    q: "Qual a forma correta de grafia?",
    o: ["Auto-estima", "Autoestima", "Autooestima", "Auto estima"],
    r: 1
  },
  {
    c: "Português",
    q: "Assinale a frase correta:",
    o: [
      "Haviam muitas pessoas na fila",
      "Havia muitas pessoas na fila",
      "Houveram muitas pessoas na fila",
      "Existiam muitas pessoas na fila"
    ],
    r: 1
  },
  {
    c: "Português",
    q: "Plural correto de 'cidadão':",
    o: ["Cidadãos", "Cidadões", "Cidadães", "Cidadãoes"],
    r: 0
  },
  {
    c: "Português",
    q: "Assinale a palavra acentuada corretamente:",
    o: ["Ideia", "Heroi", "Papeis", "Vôo"],
    r: 0
  },
  {
    c: "Português",
    q: "Qual é um substantivo abstrato?",
    o: ["Mesa", "Amor", "Casa", "Livro"],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual sistema operacional é desenvolvido pela Microsoft?",
    o: ["Linux", "macOS", "Windows", "Android"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual atalho copia um texto no Windows?",
    o: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual programa é usado para criar planilhas?",
    o: ["Word", "Excel", "PowerPoint", "Paint"],
    r: 1
  },
  {
    c: "Informática",
    q: "O que é um navegador?",
    o: [
      "Programa para acessar a internet",
      "Antivírus",
      "Sistema operacional",
      "Editor de texto"
    ],
    r: 0
  },
  {
    c: "Informática",
    q: "Qual é um exemplo de navegador?",
    o: ["Windows", "Google Chrome", "Linux", "Android"],
    r: 1
  },

  {
    c: "Lei 8.112",
    q: "A Lei 8.112/90 dispõe sobre:",
    o: [
      "Empresas privadas",
      "Servidores públicos civis da União",
      "Trabalhadores autônomos",
      "Empregados domésticos"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "O provimento de cargo público ocorre por:",
    o: ["Concurso público", "Indicação política", "Herança", "Sorteio"],
    r: 0
  },
  {
    c: "Lei 8.112",
    q: "A posse deve ocorrer em até:",
    o: ["10 dias", "15 dias", "30 dias", "45 dias"],
    r: 2
  },
  {
    c: "Lei 8.112",
    q: "A investidura no cargo ocorre com:",
    o: ["Nomeação", "Exercício", "Posse", "Concurso"],
    r: 2
  },
  {
    c: "Lei 8.112",
    q: "É dever do servidor público:",
    o: [
      "Ser assíduo e pontual",
      "Faltar quando quiser",
      "Recusar ordens",
      "Agir com negligência"
    ],
    r: 0
  },

  {
    c: "Raciocínio Lógico",
    q: "Se 2 + 2 = 4, então 4 + 4 = ?",
    o: ["6", "8", "10", "12"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual número completa a sequência: 2, 4, 6, ?",
    o: ["7", "8", "9", "10"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Se hoje é segunda, daqui a 3 dias será:",
    o: ["Terça", "Quarta", "Quinta", "Sexta"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual é o próximo número: 1, 3, 5, 7, ?",
    o: ["8", "9", "10", "11"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual é o dobro de 25?",
    o: ["40", "45", "50", "55"],
    r: 2
  }
,
  {
    c: "Português",
    q: "Qual palavra está escrita corretamente?",
    o: ["Excessão", "Exceção", "Excessao", "Excessão"],
    r: 1
  },
  {
    c: "Português",
    q: "Assinale o sinônimo de 'feliz':",
    o: ["Triste", "Contente", "Irritado", "Cansado"],
    r: 1
  },
  {
    c: "Português",
    q: "Qual é um advérbio?",
    o: ["Casa", "Rapidamente", "Bonito", "Alegria"],
    r: 1
  },
  {
    c: "Português",
    q: "Qual frase está correta?",
    o: [
      "Fazem dois anos que trabalho aqui",
      "Faz dois anos que trabalho aqui",
      "Fazem dois ano que trabalho aqui",
      "Faz dois ano que trabalho aqui"
    ],
    r: 1
  },
  {
    c: "Português",
    q: "Plural correto de 'mal-estar':",
    o: ["Mal-estares", "Males-estar", "Mau-estares", "Mal-estares"],
    r: 3
  },

  {
    c: "Informática",
    q: "Qual extensão é de um arquivo do Word?",
    o: [".jpg", ".pdf", ".docx", ".mp3"],
    r: 2
  },
  {
    c: "Informática",
    q: "O que significa CPU?",
    o: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Control Processing Unit"
    ],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual dispositivo é usado para imprimir?",
    o: ["Monitor", "Teclado", "Mouse", "Impressora"],
    r: 3
  },
  {
    c: "Informática",
    q: "Qual desses é um e-mail?",
    o: [
      "www.google.com",
      "usuario@email.com",
      "google.com.br",
      "facebook.com"
    ],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual é a função do antivírus?",
    o: [
      "Criar textos",
      "Editar imagens",
      "Proteger contra ameaças",
      "Acessar a internet"
    ],
    r: 2
  },

  {
    c: "Lei 8.112",
    q: "O servidor estável só perde o cargo:",
    o: [
      "Por vontade própria",
      "Por decisão judicial transitada em julgado",
      "Por atraso",
      "Por indicação do chefe"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A jornada de trabalho do servidor é fixada:",
    o: [
      "Em lei",
      "Pelo servidor",
      "Por acordo verbal",
      "Pelo sindicato"
    ],
    r: 0
  },
  {
    c: "Lei 8.112",
    q: "É proibido ao servidor:",
    o: [
      "Ser pontual",
      "Manter conduta compatível",
      "Receber propina",
      "Cumprir ordens"
    ],
    r: 2
  },
  {
    c: "Lei 8.112",
    q: "A vacância do cargo ocorre por:",
    o: [
      "Promoção",
      "Readaptação",
      "Posse",
      "Nomeação"
    ],
    r: 0
  },
  {
    c: "Lei 8.112",
    q: "A exoneração ocorre:",
    o: [
      "De ofício ou a pedido",
      "Somente por punição",
      "Somente por abandono",
      "Nunca"
    ],
    r: 0
  },

  {
    c: "Raciocínio Lógico",
    q: "Qual número é maior?",
    o: ["15", "20", "10", "5"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Se 10 ÷ 2 = ?",
    o: ["2", "4", "5", "10"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Quantos lados tem um quadrado?",
    o: ["3", "4", "5", "6"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual é o triplo de 4?",
    o: ["8", "10", "12", "14"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual número falta: 5, 10, 15, ?",
    o: ["18", "20", "25", "30"],
    r: 1
  }
,
  {
    c: "Português",
    q: "Qual palavra é um verbo?",
    o: ["Casa", "Bonito", "Correr", "Feliz"],
    r: 2
  },
  {
    c: "Português",
    q: "Assinale a opção correta:",
    o: [
      "Há cinco anos atrás",
      "Há cinco anos",
      "Faz cinco anos atrás",
      "Fazem cinco anos"
    ],
    r: 1
  },
  {
    c: "Português",
    q: "Qual é o aumentativo de 'casa'?",
    o: ["Casinha", "Casebre", "Casarão", "Caseta"],
    r: 2
  },
  {
    c: "Português",
    q: "Qual é o diminutivo de 'livro'?",
    o: ["Livrão", "Livrinho", "Livrote", "Livreto"],
    r: 1
  },
  {
    c: "Português",
    q: "Assinale a palavra parônima:",
    o: ["Comprimento", "Casa", "Mesa", "Livro"],
    r: 0
  },

  {
    c: "Informática",
    q: "Qual é a função do mouse?",
    o: [
      "Digitar textos",
      "Mover o cursor",
      "Imprimir documentos",
      "Salvar arquivos"
    ],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual desses é um hardware?",
    o: ["Windows", "Linux", "Monitor", "Excel"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual software é usado para apresentações?",
    o: ["Word", "Excel", "PowerPoint", "Paint"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual tecla apaga o texto à esquerda do cursor?",
    o: ["Enter", "Delete", "Backspace", "Shift"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual dispositivo armazena dados permanentemente?",
    o: ["Memória RAM", "HD/SSD", "Processador", "Placa-mãe"],
    r: 1
  },

  {
    c: "Lei 8.112",
    q: "A readaptação ocorre quando o servidor:",
    o: [
      "Muda de cargo",
      "Fica incapaz para o cargo",
      "É promovido",
      "É exonerado"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A aposentadoria compulsória ocorre aos:",
    o: ["60 anos", "65 anos", "70 anos", "75 anos"],
    r: 3
  },
  {
    c: "Lei 8.112",
    q: "A remoção é:",
    o: [
      "Mudança de cargo",
      "Mudança de lotação",
      "Promoção",
      "Afastamento"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A redistribuição ocorre entre:",
    o: [
      "Cargos vagos",
      "Órgãos",
      "Servidores aposentados",
      "Empresas privadas"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A substituição ocorre:",
    o: [
      "Em cargos de chefia",
      "Em qualquer cargo",
      "Somente por concurso",
      "Nunca"
    ],
    r: 0
  },

  {
    c: "Raciocínio Lógico",
    q: "Quanto é 7 + 8?",
    o: ["13", "14", "15", "16"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual número vem antes de 100?",
    o: ["98", "99", "101", "100"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Se hoje é sexta, amanhã será:",
    o: ["Quinta", "Sábado", "Domingo", "Segunda"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual é metade de 50?",
    o: ["20", "25", "30", "40"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual número é par?",
    o: ["3", "5", "7", "8"],
    r: 3
  }
,
  {
    c: "Português",
    q: "Qual frase está correta quanto à concordância?",
    o: [
      "Os problema foram resolvido",
      "Os problemas foram resolvidos",
      "Os problema foi resolvido",
      "Os problemas foi resolvido"
    ],
    r: 1
  },
  {
    c: "Português",
    q: "Qual palavra é um substantivo coletivo?",
    o: ["Cardume", "Peixe", "Nadar", "Azul"],
    r: 0
  },
  {
    c: "Português",
    q: "Assinale a palavra com dígrafo:",
    o: ["Chuva", "Casa", "Mesa", "Fato"],
    r: 0
  },
  {
    c: "Português",
    q: "Qual é o feminino de 'ator'?",
    o: ["Atriz", "Atora", "Atriza", "Atrice"],
    r: 0
  },
  {
    c: "Português",
    q: "Qual palavra está no plural?",
    o: ["Flor", "Casa", "Livros", "Mesa"],
    r: 2
  },

  {
    c: "Informática",
    q: "Qual tecla é usada para salvar arquivos?",
    o: ["Ctrl + C", "Ctrl + V", "Ctrl + S", "Ctrl + Z"],
    r: 2
  },
  {
    c: "Informática",
    q: "O que é um pendrive?",
    o: [
      "Dispositivo de entrada",
      "Dispositivo de armazenamento",
      "Programa de computador",
      "Sistema operacional"
    ],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual é um sistema operacional?",
    o: ["Google", "Windows", "Chrome", "Facebook"],
    r: 1
  },
  {
    c: "Informática",
    q: "Qual desses é um editor de texto?",
    o: ["Excel", "PowerPoint", "Word", "Paint"],
    r: 2
  },
  {
    c: "Informática",
    q: "Qual é a função do teclado?",
    o: [
      "Mover o cursor",
      "Digitar informações",
      "Imprimir documentos",
      "Salvar arquivos"
    ],
    r: 1
  },

  {
    c: "Lei 8.112",
    q: "A licença para tratamento de saúde é:",
    o: [
      "Concedida sem perícia",
      "Concedida com perícia",
      "Sempre negada",
      "Opcional"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A licença por motivo de doença em pessoa da família é:",
    o: [
      "Sempre remunerada",
      "Sem remuneração",
      "Remunerada por período limitado",
      "Nunca concedida"
    ],
    r: 2
  },
  {
    c: "Lei 8.112",
    q: "O afastamento para servir em outro órgão ocorre:",
    o: [
      "Sem autorização",
      "Com autorização",
      "Automaticamente",
      "Nunca"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "O servidor em estágio probatório é avaliado quanto:",
    o: [
      "Apenas à pontualidade",
      "Capacidade, disciplina e responsabilidade",
      "Somente à produtividade",
      "Somente ao conhecimento técnico"
    ],
    r: 1
  },
  {
    c: "Lei 8.112",
    q: "A demissão é uma penalidade aplicada em caso de:",
    o: [
      "Falta leve",
      "Infração grave",
      "Atraso ocasional",
      "Erro sem dolo"
    ],
    r: 1
  },

  {
    c: "Raciocínio Lógico",
    q: "Qual é o resultado de 9 × 3?",
    o: ["18", "21", "27", "30"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Se João tem 10 anos e Maria tem 15, quem é mais velha?",
    o: ["João", "Maria", "Ambos têm a mesma idade", "Não é possível saber"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual número vem depois de 199?",
    o: ["198", "200", "201", "190"],
    r: 1
  },
  {
    c: "Raciocínio Lógico",
    q: "Quanto é 100 − 45?",
    o: ["45", "50", "55", "60"],
    r: 2
  },
  {
    c: "Raciocínio Lógico",
    q: "Qual é o menor número?",
    o: ["3", "7", "1", "5"],
    r: 2
  }

];
