export type ToneType = "provocativa" | "educacional" | "emocional";

export interface NewsItem {
  id: number;
  rank: number;
  title: string;
  source: string;
  date: string;
  hypeLevel: number;
  summary: string;
  posts: {
    provocativa: string;
    educacional: string;
    emocional: string;
  };
  hashtags: string[];
  imageUrl: string;
  sourceUrl: string;
  category?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    rank: 1,
    title: "Stanford AI Index 2026: China quase elimina vantagem dos EUA e confiança pública despenca",
    source: "Stanford HAI",
    date: "16 de abril de 2026",
    hypeLevel: 9.5,
    summary: "O relatório anual do Instituto de IA da Stanford revela que o ecossistema global de IA passou por transformações profundas. A adoção de IA generativa atingiu 53% da população em apenas 3 anos — mais rápido que a internet ou o computador pessoal. A vantagem americana sobre a China caiu para apenas 2,7% nos benchmarks de modelos frontier. Modelos de IA já superam humanos em questões de doutorado em ciências e olimpíadas de matemática. Porém, a transparência dos grandes modelos despencou de 58 para 40 pontos, e apenas 23% da população americana vê a IA positivamente no mercado de trabalho.",
    posts: {
      provocativa: "A liderança americana em IA está ameaçada — e os dados são inequívocos.\n\nO Stanford AI Index 2026 acaba de revelar que a vantagem dos EUA sobre a China caiu para apenas 2,7% nos benchmarks de desempenho. Os dois países têm alternado a liderança desde 2025.\n\nO que os executivos precisam entender:\n1. A era da hegemonia americana em IA pode estar chegando ao fim.\n2. A adoção de IA generativa atingiu 53% da população global em 3 anos — ritmo mais rápido que a internet.\n3. A confiança pública despencou: apenas 23% dos americanos veem a IA positivamente no mercado de trabalho.\n4. A transparência dos modelos caiu de 58 para 40 pontos no índice de transparência.\n\nSe você acha que a corrida da IA é apenas uma questão de tecnologia, pense de novo. É uma questão geopolítica, econômica e — cada vez mais — de confiança pública.\n\nSua estratégia de IA leva em conta essa nova realidade?",
      educacional: "O Stanford AI Index 2026 foi publicado esta semana e é leitura obrigatória para qualquer líder de tecnologia.\n\nOs principais números que você precisa conhecer:\n\n📊 Adoção: A IA generativa atingiu 53% da população em apenas 3 anos (mais rápido que internet ou PC).\n🌍 Geopolítica: A vantagem dos EUA sobre a China caiu para meros 2,7% nos benchmarks de performance.\n🧠 Capacidades: Modelos frontier já superam humanos em questões de PhD em ciências e olimpíadas de matemática.\n⚡ 'Jagged Frontier': O mesmo modelo que resolve física de nível graduação erra um relógio analógico em 50% das vezes.\n📉 Transparência: O índice de transparência dos modelos caiu de 58 para 40 pontos em um ano.\n🤝 Confiança: 73% dos especialistas são otimistas sobre IA no trabalho — mas apenas 23% da população geral concorda.\n\nA conclusão mais importante? A IA está avançando mais rápido do que nossa capacidade coletiva de confiar, regulamentar e compreendê-la.\n\nComo sua organização está equilibrando velocidade de adoção com construção de confiança?",
      emocional: "Às vezes, um relatório muda a forma como você vê o mundo.\n\nO Stanford AI Index 2026 me fez refletir sobre uma tensão fundamental: a tecnologia avança em velocidade exponencial, mas a confiança humana cresce de forma linear — ou até recua.\n\nIncrível que modelos de IA já superam doutores em questões científicas. Mas perturbador que apenas 23% das pessoas comuns vejam essa tecnologia como algo positivo para suas carreiras.\n\nIsso não é um problema técnico. É um problema humano.\n\nA corrida da IA não será decidida apenas por quem tem o modelo mais poderoso, mas por quem conseguir construir a confiança necessária para que as pessoas — trabalhadores, consumidores, cidadãos — aceitem e usem essa tecnologia de forma significativa.\n\nO maior desafio não é criar IA mais capaz. É criar IA mais confiável.\n\nO que sua empresa está fazendo hoje para construir essa confiança?"
    },
    hashtags: ["#InteligenciaArtificial", "#Inovacao", "#Tecnologia", "#Lideranca", "#Futuro"],
    imageUrl: "https://picsum.photos/seed/stanford2026/800/450",
    sourceUrl: "https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report",
    category: "Pesquisa & Relatórios"
  },
  {
    id: 2,
    rank: 2,
    title: "Anthropic confirma existência do Claude Mythos — o modelo mais poderoso já criado que não será lançado ao público",
    source: "WhatLLM.org / The Decoder",
    date: "16 de abril de 2026",
    hypeLevel: 9.3,
    summary: "A Anthropic confirmou a existência do Claude Mythos, descrito como 'o modelo mais capaz que a empresa já construiu', mas anunciou que não disponibilizará ao público geral. O acesso ficará restrito a parceiros selecionados. O anúncio gerou debate intenso na comunidade de IA: enquanto alguns defendem a decisão como medida de segurança responsável, outros veem como sinal preocupante de que as empresas de IA estão construindo capacidades que consideram perigosas demais para liberar ao mercado.",
    posts: {
      provocativa: "A Anthropic acabou de revelar o que pode ser o modelo de IA mais poderoso do mundo — e disse que você não pode usá-lo.\n\nO Claude Mythos foi confirmado. Ele existe. E não será lançado ao público.\n\nPense no que isso significa:\n→ As grandes empresas de IA estão construindo algo que consideram capaz, mas arriscado demais para liberar.\n→ O acesso ao topo da cadeia de IA está sendo controlado por um grupo seleto de parceiros.\n→ A narrativa de 'IA para todos' está dando lugar a uma IA de duas velocidades.\n\nIsso não é transparência. É uma corrida armamentista onde apenas alguns têm acesso às armas mais poderosas.\n\nE o mais perturbador: se a própria empresa que construiu o modelo decide não lançá-lo por razões de segurança, o que isso diz sobre o estado atual do alinhamento de IA?\n\nVocê está acompanhando o que está sendo construído atrás das cortinas?",
      educacional: "A Anthropic acaba de fazer um anúncio que vai definir os debates sobre IA nos próximos meses.\n\nO que sabemos sobre o Claude Mythos:\n\n🔒 Status: Confirmado pela Anthropic, mas com acesso restrito a parceiros selecionados.\n🏆 Posição: Descrito como 'o modelo mais capaz já construído pela empresa'.\n⚠️ Motivo da restrição: Capacidades avançadas que exigem avaliação mais rigorosa antes de liberação geral.\n📋 Contexto: Essa estratégia de 'lançamento controlado' está se tornando padrão em modelos de fronteira.\n\nO que isso significa para líderes de negócios:\n1. O acesso diferenciado a modelos de ponta pode criar vantagens competitivas significativas.\n2. A conversa sobre 'segurança de IA' saiu do campo teórico e virou decisão de produto.\n3. A due diligence na escolha de parceiros de IA nunca foi tão importante.\n\nComo sua empresa está estruturando seus acordos com fornecedores de IA para garantir acesso às capacidades mais avançadas?",
      emocional: "A Anthropic construiu o que pode ser o modelo de IA mais poderoso do mundo.\n\nE escolheu não lançá-lo.\n\nHá algo profundamente humano nessa decisão. É como um cientista que, ao criar algo extraordinário, para e pergunta: 'Estamos prontos para isso?'\n\nA pergunta que o Claude Mythos levanta não é técnica — é ética. Quando nossas criações excedem nossa capacidade de compreendê-las completamente, qual é a responsabilidade de quem as cria?\n\nPodemos concordar ou discordar da decisão da Anthropic. Mas não podemos ignorar o que ela representa: uma empresa de IA colocando um freio no próprio avanço por considerar que o mundo não está pronto.\n\nIsso deveria nos encher de respeito — e de reflexão.\n\nQue valores guiam as decisões tecnológicas da sua organização quando o que é possível supera o que é prudente?"
    },
    hashtags: ["#Anthropic", "#InteligenciaArtificial", "#SegurancaIA", "#Inovacao", "#EticaIA"],
    imageUrl: "https://picsum.photos/seed/claudemythos/800/450",
    sourceUrl: "https://whatllm.org/blog/new-ai-models-april-2026",
    category: "Modelos de IA"
  },
  {
    id: 3,
    rank: 3,
    title: "Google lança Gemma 4 com licença Apache 2.0: modelo de 31B supera rivais de 400B parâmetros",
    source: "Google DeepMind",
    date: "16 de abril de 2026",
    hypeLevel: 9.0,
    summary: "O Google DeepMind lançou o Gemma 4, família de modelos open-source com 4 variantes (2B, 4B, 26B e 31B parâmetros), pela primeira vez sob licença Apache 2.0 — totalmente permissiva para uso comercial. O destaque é o modelo 31B Dense que supera rivais de 400B parâmetros em benchmarks de raciocínio. Com janela de contexto de 256K tokens, processamento nativo de imagem e áudio, e suporte a mais de 140 idiomas, o Gemma 4 roda em dispositivos edge como smartphones e Raspberry Pi.",
    posts: {
      provocativa: "O Google acabou de dinamitar as barreiras do open-source em IA.\n\nO Gemma 4 foi lançado com licença Apache 2.0 — e isso muda tudo.\n\nPor que isso importa mais do que parece?\n→ Versões anteriores do Gemma tinham licenças restritivas que bloqueavam muitas empresas. Acabou.\n→ Um modelo de 31B parâmetros superando rivais de 400B não é otimização — é uma revolução em eficiência.\n→ Rodar IA de ponta em um Raspberry Pi não é mais ficção científica. É hoje.\n\nEnquanto o debate sobre 'IA proprietária vs. open-source' continuava, o Google simplesmente colocou um modelo multimodal, multilíngue e com 256K de contexto nas mãos de qualquer desenvolvedor do planeta — de graça, sem restrições.\n\nA democratização da IA não é mais promessa. É fato consumado.\n\nO que você vai construir com isso?",
      educacional: "O Google DeepMind lançou o Gemma 4, e há vários motivos pelos quais essa é uma das notícias mais importantes da semana.\n\nO que é o Gemma 4:\n\n📦 4 modelos: E2B, E4B, 26B MoE e 31B Dense\n📜 Licença: Apache 2.0 (pela 1ª vez — uso comercial totalmente livre)\n🧠 Performance: O modelo 31B supera concorrentes de 400B em benchmarks\n🖥️ Execução: Roda em dispositivos edge (smartphones, Raspberry Pi, NVIDIA Jetson)\n📚 Contexto: Janela de 256K tokens\n🌍 Idiomas: Suporte nativo a mais de 140 línguas\n📷 Multimodal: Processamento de imagem e áudio nativos\n\nMas o grande destaque é a mudança de licença. A restrição comercial das versões anteriores impedia muitas empresas de usar o Gemma em produção. Com Apache 2.0, qualquer empresa pode usar, modificar e redistribuir sem limitações.\n\nComo sua equipe de desenvolvimento está incorporando modelos open-source de alta performance na sua stack de IA?",
      emocional: "Cada vez que uma tecnologia poderosa se torna acessível para todos, o mundo muda.\n\nO Google lançou o Gemma 4 com licença Apache 2.0, e isso me lembra do movimento open-source que democratizou a internet duas décadas atrás.\n\nUm desenvolvedor em Recife agora tem acesso ao mesmo modelo de IA que uma empresa do Vale do Silício. Uma startup africana pode construir soluções de saúde em 140 idiomas com tecnologia de ponta. Um estudante pode experimentar um modelo multimodal no seu laptop.\n\nIsso não é apenas tecnologia. É equidade.\n\nA corrida da IA frequentemente parece reservada aos que têm bilhões para investir em data centers e pesquisa proprietária. Momentos como este nos lembram que a tecnologia, quando compartilhada com generosidade, tem o poder de nivelar o campo de jogo.\n\nQuem vai se beneficiar mais quando a IA de ponta se torna verdadeiramente universal?"
    },
    hashtags: ["#OpenSource", "#Google", "#InteligenciaArtificial", "#Gemma4", "#Inovacao"],
    imageUrl: "https://picsum.photos/seed/gemma4google/800/450",
    sourceUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
    category: "Modelos de IA"
  },
  {
    id: 4,
    rank: 4,
    title: "Como a Cisco CX escalou IA no atendimento sem sacrificar segurança ou controle de custos",
    source: "Cisco Blogs",
    date: "16 de abril de 2026",
    hypeLevel: 8.8,
    summary: "A Cisco revelou como sua área de CX (Customer Experience) implementou IA em produção usando infraestrutura on-premises com servidores UCS próprios, evitando os custos imprevisíveis de nuvem pública e mantendo soberania sobre dados sensíveis de clientes. Os resultados: 30% de melhoria no acesso a métricas de adoção e eliminação de até 40% do atrito operacional diário. O case demonstra que a escolha da arquitetura de implantação é tão crítica quanto a escolha do modelo de IA.",
    posts: {
      provocativa: "A Cisco usou a própria tecnologia para provar um ponto que toda empresa deveria ouvir.\n\nEnquanto todo mundo corria para a nuvem pública para rodar IA, a equipe de CX da Cisco foi na direção contrária — e os resultados falam por si.\n\nO que eles descobriram:\n→ Custos de tokens em nuvem pública são imprevisíveis. Em períodos de pico, o orçamento explode.\n→ Dados de renovação de contratos com clientes são sensíveis demais para trafegar em APIs externas.\n→ On-premises com servidores UCS entregou previsibilidade de custo E soberania de dados.\n\nResultado: 30% mais acesso a métricas de adoção e 40% menos atrito operacional.\n\nA lição mais importante: escolher o modelo de IA certo é apenas metade da equação. Onde e como você implanta é igualmente crítico para o sucesso — e para a sustentabilidade financeira.\n\nSua empresa está tomando decisões de arquitetura de IA com base em evidências ou em hype?",
      educacional: "O case da Cisco CX com IA on-premises é um manual prático para líderes de atendimento que querem escalar IA responsavelmente.\n\nO que a Cisco fez e por que funcionou:\n\n🏗️ Arquitetura: IA on-premises com servidores UCS (não nuvem pública)\n🔒 Segurança: Dados de clientes e renovações ficam dentro da infraestrutura própria\n💰 Custo: Eliminou a imprevisibilidade de tokens em períodos de pico de análise\n📊 Resultado 1: +30% de acessibilidade a métricas de adoção vs. avaliações manuais\n⚡ Resultado 2: Até 40% de redução no atrito administrativo diário\n\nO aprendizado estratégico:\nA decisão de onde rodar IA (nuvem pública, privada, híbrida, on-premises) deve ser orientada por três fatores: sensibilidade dos dados, previsibilidade de custos e requisitos de latência.\n\nMuitas empresas adotam nuvem por padrão sem analisar esses trade-offs. O case da Cisco mostra que, para CX com dados sensíveis e carga variável, on-premises pode ser a escolha mais inteligente.\n\nComo sua empresa está avaliando a arquitetura de implantação de IA no contexto de atendimento ao cliente?",
      emocional: "Por trás de cada cliente satisfeito, existe uma operação que funciona.\n\nO case da Cisco CX com IA me tocou porque mostra algo que muitas vezes esquecemos na empolgação com a tecnologia: fazer certo é mais importante do que ser o primeiro.\n\nA equipe da Cisco poderia ter corrido para a nuvem pública como todos, lançado um chatbot impressionante — e depois descoberto que os custos explodiram, que dados de clientes ficaram expostos, que a confiança dos clientes foi comprometida.\n\nEm vez disso, eles fizeram perguntas difíceis: Como protegemos nossos clientes? Como garantimos previsibilidade? Como escalamos com responsabilidade?\n\nO resultado foi tecnologia ao serviço das pessoas — funcionários com menos atrito operacional, clientes com dados mais protegidos, empresa com custos previsíveis.\n\nIsso é o que significa transformação digital madura. Não é velocidade. É velocidade com sabedoria.\n\nComo sua equipe está equilibrando a urgência de inovar com a responsabilidade de fazer certo?"
    },
    hashtags: ["#CustomerExperience", "#CX", "#InteligenciaArtificial", "#Cisco", "#Inovacao"],
    imageUrl: "https://picsum.photos/seed/ciscocx2026/800/450",
    sourceUrl: "https://blogs.cisco.com/cisco-on-cisco/cx-on-premises-ai-infrastructure-deployment",
    category: "Customer Experience"
  },
  {
    id: 5,
    rank: 5,
    title: "PwC revela: 75% dos ganhos econômicos da IA estão concentrados em apenas 20% das empresas",
    source: "PwC",
    date: "16 de abril de 2026",
    hypeLevel: 8.6,
    summary: "O AI Performance Study 2026 da PwC analisou mais de 4.000 empresas globalmente e revelou uma concentração alarmante: três quartos dos ganhos econômicos gerados pela IA estão sendo capturados por um quinto das empresas. O diferencial não é o acesso à tecnologia — que está cada vez mais democrático — mas a abordagem estratégica. As empresas líderes usam IA para crescimento e novos modelos de negócio, não apenas para cortar custos, criando um abismo competitivo que tende a se ampliar.",
    posts: {
      provocativa: "A PwC acabou de publicar o dado que todo CEO precisa ver antes da próxima reunião de board.\n\n75% dos ganhos econômicos da IA estão indo para 20% das empresas.\n\nNão é falta de acesso à tecnologia. Os modelos nunca foram tão baratos e acessíveis. O problema é outro.\n\nA diferença entre as empresas que lideram e as que ficam para trás está em UMA pergunta:\n\nVocê está usando IA para cortar custos — ou para criar novos modelos de crescimento?\n\nAs líderes usam IA para:\n→ Criar novos produtos e serviços\n→ Entrar em novos mercados\n→ Redesenhar modelos de negócio\n\nAs demais usam IA para:\n→ Automatizar tarefas existentes\n→ Reduzir headcount\n→ Otimizar processos legados\n\nO abismo está se abrindo. E a janela para mudar de lado está se fechando.\n\nEm qual dos dois grupos está a sua empresa?",
      educacional: "O PwC AI Performance Study 2026 traz dados que deveriam ser leitura obrigatória em toda reunião de liderança.\n\nOs principais achados do estudo (4.000+ empresas analisadas):\n\n📊 Concentração: 75% dos ganhos econômicos da IA capturados por 20% das empresas\n🎯 Diferencial: As líderes usam IA para CRESCIMENTO, não apenas eficiência\n🔑 Mentalidade: Foco em novos modelos de negócio vs. otimização do existente\n\nO que caracteriza as empresas líderes em IA:\n1. Investimento em cultura e capacitação além de tecnologia\n2. IA integrada à estratégia de negócio, não apenas às operações\n3. Tolerância ao risco e velocidade de experimentação\n4. Visão de longo prazo sobre retorno sobre investimento em IA\n\nA conclusão mais importante: democratização do acesso à IA não significa democratização dos resultados. A diferença está na capacidade estratégica e de execução.\n\nOnde sua organização está investindo energia — em tecnologia de IA ou na capacidade organizacional de extrair valor dela?",
      emocional: "Existe uma inequidade crescente no mundo da IA que me preocupa profundamente.\n\nO estudo da PwC mostra que 75% dos ganhos econômicos da IA estão sendo capturados por apenas 20% das empresas. Isso não é culpa da tecnologia. É reflexo das desigualdades já existentes no mundo dos negócios, amplificadas pela velocidade da transformação digital.\n\nAs empresas com mais recursos, acesso a talentos e capacidade de experimentação estão usando a IA para crescer ainda mais. As que já estavam para trás, ficam mais para trás ainda.\n\nMas há um lado esperançoso nessa história: a diferença entre os grupos não é principalmente financeira — é estratégica e cultural. Empresas de todos os tamanhos e setores podem mudar de mentalidade.\n\nO desafio não é comprar a IA certa. É criar a cultura certa para extrair valor dela.\n\nComo líderes, temos a responsabilidade de garantir que o benefício da IA alcance mais do que os 20% que já estão no topo."
    },
    hashtags: ["#InteligenciaArtificial", "#Negocios", "#Estrategia", "#Inovacao", "#Lideranca"],
    imageUrl: "https://picsum.photos/seed/pwc2026ai/800/450",
    sourceUrl: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-performance-study.html",
    category: "Mercado"
  }
];
