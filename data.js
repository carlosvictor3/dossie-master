// ============================================================
// DOSSIÊ MASTER — base de dados do mapa investigativo
// Todas as informações são apresentadas em caráter investigativo
// e estão sujeitas a contraditório. Termos como "supostamente",
// "segundo a PF", "teria recebido" indicam alegações sob apuração,
// não fatos jurídicos consumados. Fontes: PF, STF, BC, COAF, TCU
// e cobertura de Agência Brasil, CNN Brasil, Metrópoles, G1,
// Brasil de Fato, Jornal Grande Bahia, CNBC/Times Brasil, Wikipédia.
// ============================================================

const NODE_TYPES = {
  CENTRAL:   { label: "Figura central",        color: "#b3231c" },
  FINANCEIRO:{ label: "Núcleo financeiro",      color: "#8a6d3b" },
  POLITICO:  { label: "Núcleo político",        color: "#1f4e5f" },
  JUDICIARIO:{ label: "Judiciário / regulador",  color: "#5b3a8e" },
  SEGURANCA: { label: "Núcleo de intimidação",  color: "#2e2e2e" },
  FAMILIA:   { label: "Família Vorcaro",        color: "#a14e2e" },
  INSTITUICAO:{ label: "Instituição",           color: "#3c6e47" },
  FATO:      { label: "Fato / evento",          color: "#6b6b6b" },
  PREVIDENCIA:{ label: "Fundos de previdência",  color: "#0f6e6e" },
  EMPRESARIAL:{ label: "Rede empresarial / venda do banco", color: "#9c7a1f" },
};

// ----------------------------------------------------------
// NÓS (atores e instituições)
// ----------------------------------------------------------
const NODES = [
  {
    id: "vorcaro",
    name: "Daniel Vorcaro",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Daniel_Vorcaro_-_2024_%28cropped%29.jpg/240px-Daniel_Vorcaro_-_2024_%28cropped%29.jpg",
    type: "CENTRAL",
    role: "Controlador do Banco Master",
    summary: "Apontado pela PF como líder do esquema. Preso pela primeira vez em 17/11/2025 no aeroporto de Guarulhos. Segundo a investigação, teria comandado simultaneamente um núcleo de fraude financeira, um núcleo de corrupção institucional e um núcleo de intimidação conhecido como 'A Turma'.",
    details: [
      "42 anos, ex-controlador do Banco Master (ex-corretora Máxima).",
      "Patrimônio do banco teria saltado de R$ 219 milhões para mais de R$ 5 bilhões em cinco anos, via aquisições de empresas em dificuldade ('distress').",
      "Segundo a PF, ocultou R$ 2,24 bilhões em conta no nome do pai, Henrique Vorcaro.",
      "Assinou termo de confidencialidade com a PGR em 19/03/2026, visando colaboração premiada.",
      "Mensagens periciadas em seu celular embasaram prisões em múltiplas fases da operação."
    ],
    sources: [
      { label: "Wikipedia — Escândalo do Banco Master", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
      { label: "CNN Brasil — 1ª prisão de Vorcaro (17/11/2025)", url: "https://www.cnnbrasil.com.br/politica/investigacoes-contra-banco-master-e-vorcaro-tiveram-inicio-em-2024/" },
      { label: "Agência Brasil — Compliance Zero fase a fase", url: "https://agenciabrasil.ebc.com.br/economia/noticia/2026-04/operacao-compliance-zero-avanca-e-mira-corrupcao-no-alto-escalao" },
      { label: "Gazeta do Povo — PF estima 60 fases", url: "https://www.gazetadopovo.com.br/republica/como-a-pf-planeja-avancar-na-operacao-compliance-zero-durante-as-eleicoes/" },
    ],
    x: 50, y: 50
  },

  // ---------- NÚCLEO FINANCEIRO ----------
  {
    id: "zettel",
    name: "Fabiano Zettel",
    type: "FINANCEIRO",
    role: "Cunhado de Vorcaro — suposto operador financeiro",
    summary: "Pastor da igreja Lagoinha (BH), cunhado de Daniel Vorcaro. Apontado pela PF como responsável por pagamentos e transferências do grupo, inclusive ao núcleo de intimidação 'A Turma'.",
    details: [
      "Detido tentando embarcar para os Emirados Árabes na 2ª fase da operação; liberado na sequência.",
      "Preso preventivamente na fase de 04/03/2026.",
      "Declaração de IR aponta aplicação de R$ 48,5 milhões na 'Super Empreendimentos', empresa usada para pagar o operador 'Sicário'.",
      "Casado com Natália Vorcaro, irmã de Daniel."
    ],
    sources: [
      { label: "Metrópoles — Zettel e a Super Empreendimentos", url: "https://www.metropoles.com/brasil/politica-brasil/entenda-quem-e-fabiano-zettel-cunhado-de-vorcaro-que-foi-preso" },
      { label: "CNN Brasil — 3ª fase: prisão de Zettel", url: "https://www.cnnbrasil.com.br/politica/caso-master-pf-nova-fase-operacao-compliance-zero/" },
    ],
    x: 25, y: 30
  },
  {
    id: "augusto_lima",
    name: "Augusto Ferreira Lima",
    type: "FINANCEIRO",
    role: "Ex-CEO e sócio no Banco Master",
    summary: "Preso na primeira fase da operação, em 17-18/11/2025, junto com Vorcaro. Ex-sócio também ligado ao Banco Pleno (ex-Voiter), transferido a ele em agosto de 2025 e posteriormente liquidado pelo BC.",
    details: [
      "Banco Pleno (ex-Voiter) teve liquidação decretada em 18/02/2026, elevando o custo total ao FGC para R$ 56 bilhões."
    ],
    sources: [
      { label: "Wikipedia — Operação Compliance Zero", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
      { label: "G1 — 9ª fase: Wagner e Augusto Lima alvos", url: "https://g1.globo.com/politica/noticia/2026/06/18/pf-deflagra-9a-fase-da-operacao-compliance-zero.ghtml" },
    ],
    x: 20, y: 55
  },
  {
    id: "alberto_felix",
    name: "Alberto Félix",
    type: "FINANCEIRO",
    role: "Tesoureiro do grupo",
    summary: "Preso na primeira fase da Operação Compliance Zero, em novembro de 2025, junto com Vorcaro e Augusto Lima.",
    details: [],
    x: 15, y: 40
  },
  {
    id: "super_empreendimentos",
    name: "Super Empreendimentos e Participações S.A.",
    type: "FINANCEIRO",
    role: "Empresa apontada como veículo de pagamentos",
    summary: "Segundo a PF, intermediária usada por Vorcaro para pagar operadores de atividades ilícitas — incluindo ex-servidores do BC e integrantes de 'A Turma'.",
    details: [
      "Recebeu aporte de R$ 48,5 milhões de Fabiano Zettel em 2022, segundo IR do próprio.",
      "Usada para pagamentos à galeria de arte Almeida & Dale (R$ 165 milhões+ em remessas, segundo o Metrópoles)."
    ],
    x: 30, y: 12
  },
  {
    id: "cayman",
    name: "Offshore — Ilhas Cayman",
    type: "FINANCEIRO",
    role: "Estrutura no exterior",
    summary: "Segundo dados do COAF divulgados pelo O Globo, empresas ligadas a Vorcaro repassaram mais de R$ 700 milhões em ativos do Master para uma holding nas Ilhas Cayman, da qual o banqueiro é sócio, entre janeiro e julho de 2025 — período das negociações com o BRB.",
    details: [],
    sources: [
      { label: "O Globo — COAF: R$ 700 mi enviados a offshore em Cayman", url: "https://oglobo.globo.com/politica/noticia/2026/03/11/vorcaro-enviou-r-700-milhoes-a-offshore-em-cayman.ghtml" },
    ],
    x: 10, y: 18
  },
  {
    id: "tanure",
    name: "Nelson Tanure",
    type: "FINANCEIRO",
    role: "Empresário — alvo de busca e apreensão",
    summary: "Empresário citado entre os alvos de mandados de busca e apreensão na 2ª fase da operação (14/01/2026).",
    details: [],
    x: 5, y: 35
  },
  {
    id: "mansur",
    name: "João Carlos Mansur",
    type: "FINANCEIRO",
    role: "Fundador da Reag Investimentos",
    summary: "Apontado pela PF como peça central da triangulação financeira que inflou artificialmente o capital do Master e do BRB. Já era investigado na Operação Carbono Oculto (infiltração do PCC no mercado financeiro) antes de entrar na Compliance Zero. Avalia delação premiada.",
    details: [
      "PF rastreou uso do fundo Celeno (administrado pelo próprio Master) para comprar ações do BRB.",
      "MPF aponta que filhos de Mansur (Lucas, Marina e Alex Falbo Mansur) eram beneficiários finais de fundos (Astralo 95, Reag Growth 95) que movimentaram R$ 1,45 bilhão vindos do Master.",
      "Em depoimento à CPI do Crime Organizado, confirmou o Master como cliente da Reag e negou ligação com o PCC, amparado por decisão do ministro Flávio Dino que lhe garantiu direito ao silêncio."
    ],
    sources: [
      { label: "Metrópoles — Mansur e a triangulação financeira", url: "https://www.metropoles.com/brasil/joao-carlos-mansur-reag-banco-master" },
      { label: "Operação Carbono Oculto — contexto PCC", url: "https://www.cnnbrasil.com.br/politica/pf-investiga-infiltracao-do-pcc-no-mercado-financeiro" },
    ],
    x: 8, y: 50
  },

  // ---------- BRB / INSTITUIÇÕES ----------
  {
    id: "brb",
    name: "BRB — Banco de Brasília",
    type: "INSTITUICAO",
    role: "Banco estatal comprador de carteiras do Master",
    summary: "Tentou comprar o Master por ~R$ 2 bi em set/2025 (barrado pelo BC) e depois anunciou acordo para 58% do banco por ~R$ 2 bi (28/03). Segundo a PF, recebeu carteiras de crédito fabricadas sem lastro financeiro, posteriormente substituídas por outros ativos sem avaliação técnica.",
    details: [
      "31/03/2026 — Galípolo (presidente do BC) se reúne com o BRB sobre a operação.",
      "07/04/2026 — TCU abre processo para apurar possível omissão do BC.",
      "30/04/2026 — Ministério Público aciona a Justiça para suspender a aquisição."
    ],
    sources: [
      { label: "Times Brasil — BRB e a compra do Master", url: "https://timesbrasil.com.br/empresas-e-negocios/operacao-compliance-zero-entenda-o-que-ja-aconteceu-em-cada-fase-da-investigacao/" },
      { label: "CNN Brasil — TCU abre processo sobre BC e BRB", url: "https://www.cnnbrasil.com.br/economia/tcu-abre-processo-para-apurar-possivel-omissao-do-bc-no-caso-master/" },
    ],
    x: 45, y: 75
  },
  {
    id: "phc",
    name: "Paulo Henrique Costa (PHC)",
    type: "INSTITUICAO",
    role: "Ex-presidente do BRB",
    summary: "Afastado do cargo na 1ª fase. Preso preventivamente na 4ª fase (16/04/2026). Segundo a PF, teria combinado com Vorcaro o recebimento de R$ 146,5 milhões em propina, repassados via imóveis — a PF afirma ter provas de ao menos R$ 74 milhões pagos. Costa nega.",
    details: [],
    sources: [
      { label: "CNN Brasil — 4ª fase: prisão do ex-presidente do BRB", url: "https://www.cnnbrasil.com.br/politica/caso-master-pf-prende-ex-presidente-do-brb-paulo-henrique-costa/" },
    ],
    x: 55, y: 85
  },
  {
    id: "dario_garcia",
    name: "Dario Oswaldo Garcia",
    type: "INSTITUICAO",
    role: "Ex-diretor financeiro do BRB",
    summary: "Afastado do cargo pela 10ª Vara Federal de Brasília na 1ª fase da operação, junto com Paulo Henrique Costa.",
    details: [],
    x: 60, y: 72
  },
  {
    id: "bc",
    name: "Banco Central do Brasil",
    type: "INSTITUICAO",
    role: "Regulador — decretou a liquidação do Master",
    summary: "Decretou liquidação extrajudicial do conglomerado Master (Master de Investimento, Letsbank, Master Corretora de Câmbio, Will Financeira, Banco Pleno) em 18/11/2025. Abriu e encerrou (09/03/2026) investigação interna sobre dois servidores suspeitos de atuar a favor do Master.",
    details: [],
    sources: [
      { label: "Banco Central — Liquidação do Master (18/11/2025)", url: "https://www.bcb.gov.br/detalhenoticia/692/nota" },
    ],
    x: 65, y: 60
  },
  {
    id: "souza_santana",
    name: "Paulo Sérgio Neves de Souza e Belline Santana",
    type: "INSTITUICAO",
    role: "Ex-servidores do Banco Central",
    summary: "Ex-diretor de fiscalização e ex-chefe adjunto do Departamento de Supervisão Bancária do BC. Segundo a PF, prestavam 'consultoria informal' a Vorcaro, participando de grupo de WhatsApp para discutir estratégias de interesse do Master. Afastados por decisão do STF; usam tornozeleira eletrônica.",
    details: [],
    sources: [
      { label: "CNN Brasil — Servidores do BC afastados", url: "https://www.cnnbrasil.com.br/economia/servidores-do-banco-central-sao-afastados-no-caso-master/" },
    ],
    x: 70, y: 50
  },
  {
    id: "galipolo",
    name: "Gabriel Galípolo",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gabriel_Gal%C3%ADpolo_%28foto_oficial%29.jpg/240px-Gabriel_Gal%C3%ADpolo_%28foto_oficial%29.jpg",
    type: "INSTITUICAO",
    role: "Presidente do Banco Central",
    summary: "Segundo reportagens de dezembro de 2025, teria sido contatado reiteradamente por Alexandre de Moraes pedindo informações sobre a venda do Master ao BRB. Moraes negou oficialmente. Galípolo afirmou publicamente, em 29/04, que 'não há risco sistêmico'.",
    details: [],
    x: 75, y: 65
  },

  // ---------- NÚCLEO POLÍTICO ----------
  {
    id: "ciro_nogueira",
    name: "Ciro Nogueira",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Foto_oficial_de_Ciro_Nogueira.jpg/240px-Foto_oficial_de_Ciro_Nogueira.jpg",
    type: "POLITICO",
    role: "Senador (PP-PI), presidente do Partido Progressistas",
    summary: "Alvo de busca e apreensão na 5ª fase (07/05/2026). Segundo a PF, teria recebido entre R$ 300 mil e R$ 500 mil mensais de Vorcaro, além de viagens e hospedagens, em troca de atuação política favorável ao Master.",
    details: [
      "Apontado como autor formal da chamada 'Emenda Master' (PEC 65/2023) — que ampliaria a garantia do FGC de R$ 250 mil para R$ 1 milhão.",
      "Segundo a PF, a emenda teria sido redigida por assessores do Master e apenas apresentada por Nogueira.",
      "Apreendidos em sua casa: motocicleta Honda CB1000, BMW 440i e malote de documentos."
    ],
    sources: [
      { label: "CNN Brasil — 5ª fase: Ciro Nogueira alvo", url: "https://www.cnnbrasil.com.br/politica/caso-master-pf-nova-fase-operacao-compliance-zero/" },
      { label: "Wikipedia — Emenda Master (PEC 65/2023)", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
    ],
    x: 50, y: 85
  },
  {
    id: "flavio_bolsonaro",
    name: "Flávio Bolsonaro",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fl%C3%A1vio_Bolsonaro_%28cropped%29.jpg/240px-Fl%C3%A1vio_Bolsonaro_%28cropped%29.jpg",
    type: "POLITICO",
    role: "Senador (PL-RJ)",
    summary: "Segundo a CPI do Crime Organizado, teria fechado com Vorcaro acordo de R$ 134 milhões para financiamento do filme 'Dark Horse' (sobre Jair Bolsonaro) — dos quais R$ 61 milhões já confirmados como pagos.",
    details: [],
    sources: [
      { label: "BBC News Brasil — Flávio admite pedido de recursos a Vorcaro", url: "https://www.bbc.com/portuguese/articles/c5y15zeg4xgo" },
      { label: "Intercept Brasil — Contrato do filme Dark Horse", url: "https://theintercept.com/2026/05/15/eduardo-bolsonaro-dark-horse-vorcaro/" },
    ],
    x: 60, y: 95
  },
  {
    id: "eduardo_bolsonaro",
    name: "Eduardo Bolsonaro",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Eduardo_Bolsonaro_2022.jpg/240px-Eduardo_Bolsonaro_2022.jpg",
    type: "POLITICO",
    role: "Deputado federal licenciado",
    summary: "Segundo o Intercept Brasil (15/05), teria mentido ao negar envolvimento com o filme 'Dark Horse'; documento mostra que assinou contrato como produtor executivo (com a Go Up e Mário Frias) e é citado como 'financiador' em aditivo contratual.",
    details: [
      "Publicitário Thiago Miranda teria intermediado transferência de dinheiro do Brasil para os EUA, a ser feita 'aos poucos', entre Eduardo e Vorcaro.",
      "PF apura se a permanência de Eduardo nos EUA estaria sendo bancada por recursos de Vorcaro."
    ],
    sources: [
      { label: "Intercept Brasil — Eduardo e o contrato do Dark Horse", url: "https://theintercept.com/2026/05/15/eduardo-bolsonaro-dark-horse-vorcaro/" },
    ],
    x: 68, y: 98
  },
  {
    id: "claudio_castro",
    name: "Cláudio Castro",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cl%C3%A1udio_Castro_%28foto_oficial%29.jpg/240px-Cl%C3%A1udio_Castro_%28foto_oficial%29.jpg",
    type: "POLITICO",
    role: "Ex-governador do Rio de Janeiro",
    summary: "PF identificou sequência de encontros e conversas entre Castro e Vorcaro antes de aportes milionários da Rioprevidência no Master. Em 14/05/2024, Vorcaro convidou Castro para degustação de whisky em Nova York (evento de US$ 1,013 milhão); no dia seguinte, a Rioprevidência aportou R$ 80 milhões em Letras Financeiras do Master.",
    details: [
      "Maio/2023 — jantar em Nova York pago por Vorcaro (conta de US$ 13 mil).",
      "Nov/2023 — primeiros aportes da Rioprevidência: R$ 40 milhões, depois R$ 80 milhões.",
      "Reuniões também registradas no Palácio Laranjeiras e no Palácio Guanabara (mar/2024).",
      "Defesa de Castro nega irregularidades."
    ],
    sources: [
      { label: "Diário do Rio — Castro e a Rioprevidência", url: "https://diariodorio.com/claudio-castro-rioprevidencia-banco-master/" },
      { label: "Wikipedia — 8ª fase: Rioprevidência R$ 3 bi", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
    ],
    x: 35, y: 90
  },
  {
    id: "rioprevidencia",
    name: "Rioprevidência",
    type: "INSTITUICAO",
    role: "Fundo previdenciário do RJ — 237 mil servidores",
    summary: "PF aponta cerca de R$ 230 milhões aportados em Letras Financeiras e fundos do Master, com investigação ampliada na 8ª fase para apurar R$ 3 bilhões aplicados em fundos de investimento do banco.",
    details: [
      "Ricardo Siqueira Rodrigues é apontado como intermediário entre Vorcaro e Castro; também alvo de buscas."
    ],
    sources: [
      { label: "JGB — 8ª fase: R$ 3 bi do Rioprevidência", url: "https://jornalgrandebahia.com.br/2026/05/da-suspeita-financeira-ao-nucleo-politico-reveja-as-8-fases-da-operacao-compliance-zero-contra-o-banco-master/" },
    ],
    x: 28, y: 78
  },
  {
    id: "siqueira_rodrigues",
    name: "Ricardo Siqueira Rodrigues",
    type: "POLITICO",
    role: "Empresário — suposto intermediário",
    summary: "Apontado pela PF como intermediador da relação entre Vorcaro e Cláudio Castro. Alvo de buscas.",
    details: [],
    x: 20, y: 85
  },
  {
    id: "deivis_antunes",
    name: "Deivis Marcon Antunes",
    type: "POLITICO",
    role: "Ex-presidente do RioPrevidência",
    summary: "Preso em 03/02/2026 pela PF e PRF, interceptado em Itatiaia (RJ), no contexto da investigação sobre o RioPrevidência (instituto de previdência distinto da Rioprevidência financeira fluminense, igualmente sob escrutínio das investigações).",
    details: [],
    x: 15, y: 70
  },
  {
    id: "acm_neto",
    name: "ACM Neto",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/ACM_Neto_foto_oficial.jpg/240px-ACM_Neto_foto_oficial.jpg",
    type: "POLITICO",
    role: "Ex-prefeito de Salvador, pré-candidato ao governo da Bahia",
    summary: "Dados do COAF divulgados pelo O Globo (11/03/2026) apontam que empresa ligada a ele recebeu R$ 3,6 milhões em pagamentos do Master e da gestora Reag, via contratos de consultoria. Pagamento confirmado pela CPI do Crime Organizado em abril/2026.",
    details: [
      "Empresa A&M Consultoria Ltda., criada em dezembro de 2022, com capital social de apenas R$ 2 mil, presta serviços de 'consultoria em gestão empresarial' e 'apoio à educação'.",
      "Relatório do COAF aponta que a empresa movimentou recursos 'acima de sua capacidade financeira declarada'."
    ],
    sources: [
      { label: "O Globo — COAF: empresa de ACM Neto recebeu R$ 3,6 mi", url: "https://oglobo.globo.com/politica/noticia/2026/03/11/empresa-ligada-a-acm-neto-recebeu-r-36-milhoes-do-banco-master.ghtml" },
    ],
    x: 40, y: 100
  },
  {
    id: "jaques_wagner",
    name: "Jaques Wagner",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jaques_Wagner_%28foto_oficial%29.jpg/240px-Jaques_Wagner_%28foto_oficial%29.jpg",
    type: "POLITICO",
    role: "Senador (PT-BA), líder do governo Lula no Senado",
    summary: "Segundo apontamento da PF em junho de 2026, teria recebido vantagens indevidas em troca de atuação política no Congresso — incluindo um apartamento em Salvador e R$ 3,5 milhões.",
    details: [],
    sources: [
      { label: "CNN Brasil — 9ª fase: Wagner alvo da PF", url: "https://www.cnnbrasil.com.br/politica/caso-master-pf-nova-fase-operacao-compliance-zero/" },
      { label: "O Estopim — 9ª fase detalhada", url: "https://www.oestopim.com/post/pf-deflagra-nova-fase-da-compliance-zero-e-amplia-cerco-sobre-o-caso-banco-master" },
    ],
    x: 55, y: 100
  },
  {
    id: "mantega",
    name: "Guido Mantega",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Guido_Mantega_%28foto_oficial%29.jpg/240px-Guido_Mantega_%28foto_oficial%29.jpg",
    type: "POLITICO",
    role: "Ex-ministro da Fazenda",
    summary: "Reportagens apontam que teria recebido cerca de R$ 1 milhão por mês do grupo, segundo a imprensa.",
    details: [],
    x: 45, y: 5
  },
  {
    id: "lewandowski",
    name: "Ricardo Lewandowski",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ricardo_Lewandowski_%28foto_oficial_STF%29.jpg/240px-Ricardo_Lewandowski_%28foto_oficial_STF%29.jpg",
    type: "JUDICIARIO",
    role: "Ministro da Justiça, ex-ministro do STF",
    summary: "Reportagens apontam pagamento de cerca de R$ 6 milhões ao escritório de advocacia da família, segundo a imprensa — ainda sob apuração.",
    details: [],
    x: 40, y: 8
  },

  // ---------- JUDICIÁRIO ----------
  {
    id: "moraes",
    name: "Alexandre de Moraes",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexandre_de_Moraes_-_foto_oficial.jpg/240px-Alexandre_de_Moraes_-_foto_oficial.jpg",
    type: "JUDICIARIO",
    role: "Ministro do STF",
    summary: "Segundo mensagens vazadas, Vorcaro teria escrito para alguém identificado como 'Moraes' dois minutos antes de sua prisão, em 17/11/2025. Contrato do Master com Viviane Marci de Moraes, esposa do ministro, foi noticiado em 11/12/2025. Moraes teria contatado reiteradamente Galípolo pedindo informações sobre a venda do Master ao BRB — o que o ministro nega oficialmente.",
    details: [
      "25/04/2024 — Moraes e o procurador-geral Paulo Gonet participaram de degustação de whisky Macallan em Londres, bancada por Vorcaro.",
      "Oposição articula no Congresso abertura de CPI para investigar o Banco Master e, por consequência, o casal Moraes."
    ],
    sources: [
      { label: "Metrópoles — Mensagem de Vorcaro 2min antes da prisão", url: "https://www.metropoles.com/brasil/politica-brasil/vorcaro-mandou-mensagem-para-moraes-antes-de-ser-preso" },
      { label: "CNN Brasil — Viviane Moraes e contrato com o Master", url: "https://www.cnnbrasil.com.br/politica/contrato-de-esposa-de-alexandre-de-moraes-com-banco-master/" },
    ],
    x: 80, y: 35
  },
  {
    id: "viviane_moraes",
    name: "Viviane Marci de Moraes",
    type: "JUDICIARIO",
    role: "Esposa de Alexandre de Moraes",
    summary: "Contrato dela com o Banco Master foi noticiado em 11/12/2025, alimentando o escrutínio sobre a relação entre o ministro e Vorcaro. Reportagens posteriores apontam contrato de R$ 129 milhões, pagos em parcelas de R$ 3,6 milhões/mês ao escritório de advocacia dela — interrompido com a liquidação do banco.",
    details: [],
    sources: [
      { label: "CNN Brasil — Contrato de R$ 129 mi da esposa de Moraes", url: "https://www.cnnbrasil.com.br/politica/contrato-de-esposa-de-alexandre-de-moraes-com-banco-master/" },
    ],
    x: 88, y: 28
  },
  {
    id: "gonet",
    name: "Paulo Gonet",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paulo_Gonet_Branco_%28foto_oficial%29.jpg/240px-Paulo_Gonet_Branco_%28foto_oficial%29.jpg",
    type: "JUDICIARIO",
    role: "Procurador-Geral da República",
    summary: "Participou, junto com Alexandre de Moraes, da degustação de whisky Macallan em Londres (25/04/2024), bancada por Vorcaro.",
    details: [],
    x: 85, y: 20
  },
  {
    id: "toffoli",
    name: "Dias Toffoli",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Dias_Toffoli_-_foto_oficial.jpg/240px-Dias_Toffoli_-_foto_oficial.jpg",
    type: "JUDICIARIO",
    role: "Ministro do STF — ex-relator do caso",
    summary: "Sorteado relator do caso em 28/11/2025. No mesmo dia, voou em jato particular a Lima (Peru) ao lado do advogado de um diretor do Master. PF encontrou conversas dele com deputados e senadores desde 2022. Deixou a relatoria em meio a pressão; sucedido por André Mendonça.",
    details: [
      "Família Toffoli ligada ao resort Tayayá através da empresa Maridt S.A.; FIP Arleen (ligado a Zettel) comprou metade da participação da Maridt em 27/09/2021.",
      "02/12/2025 — impôs sigilo elevado ao processo.",
      "03/12/2025 — determinou que toda diligência sobre Vorcaro/Master passasse por ele.",
      "29/11/2025 — TRF-1 (desembargadora Solange Salgado) solta Vorcaro, que passa a usar tornozeleira."
    ],
    sources: [
      { label: "Brasil de Fato — Toffoli sorteado relator e voo a Lima", url: "https://brasildefato.com.br/2026/11/28/toffoli-e-sorteado-relator-do-caso-master-e-no-mesmo-dia-voa-a-lima" },
      { label: "Wikipedia — Operação Compliance Zero", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
    ],
    x: 90, y: 45
  },
  {
    id: "mendonca",
    name: "André Mendonça",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andr%C3%A9_Mendon%C3%A7a_-_foto_oficial_%282021%29.jpg/240px-Andr%C3%A9_Mendon%C3%A7a_-_foto_oficial_%282021%29.jpg",
    type: "JUDICIARIO",
    role: "Ministro do STF — relator atual do caso",
    summary: "Assumiu a relatoria após o afastamento de Toffoli. Autorizou as fases 3 a 8 da Compliance Zero, incluindo as prisões por intimidação, espionagem e corrupção de agentes públicos. Registrou como 'lamentável' que a 2ª prisão de Vorcaro tenha sido decidida sem aval da PGR.",
    details: [],
    sources: [
      { label: "STF — Decisões de Mendonça nas fases 3 a 10", url: "https://noticias.stf.jus.br/postsnoticias/stf-autoriza-prisoes-e-medidas-cautelares-na-6a-fase-da-operacao-compliance-zero/" },
      { label: "Rádio Itatiaia — 10ª fase: Projeto DV", url: "https://www.itatiaia.com.br/politica/operacao-compliance-zero-pf-banco-master-vorcaro-brasilia/" },
    ],
    x: 92, y: 55
  },
  {
    id: "solange_salgado",
    name: "Solange Salgado",
    type: "JUDICIARIO",
    role: "Desembargadora — TRF-1",
    summary: "Negou habeas corpus a Vorcaro em 20/11/2025; depois, em 28/11, determinou sua soltura mediante uso de tornozeleira eletrônica.",
    details: [],
    x: 95, y: 38
  },
  {
    id: "ricardo_leite",
    name: "Ricardo Leite",
    type: "JUDICIARIO",
    role: "Juiz — 10ª Vara Federal de Brasília",
    summary: "Assinou a ordem da primeira prisão de Vorcaro em 17/11/2025, às 15h29 — dezoito minutos antes da defesa peticionar contra eventuais cautelares.",
    details: [],
    x: 78, y: 15
  },

  // ---------- NÚCLEO DE INTIMIDAÇÃO / "A TURMA" ----------
  {
    id: "mourao",
    name: "Luiz Phillipi Machado de Moraes Mourão ('Sicário')",
    type: "SEGURANCA",
    role: "Coordenador operacional de 'A Turma'",
    summary: "Segundo a PF, comandava vigilância, monitoramento de alvos e intimidação — incluindo o plano de agredir um jornalista. Recebia R$ 1 milhão por mês, segundo a investigação. Preso na fase de 04/03/2026; encontrado desacordado em custódia policial e morreu pouco depois (Hospital João XXIII, BH) — investigação trata como suicídio.",
    details: [
      "Mensagem citada pela PF: Vorcaro pede para 'moer' uma funcionária que o ameaçava; Mourão responde perguntando o que fazer.",
      "Empresa King Participações Imobiliárias Ltda., de sua propriedade, usada para repassar pagamentos ao grupo."
    ],
    sources: [
      { label: "Revista Fórum — A Turma e o núcleo de intimidação", url: "https://revistaforum.com.br/politica/compliance-zero-a-turma-banco-master/" },
      { label: "Metrópoles — Morte de Mourão em custódia", url: "https://www.metropoles.com/brasil/policia-br/luiz-mourao-morre-em-custodia-da-policia-federal" },
    ],
    x: 25, y: 5
  },
  {
    id: "roseno",
    name: "Marilson Roseno da Silva",
    type: "SEGURANCA",
    role: "Policial federal aposentado — núcleo de inteligência paralela",
    summary: "Apontado como um dos principais operadores de 'A Turma', usando experiência e contatos da carreira policial para obter dados sigilosos e vigiar alvos. Preso na fase de 04/03/2026.",
    details: [],
    x: 15, y: 12
  },
  {
    id: "henrique_vorcaro",
    name: "Henrique Moura Vorcaro",
    type: "FAMILIA",
    role: "Pai de Daniel Vorcaro — fundador do Grupo Multipar",
    summary: "Preso em 14/05/2026 em Belo Horizonte (6ª fase). PF aponta que R$ 2,24 bilhões de vítimas do banco foram ocultados em conta no nome dele. Suspeito de manter pagamentos à 'Turma' mesmo após a prisão do filho, e de ligação direta com a estrutura de intimidação. Passou a usar número de telefone colombiano após o avanço das investigações.",
    details: [],
    sources: [
      { label: "CNN Brasil — 6ª fase: prisão do pai de Vorcaro", url: "https://www.cnnbrasil.com.br/politica/pf-deflagra-nova-fase-da-operacao-compliance-zero-pai-de-vorcaro-e-preso/" },
      { label: "Jornal de Brasília — Decisão de Mendonça na 6ª fase", url: "https://jornaldebrasilia.com.br/noticias/politica-e-poder/veja-trechos-da-decisao-de-andre-mendonca-que-autorizou-nova-fase-da-operacao-compliance-zero/" },
    ],
    x: 35, y: 38
  },
  {
    id: "natalia_vorcaro",
    name: "Natália Vorcaro",
    type: "FAMILIA",
    role: "Irmã de Daniel Vorcaro, esposa de Fabiano Zettel",
    summary: "Citada junto ao pai, Henrique, por mansão na Flórida (EUA) que chamou atenção dos investigadores.",
    details: [],
    x: 30, y: 22
  },
  {
    id: "felipe_cancado",
    name: "Felipe Cançado Vorcaro",
    type: "FAMILIA",
    role: "Primo de Daniel Vorcaro",
    summary: "Alvo da 5ª fase da operação (07/05/2026), junto com Ciro Nogueira, em mandados no DF, MG, PI e SP.",
    details: [],
    x: 40, y: 30
  },
  {
    id: "sebastiao_monteiro",
    name: "Sebastião Monteiro Júnior",
    type: "SEGURANCA",
    role: "Policial federal — integrante de 'A Turma'",
    summary: "Identificado pela PF como um dos integrantes do núcleo de intimidação, ao lado de Roseno e Anderson Wander.",
    details: [],
    x: 10, y: 5
  },
  {
    id: "anderson_wander",
    name: "Anderson Wander da Silva Lima",
    type: "SEGURANCA",
    role: "Policial federal — integrante de 'A Turma'",
    summary: "Identificado pela PF como integrante do núcleo de intimidação 'A Turma'.",
    details: [],
    x: 5, y: 10
  },
  {
    id: "manoel_mendes",
    name: "Manoel Mendes Rodrigues",
    type: "SEGURANCA",
    role: "Operador do jogo do bicho — integrante de 'A Turma'",
    summary: "Apontado pela PF como integrante de 'A Turma', com conexões a operações de jogo do bicho no Rio de Janeiro. Ligado ao episódio de intimidação a ex-funcionários de Vorcaro em Angra dos Reis (jun/2024).",
    details: [],
    x: 2, y: 2
  },
  {
    id: "lauro_jardim",
    name: "Lauro Jardim",
    type: "FATO",
    role: "Jornalista (colunista de O Globo) — alvo de ameaça",
    summary: "Segundo mensagens citadas pela PF, Vorcaro teria solicitado a Mourão que ele fosse agredido fisicamente, com a sugestão de simular um assalto, em razão de reportagens críticas ao Master.",
    details: [],
    x: 18, y: -2
  },
  {
    id: "daniel_monteiro",
    name: "Daniel Monteiro",
    type: "FINANCEIRO",
    role: "Advogado de Vorcaro",
    summary: "Preso preventivamente na 4ª fase (16/04/2026). Teria representado o Banco Master em negociações estratégicas com o BRB.",
    details: [],
    x: 38, y: 65
  },

  // ---------- VAZAMENTOS / OPERACIONAL ----------
  {
    id: "perito_pf",
    name: "Perito criminal federal (afastado)",
    type: "FATO",
    role: "Suspeito de vazamento a jornalista",
    summary: "Investigado na 7ª fase por suposto repasse indevido de dados internos do caso a um jornalista; casa alvo de busca e o perito foi afastado do cargo.",
    details: [],
    x: 85, y: 8
  },
  {
    id: "delegada_pf",
    name: "Delegada da Polícia Federal",
    type: "SEGURANCA",
    role: "Suspeita de integrar o esquema",
    summary: "Alvo da 3ª fase, suspeita de usar acessos privilegiados na PF para obtenção de informações sigilosas em favor do grupo investigado.",
    details: [],
    x: 8, y: -2
  },

  // ---------- REAG / MANSUR — núcleo financeiro ampliado ----------
  {
    id: "mansur_filhos",
    name: "Lucas, Marina e Alex Falbo Mansur",
    type: "FINANCEIRO",
    role: "Filhos de João Carlos Mansur — beneficiários de fundos",
    summary: "Segundo o MPF, aparecem como beneficiários finais declarados dos fundos Astralo 95 e Reag Growth 95, que teriam movimentado R$ 1,45 bilhão em recursos oriundos do Master, numa cadeia de controle apontada como mecanismo de desvio.",
    details: [],
    x: 2, y: 45
  },
  {
    id: "fundo_celeno",
    name: "Fundo Celeno",
    type: "FINANCEIRO",
    role: "Fundo administrado pelo próprio Master",
    summary: "Segundo a PF, João Carlos Mansur usou o fundo Celeno (administrado pelo Master) para adquirir ações do BRB — manobra apontada como triangulação financeira que teria turbinado artificialmente o capital do banco estatal.",
    details: [],
    x: 12, y: 60
  },
  {
    id: "pcc_carbono_oculto",
    name: "Operação Carbono Oculto (PCC)",
    type: "FATO",
    role: "Investigação correlata — infiltração do crime organizado",
    summary: "Investigação do MPSP e da PF sobre infiltração do PCC no mercado financeiro via postos de combustíveis e fundos de investimento. A Reag, de Mansur, já era alvo dessa operação antes de entrar no radar da Compliance Zero — levantando suspeita (negada por Mansur) de cruzamento entre os dois esquemas.",
    details: [],
    x: 5, y: 58
  },

  // ---------- FICTOR / VENDA INTERNACIONAL ----------
  {
    id: "fictor",
    name: "Fictor Holding Financeira",
    type: "EMPRESARIAL",
    role: "Holding que anunciou compra do Master por R$ 3 bi",
    summary: "Anunciou em 17/11/2025 acordo para comprar o Master com aporte de R$ 3 bi e consórcio de investidores dos Emirados Árabes. Negócio nunca se concretizou; BC classificou a movimentação como possível 'cortina de fumaça'. Em fev/2026 pediu recuperação judicial e tornou-se ela própria alvo de inquérito da PF por gestão fraudulenta e emissão de títulos sem lastro.",
    details: [
      "Sócios principais: Rafael Góis, Rafael Paixão e Phillippe Rubini.",
      "Antônio de Oliveira Neto (ex-diretor do Master até 2020) seria o CEO do banco resultante da fusão.",
      "PF suspeita que o anúncio da venda visava justificar a tentativa de Vorcaro embarcar a Dubai antes da 1ª prisão."
    ],
    sources: [
      { label: "Estadão — Bastidores da venda à Fictor", url: "https://www.estadao.com.br/politica/fictor-banco-master-emirados-arabes-temer/" },
    ],
    x: 48, y: 18
  },
  {
    id: "temer",
    name: "Michel Temer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Michel_Temer_foto_oficial.jpg/240px-Michel_Temer_foto_oficial.jpg",
    type: "POLITICO",
    role: "Ex-presidente da República",
    summary: "Segundo o Estadão, apresentou Vorcaro a um integrante da realeza dos Emirados Árabes na busca por investidores para o Master. CPI do Crime Organizado confirmou pagamentos do banco a ele.",
    details: [],
    sources: [
      { label: "Estadão — Temer apresentou Vorcaro à realeza dos Emirados", url: "https://www.estadao.com.br/politica/fictor-banco-master-emirados-arabes-temer/" },
    ],
    x: 55, y: 12
  },
  {
    id: "renzo_gracie",
    name: "Renzo Gracie",
    type: "FATO",
    role: "Mestre de jiu-jítsu — citado na negociação Fictor",
    summary: "Citado pelo Estadão entre os personagens envolvidos na tentativa de venda do Master a investidores dos Emirados Árabes.",
    details: [],
    x: 58, y: 5
  },
  {
    id: "burilli",
    name: "Bruno Burilli",
    type: "EMPRESARIAL",
    role: "Advogado — amigo de Vorcaro, atuou pela Fictor",
    summary: "Amigo de longa data de Vorcaro, conduziu mais de uma dezena de 'road shows' apresentando o Master a investidores estrangeiros — sobretudo árabes e russos interessados na licença do banco para transações via sistema financeiro chinês, fora do sistema bancário americano.",
    details: [],
    x: 42, y: -3
  },
  {
    id: "antonio_oliveira_neto",
    name: "Antônio de Oliveira Neto",
    type: "EMPRESARIAL",
    role: "Ex-diretor do Master (até 2020) — indicado CEO do Banco Fictor",
    summary: "Atuou do lado da Fictor na negociação. Já havia tentado, em 2021, aproximar o banqueiro russo Oleg Tinkov (dissidente de Putin) para comprar o Will Bank.",
    details: [],
    x: 50, y: 0
  },

  // ---------- PREVIDÊNCIA / RPPS / CPMI INSS ----------
  {
    id: "amprev",
    name: "Amprev — Previdência do Amapá",
    type: "PREVIDENCIA",
    role: "Fundo estadual — déficit de R$ 394,9 milhões",
    summary: "Um dos institutos de previdência (RPPS) com maior exposição ao Master. Diretor-presidente Jocildo Lemos e dois integrantes do comitê de investimentos foram alvos de operação da PF, desdobramento da Compliance Zero.",
    details: [],
    sources: [
      { label: "Estadão — RPPS estaduais expostos ao Master", url: "https://www.estadao.com.br/economia/amprev-amapa-banco-master-compliance-zero/" },
    ],
    x: 22, y: 60
  },
  {
    id: "jocildo_lemos",
    name: "Jocildo Lemos",
    type: "PREVIDENCIA",
    role: "Diretor-presidente da Amprev",
    summary: "Alvo de operação da Polícia Federal junto com dois integrantes do comitê de investimentos do fundo, no contexto da apuração sobre aplicações de institutos de previdência no Master.",
    details: [],
    x: 12, y: 75
  },
  {
    id: "aparecidaprev",
    name: "AparecidaPrev",
    type: "PREVIDENCIA",
    role: "Fundo municipal (Aparecida de Goiânia) — R$ 40 milhões aplicados",
    summary: "Declarou ter aplicado R$ 40 milhões em letras do Master em junho de 2024. Segundo o Ministério da Previdência, o investimento ocorreu por insistência do secretário Einstein Paniago, apesar de nota de risco inferior apontada pelo conselho do fundo.",
    details: [],
    x: 22, y: 72
  },
  {
    id: "einstein_paniago",
    name: "Einstein Paniago",
    type: "PREVIDENCIA",
    role: "Ex-secretário ligado ao AparecidaPrev",
    summary: "Segundo o Ministério da Previdência, teria se aproximado de Vorcaro e trabalhado pessoalmente para contornar as regras internas e viabilizar o investimento do fundo municipal no Master.",
    details: [],
    x: 25, y: 65
  },
  {
    id: "cpmi_inss",
    name: "CPMI do INSS",
    type: "FATO",
    role: "Comissão Parlamentar Mista de Inquérito",
    summary: "Investiga fraudes em descontos associativos e empréstimos consignados a aposentados do INSS. O Master teve Acordo de Cooperação Técnica com o INSS suspenso em outubro/2025 por suspeita de irregularidades em 74% dos contratos (~250 mil acordos fantasmas). STF bloqueou acesso da CPMI aos arquivos da PF para preservar a intimidade de Vorcaro.",
    details: [
      "Aposentados contrataram R$ 701,2 milhões em RCC (Reserva de Cartão Consignado) entre jan/2023 e nov/2025.",
      "Mais de 4,8 milhões de operações desse tipo realizadas no período."
    ],
    sources: [
      { label: "Wikipedia — CPMI do INSS e o Banco Master", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero" },
    ],
    x: 30, y: 5
  },

  // ---------- POLÍTICOS CONFIRMADOS PELA CPI DO CRIME ORGANIZADO ----------
  {
    id: "antonio_rueda",
    name: "Antônio de Rueda",
    type: "POLITICO",
    role: "Ex-presidente do partido União Brasil",
    summary: "Citado entre os políticos que, segundo apuração divulgada em abril/2026 e confirmada pela CPI do Crime Organizado, receberam dinheiro do Banco Master.",
    details: [],
    x: 50, y: 92
  },
  {
    id: "havengate",
    name: "Fundo Havengate",
    type: "FINANCEIRO",
    role: "Veículo intermediário dos repasses ao filme Dark Horse",
    summary: "Segundo Karina Ferreira da Gama (Go Up Entertainment), o dinheiro de Vorcaro para o filme 'Dark Horse' não foi transferido diretamente, mas passou primeiro pelo fundo Havengate antes de chegar à produtora.",
    details: [],
    x: 65, y: 92
  },
  {
    id: "karina_gama",
    name: "Karina Ferreira da Gama",
    type: "FATO",
    role: "Sócia da Go Up Entertainment (produtora do filme Dark Horse)",
    summary: "Afirmou publicamente que Vorcaro foi responsável por mais de 90% da verba do filme 'Dark Horse' — orçamento de R$ 65,7 milhões, dos quais R$ 61 milhões pagos por Vorcaro de um total acordado de R$ 134 milhões com Flávio Bolsonaro.",
    details: [],
    sources: [
      { label: "Intercept Brasil — SWIFTs e planilha da Go Up", url: "https://theintercept.com/2026/06/09/dark-horse-vorcaro-go-up-swift/" },
    ],
    x: 70, y: 90
  },
  {
    id: "thiago_miranda",
    name: "Thiago Miranda Silva",
    type: "SEGURANCA",
    role: "Publicitário — líder do núcleo O Time",
    summary: "Dono da Agência MiThi e ex-sócio do Portal Leo Dias. Apontado pela PF como principal articulador do 'Projeto DV' (iniciais de Daniel Vorcaro) — terceiro braço operacional de Vorcaro. Coordenou rede de ~40 influenciadores para atacar o BC, com pagamentos de até R$ 2 mi e NDAs de R$ 800 mil de multa. Também intermediou contato entre Vorcaro e Flávio Bolsonaro sobre o filme Dark Horse. Alvo na 10ª fase (09/07/2026). Nega as acusações.",
    details: [
      "Saiu do Grupo Leo Dias 2 dias antes de virar alvo da PF.",
      "PF encontrou diálogos mar-abr/2025 em que Vorcaro pedia dados pessoais de Malu Gaspar para freá-la.",
      "Influenciadores eram abordados com NDA de R$ 800 mil antes de saber que trabalhavam para Vorcaro.",
      "PF estima até R$ 2 milhões destinados à rede de desinformação contra o Banco Central."
    ],
    sources: [
      { label: "CNN Brasil — Projeto DV e intimidação de jornalistas", url: "https://www.cnnbrasil.com.br/politica/projeto-dv-de-vorcaro-mirava-intimidacao-e-coacao-de-pessoas-diz-pf/" },
      { label: "O Cafezinho — 10ª fase: Miranda e o Projeto DV", url: "https://www.ocafezinho.com/2026/07/09/compliance-zero-pf-faz-operacao-contra-publicitario-de-vorcaro-suspeito-de-intimidar-jornalistas-e-atacar-o-bc" },
      { label: "Gazeta do Paraná — Pagamentos de até R$ 2 mi a influenciadores", url: "https://gazetadoparana.com.br/artigo/operacao-compliance-zero-pf-aponta-pagamentos-de-ate-r-2-milhoes-a-influenciadores" },
    ],
    x: 22, y: 10
  },
  {
    id: "malu_gaspar",
    name: "Malu Gaspar",
    type: "FATO",
    role: "Jornalista de O Globo — alvo de monitoramento ilegal",
    summary: "Colunista do O Globo. Segundo decisão de Mendonça, teve dados bancários violados e informações de familiares levantadas por ordem de Vorcaro via Miranda. Vorcaro teria escrito ser preciso encontrar algo dessa mulher no pessoal.",
    details: [],
    sources: [
      { label: "CNN Brasil — Projeto DV e jornalistas monitorados", url: "https://www.cnnbrasil.com.br/politica/projeto-dv-de-vorcaro-mirava-intimidacao-e-coacao-de-pessoas-diz-pf/" },
    ],
    x: 15, y: 8
  },
  {
    id: "consuelo_dieguez",
    name: "Consuelo Dieguez",
    type: "FATO",
    role: "Jornalista da Revista Piauí — alvo de pressão",
    summary: "Citada na decisão de Mendonça como alvo de pressão de Vorcaro, por se recusar a retirar reportagens sobre o Banco Master da Piauí.",
    details: [],
    x: 12, y: 14
  },
  {
    id: "milton_maluhy",
    name: "Milton Maluhy Filho",
    type: "FATO",
    role: "CEO do Itaú Unibanco — monitorado por Vorcaro",
    summary: "Segundo a PF, Vorcaro solicitou a Miranda levantamento sobre o executivo do Itaú, alegando que ele estaria causando muito problema. Dados financeiros e pessoais foram coletados sem autorização.",
    details: [],
    x: 8, y: 18
  },
  {
    id: "leo_dias",
    name: "Leo Dias",
    type: "FATO",
    role: "Jornalista — ex-sócio de Thiago Miranda",
    summary: "Ex-sócio de Miranda no Grupo Leo Dias. Miranda anunciou saída da sociedade 2 dias antes de virar alvo da PF. Leo Dias não consta como investigado.",
    details: [],
    x: 18, y: 4
  },
  {
    id: "os_meninos",
    name: "Os Meninos",
    type: "SEGURANCA",
    role: "Segundo grupo operacional de Vorcaro — em apuração",
    summary: "PF identificou três grupos: A Turma (intimidação física), Os Meninos (ainda investigado) e O Time (desinformação). Mendonça reconheceu na 10ª fase que vínculos diretos entre os grupos ainda não foram comprovados.",
    details: [],
    x: 28, y: 8
  }  ,
  // ---------- 9ª FASE — novos operadores / Wagner ----------
  {
    id: "valerio_marega",
    name: "Valério Marega Júnior",
    type: "FINANCEIRO",
    role: "Operador financeiro — 'Valério Fundos'",
    summary: "Identificado nas mensagens interceptadas pela PF pelo apelido 'Valério Fundos'. Apontado como operador financeiro ligado a estruturas de fundos do Banco Master e à WNT Gestão. Segundo a PF, teria coordenado operacionalmente a compra do apartamento Poème Horto (R$ 2,45 mi em Salvador) em benefício do senador Jaques Wagner, a pedido de Augusto Lima. Defesa nega participação e afirma que ele foi apenas consultado sobre a possibilidade e respondeu negativamente.",
    details: [
      "Apresentado na investigação como elo entre Augusto Lima e o esquema de propina a Wagner.",
      "Defesa afirma que desconhecia o objetivo da eventual negociação imobiliária."
    ],
    sources: [
      { label: "O Estopim — 9ª fase: novos operadores de Wagner", url: "https://www.oestopim.com/post/pf-deflagra-nova-fase-da-compliance-zero-e-amplia-cerco-sobre-o-caso-banco-master" },
    ],
    x: 52, y: 96
  },
  {
    id: "david_monteiro",
    name: "David Lopes Monteiro",
    type: "FINANCEIRO",
    role: "Operador — núcleo empresarial e jurídico",
    summary: "Apontado pela PF como operador vinculado ao núcleo empresarial e jurídico do grupo Master. Junto com Valério Marega, teria intermediado a compra do apartamento de R$ 2,45 milhões para Jaques Wagner em Salvador. Alvo de mandados na 9ª fase.",
    details: [],
    x: 56, y: 98
  },
  {
    id: "guilherme_sodre",
    name: "Guilherme Henrique Sodré Martins",
    type: "POLITICO",
    role: "Pessoa de confiança de Jaques Wagner — suposto elo com o Master",
    summary: "Pai de Eduardo Sodré e descrito na representação policial como pessoa de confiança do senador Jaques Wagner. Apontado pela PF como o elo entre o núcleo do Banco Master e o senador. Alvo de mandados na 9ª fase.",
    details: [],
    sources: [
      { label: "CNN Brasil — 9ª fase: Guilherme Sodré como elo com Wagner", url: "https://www.cnnbrasil.com.br/politica/caso-master-pf-nova-fase-operacao-compliance-zero/" },
    ],
    x: 58, y: 93
  },
  {
    id: "andrea_novaes",
    name: "Andréa Lima Novaes",
    type: "FINANCEIRO",
    role: "Diretora da PKL One — prima de Augusto Lima",
    summary: "Prima de Augusto Lima, ex-sócio de Vorcaro. Diretora da empresa PKL One, que foi alvo de mandado de busca e apreensão na 9ª fase da Operação Compliance Zero.",
    details: [],
    x: 16, y: 52
  },
  {
    id: "flavia_peres",
    name: "Flávia Péres",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fl%C3%A1via_P%C3%A9res_%28foto_oficial%29.jpg/240px-Fl%C3%A1via_P%C3%A9res_%28foto_oficial%29.jpg",
    type: "POLITICO",
    role: "Ex-ministra do governo Bolsonaro — esposa de Augusto Lima",
    summary: "Esposa de Augusto Ferreira Lima, ex-sócio de Vorcaro. Ex-ministra no governo Jair Bolsonaro. Citada nas investigações em razão do vínculo familiar com Lima, que figura entre os principais alvos da operação.",
    details: [],
    x: 18, y: 58
  },
  {
    id: "fbi_interpol",
    name: "FBI e Interpol",
    type: "INSTITUICAO",
    role: "Cooperação internacional — rastreamento de patrimônio",
    summary: "Segundo o Século Diário, a PF atua em cooperação com o FBI (EUA) e a Interpol para congelar contas e identificar patrimônio oculto de Vorcaro e associados em paraísos fiscais internacionais.",
    details: [],
    x: 92, y: 70
  },
  {
    id: "octa_scd",
    name: "Octa Sociedade de Crédito Direto",
    type: "INSTITUICAO",
    role: "Instituição do grupo Master — liquidada em março/2026",
    summary: "Mais uma instituição do conglomerado Master liquidada extrajudicialmente pelo Banco Central, em março de 2026, ampliando o rombo total estimado no FGC para quase R$ 50 bilhões.",
    details: [],
    x: 70, y: 42
  }
  ,
  // ---------- PROJETO DV — novos atores ----------
  {
    id: "marcelao",
    name: "Marcello Lopes ('Marcelão')",
    type: "SEGURANCA",
    role: "Publicitário — estrategista do Projeto DV e da pré-campanha de Flávio Bolsonaro",
    summary: "Ex-policial civil do DF, publicitário e conselheiro íntimo de Flávio Bolsonaro. Aparece no documento oficial do 'Projeto DV' como um dos três integrantes da equipe de estrategistas, ao lado de Thiago Miranda e Anderson Nunes. Recebeu R$ 650 mil via PIX de Miranda em 13/12/2025, período em que o projeto ainda estava em elaboração. Nega envolvimento e alega que o repasse refere-se a serviços anteriores. Deixou a pré-campanha de Flávio Bolsonaro em 20/05/2026. Sua agência Cálix Propaganda teria acumulado cerca de R$ 70 milhões anuais em contratos federais durante o governo Bolsonaro.",
    details: [
      "Aparece no 'Projeto DV' ao lado de Thiago Miranda e Anderson Nunes como estrategista.",
      "R$ 650 mil recebidos via PIX de Miranda em 13/12/2025.",
      "Afirma ter deixado o projeto ao descobrir ligação com o Banco Master.",
      "Não há acusação formal ou decisão judicial contra ele até o momento."
    ],
    sources: [
      { label: "Revista Fórum — R$ 650 mil conecta Marcelão ao Projeto DV", url: "https://revistaforum.com.br/politica/650-mil-pix-marqueteiro-flavio-bolsonaro-vorcaro/" },
      { label: "Página 1 News — Trajetória de Marcelão", url: "https://pagina1news.com.br/marqueteiro-ligado-a-flavio-bolsonaro-recebeu-milhoes-em-contratos-publicos-e-entrou-no-radar-apos-repasse-de-vorcaro/" },
    ],
    x: 25, y: 3
  },
  {
    id: "anderson_nunes",
    name: "Anderson Nunes",
    type: "SEGURANCA",
    role: "Publicitário da Unltd Network — integrante do Projeto DV",
    summary: "Dono da Unltd Network, empresa subcontratada por Thiago Miranda para atuar no 'Projeto DV'. Recebeu R$ 400 mil de Miranda dois dias após o repasse de R$ 650 mil a Marcelão (15/12/2025). Sua empresa teria sido responsável pela articulação operacional da rede de cerca de 40 influenciadores digitais usados para atacar o Banco Central.",
    details: [
      "Unltd Network recebeu R$ 400 mil de Miranda em 15/12/2025.",
      "Investigado como operador da rede de influenciadores do Projeto DV."
    ],
    sources: [
      { label: "Brasil 247 — Unltd Network e o Projeto DV", url: "https://www.brasil247.com/brasilia/nova-fase-da-compliance-zero-escancara-a-gravidade-do-banditismo-de-colarinho-branco-dispara-lindbergh/" },
    ],
    x: 30, y: 0
  },
  {
    id: "renato_gomes",
    name: "Renato Gomes",
    type: "INSTITUICAO",
    role: "Ex-diretor do Banco Central — alvo de ataques coordenados",
    summary: "Ex-diretor de Organização do Sistema Financeiro do Banco Central. Segundo a PF, era o alvo pessoal específico dos ataques coordenados pelo 'Projeto DV' — a campanha de cerca de 40 influenciadores teria foco especial em ataques de caráter pessoal contra ele, por suas posições regulatórias contrárias aos interesses do Banco Master.",
    details: [],
    sources: [
      { label: "Revista Fórum — Renato Gomes alvo do Projeto DV", url: "https://revistaforum.com.br/politica/650-mil-pix-marqueteiro-flavio-bolsonaro-vorcaro/" },
    ],
    x: 78, y: 58
  }

];

// ----------------------------------------------------------
// CONEXÕES (arestas do grafo)
// ----------------------------------------------------------
const EDGES = [
  // Núcleo financeiro
  { from: "vorcaro", to: "zettel", label: "cunhado — suposto operador financeiro" },
  { from: "vorcaro", to: "augusto_lima", label: "ex-sócio no Banco Master" },
  { from: "vorcaro", to: "alberto_felix", label: "tesoureiro do grupo" },
  { from: "vorcaro", to: "super_empreendimentos", label: "empresa usada para pagamentos" },
  { from: "zettel", to: "super_empreendimentos", label: "aporte de R$ 48,5 mi (IR 2022)" },
  { from: "vorcaro", to: "cayman", label: "sócio — R$ 700 mi+ enviados (COAF)" },
  { from: "vorcaro", to: "tanure", label: "alvo de busca — 2ª fase" },
  { from: "vorcaro", to: "mansur", label: "alvo de busca — 2ª fase" },
  { from: "super_empreendimentos", to: "mourao", label: "via galeria Almeida & Dale" },

  // BRB / instituições
  { from: "vorcaro", to: "brb", label: "venda de carteiras de crédito sem lastro" },
  { from: "brb", to: "phc", label: "ex-presidente" },
  { from: "vorcaro", to: "phc", label: "suposta propina de R$ 146,5 mi" },
  { from: "brb", to: "dario_garcia", label: "ex-diretor financeiro" },
  { from: "bc", to: "brb", label: "barrou 1ª tentativa de compra (set/2025)" },
  { from: "bc", to: "souza_santana", label: "ex-servidores afastados por decisão do STF" },
  { from: "vorcaro", to: "souza_santana", label: "suposta 'consultoria informal'" },
  { from: "bc", to: "galipolo", label: "presidente" },
  { from: "moraes", to: "galipolo", label: "supostos contatos reiterados sobre venda do Master" },
  { from: "vorcaro", to: "daniel_monteiro", label: "advogado — negociações com o BRB" },

  // Político
  { from: "vorcaro", to: "ciro_nogueira", label: "suposto repasse de R$ 300–500 mil/mês" },
  { from: "ciro_nogueira", to: "felipe_cancado", label: "investigados na mesma fase (5ª)" },
  { from: "vorcaro", to: "flavio_bolsonaro", label: "acordo de R$ 134 mi p/ filme Dark Horse" },
  { from: "flavio_bolsonaro", to: "eduardo_bolsonaro", label: "irmãos — ambos no filme Dark Horse" },
  { from: "vorcaro", to: "eduardo_bolsonaro", label: "suposta transferência via Thiago Miranda" },
  { from: "vorcaro", to: "claudio_castro", label: "viagens, jantares, whisky em NY" },
  { from: "claudio_castro", to: "rioprevidencia", label: "ex-governador — aportes no Master" },
  { from: "vorcaro", to: "rioprevidencia", label: "destino de R$ 230 mi+ em aportes" },
  { from: "claudio_castro", to: "siqueira_rodrigues", label: "suposto intermediário com Vorcaro" },
  { from: "siqueira_rodrigues", to: "vorcaro", label: "suposto intermediário" },
  { from: "rioprevidencia", to: "deivis_antunes", label: "ex-presidente" },
  { from: "vorcaro", to: "acm_neto", label: "empresa ligada recebeu R$ 3,6 mi (COAF)" },
  { from: "vorcaro", to: "jaques_wagner", label: "suposto apto em Salvador + R$ 3,5 mi" },
  { from: "vorcaro", to: "mantega", label: "suposto pagamento de R$ 1 mi/mês" },
  { from: "vorcaro", to: "lewandowski", label: "suposto pagamento a escritório da família" },

  // Judiciário
  { from: "vorcaro", to: "moraes", label: "mensagem enviada 2 min antes da 1ª prisão" },
  { from: "moraes", to: "viviane_moraes", label: "esposa — contrato com o Master" },
  { from: "vorcaro", to: "viviane_moraes", label: "contrato noticiado em 11/12/2025" },
  { from: "moraes", to: "gonet", label: "degustação de whisky em Londres (bancada por Vorcaro)" },
  { from: "vorcaro", to: "gonet", label: "custeou degustação em Londres" },
  { from: "vorcaro", to: "toffoli", label: "relator sorteado; voo a Lima no mesmo dia" },
  { from: "toffoli", to: "solange_salgado", label: "TRF-1 solta Vorcaro durante relatoria de Toffoli" },
  { from: "toffoli", to: "mendonca", label: "sucedido na relatoria" },
  { from: "mendonca", to: "ricardo_leite", label: "casos correlatos na 10ª Vara Federal" },
  { from: "ricardo_leite", to: "vorcaro", label: "assinou ordem da 1ª prisão" },
  { from: "toffoli", to: "zettel", label: "família ligada ao resort Tayayá via FIP Arleen" },

  // Núcleo de intimidação "A Turma"
  { from: "vorcaro", to: "mourao", label: "comando de 'A Turma' — R$ 1 mi/mês" },
  { from: "mourao", to: "roseno", label: "coordenação operacional conjunta" },
  { from: "mourao", to: "sebastiao_monteiro", label: "integrante de 'A Turma'" },
  { from: "mourao", to: "anderson_wander", label: "integrante de 'A Turma'" },
  { from: "mourao", to: "manoel_mendes", label: "integrante de 'A Turma' — jogo do bicho" },
  { from: "mourao", to: "lauro_jardim", label: "suposto plano de agressão (assalto forjado)" },
  { from: "zettel", to: "mourao", label: "suposto operador de pagamentos ao grupo" },
  { from: "vorcaro", to: "delegada_pf", label: "suspeita de uso de acessos privilegiados" },
  { from: "vorcaro", to: "perito_pf", label: "suposto vazamento de dados da investigação" },

  // Família
  { from: "vorcaro", to: "henrique_vorcaro", label: "pai — R$ 2,24 bi ocultados em sua conta" },
  { from: "henrique_vorcaro", to: "roseno", label: "suposta cobrança de pagamentos a 'A Turma'" },
  { from: "henrique_vorcaro", to: "natalia_vorcaro", label: "filha — mansão na Flórida" },
  { from: "natalia_vorcaro", to: "zettel", label: "esposa" },
  { from: "vorcaro", to: "felipe_cancado", label: "primo" },

  // Reag / Mansur ampliado
  { from: "mansur", to: "mansur_filhos", label: "pai — filhos beneficiários de fundos" },
  { from: "mansur", to: "fundo_celeno", label: "usou fundo p/ comprar ações do BRB" },
  { from: "fundo_celeno", to: "brb", label: "triangulação financeira" },
  { from: "vorcaro", to: "fundo_celeno", label: "fundo administrado pelo Master" },
  { from: "mansur", to: "pcc_carbono_oculto", label: "já investigado nessa operação" },
  { from: "mansur", to: "phc", label: "negocia delação em paralelo a Costa" },

  // Fictor / venda internacional
  { from: "vorcaro", to: "fictor", label: "anunciou venda por R$ 3 bi (não concretizada)" },
  { from: "fictor", to: "temer", label: "apresentou Vorcaro à realeza dos Emirados" },
  { from: "vorcaro", to: "temer", label: "suposto pagamento confirmado pela CPI" },
  { from: "fictor", to: "renzo_gracie", label: "citado na negociação" },
  { from: "fictor", to: "burilli", label: "advogado que conduziu 'road shows'" },
  { from: "vorcaro", to: "burilli", label: "amigo de longa data" },
  { from: "fictor", to: "antonio_oliveira_neto", label: "indicado CEO do Banco Fictor" },

  // Previdência / RPPS / CPMI
  { from: "vorcaro", to: "amprev", label: "destino de R$ 394,9 mi (déficit)" },
  { from: "amprev", to: "jocildo_lemos", label: "diretor-presidente" },
  { from: "vorcaro", to: "aparecidaprev", label: "destino de R$ 40 mi aplicados" },
  { from: "aparecidaprev", to: "einstein_paniago", label: "suposta atuação para viabilizar aporte" },
  { from: "einstein_paniago", to: "vorcaro", label: "suposta aproximação pessoal" },
  { from: "vorcaro", to: "cpmi_inss", label: "convocado — sigilos quebrados" },
  { from: "cpmi_inss", to: "rioprevidencia", label: "frentes interligadas de apuração" },

  // Políticos confirmados pela CPI
  { from: "vorcaro", to: "antonio_rueda", label: "pagamento confirmado pela CPI" },
  { from: "vorcaro", to: "havengate", label: "fundo intermediário dos repasses" },
  { from: "havengate", to: "flavio_bolsonaro", label: "repasses ao filme Dark Horse" },
  { from: "karina_gama", to: "flavio_bolsonaro", label: "sócia da produtora Go Up" },
  { from: "karina_gama", to: "vorcaro", label: "confirmou 90%+ do financiamento do filme" },
  { from: "vorcaro", to: "thiago_miranda", label: "contratou para gestão de crise e desinformação" },
  { from: "thiago_miranda", to: "malu_gaspar", label: "monitoramento ilegal a pedido de Vorcaro" },
  { from: "thiago_miranda", to: "consuelo_dieguez", label: "pressão para retirar reportagens da Piauí" },
  { from: "thiago_miranda", to: "milton_maluhy", label: "levantamento ilegal de dados pessoais" },
  { from: "thiago_miranda", to: "leo_dias", label: "ex-sócio no Grupo Leo Dias" },
  { from: "vorcaro", to: "os_meninos", label: "3 grupos paralelos: A Turma, Os Meninos, O Time" },
  { from: "thiago_miranda", to: "os_meninos", label: "paralelo ao O Time (em apuração)" },
  { from: "mourao", to: "os_meninos", label: "grupos paralelos de intimidação" },
  { from: "thiago_miranda", to: "eduardo_bolsonaro", label: "citado como intermediário no Dark Horse" },

  // 9ª fase — operadores de Wagner
  { from: "augusto_lima", to: "valerio_marega", label: "pediu operacionalização do apartamento para Wagner" },
  { from: "valerio_marega", to: "jaques_wagner", label: "suposta compra de apê Poème Horto por R$ 2,45 mi" },
  { from: "david_monteiro", to: "jaques_wagner", label: "intermediou suposta propina imobiliária" },
  { from: "valerio_marega", to: "david_monteiro", label: "atuaram juntos na operação imobiliária" },
  { from: "guilherme_sodre", to: "jaques_wagner", label: "suposto elo entre Master e Wagner" },
  { from: "guilherme_sodre", to: "vorcaro", label: "ligação ao núcleo do Master" },
  { from: "augusto_lima", to: "andrea_novaes", label: "prima — diretora da PKL One" },
  { from: "augusto_lima", to: "flavia_peres", label: "cônjuge — ex-ministra Bolsonaro" },
  { from: "vorcaro", to: "fbi_interpol", label: "alvo de cooperação internacional PF-FBI-Interpol" },
  { from: "bc", to: "octa_scd", label: "liquidação decretada em março/2026" },
  { from: "vorcaro", to: "octa_scd", label: "instituição do conglomerado Master" },

  // Projeto DV — novos atores
  { from: "thiago_miranda", to: "marcelao", label: "PIX de R$ 650 mil — integrante da equipe do Projeto DV" },
  { from: "thiago_miranda", to: "anderson_nunes", label: "PIX de R$ 400 mil — Unltd Network subcontratada" },
  { from: "marcelao", to: "flavio_bolsonaro", label: "estrategista da pré-campanha presidencial" },
  { from: "anderson_nunes", to: "thiago_miranda", label: "subcontratada para operar rede de influenciadores" },
  { from: "thiago_miranda", to: "renato_gomes", label: "alvo pessoal dos ataques do Projeto DV" },
  { from: "vorcaro", to: "renato_gomes", label: "alvo de campanha de desinformação coordenada" },
];

// ----------------------------------------------------------
// LINHA DO TEMPO
// ----------------------------------------------------------
const TIMELINE = [
  {
    date: "2024 (início)",
    title: "Abertura da investigação",
    phase: "Origem",
    summary: "A pedido do Ministério Público Federal, a Polícia Federal inicia investigação sobre supostos títulos de crédito sem lastro emitidos por instituições do Sistema Financeiro Nacional — origem da futura Operação Compliance Zero.",
    actors: ["vorcaro"]
  },
  {
    date: "27/09/2021",
    title: "FIP Arleen e o resort Tayayá",
    phase: "Antecedentes",
    summary: "O FIP Arleen torna-se sócio das empresas responsáveis pelo resort Tayayá, adquirindo metade da participação de R$ 6,6 milhões da Maridt S.A. — empresa ligada à família de Dias Toffoli.",
    actors: ["toffoli"]
  },
  {
    date: "Out/Nov 2021",
    title: "Aportes de Zettel ao fundo Leal",
    phase: "Antecedentes",
    summary: "Fabiano Zettel realiza aportes de R$ 20 milhões no fundo Leal, que por sua vez aplica valor equivalente no FIP Arleen — fundo ligado ao resort da família Toffoli.",
    actors: ["zettel", "toffoli"]
  },
  {
    date: "Mai/2023",
    title: "Jantar Vorcaro–Castro em Nova York",
    phase: "Antecedentes",
    summary: "Cláudio Castro janta com Vorcaro em Nova York; conta de mais de US$ 13 mil teria sido paga pelo banqueiro, segundo a PF.",
    actors: ["vorcaro", "claudio_castro"]
  },
  {
    date: "Nov/2023",
    title: "Primeiros aportes da Rioprevidência",
    phase: "Antecedentes",
    summary: "Rioprevidência realiza primeiro aporte de R$ 40 milhões em Letras Financeiras do Master, seguido de novo aporte de R$ 80 milhões dias depois.",
    actors: ["rioprevidencia", "claudio_castro"]
  },
  {
    date: "Mar/2024",
    title: "Reuniões nos palácios do governo do RJ",
    phase: "Antecedentes",
    summary: "Encontros entre Castro e Vorcaro registrados no Palácio Laranjeiras (residência oficial) e no Palácio Guanabara (sede do governo estadual).",
    actors: ["claudio_castro", "vorcaro"]
  },
  {
    date: "25/04/2024",
    title: "Whisky em Londres com Moraes e Gonet",
    phase: "Antecedentes",
    summary: "Alexandre de Moraes e o procurador-geral Paulo Gonet participam de degustação do whisky Macallan em Londres, bancada por Daniel Vorcaro.",
    actors: ["moraes", "gonet", "vorcaro"]
  },
  {
    date: "14/05/2024",
    title: "Whisky em Nova York e aporte de R$ 80 milhões",
    phase: "Antecedentes",
    summary: "Vorcaro convida Castro para degustação exclusiva de whisky em NY (evento de US$ 1,013 milhão). No dia seguinte, a Rioprevidência aporta R$ 80 milhões em Letras Financeiras do Master.",
    actors: ["vorcaro", "claudio_castro", "rioprevidencia"]
  },
  {
    date: "Jun/2024",
    title: "Episódio de Angra dos Reis",
    phase: "Antecedentes",
    summary: "Integrantes de 'A Turma' vão a Angra dos Reis intimidar ex-funcionários ligados a Vorcaro, incluindo abordagem ao comandante de uma embarcação do banqueiro.",
    actors: ["mourao", "manoel_mendes"]
  },
  {
    date: "Ago/2025",
    title: "Banco Pleno transferido a Augusto Lima",
    phase: "Antecedentes",
    summary: "O Banco Pleno (ex-Voiter) é transferido para o ex-sócio de Vorcaro, Augusto Lima.",
    actors: ["augusto_lima"]
  },
  {
    date: "Jan–Jul/2025",
    title: "Remessas para offshore em Cayman",
    phase: "Antecedentes",
    summary: "Durante as negociações com o BRB, Vorcaro envia ao menos R$ 700 milhões em ativos do Master para holding nas Ilhas Cayman, segundo dados do COAF.",
    actors: ["vorcaro", "cayman"]
  },
  {
    date: "Set/2025",
    title: "BC barra 1ª tentativa de compra pelo BRB",
    phase: "Antecedentes",
    summary: "O Banco Central barra a primeira tentativa do BRB de comprar o Master por cerca de R$ 2 bilhões.",
    actors: ["bc", "brb"]
  },
  {
    date: "17/11/2025",
    title: "1ª prisão de Vorcaro",
    phase: "Fase 1",
    summary: "Às 15h29, o juiz Ricardo Leite assina ordem de prisão. Às 17h24 o Master anuncia venda à Fictor por R$ 3 bi; dois minutos depois, Vorcaro supostamente escreve a alguém identificado como 'Moraes'. Às 22h, é detido no Aeroporto de Guarulhos junto com Augusto Lima.",
    actors: ["vorcaro", "ricardo_leite", "moraes", "augusto_lima"]
  },
  {
    date: "18/11/2025",
    title: "BC decreta liquidação extrajudicial",
    phase: "Fase 1",
    summary: "Banco Central decreta liquidação extrajudicial do conglomerado Master. FGC projeta cobrir entre R$ 40 e R$ 50 bilhões em depósitos.",
    actors: ["bc"]
  },
  {
    date: "20/11/2025",
    title: "Habeas corpus negado",
    phase: "Fase 1",
    summary: "Desembargadora Solange Salgado (TRF-1) nega habeas corpus a Vorcaro.",
    actors: ["solange_salgado", "vorcaro"]
  },
  {
    date: "28-29/11/2025",
    title: "Toffoli sorteado relator; Vorcaro é solto",
    phase: "Fase 1",
    summary: "Defesa de Vorcaro leva o caso ao STF; Dias Toffoli é sorteado relator e, no mesmo dia, voa a Lima (Peru) em jato particular ao lado do advogado de um diretor do Master. À noite, Solange Salgado determina a soltura de Vorcaro, que passa a usar tornozeleira eletrônica.",
    actors: ["toffoli", "vorcaro", "solange_salgado"]
  },
  {
    date: "02-03/12/2025",
    title: "Toffoli impõe sigilo e centraliza o caso",
    phase: "Fase 1",
    summary: "Toffoli impõe sigilo elevado ao processo e determina que toda diligência envolvendo Vorcaro ou o Master passe por ele.",
    actors: ["toffoli"]
  },
  {
    date: "11/12/2025",
    title: "Contrato da esposa de Moraes é noticiado",
    phase: "Fase 1",
    summary: "Vem à tona contrato do Banco Master com Viviane Marci de Moraes, esposa do ministro Alexandre de Moraes.",
    actors: ["viviane_moraes", "moraes"]
  },
  {
    date: "Dez/2025",
    title: "Moraes é acusado de pressionar Galípolo",
    phase: "Fase 1",
    summary: "Reportagens apontam que Moraes teria contatado reiteradamente o presidente do BC, Gabriel Galípolo, pedindo informações sobre a venda do Master ao BRB. Moraes nega oficialmente.",
    actors: ["moraes", "galipolo"]
  },
  {
    date: "14/01/2026",
    title: "2ª fase: 42 mandados, R$ 5,7 bi bloqueados",
    phase: "Fase 2",
    summary: "Operação cumpre 42 mandados de busca e apreensão, com bloqueio de R$ 5,7 bilhões. Zettel é detido tentando embarcar para os Emirados Árabes, mas liberado em seguida.",
    actors: ["zettel", "tanure", "mansur"]
  },
  {
    date: "22-25/01/2026",
    title: "FGC começa a pagar correntistas",
    phase: "Fase 2",
    summary: "FGC inicia pagamentos de ressarcimento aos clientes do Master. Em 23/01, Vorcaro admite ter usado o FGC como parte da estratégia do banco. Discute-se rombo de R$ 50 bilhões.",
    actors: ["vorcaro"]
  },
  {
    date: "03/02/2026",
    title: "Prisão de Deivis Antunes",
    phase: "Fase 2",
    summary: "PF e PRF prendem o ex-presidente do RioPrevidência Deivis Marcon Antunes, interceptado em Itatiaia (RJ).",
    actors: ["deivis_antunes"]
  },
  {
    date: "11/02/2026",
    title: "PF encontra mensagens de Toffoli com parlamentares",
    phase: "Fase 2",
    summary: "PF encontra conversas de Vorcaro com deputados e senadores desde 2022, citando Dias Toffoli e indicando relação entre os dois.",
    actors: ["toffoli", "vorcaro"]
  },
  {
    date: "20-21/02/2026",
    title: "Dados sigilosos vão à CPMI do INSS",
    phase: "Fase 2",
    summary: "Agentes da PF levam dados sigilosos da investigação ao Senado e à CPMI do INSS.",
    actors: []
  },
  {
    date: "27/02/2026",
    title: "PF pede novas medidas à PGR",
    phase: "Fase 3",
    summary: "PF formaliza pedido de novas medidas cautelares; PGR se manifesta contrariamente.",
    actors: []
  },
  {
    date: "04/03/2026",
    title: "3ª fase: 2ª prisão de Vorcaro e morte de 'Sicário'",
    phase: "Fase 3",
    summary: "André Mendonça assume a relatoria e decreta nova prisão de Vorcaro, Zettel, Mourão e Roseno. Investigação revela o grupo 'A Turma' e o plano de agressão ao jornalista Lauro Jardim. Mourão é encontrado desacordado em custódia e morre no Hospital João XXIII (BH).",
    actors: ["vorcaro", "zettel", "mourao", "roseno", "mendonca", "lauro_jardim", "souza_santana"]
  },
  {
    date: "09/03/2026",
    title: "BC encerra investigação interna",
    phase: "Fase 3",
    summary: "Banco Central encerra investigação sigilosa aberta em janeiro sobre a conduta de Souza e Santana.",
    actors: ["souza_santana", "bc"]
  },
  {
    date: "11/03/2026",
    title: "COAF revela offshore e pagamentos a ACM Neto",
    phase: "Fase 3",
    summary: "O Globo divulga dados do COAF: R$ 700 milhões+ enviados a offshore em Cayman; empresa de ACM Neto recebeu R$ 3,6 milhões via Master e Reag.",
    actors: ["vorcaro", "cayman", "acm_neto"]
  },
  {
    date: "13/03/2026",
    title: "STF mantém prisão de Vorcaro",
    phase: "Fase 3",
    summary: "2ª Turma do STF, por maioria (Mendonça, Fux, Kássio Nunes), mantém a prisão preventiva de Vorcaro.",
    actors: ["vorcaro", "mendonca"]
  },
  {
    date: "19/03/2026",
    title: "Vorcaro assina termo visando delação premiada",
    phase: "Fase 3",
    summary: "Vorcaro assina termo de confidencialidade com a PGR e a PF, buscando colaboração premiada, e é transferido para a Superintendência da PF em Brasília.",
    actors: ["vorcaro"]
  },
  {
    date: "28-31/03/2026",
    title: "BRB formaliza compra de 58% do Master",
    phase: "Fase 4",
    summary: "BRB anuncia acordo para comprar 58% do banco por ~R$ 2 bilhões; Galípolo se reúne com o BRB sobre a operação.",
    actors: ["brb", "galipolo"]
  },
  {
    date: "01-07/04/2026",
    title: "MP e TCU abrem apurações sobre a compra",
    phase: "Fase 4",
    summary: "MPDFT abre inquérito civil sobre a aquisição; TCU instaura processo sobre possível omissão do BC.",
    actors: ["bc", "brb"]
  },
  {
    date: "16/04/2026",
    title: "4ª fase: prisão do ex-presidente do BRB",
    phase: "Fase 4",
    summary: "PF prende preventivamente Paulo Henrique Costa (ex-BRB) e o advogado de Vorcaro, Daniel Monteiro. PF aponta suposta propina de R$ 146,5 milhões via imóveis.",
    actors: ["phc", "daniel_monteiro", "vorcaro"]
  },
  {
    date: "29-30/04/2026",
    title: "Galípolo nega risco sistêmico; MP tenta suspender venda",
    phase: "Fase 4",
    summary: "Galípolo afirma publicamente não haver risco sistêmico; Ministério Público pede liminar para suspender a assinatura do contrato BRB–Master.",
    actors: ["galipolo", "brb"]
  },
  {
    date: "07/05/2026",
    title: "5ª fase: Ciro Nogueira no centro da investigação",
    phase: "Fase 5",
    summary: "PF cumpre 10 mandados de busca e 1 de prisão temporária contra o senador Ciro Nogueira e o primo de Vorcaro, Felipe Cançado — bloqueio de R$ 18,85 milhões.",
    actors: ["ciro_nogueira", "felipe_cancado"]
  },
  {
    date: "14/05/2026",
    title: "6ª fase: prisão do pai de Vorcaro",
    phase: "Fase 6",
    summary: "PF cumpre 7 mandados de prisão preventiva e 17 de busca e apreensão; Henrique Vorcaro é preso em BH, suspeito de ligação direta com 'A Turma' e ocultação de R$ 2,24 bi.",
    actors: ["henrique_vorcaro", "natalia_vorcaro"]
  },
  {
    date: "15/05/2026",
    title: "Intercept revela contrato de Eduardo Bolsonaro",
    phase: "Fase 6",
    summary: "Intercept Brasil mostra que Eduardo Bolsonaro assinou contrato como produtor executivo do filme 'Dark Horse' e é citado como financiador em aditivo — contradizendo declaração anterior dele.",
    actors: ["eduardo_bolsonaro", "flavio_bolsonaro", "vorcaro"]
  },
  {
    date: "18/05/2026",
    title: "Compliance Zero completa 6 meses",
    phase: "Balanço",
    summary: "21 prisões (temporárias ou preventivas), 116 mandados de busca e apreensão, ~R$ 27,71 bilhões em bens bloqueados ou sequestrados ao longo das 6 primeiras fases.",
    actors: ["vorcaro"]
  },
  {
    date: "Final de maio/2026",
    title: "7ª fase: suspeita de vazamento dentro da PF",
    phase: "Fase 7",
    summary: "André Mendonça autoriza investigação sobre vazamento de dados internos a um jornalista; perito criminal federal é afastado e tem casa alvo de busca.",
    actors: ["perito_pf"]
  },
  {
    date: "26/05/2026",
    title: "8ª fase: Rioprevidência sob suspeita de R$ 3 bi",
    phase: "Fase 8",
    summary: "PF investiga possível aplicação irregular de cerca de R$ 3 bilhões do Rioprevidência em fundos de investimento do Master.",
    actors: ["rioprevidencia", "claudio_castro"]
  },
  {
    date: "18/02/2026",
    title: "Liquidação do Banco Pleno",
    phase: "Fase 4",
    summary: "BC decreta liquidação do Banco Pleno (ex-Voiter), elevando o custo total ao FGC para R$ 56 bilhões, somando Master, Will Bank, Letsbank e Pleno.",
    actors: ["bc", "augusto_lima"]
  },
  {
    date: "Jun/2026",
    title: "PF aponta supostas vantagens a Jaques Wagner",
    phase: "Desdobramentos",
    summary: "PF aponta que o senador Jaques Wagner (líder do governo no Senado) teria recebido vantagens indevidas em troca de atuação política — apartamento em Salvador e R$ 3,5 milhões.",
    actors: ["jaques_wagner"]
  },
  {
    date: "17/11/2025",
    title: "Fictor anuncia compra do Master por R$ 3 bi",
    phase: "Antecedentes",
    summary: "Horas antes da prisão de Vorcaro, a Fictor Holding anuncia acordo para comprar o Master com aporte de R$ 3 bi e consórcio de investidores dos Emirados Árabes. PF suspeita que o anúncio buscava justificar a tentativa de embarque de Vorcaro a Dubai.",
    actors: ["fictor", "vorcaro"]
  },
  {
    date: "04/02/2026",
    title: "Fictor também vira alvo da PF",
    phase: "Fase 2",
    summary: "Após pedir recuperação judicial dias antes, o Grupo Fictor passa a ser investigado por gestão fraudulenta, apropriação indébita, emissão de títulos sem lastro e operação financeira sem autorização legal.",
    actors: ["fictor"]
  },
  {
    date: "Fev-Mar/2026",
    title: "CPMI do INSS aprofunda investigação sobre consignados",
    phase: "Desdobramentos",
    summary: "CPMI revela que o Master teve Acordo de Cooperação Técnica com o INSS suspenso em outubro/2025 por suspeita de irregularidades em 74% dos contratos de consignado — cerca de 250 mil acordos. STF bloqueia acesso da CPMI aos arquivos da PF.",
    actors: ["cpmi_inss", "vorcaro"]
  },
  {
    date: "11/03/2026",
    title: "CPI do Crime Organizado confirma Mansur como cliente do Master",
    phase: "Fase 3",
    summary: "João Carlos Mansur confirma à CPI que o Master era cliente da Reag, nega ligação com o PCC e usa direito ao silêncio (garantido por decisão de Flávio Dino) para não se autoincriminar.",
    actors: ["mansur", "pcc_carbono_oculto"]
  },
  {
    date: "Abr/2026",
    title: "Estadão revela rombo de RPPS em 5 fundos estaduais/municipais",
    phase: "Desdobramentos",
    summary: "Reportagem mostra que ao menos cinco fundos de previdência (RPPS) de prefeituras e estados investiram cerca de R$ 1,1 bilhão em letras financeiras do Master — somente o Rioprevidência aplicou R$ 970 milhões.",
    actors: ["rioprevidencia", "amprev", "aparecidaprev"]
  },
  {
    date: "24/04/2026",
    title: "Quatro investigados negociam delação premiada",
    phase: "Fase 4",
    summary: "Vorcaro, Paulo Henrique Costa, Fabiano Zettel e João Carlos Mansur avaliam, simultaneamente, acordos de colaboração premiada com a PF — disputa que pode antecipar a denúncia final.",
    actors: ["vorcaro", "phc", "zettel", "mansur"]
  },
  {
    date: "27/04/2026",
    title: "Estadão revela bastidores da venda à Fictor",
    phase: "Desdobramentos",
    summary: "Reportagem detalha papel de Michel Temer, Renzo Gracie e do advogado Bruno Burilli na tentativa de venda do Master a investidores árabes e russos, incluindo uso da licença do banco para transações fora do sistema financeiro americano.",
    actors: ["temer", "renzo_gracie", "burilli", "fictor"]
  },
  {
    date: "13/05/2026",
    title: "Flávio Bolsonaro admite ter pedido recursos a Vorcaro",
    phase: "Desdobramentos",
    summary: "Segundo a BBC News Brasil, Flávio Bolsonaro admite publicamente ter pedido milhões de reais a Vorcaro para financiar o filme 'Dark Horse', sobre seu pai.",
    actors: ["flavio_bolsonaro", "vorcaro"]
  },
  {
    date: "18/05/2026",
    title: "Tratativas de delação de Vorcaro travam",
    phase: "Balanço",
    summary: "Vorcaro retorna à carceragem comum da Superintendência da PF em Brasília, sem regalias, indicando que as negociações de delação não avançaram como esperado.",
    actors: ["vorcaro"]
  },
  {
    date: "09/06/2026",
    title: "Intercept revela SWIFTs e planilha da Go Up",
    phase: "Desdobramentos",
    summary: "Intercept Brasil divulga comprovantes de transferências bancárias internacionais (SWIFT) ordenadas por Vorcaro e planilha de contabilidade da Go Up Entertainment com os aportes acordados e efetivamente recebidos para o filme Dark Horse.",
    actors: ["vorcaro", "karina_gama", "havengate"]
  },
  {
    date: "18/06/2026",
    title: "9ª fase: Jaques Wagner e Augusto Lima na mira",
    phase: "Fase 9",
    summary: "G1 noticia que Jaques Wagner e Augusto Lima são alvos de nova etapa da Operação Compliance Zero; PF investiga se o senador recebeu R$ 3,5 milhões e um apartamento de luxo em Salvador.",
    actors: ["jaques_wagner", "augusto_lima"]
  },
  {
    date: "18/06/2026",
    title: "9ª fase: 18 mandados — passaportes de Wagner e Lima suspensos",
    phase: "Fase 9",
    summary: "Mendonça autoriza 18 mandados em BA, SP e DF. PF investiga suposta troca de vantagens (apartamento em Salvador + R$ 3,5 mi) pela atuação parlamentar de Wagner a favor do Master. Passaportes suspensos; investigados proibidos de contato.",
    actors: ["jaques_wagner", "augusto_lima", "mendonca"]
  },
  {
    date: "09/07/2026",
    title: "10ª fase: O Time — espionagem de jornalistas e influenciadores pagos",
    phase: "Fase 10",
    summary: "PF cumpre 2 mandados em Brasília. Alvo: Thiago Miranda (Agência MiThi). Esquema: pagar até R$ 2 mi a influenciadores para atacar o BC nas redes; monitorar ilegalmente Malu Gaspar (O Globo), Consuelo Dieguez (Piauí) e Milton Maluhy (Itaú). Mendonça descreve estrutura celular com braço armado especializado em intimidação.",
    actors: ["thiago_miranda", "malu_gaspar", "consuelo_dieguez", "milton_maluhy", "vorcaro", "mendonca"]
  },
  {
    date: "09/07/2026",
    title: "Miranda sai do Grupo Leo Dias 48h antes da PF",
    phase: "Fase 10",
    summary: "Dois dias antes de virar alvo da PF, Thiago Miranda anuncia encerramento da sociedade no Grupo Leo Dias.",
    actors: ["thiago_miranda", "leo_dias"]
  },
  {
    date: "22/05/2026",
    title: "PGR e PF rejeitam proposta de delação de Vorcaro",
    phase: "Desdobramentos",
    summary: "A Procuradoria-Geral da República e a Polícia Federal rejeitam a proposta de delação premiada de Daniel Vorcaro por não apresentar provas novas, recusar a devolução dos valores desviados e, segundo a PF, tentar proteger figuras políticas e familiares. No mesmo dia, seu advogado abandona a defesa. Vorcaro permanece preso na Superintendência da PF em Brasília.",
    actors: ["vorcaro"]
  },
  {
    date: "18/06/2026",
    title: "9ª fase: novos operadores ligam Vorcaro a Jaques Wagner",
    phase: "Fase 9",
    summary: "PF revela que Valério Marega Júnior e David Lopes Monteiro intermediaram a compra do apartamento Poème Horto (R$ 2,45 mi, Salvador) para Wagner, a pedido de Augusto Lima. Guilherme Sodré Martins é apontado como elo direto entre o Master e o senador. Empresas BN Financeira, PKL One e Terra Firme da Bahia são alvos de mandados.",
    actors: ["jaques_wagner", "augusto_lima", "valerio_marega", "david_monteiro", "guilherme_sodre", "andrea_novaes", "mendonca"]
  },
  {
    date: "2026 (em andamento)",
    title: "Cooperação internacional: FBI e Interpol rastreiam patrimônio oculto",
    phase: "Desdobramentos",
    summary: "PF atua em cooperação com o FBI e a Interpol para congelar contas e identificar patrimônio oculto de Vorcaro e associados em paraísos fiscais. Foco na identificação de quem foi o principal beneficiário do esquema de lavagem.",
    actors: ["vorcaro", "fbi_interpol", "cayman"]
  },
  {
    date: "13-15/12/2025",
    title: "Projeto DV: PIX de R$ 1,05 mi entre estrategistas",
    phase: "Antecedentes",
    summary: "Thiago Miranda faz PIX de R$ 650 mil a Marcelão (13/12) e de R$ 400 mil à Unltd Network de Anderson Nunes (15/12) — período em que o 'Projeto DV' ainda estava sendo elaborado. Os valores são apurados pela PF como pagamentos pela estruturação da campanha de desinformação contra o Banco Central.",
    actors: ["thiago_miranda", "marcelao", "anderson_nunes"]
  },
  {
    date: "20/05/2026",
    title: "Marcelão deixa pré-campanha de Flávio Bolsonaro",
    phase: "Desdobramentos",
    summary: "O publicitário Marcello Lopes ('Marcelão') anuncia saída da coordenação de comunicação da pré-campanha presidencial de Flávio Bolsonaro após ter seu nome associado ao 'Projeto DV' pela Folha de S.Paulo.",
    actors: ["marcelao", "flavio_bolsonaro"]
  },
  {
    date: "17/07/2026",
    title: "PF estima até 60 fases para a Compliance Zero",
    phase: "Desdobramentos",
    summary: "A Gazeta do Povo revela que a força-tarefa da Polícia Federal estima que a Operação Compliance Zero pode chegar a 60 fases. A PF pretende manter o ritmo das apurações durante o período eleitoral de 2026, com foco em autoridades com foro privilegiado e operadores financeiros ainda não identificados — incluindo a questão central de quem foi o principal beneficiário do esquema de lavagem.",
    actors: ["vorcaro", "mendonca"]
  },
];

if (typeof module !== "undefined") {
  module.exports = { NODE_TYPES, NODES, EDGES, TIMELINE };
}
