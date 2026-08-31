/* ================================================================
   GOOGLE ADS - rastreamento de conversoes (CONFIGURADO)
   Tag do Google:  G-8VFQBZC7KX
   Conta Ads:      AW-17427070457
   ================================================================ */
var GOOGLE_TAG_ID       = 'G-8VFQBZC7KX';
var ADS_CONVERSION_ID   = 'AW-17427070457';
var CONV_LABEL_FORM     = 'jK7GCK2osNUcEPn77_VA';   // acao "Enviar formulario de lead"
var CONV_LABEL_WHATSAPP = '0_TkCKjPydUcEPn77_VA';   // acao "Contato" (clique no WhatsApp)

(function(){
  var idCarregar = GOOGLE_TAG_ID || ADS_CONVERSION_ID;
  if(!idCarregar) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + idCarregar;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  if(GOOGLE_TAG_ID)     gtag('config', GOOGLE_TAG_ID);
  if(ADS_CONVERSION_ID) gtag('config', ADS_CONVERSION_ID);
})();
function trackConversion(label){
  if(!ADS_CONVERSION_ID || !label || typeof gtag === 'undefined') return;
  gtag('event', 'conversion', { send_to: ADS_CONVERSION_ID + '/' + label, value: 1.0, currency: 'BRL', transport_type: 'beacon' });
}
document.addEventListener('click', function(e){
  var a = e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
  if(a) trackConversion(CONV_LABEL_WHATSAPP);
});

  // ----- CAROUSEL -----
  let currentSlide = 0;
  const totalSlides = 4;
  let autoplayTimer;

  function updateCarousel(){
    document.getElementById('carousel-track').style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
    document.querySelectorAll('.carousel-slide').forEach((s,i)=>s.classList.toggle('is-active',i===currentSlide));
  }
  function slideCarousel(dir){
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoplay();
  }
  function goToSlide(n){
    currentSlide = n;
    updateCarousel();
    resetAutoplay();
  }
  function startAutoplay(){
    autoplayTimer = setInterval(()=>{
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    },5000);
  }
  function resetAutoplay(){
    clearInterval(autoplayTimer);
    startAutoplay();
  }
  if (document.getElementById('carousel-track')) startAutoplay();

  // ============ BLOG DATA ============
  const blogCategorias = [
    {id:'all',nome:'Todos'},
    {id:'esterilizante',nome:'Filtração Esterilizante'},
    {id:'farmaceutica',nome:'Indústria Farmacêutica'},
    {id:'bebidas',nome:'Indústria de Bebidas'},
    {id:'conformidade',nome:'Conformidade Regulatória'},
    {id:'processo',nome:'Dimensionamento & Processo'},
  ];

  const posts = [
    {
      id:'pre-molhamento',
      imagem:'/img/blog-pre-molhamento.jpg',
      titulo:'Pré-molhamento de Membranas Hidrofílicas: passo essencial para o teste de integridade',
      data:'21 de setembro de 2025',
      dataIso:'2025-09-21',
      tempo:'3 min de leitura',
      cat:'esterilizante',
      catNome:'Filtração Esterilizante',
      featured:true,
      resumo:'O pré-molhamento adequado de membranas hidrofílicas é uma etapa crítica para garantir a confiabilidade do teste de integridade. Sem esse processo, o usuário final pode se deparar com resultados falsos de falha, comprometendo tempo, recursos e até a segurança do processo produtivo.',
      tags:['Teste de integridade','Membranas hidrofílicas','Ponto de bolha','Fluxo difusivo','Filtros PES','Validação farmacêutica'],
      conteudo:`
        <p><em>Publicado por Verter — Setembro de 2025</em></p>
        <p>O pré-molhamento adequado de membranas hidrofílicas é uma etapa crítica para garantir a confiabilidade do teste de integridade. Sem esse processo, o usuário final pode se deparar com resultados falsos de falha, comprometendo tempo, recursos e até a segurança do processo produtivo.</p>
        <h2>O que é o Teste de Integridade?</h2>
        <p>O <strong>teste de integridade</strong> é uma etapa fundamental no controle de qualidade de filtros de membrana utilizados em processos críticos, como na indústria farmacêutica, biotecnológica, bebidas e microeletrônica. Seu objetivo principal é <strong>confirmar se a membrana está funcionando corretamente</strong> e se realmente é capaz de reter contaminantes microbiológicos ou partículas indesejadas.</p>
        <p>Trata-se de um <strong>ensaio não destrutivo</strong>, ou seja, o filtro pode ser utilizado após a validação. Isso é especialmente importante em processos estéreis, onde não há margem para riscos de falha.</p>
        <h3>Principais métodos aplicados</h3>
        <ul>
          <li><strong>Teste de ponto de bolha:</strong> determina a menor pressão necessária para deslocar o líquido dos poros da membrana.</li>
          <li><strong>Teste de difusão:</strong> mede a passagem de gás através da membrana molhada em condições controladas de pressão.</li>
          <li><strong>Teste de decaimento de pressão (Pressure Hold):</strong> avalia a estabilidade pressão do sistema, monitorando perdas que possam indicar falhas.</li>
        </ul>
        <p>Esses métodos são padronizados internacionalmente e fazem parte de requisitos regulatórios, como USP, PDA e normas da indústria farmacêutica.</p>
        <h3>Por que o pré-molhamento é essencial?</h3>
        <ul>
          <li>Membranas possuem bilhões de poros que precisam ser preenchidos com líquido.</li>
          <li>Falhas de molhamento levam a leituras incorretas.</li>
          <li>Outros fatores de falha: vedação danificada, vazamentos no sistema, parâmetros incorretos.</li>
          <li>Defeitos reais no cartucho são raríssimos.</li>
        </ul>
        <h3>Como melhorar o processo?</h3>
        <ul>
          <li><strong>Aumentar a temperatura</strong> do fluido (até 80 °C), mantendo pressão diferencial segura.</li>
          <li><strong>Criar contrapressão</strong> para melhorar a penetração do líquido.</li>
          <li><strong>Elevar o fluxo</strong> além das recomendações quando possível.</li>
          <li><strong>Prolongar o tempo</strong> de pré-molhamento (até deixar de molho por horas).</li>
          <li><strong>Usar agentes umectantes</strong> de grau alimentício/farmacêutico.</li>
          <li><strong>Utilizar fluidos alternativos</strong>, como isopropanol ou etanol.</li>
        </ul>
        <div class="callout">
          <strong>Diretriz Verter</strong>
          <p>Fluxo de 10 GPM por 10" durante 20 minutos. Sempre siga os valores de teste de integridade definidos pelo fabricante — disponíveis em fichas técnicas, guias de validação e folhetos.</p>
        </div>
        <h2>Conclusão</h2>
        <p>O pré-molhamento adequado garante resultados confiáveis e evita falsas falhas em testes de integridade. Ao adotar boas práticas e seguir recomendações do fabricante, é possível assegurar a máxima performance e segurança nos processos críticos.</p>
        <p>Na Verter Filtração, contamos com <strong>capacidade técnica especializada, amplo portfólio de soluções e suporte qualificado</strong> para auxiliar clientes em diferentes etapas, desde a seleção de membranas até a validação em campo.</p>
      `
    },
    {
      id:'reutilizar-filtro-esterilizante',
      imagem:'/img/blog-reutilizar-filtro.jpg',
      titulo:'Reutilizar ou não um filtro esterilizante!',
      data:'30 de agosto de 2025',
      dataIso:'2025-08-30',
      tempo:'3 min de leitura',
      cat:'esterilizante',
      catNome:'Filtração Esterilizante',
      resumo:'Antes de embarcar em uma jornada potencialmente árdua e cara para reutilizar seus filtros esterilizantes, recomendamos fortemente que você se faça as perguntas abaixo e considere alternativas que podem economizar tempo e dinheiro.',
      tags:['Filtros esterilizantes','Reuso de filtros','Validação','GMP e FDA','Otimização de processos'],
      conteudo:`
        <p><em>Publicado por Verter — Agosto de 2025</em></p>
        <blockquote>Talvez (sob certas condições estritas). Mas será que realmente vale a pena? E por quê?</blockquote>
        <p>Em nossos quase 25 anos ajudando equipes de processo a configurar os melhores sistemas, sabemos que o principal motivo para buscar a reutilização de filtros esterilizantes é reduzir o custo de filtração. Afinal, os filtros finais esterilizantes são os mais caros em um processo.</p>
        <h3>Você está usando o filtro de tamanho adequado?</h3>
        <p>Se o filtro atual ainda possui muita capacidade de filtração após processar um lote, talvez seja possível reduzir custos utilizando um filtro menor. Os pontos negativos potenciais dessa abordagem são:</p>
        <ul>
          <li>Maior tempo de processamento</li>
          <li>Maior diferencial de pressão no elemento filtrante</li>
        </ul>
        <h3>Há planos de aumentar os tamanhos de lote?</h3>
        <p>Um lote maior usando o mesmo filtro dilui o custo de filtração sobre um volume maior, resultando em menor custo por litro filtrado. Se houver planos de ampliação em breve, pode ser melhor investir nisso em vez de gastar recursos desenvolvendo uma estratégia de reutilização que pode se tornar obsoleta.</p>
        <h3>Em processos farmacêuticos: quanto mais a jusante, mais crítica a retenção</h3>
        <p>Os filtros esterilizantes podem ser usados para purificação de água, APIs e excipientes, produto intermediário, outros ingredientes da formulação ou o produto final. Em casos como purificação de água, pode haver oportunidade de reutilização com requisitos mínimos de validação. Para ingredientes críticos ou produto final, será necessário um extenso esforço de avaliação de risco e validação.</p>
        <div class="callout">
          <strong>E as normas?</strong>
          <p>A FDA recomenda que filtros esterilizantes sejam descartados após cada lote. Reutilização só é permitida com justificativa técnica robusta e validação completa — um processo caro e demorado.</p>
        </div>
        <h3>Alternativas antes de pensar em reutilizar</h3>
        <ul>
          <li>✅ Usar filtros de tamanho mais adequado ao lote</li>
          <li>✅ Aumentar o volume de produção para diluir o custo</li>
          <li>✅ Validar um filtro alternativo de menor custo</li>
        </ul>
        <h2>Conclusão</h2>
        <p>Reutilizar filtros esterilizantes é possível, mas exige alto investimento em validação e gerenciamento de riscos. Na prática, alternativas como redimensionar, aumentar a escala ou buscar filtros mais econômicos costumam ser mais simples e vantajosas.</p>
      `
    },
    {
      id:'melhor-membrana',
      imagem:'/img/blog-melhor-membrana.jpg',
      titulo:'Qual a Melhor Membrana de Filtração para Processos Industriais',
      data:'9 de agosto de 2025',
      dataIso:'2025-08-09',
      tempo:'5 min de leitura',
      cat:'processo',
      catNome:'Dimensionamento & Processo',
      resumo:'A escolha da membrana filtrante adequada é crucial para otimizar processos industriais e laboratoriais. Este guia aborda os principais tipos de membranas — PVDF, PTFE, PES, PS e Polipropileno —, suas aplicações e como selecionar a mais indicada para suas necessidades.',
      tags:['Membranas','PES','PTFE','PVDF','Polissulfona','Polipropileno','Seleção técnica'],
      conteudo:`
        <p><em>Publicado por Verter — Agosto de 2025</em></p>
        <p>Definir a melhor membrana em um processo de filtração nem sempre tem resposta simples. Em processos farmacêuticos de injetáveis, é obrigatório o uso de membranas com tamanho de poro 0.1 µm ou 0.2 µm, com guia de validação correlacionando retenção bacteriológica e teste de integridade.</p>
        <p>A escolha do material filtrante também deve considerar compatibilidade química, viscosidade e vazão requerida, entre outros parâmetros. Conheça os principais tipos:</p>
        <h2>Membranas em PVDF</h2>
        <p>Feita de um fluoropolímero compatível com ampla variedade de produtos químicos e solventes. Hidrofílica ou hidrofóbica, com altos volumes de poros e alta capacidade de retenção para filtração de soluções não aquosas ou ar e gases de processo.</p>
        <h3>Vantagens</h3>
        <ul>
          <li>Excelente resistência química</li>
          <li>Estabilidade térmica</li>
          <li>Durabilidade e longa vida útil</li>
          <li>Excelente desempenho de retenção</li>
        </ul>
        <h2>Membranas em PTFE</h2>
        <p>Altamente resistente a ampla gama de produtos químicos e solventes — ideal para soluções agressivas. Sua natureza hidrofóbica a torna especialmente eficaz para líquidos não aquosos, gases e vapores.</p>
        <h3>Vantagens</h3>
        <ul>
          <li>Alta resistência química</li>
          <li>Excelente desempenho em altas temperaturas</li>
          <li>Perfeito para esterilização de ar e gases</li>
          <li>Baixa aderência a contaminantes</li>
        </ul>
        <h2>Membranas em PES</h2>
        <p><strong>Produto principal da Verter</strong>, a membrana em PES possui alta capacidade de retenção de partículas. Ideal para soluções de proteínas ou quando líquidos contêm elementos que tendem a se ligar à mídia filtrante. A estrutura altamente assimétrica permite capturar eficientemente partículas de diferentes tamanhos.</p>
        <h3>Vantagens</h3>
        <ul>
          <li>Alta resistência química</li>
          <li>Trabalha em pH de 1 a 14</li>
          <li>Excelente permeabilidade ao fluxo</li>
          <li>Resistência ao entupimento</li>
          <li>Excelente performance em processos biotecnológicos</li>
        </ul>
        <h2>Membranas em Polissulfona (PS)</h2>
        <p>Performance de fluxo e retenção de partículas excepcionais. Com poros muito bem definidos, amplamente utilizada onde o controle rígido de partículas é necessário — incluindo produção de semicondutores.</p>
        <h2>Membranas em Polipropileno</h2>
        <p>Mídia de profundidade plissada projetada para clarificação e pré-filtração de líquidos e ar/gás. Ampla compatibilidade química, alta eficiência e proteção para filtros finais mais caros.</p>
        <div class="callout">
          <strong>Conclusão técnica</strong>
          <p>A escolha da membrana certa depende do fluido, da aplicação, das exigências regulatórias e do custo-benefício. Para soluções críticas farmacêuticas ou biotecnológicas, PES e PTFE são normalmente as escolhas primárias. Fale com a equipe técnica da Verter para especificação adequada.</p>
        </div>
      `
    },
    {
      id:'quantos-filtros',
      imagem:'/img/blog-quantos-filtros.jpg',
      titulo:'Quantos filtros necessito no meu processo?',
      data:'3 de agosto de 2025',
      dataIso:'2025-08-03',
      tempo:'3 min de leitura',
      cat:'processo',
      catNome:'Dimensionamento & Processo',
      resumo:'Uma das primeiras perguntas que muitos clientes fazem ao avaliar soluções de filtração é: "Quantos filtros vou precisar?" Responder corretamente exige considerar diversos fatores técnicos — um guia rápido para compreender o dimensionamento de sistemas de filtração.',
      tags:['Dimensionamento de filtros','Vazão','Tamanho de poro','Nominal vs absoluto','Pré-filtração','Perda de carga'],
      conteudo:`
        <p><em>Publicado por VERTER — Agosto de 2025</em></p>
        <p>Uma das primeiras perguntas que muitos clientes fazem ao avaliar soluções de filtração é: <strong>"Quantos filtros necessito no meu processo?"</strong> Responder corretamente a essa pergunta exige considerar diversos fatores técnicos.</p>
        <p>Cada processo de filtração é único — nenhum fluido ou lista de critérios de filtração é idêntico entre empresas. Até mesmo os contaminantes nos ingredientes podem variar entre lotes. Portanto, determinar a quantidade de filtros necessária começa com a coleta de informações sobre o fluido e os resultados desejados. Esses fatores costumam se sobrepor, tornando essencial o suporte de especialistas em filtração como a equipe técnica da VERTER.</p>
        <h2>Como é o meu fluido?</h2>
        <p>Composição química, viscosidade em temperatura operacional, carga de contaminantes e taxa de fouling são elementos críticos. Essas variáveis influenciam diretamente o tipo de filtro a ser utilizado.</p>
        <p>Por exemplo, quando o objetivo é minimizar perdas de proteínas em líquidos aquosos, membranas de <strong>PES (Polietersulfona)</strong> são ideais devido à sua baixa adsorção proteica. Já em processos com solventes, o <strong>Nylon 6,6</strong> é preferido pela alta resistência química.</p>
        <p>Além disso, o nível de filtração necessário determina o tamanho de poro adequado. A quantidade e o tamanho das partículas contaminantes podem ser mensuráveis, possibilitando escolher a micragem ideal sem provocar pré-entupimento. Dependendo da carga de contaminação, pode ser necessário incluir pré-filtração, reduzindo a quantidade total de filtros por meio de um estágio anterior de retenção.</p>
        <h2>Qual o meu objetivo na filtração?</h2>
        <p>Os objetivos de filtração definem o tipo de filtro necessário. Cada filtro é projetado para reter contaminantes específicos:</p>
        <ul>
          <li>Remoção de partículas / clarificação</li>
          <li>Redução ou controle bacteriano</li>
          <li>Filtração estéril</li>
        </ul>
        <p>As exigências de retenção determinam o tamanho de poro, especialmente em casos com micro-organismos específicos. Veja exemplos de poros recomendados:</p>
        <ul>
          <li><strong>0,03 µm</strong> — <em>Acholeplasma laidlawii</em></li>
          <li><strong>0,10 µm</strong> — <em>Brevundimonas diminuta</em></li>
          <li><strong>0,22 µm</strong> — <em>Brevundimonas diminuta</em></li>
          <li><strong>0,45 µm</strong> — <em>Serratia marcescens</em></li>
          <li><strong>0,65 µm</strong> — <em>Saccharomyces cerevisiae</em></li>
        </ul>
        <h3>Classificação do tamanho de poro: nominal vs. absoluto</h3>
        <p>A eficácia do filtro é classificada como:</p>
        <ul>
          <li><strong>Nominal:</strong> retém entre 60% e 90% das partículas do tamanho especificado. Comum em filtros de profundidade.</li>
          <li><strong>Absoluto:</strong> retém 99,999% das partículas — classificação típica de membranas.</li>
        </ul>
        <p>A seleção entre esses dois depende dos critérios de segurança e pureza do seu processo.</p>
        <h3>Materiais de construção</h3>
        <p>De extrema importância: a composição do filtro, meio filtrante, núcleo, estrutura externa (gaiola) e vedações devem atender aos requisitos do sistema, como temperatura e, principalmente, sua compatibilidade química.</p>
        <h3>Vazão requerida</h3>
        <p>Para processos contínuos, é fundamental conhecer a vazão desejada. Para processos em batelada, o cálculo depende do volume e do tempo de filtração.</p>
        <p><strong>Exemplo:</strong> para filtrar um lote de 3.000 litros em 4 horas — 750 L/h, ou 12,5 L/min. Esse valor serve como base para calcular a quantidade de filtros.</p>
        <h3>Pressão do sistema</h3>
        <p>O filtro é uma barreira mecânica e há a necessidade de uma pressão disponível para vencer esta barreira. À medida que os poros bloqueiam, a pressão diferencial do filtro (pressão de entrada menos a pressão de saída) vai aumentando. Ter pressão suficiente para vencer todas as etapas é crucial para um equilíbrio perfeito do sistema.</p>
        <p>Em geral, os fabricantes fornecem um gráfico onde se verifica a vazão do elemento filtrante em função da perda de carga ou diferencial.</p>
        <p>O gráfico abaixo mostra um exemplo, relacionando a vazão de líquido com a perda de carga para diferentes tamanhos de poro:</p>
        <img src="/img/blog-quantos-filtros-grafico.png" alt="Gráfico de vazão FGFP por 10 polegadas: perda de carga em kPa e PSI versus vazão de líquido em LPM, com curvas de 0,1 µm a 20 µm" class="post-figura">
        <h2>Conclusão</h2>
        <p>Responder à pergunta <strong>"Quantos filtros necessito?"</strong> depende de uma análise técnica do processo. Em alguns casos, uma estimativa básica resolve. Em outros, testes são essenciais para otimizar a filtração e garantir desempenho ideal.</p>
        <p>Na <strong>VERTER</strong>, combinamos conhecimento técnico e experiência prática para ajudá-lo a escolher os filtros ideais e dimensionar corretamente o sistema. Nossa equipe de especialistas está pronta para orientar desde a seleção até a validação de desempenho.</p>
      `
    },
    {
      id:'agua-alimentos-bebidas',
      imagem:'/img/blog-agua-alimentos-bebidas.jpg',
      titulo:'Filtração de Água no Processamento de Alimentos e Bebidas',
      data:'26 de julho de 2025',
      dataIso:'2025-07-26',
      tempo:'2 min de leitura',
      cat:'bebidas',
      catNome:'Indústria de Bebidas',
      resumo:'Na VERTER, desenvolvemos soluções completas em filtração de água — desde a fonte até o envase — que asseguram pureza microbiológica e físico-química para os mais altos padrões da indústria.',
      tags:['Água de processo','Controle microbiológico','Endotoxinas','Osmose reversa','Carvão ativado','Filtração de CO₂'],
      conteudo:`
        <p><em>Publicado por VERTER — Julho de 2025</em></p>
        <h2>Como a VERTER garante pureza, segurança e eficiência em cada etapa da sua produção</h2>
        <p>No setor de alimentos e bebidas, a <strong>qualidade da água de processo</strong> impacta diretamente a segurança, o sabor, a cor e a estabilidade do produto final. Na VERTER, desenvolvemos soluções completas em filtração de água — desde a fonte até o envase — que asseguram pureza microbiológica e físico-química para os mais altos padrões da indústria.</p>
        <h2>Por que filtrar a água?</h2>
        <p>A água pode carregar impurezas invisíveis que:</p>
        <ul>
          <li>Alteram o sabor, odor e aparência dos produtos;</li>
          <li>Contaminam tanques, tubulações e insumos;</li>
          <li>Causam falhas em membranas e bombas;</li>
          <li>Comprometem a validade e segurança alimentar.</li>
        </ul>
        <p>A filtração é essencial para remover bactérias, leveduras, mofos, endotoxinas, cloro, finos de carvão e partículas insolúveis que escapam de outras tecnologias como osmose reversa, UV ou destilação.</p>
        <h2>Etapas da filtração de água com tecnologia VERTER</h2>
        <h3>1. Controle microbiológico (bioburden e esterilização)</h3>
        <ul>
          <li>Filtros com membrana PES (0,22 µm ou 0,10 µm) para retenção de <em>Lactobacillus</em>, <em>Saccharomyces</em>, <em>Aspergillus</em>, entre outros.</li>
          <li>Modelos validados conforme exigências da FDA (grau esterilizante).</li>
          <li>Alternativas com camadas simples ou duplas e cápsulas pré-esterilizadas.</li>
        </ul>
        <h3>2. Remoção de endotoxinas</h3>
        <ul>
          <li>Após tratamento UV, endotoxinas podem permanecer.</li>
          <li>Filtros com carga positiva (Nylon 6,6) eliminam esses resíduos bacterianos com alta eficiência.</li>
        </ul>
        <h3>3. Filtração de partículas e filtros de carvão</h3>
        <ul>
          <li>Filtros profundidade ou spun para partículas de 1 a 100 µm.</li>
          <li>Filtros de carvão ativado (granular ou bloco) removem cloro e compostos orgânicos.</li>
          <li>Finos de carvão ou resina são retidos por filtros dedicados para proteger o sistema.</li>
        </ul>
        <h3>4. Pré-filtração para osmose reversa (RO)</h3>
        <ul>
          <li>A filtração prévia evita incrustações nas membranas e reduz custos operacionais.</li>
          <li>A escolha do filtro ideal depende da carga contaminante da água de entrada.</li>
        </ul>
        <h3>5. Filtração de ar e gases de processo</h3>
        <ul>
          <li>Filtros hidrofóbicos de PTFE esterilizam ar ou gases como CO₂ e N₂ usados em tanques ou linhas de envase.</li>
          <li>Garantem que nenhum microrganismo entre no sistema via pressão negativa ou gases contaminados.</li>
        </ul>
        <h2>Benefícios das soluções VERTER</h2>
        <ul>
          <li>Aumento da vida útil de membranas e equipamentos</li>
          <li>Redução de intervenções técnicas e trocas de filtro</li>
          <li>Água de processo com padrão microbiológico controlado</li>
          <li>Segurança do produto final e preservação da marca</li>
          <li>Suporte técnico especializado em aplicações para alimentos e bebidas</li>
        </ul>
        <h2>Quer melhorar sua água de processo?</h2>
        <p>Se sua empresa deseja produzir sua própria água purificada ou otimizar o sistema atual, a VERTER pode ajudar. Nossa equipe técnica realiza análise de risco, recomendações de filtros, validações e documentação técnica.</p>
      `
    },
    {
      id:'filtracao-cerveja',
      imagem:'/img/blog-filtracao-cerveja.jpg',
      titulo:'Filtração de Cerveja: Soluções Verter para uma Produção Cristalina e Consistente',
      data:'20 de julho de 2025',
      dataIso:'2025-07-20',
      tempo:'4 min de leitura',
      cat:'bebidas',
      catNome:'Indústria de Bebidas',
      resumo:'A filtração é uma etapa crítica no processo cervejeiro, impactando diretamente a aparência, sabor, estabilidade e durabilidade da bebida. A Verter oferece tecnologias avançadas para atender desde produtores artesanais até grandes cervejarias industriais.',
      tags:['Filtração de cerveja','Cartuchos lenticulares','Filtração a frio','Terra diatomácea','Clarificação','Polimento final'],
      conteudo:`
        <p><em>Publicado por Verter Filtração | Atualizado em Julho de 2025</em></p>
        <p>A filtração é uma etapa crítica no processo cervejeiro, impactando diretamente na aparência, sabor, estabilidade e durabilidade da bebida. A <strong>Verter Filtração</strong> oferece tecnologias avançadas para atender desde produtores artesanais até grandes cervejarias industriais.</p>
        <h2>Por que filtrar a cerveja?</h2>
        <p>Além de remover partículas visíveis, microrganismos e compostos que causam turbidez, a filtração proporciona:</p>
        <ul>
          <li>Aparência cristalina e brilho atrativo</li>
          <li>Sabor e aroma estáveis</li>
          <li>Maior prazo de validade</li>
          <li>Estabilidade microbiológica</li>
          <li>Consistência entre os lotes</li>
        </ul>
        <h2>Tecnologias de filtração</h2>
        <h3>1. Filtração superficial (cartuchos e placas)</h3>
        <p>Usa cartuchos ou placas de profundidade compostas por celulose, polipropileno ou materiais combinados para reter partículas maiores.</p>
        <p><strong>Soluções Verter:</strong> cartuchos plissados Melt Blown, placas e módulos lenticulares, carcaças sanitárias em inox.</p>
        <p><strong>Vantagens:</strong> econômica e simples de operar, boa remoção de sólidos grosseiros, substituição fácil dos elementos.</p>
        <p><strong>Limitações:</strong> pode exigir pré-filtração e trocas frequentes em processos com alta carga de sólidos.</p>
        <h3>2. Filtração por "cake" (torta) com auxiliares filtrantes</h3>
        <p>Forma-se uma camada filtrante com terras diatomáceas ou perlita sobre uma tela. A cerveja passa por essa torta, que retém as impurezas.</p>
        <p><strong>Soluções Verter:</strong> sistemas de placas com suporte para auxiliares, filtros de camada com placas de celulose, acompanhamento técnico para dosagem e limpeza.</p>
        <p><strong>Vantagens:</strong> alta retenção de partículas finas, excelente nível de clarificação final, adaptável a diferentes estilos de cerveja.</p>
        <p><strong>Limitações:</strong> processo trabalhoso e menos automatizado, pode gerar resíduos e necessita controle rigoroso de operação.</p>
        <h3>3. Filtração a frio</h3>
        <p>A cerveja é resfriada quase até o ponto de congelamento, causando a aglutinação de proteínas e polifenóis, que são posteriormente removidos por filtração.</p>
        <p><strong>Soluções Verter:</strong> cartuchos de 0,45 e 0,65 µm para polimento, filtros esterilizantes de 0,2 µm, equipamentos térmicos com isolamento e controle.</p>
        <p><strong>Vantagens:</strong> excelente remoção de turbidez, redução eficaz de proteínas e compostos fenólicos, fácil automação em linhas industriais.</p>
        <p><strong>Limitações:</strong> pode remover também compostos desejáveis de sabor, requer investimento em refrigeração e tem custo operacional elevado.</p>
        <h3>4. Soluções para cervejeiros artesanais</h3>
        <p>A Verter oferece soluções acessíveis, práticas e modulares para pequenos volumes, mantendo o padrão de qualidade dos sistemas industriais.</p>
        <p><strong>Soluções Verter:</strong> kits com bomba, cartucho e carcaça; filtros cápsula prontos para uso (RTU); acessórios como válvulas, manômetros e conexões sanitárias.</p>
        <p><strong>Vantagens:</strong> fácil de instalar e utilizar, baixo investimento inicial, ideal para trasfegas, clarificação e polimento final.</p>
        <p><strong>Limitações:</strong> capacidade limitada, pode exigir upgrades conforme o crescimento da produção.</p>
        <h2>Etapas da filtração com a Verter</h2>
        <p>A filtração pode ser aplicada em diferentes fases do processo cervejeiro:</p>
        <ul>
          <li><strong>Pós-fermentação:</strong> remoção de levedura e resíduos</li>
          <li><strong>Pós-maturação:</strong> clarificação e ajuste de brilho</li>
          <li><strong>Pré-envase:</strong> polimento microbiológico e estabilidade final</li>
        </ul>
        <p>Com a Verter, é possível montar uma linha de filtração modular e escalável, adaptada ao estilo da cerveja e ao volume de produção.</p>
        <h2>Conclusão</h2>
        <p>A filtração é essencial para uma cerveja de qualidade premium. Com a expertise da <strong>Verter Filtração</strong>, sua produção — seja artesanal ou industrial — ganha eficiência, segurança e excelência sensorial.</p>
        <h2>Perguntas frequentes</h2>
        <h3>Por que é importante filtrar a cerveja?</h3>
        <p>A filtração melhora o apelo visual, o sabor, o aroma, a consistência e a vida útil da cerveja, garantindo um produto de alta qualidade e agradável ao consumidor.</p>
        <h3>O que é utilizado na filtração da cerveja?</h3>
        <p>Os métodos mais comuns incluem filtração superficial, filtração por camada ("cake") e filtração a frio, cada um empregando técnicas e materiais distintos para remover partículas e compostos que causam turbidez.</p>
        <h3>Como a cerveja é filtrada?</h3>
        <p>Após a fermentação e a clarificação, a cerveja é direcionada a um sistema de filtração. Podem ser aplicados um ou mais métodos, dependendo do estilo da cerveja, do grau de claridade desejado e da escala da operação.</p>
        <h3>O que a filtração remove da cerveja?</h3>
        <p>O processo visa remover células de levedura, proteínas, polifenóis, microrganismos e partículas maiores como resíduos de lúpulo e grãos, melhorando a aparência, o sabor e a estabilidade da bebida.</p>
        <h3>Como dimensionar o processo de filtração?</h3>
        <p>Os métodos e equipamentos variam conforme o porte da produção. Desde grandes cervejarias industriais até setups artesanais, a escolha da tecnologia deve levar em conta o volume, o orçamento e a complexidade desejada.</p>
      `
    },
    {
      id:'fda-usp-nsf',
      imagem:'/img/blog-fda-usp-nsf.jpg',
      titulo:'Você Sabe as Diferenças entre FDA, USP e NSF?',
      data:'13 de julho de 2025',
      dataIso:'2025-07-13',
      tempo:'4 min de leitura',
      cat:'conformidade',
      catNome:'Conformidade Regulatória',
      resumo:'Filtros utilizados nas indústrias alimentícia, de bebidas e farmacêutica devem estar em conformidade com as diretrizes desses setores. Entenda o que cada uma das três entidades regula e o que exigir do seu fornecedor.',
      tags:['FDA','USP Classe VI','NSF/ANSI','21 CFR','Drug Master File','Conformidade'],
      conteudo:`
        <p><em>Publicado por VERTER — Julho de 2025</em></p>
        <p>Filtros utilizados nas indústrias alimentícia, de bebidas e farmacêutica devem estar em conformidade com as diretrizes e normas relevantes desses setores. Para que isso ocorra, o filtro normalmente deve ser testado de acordo com métodos padrão de ensaio, ou os componentes devem ser testados conforme prescrito por uma entidade reconhecida. Essas diretrizes são estabelecidas por várias organizações, incluindo a Administração de Alimentos e Medicamentos dos EUA (FDA), a Farmacopeia dos Estados Unidos (USP) e a NSF International.</p>
        <h2>FDA</h2>
        <p>O FDA, uma agência do Departamento de Saúde e Serviços Humanos dos EUA, é responsável por garantir que alimentos, cosméticos e produtos eletrônicos sejam seguros, e que medicamentos humanos e veterinários, produtos biológicos e dispositivos médicos sejam seguros e eficazes.</p>
        <p>Embora os filtros e sua fabricação não sejam monitorados diretamente pela FDA, os processos nos quais eles são utilizados podem estar sujeitos à revisão do órgão. Como os filtros entram em contato com alimentos e medicamentos, há padrões aplicáveis.</p>
        <p>O Código de Regulamentos Federais (CFR) é um conjunto de regras gerais e permanentes publicado pelos departamentos e agências executivas do Governo Federal dos EUA. O <strong>Título 21 do CFR</strong> é reservado para as regras da FDA e é revisado uma vez por ano.</p>
        <p>Para filtros utilizados na fabricação de alimentos e bebidas, as partes <strong>174</strong> (Aditivos Indiretos em Alimentos — Geral) e <strong>177</strong> (Aditivos Indiretos em Alimentos — Polímeros) são relevantes. Essas seções descrevem os materiais permitidos para contato com alimentos, bem como os métodos para determinar suas características.</p>
        <p>Importante ressaltar que <strong>o FDA não testa nem aprova filtros</strong>. Em vez disso, um filtro é considerado conforme ao FDA se todos os materiais de construção estiverem listados no CFR apropriado. Usuários finais nos setores alimentício, de bebidas e farmacêutico exigem produtos compostos exclusivamente por materiais listados pelo FDA.</p>
        <p>O 21 CFR 314.420 também trata do <strong>Drug Master File (DMF)</strong> — um dossiê enviado ao FDA que pode conter informações confidenciais sobre instalações, processos ou materiais utilizados na fabricação, processamento, embalagem e armazenamento de um medicamento. O envio de um DMF não é exigido por lei, não impõe requisitos obrigatórios e não é aprovado ou rejeitado pelo FDA. Ele permite que um fabricante de filtros forneça informações a uma farmacêutica sem revelar o conteúdo completo do dossiê.</p>
        <h2>USP</h2>
        <p>A United States Pharmacopeia (USP) é uma organização de saúde pública, não governamental e sem fins lucrativos, que atua como autoridade oficial na definição de padrões públicos para todos os medicamentos prescritos e de venda livre, além de outros produtos de saúde fabricados ou comercializados nos Estados Unidos.</p>
        <p>A USP também estabelece padrões para ingredientes alimentares, suplementos dietéticos e materiais que entram em contato com alimentos durante o processo de fabricação ou como materiais de embalagem. Os padrões de referência são atualizados nas monografias oficiais da USP-NF, e esses padrões e procedimentos são aplicáveis pela FDA. Desde 2002, são publicados anualmente.</p>
        <p>Para filtros compostos principalmente por peças plásticas, a seção relevante é o <strong>Capítulo 88, "Testes de Reatividade Biológica", Classificação In Vivo de Plásticos (Classe I a VI)</strong>. Os testes consistem em três partes: injeção sistêmica intravenosa, teste intracutâneo e teste de implantação. Clientes das áreas farmacêutica e biotecnológica geralmente buscam filtros que atendam às diretrizes da USP.</p>
        <h2>NSF</h2>
        <p>A NSF International é uma organização não governamental e sem fins lucrativos que estabelece padrões para desenvolvimento, certificação de produtos, educação e gestão de riscos voltados à saúde pública e segurança nos setores de alimentos, água, ar interior e meio ambiente.</p>
        <p>Para fins de filtração, esses padrões se aplicam principalmente ao tratamento de água municipal, sistemas de tratamento de água residencial e filtração de água engarrafada. Os três padrões mais comumente aplicáveis a filtros de processo são:</p>
        <ul>
          <li><strong>NSF/ANSI 42 — Tratamento de Água Potável, Efeitos Estéticos:</strong> cobre sistemas de ponto de uso (POU) e ponto de entrada (POE) projetados para reduzir contaminantes estéticos ou não relacionados à saúde (cloro, sabor, odor e partículas). Embora aplicado principalmente a sistemas residenciais, os testes de extração são semelhantes aos do NSF 61 e têm relevância para filtros de processo.</li>
          <li><strong>NSF/ANSI 53 — Tratamento de Água Potável, Efeitos à Saúde:</strong> também voltado a sistemas POU e POE, aborda a redução de contaminantes que afetam a saúde, como <em>Cryptosporidium</em>, <em>Giardia</em>, chumbo, compostos orgânicos voláteis (VOCs) e MTBE. É frequentemente citado para demonstrar a capacidade dos filtros de remover cistos.</li>
          <li><strong>NSF/ANSI 61 — Componentes de Sistemas de Água Potável, Efeitos à Saúde:</strong> estabelece requisitos mínimos para contaminantes químicos e impurezas que podem ser transferidos para a água potável. Avalia a segurança sanitária de materiais, componentes, produtos ou sistemas que entram em contato com a água potável.</li>
        </ul>
        <h2>Conclusão</h2>
        <p>Com base nas normas e diretrizes estabelecidas pela USP, FDA e NSF, é fundamental escolher filtros que atendam aos mais altos padrões de segurança, eficácia e conformidade regulatória — especialmente em aplicações críticas nos setores alimentício, farmacêutico e de bebidas.</p>
        <p>A VERTER compreende profundamente os requisitos técnicos dessas certificações e está preparada para orientar seus clientes na escolha do elemento filtrante mais adequado a cada processo.</p>
      `
    },
    {
      id:'puredisc-bds2',
      imagem:'/img/blog-puredisc-bds2.jpg',
      titulo:'Como os Filtros Retrolaváveis PureDisc™ BDS2 Aumentam a Vida Útil e a Eficiência na Filtração Industrial',
      data:'7 de julho de 2025',
      dataIso:'2025-07-07',
      tempo:'2 min de leitura',
      cat:'processo',
      catNome:'Dimensionamento & Processo',
      resumo:'O módulo de filtro reversível BDS2 é uma alternativa eficiente ao Supradisc II da Pall. Ideal para bebidas, xaropes e aplicações farmacêuticas, com retrolavagem, alto rendimento e esterilização in-place.',
      tags:['PureDisc BDS2','Retrolavagem','Módulo lenticular','Supradisc II','Clarificação','SIP'],
      conteudo:`
        <p><em>Publicado por VERTER — Julho de 2025</em></p>
        <p>Descubra como os módulos de filtro reversíveis PureDisc™ BDS2 oferecem alta eficiência, possibilidade de retrolavagem e desempenho superior na filtração de bebidas e aplicações farmacêuticas.</p>
        <h2>Os desafios da filtração em bebidas e farmacêuticos</h2>
        <p>Na indústria de alimentos, bebidas e farmacêutica, é comum lidar com partículas finas suspensas em óleos, xaropes, vinhos e cervejas. Para alcançar a clarificação, a redução de biocarga e o polimento do produto, filtros eficientes são fundamentais. No entanto, os módulos empilhados tradicionais costumam ter limitações: entopem com facilidade, deformam durante a esterilização e não permitem retrolavagem — o que compromete sua vida útil.</p>
        <h2>O que é o PureDisc™ BDS2?</h2>
        <p>O <strong>PureDisc™ BDS2</strong> é um módulo de filtro reversível de alto desempenho, projetado para superar os problemas dos discos empilhados convencionais. Com estrutura reforçada, vedação individual e projeto que permite retrolavagem, ele garante alta integridade mecânica e maior capacidade de retenção de contaminantes.</p>
        <h3>Benefícios técnicos do BDS2</h3>
        <ul>
          <li>Retrolavagem com água ou produto: prolonga a vida útil do módulo em até 50%</li>
          <li>Esterilizável por SIP até 125 °C e sanitizável com água quente</li>
          <li>Suporta contrapressão e vácuo sem deformação</li>
          <li>Compatível com carcaças padrão de mercado</li>
          <li>Estrutura firme, fácil de instalar e remover</li>
        </ul>
        <h2>Aplicações industriais</h2>
        <h3>Alimentos e bebidas</h3>
        <ul>
          <li>Clarificação e polimento de vinhos, cervejas e destilados</li>
          <li>Filtração de sucos concentrados, xaropes e óleos comestíveis</li>
          <li>Retirada de partículas em chás e bebidas à base de frutas</li>
        </ul>
        <h3>Farmacêutica e biotecnologia</h3>
        <ul>
          <li>Pré-filtração de ingredientes ativos (APIs)</li>
          <li>Clarificação de enzimas, vacinas e gelatinas líquidas</li>
          <li>Etapas anteriores à filtração estéril final</li>
        </ul>
        <h2>Uma alternativa competitiva ao Supradisc II da Pall</h2>
        <p>Se sua operação já utiliza o <strong>Supradisc II da Pall</strong>, o BDS2 é uma alternativa altamente compatível — com desempenho equivalente ou superior, custo mais acessível e vida útil estendida graças à retrolavagem.</p>
        <p>A equipe da Verter está pronta para ajudar você a testar o PureDisc™ BDS2 em sua operação.</p>
      `
    },
    {
      id:'limpar-membrana-pes',
      imagem:'/img/blog-limpar-membrana-pes.jpg',
      titulo:'Como Limpar Filtros de Membrana em Polietersulfona PAA® e PAB® com Peróxido de Hidrogênio e Ácido Peracético',
      data:'6 de julho de 2025',
      dataIso:'2025-07-06',
      tempo:'2 min de leitura',
      cat:'esterilizante',
      catNome:'Filtração Esterilizante',
      resumo:'Os filtros de membrana são peças-chave na produção de bebidas seguras e de alta qualidade. A limpeza inadequada compromete o desempenho e aumenta os custos — veja como garantir máxima performance com um processo eficaz de sanitização.',
      tags:['Limpeza de membranas','Ácido peracético','Peróxido de hidrogênio','CIP','Ponto de bolha','Filtros PES'],
      conteudo:`
        <p><em>Publicado por Verter — Julho de 2025</em></p>
        <h2>Introdução</h2>
        <p>Os filtros de membrana são peças-chave na produção de bebidas seguras e de alta qualidade. No entanto, a limpeza inadequada pode comprometer o desempenho e aumentar os custos. A seguir, explicamos como garantir máxima performance dos filtros PAA® e PAB® com um processo eficaz de sanitização.</p>
        <h2>Por que os filtros entopem?</h2>
        <p>O entupimento não ocorre apenas por partículas visíveis, mas por <strong>substâncias coloidais</strong> — como proteínas, beta-glucanas, carboidratos e taninos presentes no malte ou em bebidas à base de frutas — que gradualmente reduzem o diâmetro dos poros da membrana, tornando o filtro ineficiente com o tempo.</p>
        <h2>Etapa 1 — Lavagem com água morna</h2>
        <p>A limpeza diária com água morna (<strong>55 °C</strong>) ajuda a dissolver e remover essas substâncias da superfície da membrana, prolongando a vida útil do filtro e reduzindo a elevação da pressão diferencial. Porém, essa etapa isolada não é suficiente para desobstruir os poros internos.</p>
        <h2>Etapa 2 — Limpeza química com peróxido + ácido peracético</h2>
        <p>Para uma limpeza mais eficiente, recomenda-se complementar o enxágue com uma solução de limpeza química à base de <strong>peróxido de hidrogênio e ácido peracético</strong>. Esses agentes oxidantes penetram nos poros da membrana, degradando os resíduos orgânicos e oferecendo ação biocida.</p>
        <p>Testes laboratoriais comprovam que os filtros PAA® e PAB® resistem com segurança a soluções diluídas (até <strong>1,5% v/v</strong>) desses agentes por até <strong>144 horas contínuas</strong>, sem comprometer seu ponto de bolha nem as características de fluxo.</p>
        <h2>Passo a passo resumido</h2>
        <img src="/img/blog-limpar-membrana-pes-passos.png" alt="Passo a passo resumido da limpeza de filtros de membrana em polietersulfona" class="post-figura">
        <h2>Conclusão</h2>
        <p>A limpeza adequada dos filtros PAA® e PAB® com agentes à base de peróxido e ácido peracético é essencial para garantir desempenho contínuo, evitar obstruções irreversíveis e manter os processos de filtração dentro dos padrões exigidos pela indústria de bebidas.</p>
      `
    },
    {
      id:'como-proteger-cerveja',
      imagem:'/img/blog-proteger-cerveja.jpg',
      titulo:'Como Proteger a Qualidade da Cerveja Removendo Organismos de Deterioração',
      data:'4 de julho de 2025',
      dataIso:'2025-07-04',
      tempo:'2 min de leitura',
      cat:'bebidas',
      catNome:'Indústria de Bebidas',
      resumo:'A qualidade da cerveja não depende apenas de boas receitas e ingredientes nobres. Evitar contaminação por microrganismos é um dos maiores desafios dos mestres cervejeiros. Saiba como a filtração protege sua cerveja.',
      tags:['Cerveja','Lactobacillus','Pediococcus','Filtração final','Bright beer tank'],
      conteudo:`
        <p><em>Publicado por Verter — Julho de 2025</em></p>
        <p>A qualidade da cerveja não depende apenas de boas receitas, ingredientes nobres ou processos bem executados. Um dos maiores desafios dos mestres cervejeiros é evitar a contaminação por microrganismos que, mesmo em pequenas quantidades, podem comprometer o sabor, o aroma e a estabilidade do produto final.</p>
        <h3>Cerveja: um ambiente hostil... mas não imune</h3>
        <p>O álcool, o baixo teor de oxigênio, o pH relativamente baixo, os extratos de lúpulo (ácidos alfa) e o dióxido de carbono dissolvido tornam a cerveja um ambiente naturalmente desfavorável para muitas bactérias patogênicas. No entanto, isso não significa que a cerveja esteja livre de riscos microbiológicos. Bactérias láticas e leveduras selvagens conseguem sobreviver e até prosperar nesse meio.</p>
        <h3>Principais inimigos da qualidade</h3>
        <ul>
          <li><strong>Lactobacillus e Pediococcus</strong> — bactérias ácido-láticas que produzem turbidez e sabores ácidos.</li>
          <li><strong>Pectinatus e Megasphaera</strong> — bactérias gram-negativas que podem gerar odores desagradáveis como enxofre ou ranço.</li>
          <li><strong>Leveduras selvagens</strong> como Saccharomyces cerevisiae e Candida pelliculosa — responsáveis por fermentações indesejadas.</li>
        </ul>
        <h3>A filtração como barreira final</h3>
        <p>Após fermentação, maturação e filtração a granel, a cerveja é armazenada em <em>bright beer tanks</em>. Neste estágio entra em ação a <strong>filtração final de estabilização</strong>, geralmente com cartuchos de membrana com poros de 0,65 µm ou 0,45 µm:</p>
        <ul>
          <li><strong>0,45 µm:</strong> maior retenção de bactérias, incluindo formas vegetativas. Ideal para estabilidade microbiológica total.</li>
          <li><strong>0,65 µm:</strong> recomendada para cervejas mais escuras ou encorpadas, onde a preservação da cor e dos compostos sensoriais é prioritária.</li>
        </ul>
        <div class="callout">
          <strong>⚠️ Atenção</strong>
          <p>Antes de escolher o tipo e a porosidade do filtro, é essencial realizar testes com o próprio produto para garantir a eficácia microbiológica <strong>sem comprometer sabor e aparência</strong>.</p>
        </div>
        <h2>Tem um desafio de filtração na sua cervejaria?</h2>
        <p>Na Verter, oferecemos <strong>avaliações gratuitas</strong> dos desafios de filtração enfrentados por produtores de cerveja. Se você está lidando com problemas de contaminação, instabilidade ou perda sensorial, entre em contato conosco.</p>
      `
    },
    {
      id:'oxitetraciclina',
      imagem:'/img/blog-oxitetraciclina.jpg',
      titulo:'Desafios na Filtração da Oxitetraciclina Injetável: Eficiência e Esterilidade',
      data:'3 de julho de 2025',
      dataIso:'2025-07-03',
      tempo:'3 min de leitura',
      cat:'farmaceutica',
      catNome:'Indústria Farmacêutica',
      resumo:'A filtração de soluções injetáveis veterinárias representa um grande desafio técnico, sobretudo em formulações complexas como a oxitetraciclina. Veja os principais fatores que tornam esse processo crítico e como superá-los.',
      tags:['Oxitetraciclina','Injetáveis veterinários','Viscosidade','Scale-up','Filtração 0,2 µm','Lenticular'],
      conteudo:`
        <p><em>Publicado por VERTER — Julho de 2025</em></p>
        <p>A filtração de soluções injetáveis veterinárias representa um grande desafio técnico, sobretudo em formulações complexas como a oxitetraciclina. Este antibiótico de uso amplo no setor agropecuário exige um sistema de filtração projetado sob critérios específicos de viscosidade, compatibilidade química e exigências regulatórias.</p>
        <h2>1. Complexidade da formulação: muito além da viscosidade</h2>
        <p>A oxitetraciclina apresenta uma composição viscosa, frequentemente enriquecida com quelantes e excipientes que aumentam a carga de contaminantes sólidos.</p>
        <p>Durante a diluição da matéria-prima ativa, é comum a formação de partículas de baixa densidade que não se sedimentam facilmente, exigindo repouso prolongado para decantação no tanque de formulação.</p>
        <p>Esse comportamento impacta diretamente a escolha dos elementos filtrantes, principalmente os pré-filtros, que devem lidar com altas cargas particuladas sem comprometer a vazão ou colmatar precocemente.</p>
        <h2>2. Variações de viscosidade e suas implicações</h2>
        <p>Dependendo da origem da matéria-prima, a viscosidade da solução pode alcançar até <strong>40 cP</strong> — valor consideravelmente superior à da água (1 cP), usada como referência padrão nos testes de curva de perda de carga de cartuchos filtrantes.</p>
        <p>Se não houver compensações técnicas adequadas, isso implicaria na necessidade de <strong>superdimensionar a área de filtração em até 40 vezes</strong> para se obter a mesma performance observada em testes com água purificada (WFI).</p>
        <h2>3. Estratégias de mitigação: aquecimento controlado e ambiente inerte</h2>
        <p>Uma abordagem comum para redução da viscosidade é o aquecimento leve da solução. No entanto, temperaturas superiores a <strong>45 °C</strong> podem comprometer a integridade e a eficácia do princípio ativo. Isso exige um controle térmico rigoroso e conhecimento profundo sobre o comportamento físico-químico do produto.</p>
        <p>Além disso, o ambiente de formulação precisa ser <strong>quimicamente inerte</strong>, especialmente para evitar reações de oxidação que podem degradar o fármaco ou gerar subprodutos indesejados.</p>
        <h2>4. Exigência regulamentar: filtração esterilizante com membrana de 0,2 µm</h2>
        <p>Por se tratar de um <strong>produto injetável</strong>, a última etapa do processo deve obrigatoriamente utilizar <strong>filtros esterilizantes de 0,2 µm</strong>, capazes de reter microrganismos e garantir a segurança do produto final.</p>
        <p>Essa exigência reforça a importância da escolha correta de pré-filtros, pois a carga particulada remanescente não pode sobrecarregar o filtro final, sob pena de comprometer o processo produtivo e a conformidade regulatória.</p>
        <h2>5. Recomendação técnica: testes de scale-up e otimização gradual</h2>
        <p>Dada a quantidade de variáveis envolvidas, é altamente recomendado que o sistema de filtração seja desenvolvido por meio de <strong>testes em escala piloto</strong> (scale-up), permitindo ajustes finos na configuração de pré-filtros (micragem, número de camadas, materiais) até se atingir o equilíbrio ideal entre retenção, vazão e integridade do produto.</p>
        <p>Esse processo iterativo, embora mais demorado, reduz significativamente o risco de falhas em escala industrial e promove maior eficiência ao longo do ciclo de vida do filtro.</p>
        <h2>Conclusão</h2>
        <p>A filtração da oxitetraciclina injetável demanda uma abordagem técnica altamente especializada. A combinação de elevada viscosidade, sensibilidade térmica, presença de partículas instáveis e necessidade de filtração esterilizante cria um cenário desafiador que não permite soluções genéricas.</p>
        <p>Em geral, um sistema com <strong>três estágios de filtração</strong> é necessário, sendo o ponto crítico o estágio intermediário — geralmente preenchido por elementos do tipo lenticular, com capacidade de retenção de materiais coloidais.</p>
        <p>Investir em um sistema bem dimensionado, com testes em escala reduzida e suporte técnico qualificado, é essencial para assegurar qualidade, conformidade e desempenho consistente na produção deste antibiótico vital para a medicina veterinária.</p>
      `
    },
    {
      id:'vent-filters',
      imagem:'/img/blog-vent-filters.jpg',
      titulo:'Filtração Estéril em Tanques e Gases de Processo: Filtros de Respiro (Vent Filters)',
      data:'27 de junho de 2025',
      dataIso:'2025-06-27',
      tempo:'3 min de leitura',
      cat:'farmaceutica',
      catNome:'Indústria Farmacêutica',
      resumo:'Tanques usados para armazenamento, mistura e dosagem precisam ser devidamente ventilados para proteger sua integridade estrutural. Em processos farmacêuticos, essas ventilações exigem filtração adequada para evitar contaminação.',
      tags:['Vent Filters','Filtros de respiro','PTFE hidrofóbico','PVDF','SIP','Tanques farmacêuticos'],
      conteudo:`
        <p><em>Publicado por Verter — Junho de 2025</em></p>
        <h3>Filtros de Respiro de Tanque ou Vent Filters</h3>
        <p>Tanques usados para armazenamento, mistura, dosagem e uso único, que são enchidos e esvaziados como parte de um processo, precisam ser devidamente ventilados para proteger sua integridade estrutural. Encher um tanque sem ventilação pode causar aumento de pressão, reduzindo o fluxo e, em casos extremos, levando à ruptura. Esvaziar sem ventilação acumula vácuo, podendo causar implosão.</p>
        <p>Para tanques em processos farmacêuticos e biofarmacêuticos, essas ventilações devem ter <strong>filtração adequada em linha</strong>, tanto para evitar a liberação de ingredientes quanto para impedir que contaminantes do ambiente entrem no tanque.</p>
        <h3>Avaliação de risco: fatores a considerar</h3>
        <ul>
          <li>Probabilidade de contaminação bacteriana no ambiente</li>
          <li>Nível de contaminação que pode ser encontrado</li>
          <li>Propensão do material armazenado ao crescimento bacteriano</li>
          <li>Adequação dos procedimentos de limpeza/esterilização do tanque</li>
          <li>Carga de contaminantes sobre filtros de esterilização descendente</li>
        </ul>
        <h3>Opções de filtros</h3>
        <p><strong>Para redução de biocarga:</strong> PTFE hidrofóbico · PVDF hidrofóbico</p>
        <p><strong>Para esterilização:</strong> PTFE hidrofóbico</p>
        <h3>Parâmetros críticos</h3>
        <ol>
          <li><strong>Equilíbrio de pressão:</strong> ao encher, o ar precisa sair; ao esvaziar, precisa entrar. Sem controle, pode comprometer o processo ou danificar o tanque.</li>
          <li><strong>Esterilidade do ar:</strong> remove partículas e microrganismos do ar que entra ou sai do tanque.</li>
          <li><strong>Membranas hidrofóbicas:</strong> PTFE ou PVDF não absorvem água, mantendo os poros livres — essencial em ambientes úmidos ou com vapor (ciclo SIP).</li>
          <li><strong>Dimensionamento adequado:</strong> o filtro precisa suportar fluxos de ar durante enchimento/esvaziamento e ciclos de esterilização.</li>
          <li><strong>Aquecimento dos filtros:</strong> jaqueta térmica ou traço elétrico evita condensação e bloqueios.</li>
        </ol>
        <div class="callout">
          <strong>Conclusão</strong>
          <p>A seleção adequada de filtros de respiro e filtros para gases de processo é essencial para garantir <strong>a integridade microbiológica e mecânica</strong> dos tanques e sistemas associados.</p>
        </div>
      `
    },
    {
      id:'pre-filtro-correto',
      imagem:'/img/blog-pre-filtro-correto.jpg',
      titulo:'Qual o pré-filtro correto para minha aplicação?',
      data:'28 de maio de 2025',
      dataIso:'2025-05-28',
      tempo:'3 min de leitura',
      cat:'processo',
      catNome:'Dimensionamento & Processo',
      resumo:'Selecionar o tamanho de poro e a eficiência de remoção adequados para um pré-filtro é fundamental para garantir desempenho ideal. Entenda as diferenças entre classificação nominal e absoluta, e como não cometer erros na substituição.',
      tags:['Pré-filtro','Classificação nominal','Classificação absoluta','Dimensionamento','Vazão'],
      conteudo:`
        <p><em>Tempo de leitura: 3 minutos</em></p>
        <p>Selecionar o tamanho de poro e a eficiência de remoção adequados para um pré-filtro — seja para um novo sistema ou como substituição — é fundamental para garantir um desempenho ideal. Esse processo exige informações detalhadas sobre o fluido a ser filtrado, o tipo de filtro que será protegido, a vazão esperada e a capacidade de filtragem (throughput).</p>
        <p>Ao substituir um pré-filtro, é importante entender que os fabricantes podem classificar os tamanhos de poro e o desempenho de forma diferente. Solicitar simplesmente um "pré-filtro de 0,45 micra" a outro fornecedor pode não resultar em um produto equivalente.</p>
        <h3>Pré-Filtração Nominal vs. Absoluta</h3>
        <p>Filtros para líquidos geralmente são classificados como <strong>absolutos</strong> (removem praticamente todas as partículas acima do tamanho de poro especificado) ou <strong>nominais</strong> (removem algumas ou a maioria das partículas acima dessa classificação).</p>
        <p>Se o pré-filtro existente possui classificação absoluta, a substituição é relativamente simples. Filtros com classificação absoluta são, em geral, filtros de membrana com altíssima eficiência de remoção (99,9% ou mais).</p>
        <h3>Classificação de Pré-Filtros</h3>
        <p>Alguns fornecedores podem reclassificar um filtro com poros maiores como tendo uma classificação mais restritiva, sem chamá-lo de absoluto. Por exemplo, uma membrana de 0,65 micra pode reter algumas partículas de 0,22 micra, e por isso pode ser rotulada como pré-filtro de 0,22 micra. Substituir esse pré-filtro por um filtro absoluto de 0,22 micra provavelmente resultaria em menor vazão, entupimento prematuro e um cliente muito insatisfeito.</p>
        <h3>Eficiência: alta para baixa e vice-versa</h3>
        <p>Se um filtro com 80% de eficiência for substituído por um com 99%, provavelmente a vazão será menor e a capacidade de filtração será reduzida. No caso inverso, pode haver melhora na vazão, mas o pré-filtro permitirá passagem de mais contaminantes, causando entupimento prematuro do filtro final.</p>
        <div class="callout">
          <strong>Conclusão</strong>
          <p>A escolha adequada de um pré-filtro não deve se basear apenas em classificações nominais. Compreender as diferenças entre filtros nominais e absolutos, bem como as variações nas classificações de eficiência entre fornecedores, é essencial para evitar falhas no processo.</p>
        </div>
        <p>A Verter conta com uma equipe técnica altamente qualificada e experiente, pronta para oferecer suporte na seleção do pré-filtro mais adequado para cada aplicação específica.</p>
      `
    },
    {
      id:'elemento-equivalente',
      imagem:'/img/blog-elemento-equivalente.jpg',
      titulo:'Encontrando um elemento filtrante equivalente ao que eu uso!',
      data:'28 de maio de 2025',
      dataIso:'2025-05-28',
      tempo:'2 min de leitura',
      cat:'processo',
      catNome:'Dimensionamento & Processo',
      resumo:'Ao trocar de fornecedor de filtros, é essencial garantir que o novo possa oferecer equivalentes aos atuais. Um fornecedor de qualidade dedica tempo para entender o que "equivalente" significa na sua aplicação.',
      tags:['Equivalência','Substituição','Validação','Compatibilidade química','Fornecedor'],
      conteudo:`
        <p>Por diversos motivos, você está procurando um novo fornecedor de filtros. Mas é essencial garantir que o novo fornecedor possa oferecer filtros equivalentes aos que estão sendo utilizados atualmente.</p>
        <h3>Qual é a sua definição de "equivalente"?</h3>
        <p>Em muitos casos, dependerá da aplicação. Para um sistema de água ou fluxo não crítico, há bastante flexibilidade na escolha. Já para um fluxo crítico ou processo validado, haverá pouca (ou nenhuma) margem para desvios — o que pode exigir o mesmo meio filtrante, materiais, nível de testes e dados de conformidade regulatória.</p>
        <h3>Como identificar um filtro funcionalmente equivalente?</h3>
        <p><strong>O que você está filtrando?</strong> A composição química/biológica do fluido ajuda a identificar possíveis problemas de compatibilidade.</p>
        <p><strong>Tamanho de poro e retenção:</strong> Qual o tamanho das partículas? Classificação absoluta ou nominal? Qual a carga de partículas no fluido? Há entupimento prematuro hoje?</p>
        <p><strong>Vazão e tamanho de lote:</strong> Qual vazão necessária? Qual o tamanho do lote processado com um conjunto de filtros?</p>
        <p><strong>Requisitos regulatórios:</strong> Retenção bacteriana, contato com alimentos FDA/UE, toxicidade, TOC e condutividade, endotoxinas, não liberação de fibras.</p>
        <p><strong>Configuração:</strong> Cartucho ou cápsula? Conexões compatíveis com a carcaça?</p>
        <p><strong>Sanitização:</strong> Água quente, vapor, autoclave ou químico?</p>
        <img src="/img/blog-elemento-equivalente-diagrama.png" alt="Guia de substituição: como identificar um elemento filtrante equivalente" class="post-figura">
        <h3>Dois caminhos a seguir</h3>
        <ol>
          <li>Buscar na seção de produtos do site da Verter, que fornece fichas técnicas para cada tipo de produto.</li>
          <li>Agendar uma chamada com a equipe de Engenharia de Aplicações da Verter para discutir requisitos e identificar as melhores alternativas.</li>
        </ol>
        <p>Se necessário, realizamos testes com seu próprio fluido para identificar vazão inicial, necessidade de pré-filtro e desempenho do filtrado. Ao final, geramos um relatório com filtros recomendados, performance e requisitos de dimensionamento.</p>
      `
    }

  ];

  // ============ BLOG RENDER ============
  function renderBlogCats(){
    const wrap = document.getElementById('blog-cats');
    if(!wrap) return;
    wrap.innerHTML = blogCategorias.map((c,i)=>
      `<button class="blog-cat-btn ${i===0?'active':''}" data-cat="${c.id}" onclick="filterBlog('${c.id}')">${c.nome}</button>`
    ).join('');
  }

  let currentBlogCat = 'all';
  let currentBlogSearch = '';

  function renderBlogList(){
    const filtered = posts.filter(p=>{
      const matchCat = currentBlogCat==='all' || p.cat===currentBlogCat;
      const q = currentBlogSearch.trim().toLowerCase();
      const matchSearch = !q || p.titulo.toLowerCase().includes(q) || p.resumo.toLowerCase().includes(q) || p.tags.some(t=>t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    const feat = document.getElementById('blog-featured-wrap');
    const grid = document.getElementById('blog-grid');
    if(!feat || !grid) return;

    if(filtered.length===0){
      feat.innerHTML = '';
      grid.innerHTML = '<div class="blog-empty" style="grid-column:1/-1">Nenhum post encontrado com os filtros aplicados.</div>';
      return;
    }

    // Featured: só quando não há busca/filtro específico (vista padrão)
    const showFeatured = currentBlogCat==='all' && !currentBlogSearch;
    const featuredPost = showFeatured ? filtered.find(p=>p.featured) : null;
    const rest = featuredPost ? filtered.filter(p=>p.id!==featuredPost.id) : filtered;

    feat.innerHTML = featuredPost ? `
      <div class="blog-featured" onclick="openPost('${featuredPost.id}')">
        <div class="thumb">
          ${featuredPost.imagem
            ? `<img src="${featuredPost.imagem}" alt="${featuredPost.titulo}" loading="lazy">`
            : `<div class="placeholder">[ Imagem de destaque ]</div>`}
        </div>
        <div class="content">
          <div class="blog-badge-row">
            <span class="blog-badge featured">★ Em destaque</span>
            <span class="blog-badge">${featuredPost.catNome}</span>
          </div>
          <div class="blog-meta">
            <span><strong>Verter Filtração</strong></span>
            <span class="dot"></span>
            <span>${featuredPost.data}</span>
            <span class="dot"></span>
            <span>${featuredPost.tempo}</span>
          </div>
          <h2>${featuredPost.titulo}</h2>
          <p class="excerpt">${featuredPost.resumo}</p>
          <a class="read-more">Ler artigo completo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>` : '';

    grid.innerHTML = rest.map(p=>`
      <div class="blog-card" onclick="openPost('${p.id}')">
        <div class="thumb">
          ${p.imagem
            ? `<img src="${p.imagem}" alt="${p.titulo}" loading="lazy">`
            : `<div class="placeholder">
            <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></div>
            Imagem do post
          </div>`}
        </div>
        <div class="content">
          <div class="blog-badge-row">
            <span class="blog-badge">${p.catNome}</span>
          </div>
          <div class="blog-meta">
            <span>${p.data}</span>
            <span class="dot"></span>
            <span>${p.tempo}</span>
          </div>
          <h3>${p.titulo}</h3>
          <p class="excerpt">${p.resumo}</p>
          <div class="card-footer">
            <a class="read-link">Ler post
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>`).join('');
  }

  function filterBlog(catId){
    currentBlogCat = catId;
    document.querySelectorAll('.blog-cat-btn').forEach(b=>b.classList.toggle('active',b.dataset.cat===catId));
    renderBlogList();
  }
  function searchBlog(q){
    currentBlogSearch = q;
    renderBlogList();
  }

  function openPost(id){
    const p = posts.find(x=>x.id===id);
    if(!p) return;
    document.getElementById('post-bc-title').textContent = p.titulo.length>60 ? p.titulo.slice(0,60)+'…' : p.titulo;
    document.getElementById('post-cat').textContent = p.catNome;
    document.getElementById('post-title').textContent = p.titulo;
    document.getElementById('post-date').textContent = p.data;
    document.getElementById('post-read-time').textContent = p.tempo;
    const content = document.getElementById('post-content');
    const capa = p.imagem ? `<img src="${p.imagem}" alt="${p.titulo}" class="post-cover">` : '';
    content.innerHTML = capa + p.conteudo +
      `<div class="post-tags">${p.tags.map(t=>`<span class="post-tag">${t}</span>`).join('')}</div>
       <div class="post-cta">
         <h3>Precisa de suporte técnico especializado?</h3>
         <p>Nossa equipe está pronta para analisar sua aplicação e indicar a solução ideal.</p>
         <a href="https://wa.me/5548984691375?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Verter%20Filtra%C3%A7%C3%A3o%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o." class="cta-btn">Falar com um especialista <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
       </div>`;
    // Related: mesma categoria, excluindo atual
    const related = posts.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,3);
    const relatedFallback = related.length>0 ? related : posts.filter(x=>x.id!==p.id).slice(0,3);
    document.getElementById('related-grid').innerHTML = relatedFallback.map(r=>`
      <div class="blog-card" onclick="openPost('${r.id}')">
        <div class="thumb">
          ${r.imagem
            ? `<img src="${r.imagem}" alt="${r.titulo}" loading="lazy">`
            : `<div class="placeholder">
            <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></div>
            Imagem do post
          </div>`}
        </div>
        <div class="content">
          <div class="blog-badge-row"><span class="blog-badge">${r.catNome}</span></div>
          <div class="blog-meta"><span>${r.data}</span><span class="dot"></span><span>${r.tempo}</span></div>
          <h3>${r.titulo}</h3>
          <p class="excerpt">${r.resumo}</p>
          <div class="card-footer"><a class="read-link">Ler post <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a></div>
        </div>
      </div>`).join('');
    showPage('post');
  }

  const categorias = [
    {id:'all',nome:'Todos os Produtos'},
    {id:'capsulas',nome:'Filtros Cápsulas'},
    {id:'vapor',nome:'Filtros para Vapor'},
    {id:'mini',nome:'Mini Cartuchos'},
    {id:'highflow',nome:'Cartuchos High Flow'},
    {id:'zeta',nome:'Cartuchos Lenticulares Zeta'},
    {id:'pp',nome:'Cartuchos Absolutos PP e GF (Glass Fiber)'},
    {id:'ptfe',nome:'Cartuchos PTFE'},
    {id:'carcacas',nome:'Carcaças Sanitárias'},
    {id:'lab',nome:'Linha Laboratorial'},
    {id:'esteril',nome:'Cartuchos Esterilizantes'},
    {id:'carvao',nome:'Cartuchos Carvão Ativado'},
    {id:'codeline',nome:'Peças Codeline'},
  ];

  const produtos = [
    // NOTA: Categorização feita com base no mapeamento do site real (verterfiltration.com.br)
    // Quando fizermos a coleta completa dos 51 produtos, cada um será reclassificado a partir de sua página individual.
    {id:1,slug:'sistemas-de-filtracao-verter',nome:'Sistemas de Filtração VERTER',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Soluções completas integrando pré-filtração, clarificação, remoção de cor e estabilização microbiana.',tag:null,ph:'carcaca',img:'img/sistemas-filtracao-verter.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'A VERTER oferece soluções completas de filtração que integram etapas como pré-filtração, clarificação, remoção de cor e estabilização microbiana, otimizando espaço e eficiência operacional. Os sistemas de filtração VERTER são de alto desempenho, eliminam contaminantes, pigmentos orgânicos, sedimentos, partículas e microrganismos deteriorantes, melhorando significativamente o sabor, aroma, vida útil e aparência dos seus produtos. Oferecemos tanto sistemas padronizados quanto projetos customizados, conforme a necessidade de cada cliente — reduzindo o tempo de engenharia e os custos de implementação.'},{titulo:'CARACTERÍSTICAS',bullets:['Os sistemas da VERTER consistem em múltiplas unidades de filtração totalmente equipadas (bomba, manômetro, válvulas de medição e fechamento, tubulações, etc.)','Construção em aço inoxidável, oferecendo alta resistência à corrosão e excelente durabilidade','Conexão rápida entre carcaças e bomba, facilitando a montagem e desmontagem','Estrutura simples, leve e versátil, permitindo mobilidade total até a linha de produção','Configurações disponíveis com ou sem válvulas, com ou sem bomba, com ou sem estrutura móvel (carrinho)']},{titulo:'APLICAÇÕES',bullets:['Ampla compatibilidade com processos industriais que envolvem água, soluções aquosas, óleos, produtos químicos finos e outros.','Ideal para a indústria alimentícia e de bebidas: filtração de sucos, xaropes, ingredientes, óleos comestíveis e água engarrafada.','Ideal para a indústria farmacêutica: filtração de soluções orais e aqueles que exijam maior controle de qualidade.']}]},
    {id:2,slug:'filtro-esterilizante-pes-paa-series',nome:'Filtro Esterilizante PES — PAA Series',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Membrana anisotrópica em Polietersulfona com pré-filtro incorporado. 100% rastreável.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-pes-paa.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros de cartucho PAA possuem uma membrana pré-filtro incorporada à frente da membrana final. A exclusiva membrana pré-filtro anisotrópica de Polietersulfona (PES) reduz de forma eficaz a taxa de obstrução da membrana final. Os filtros de cartucho PAA otimizados oferecem uma vida útil mais longa do que os filtros de cartucho genéricos na maioria das aplicações. Cada elemento filtrante é 100% testado quanto à integridade antes de ser despachado. A membrana pré-filtro incorporada aumenta significativamente a vazão total e a estabilidade da taxa de fluxo. O PAA pode reduzir de forma eficaz os custos operacionais do sistema de filtração, os custos com substituição de filtros e os tempos de parada em diversas aplicações. Um guia de validação está disponível para comprovar a conformidade com os requisitos regulatórios.'},{titulo:'CONFORMIDADE REGULATÓRIA',bullets:['ASTM D6394 SP0112','FDA 21 CFR 177.1655','ISO 10993-Part 1, 5','EN 285:2006+A2:2009','Regulation (EC) No 1935/2004']},{titulo:'CARACTERÍSTICAS',bullets:['Componentes duráveis em PES e PP','Membrana assimétrica altamente porosa','Excelente compatibilidade química','Baixo nível de extraíveis','100% testado quanto à integridade']},{titulo:'APLICAÇÕES',bullets:['Soluções parenterais de pequeno e grande volume','Meios de cultura suplementados com peptona','Meios de cultura celular contendo soro','Soluções oftálmicas','Tampões (buffers)','Água ultrapura','Produtos químicos de alta pureza','Vinho','Cerveja']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Pré-filtro: PES','Filtro final: PES','Suporte: Polipropileno','Núcleo / Gaiola: Polipropileno','Vedações: Silicone, EPDM, FKM','Adaptador dos conectores: Inserto de aço inox 316L ou Polisulfona']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80°C (176°F)','Diferencial máximo de pressão: 4 bar (58psi) @ 20°C (68°F); 2 bar (29 psi) @ 80°C (176°F)']},{titulo:'PERFORMANCE',bullets:['Esterilização por Autoclave: 125°C (257°F), 30min, 30 ciclos','Esterilização por Vapor Fluente: 125°C (257°F), 30min, 30 ciclos','Área Filtrante: 0,65 m² por 10"']}]},
    {id:3,slug:'carcacas-sanitarias-single',nome:'Carcaças Sanitárias Single',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaças sanitárias single para aplicações em processos farmacêuticos e biotecnológicos.',tag:null,ph:'carcaca',img:'img/carcacas-sanitarias-single.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'As Carcaças Sanitárias Single foram projetadas para atender aos requisitos de construção sanitária, com soldas lisas e sem fendas e conexões sanitárias do tipo TC (Tri-Clamp). São fáceis de limpar e desmontar. Adequadas para aplicações com baixa vazão e condições de pressão de baixa a média. Esse design é amplamente utilizado nas indústrias farmacêutica, de biotecnologia e de alimentos/bebidas.'},{titulo:'CARACTERÍSTICAS',bullets:['Grau de polimento ultraelevado: Interno Ra ≤ 0,3 µm; Externo Ra ≤ 0,4 µm','Atende aos padrões GMP, com soldagem lisa e sem fendas e design sanitário. Excelente capacidade de limpeza e drenagem de líquidos.','Portas de Respiro/Dreno: A luva roscada é separada do bico escalonado, de modo que o tubo de conexão não gira durante o processo de vent ou dreno.','Os pés da carcaça são robustos e possuem roscas reforçadas para maior estabilidade e resistência. Porcas ajustáveis nas pernas permitem regulagem de altura para facilitar a instalação.','Compatível com processos Clean-in-Place (CIP) e Steam-in-Place (SIP).','Compatível com conexões de cartucho tipo 222 e 226.','Porta de dreno opcional tipo N6 (porta de amostragem).']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Opções de Corpo: Aço Inoxidável 304 ou 316L','Porta de Dreno / Respiro: 304, 316L','Conexão Tri-Clamp: 304','Lâmina Estabilizadora: 304','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 1,0 MPa (150 psi)','Temperatura Máxima de Operação: 140°C (284°F)']},{titulo:'CONEXÕES',bullets:['Conexão do Corpo: Tri-clamp','Entrada e Saída (N1, N2): Tri-clamp 1" (T25)','Porta de Respiro (N4): Válvula sanitária com bico escalonado compatível com interface para teste de integridade','Porta de Drenagem (N5, N6): Válvula sanitária com bico escalonado para tubulação com diâmetro interno de 8 mm','Porta para Manômetro (N3): Tri-clamp 1,5"']}]},
    {id:4,slug:'cartucho-big-blue-absoluto',nome:'Cartucho Big Blue Absoluto',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartucho filtrante absoluto em grande capacidade para aplicações de alta vazão.',tag:null,ph:'cartucho',img:'img/cartucho-big-blue-absoluto.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O cartucho big blue absoluto plissado está disponível em diferentes tipos de meios filtrantes e tamanhos de poro, incluindo mídia de profundidade em polipropileno de alto desempenho, fibra de vidro e membrana PES hidrofílica absoluta importada. Este filtro pode substituir os tradicionais filtros de profundidade "Big Blue" em carcaças Big Blue, melhorando o desempenho e reduzindo o custo.'},{titulo:'CARACTERÍSTICAS',bullets:['Ampla gama de aplicações devido à alta compatibilidade química','Disponível em diferentes tipos de meios filtrantes e tamanhos de poro','Altas vazões com baixas perdas de carga']},{titulo:'APLICAÇÕES',bullets:['Água potável','Filtração de água','Pré-filtração em Osmose Reversa (RO)','Sistemas de água deionizada']},{titulo:'DIMENSÕES',bullets:['Diâmetro externo / interno: 115 mm / 28 mm','Comprimentos disponíveis: 248 mm, 250 mm, 254 mm, 508 mm']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80°C','Pressão diferencial máxima: 4,0 bar @ 20°C / 2,4 bar @ 80°C','Pressão diferencial recomendada para troca: 2,2 bar @ 20°C']}]},
    {id:5,slug:'testador-de-integridade-verter',nome:'Testador de Integridade — VERTER',cat:'lab',catNome:'Linha Laboratorial',desc:'Equipamento para teste de integridade de filtros em processos farmacêuticos.',tag:null,ph:'capsula',img:'img/testador-integridade-verter.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O Testador de Integridade de Filtros - Verter é um equipamento de última geração, desenvolvido conforme as diretrizes GAMP e em total conformidade com GMP e FDA 21 CFR Part 11 / 820.72. Projetado para garantir precisão, confiabilidade e simplicidade, o DLE-501 combina alta performance, registro seguro de dados e design ergonômico em um único equipamento.'},{titulo:'PRINCIPAIS VANTAGENS',bullets:['Alta precisão: sensores digitais avançados para testes confiáveis e consistentes.','Versatilidade: suporta todos os métodos de teste de integridade, incluindo ultrafiltração.','Praticidade: tela touch colorida de 10,1", operação simples e interface amigável.','Segurança de dados: armazenamento de até 300.000 resultados, trilha de auditoria (audit trail) exportável e backup via USB.','Produtividade: até 12 filtros de 20" testados simultaneamente, com programas pré-configurados (até 1000).','Confiabilidade: impressora térmica integrada (sem risco de contaminação por tinta), com registros duradouros (>10 anos).','Portabilidade: design compacto e leve (8,2 kg), ideal para campo e laboratório.']},{titulo:'POR QUE ESCOLHER O TESTADOR VERTER?',bullets:['Conformidade regulatória internacional','Operação simples e rápida','Alta durabilidade e confiabilidade em campo','Maior eficiência nos testes de filtros']}]},
    {id:6,slug:'filtro-cartucho-zeta-plus-serie-bds',nome:'Filtro Cartucho ZETA PLUS — Série BDS',cat:'zeta',catNome:'Cartuchos Lenticulares Zeta',desc:'Cartuchos de profundidade lenticulares para clarificação e remoção de partículas finas.',tag:null,ph:'cartucho',img:'img/filtro-cartucho-zeta-plus-bds.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos de filtro de profundidade VERTER, também conhecidos como módulos de filtro lenticular de profundidade, estão disponíveis em diversas configurações e opções. Os cartuchos, ou módulos lenticulares, são fabricados em diâmetros de 8, 12 ou 16 polegadas e incluem de 4 a 16 células filtrantes. Cada célula filtrante é composta por um par de placas de meio filtrante de profundidade com as bordas de cada par seladas por um processo patenteado, utilizando polipropileno. A unidade montada assemelha-se a uma pilha de lentes convexas duplas, daí o termo "lenticular". Para atender às demandas de diversas aplicações, os filtros de profundidade podem ser fornecidos com opções que incluem remoção de água, material de grau farmacêutico ou impregnadas com carvão ativado.'},{titulo:'APLICAÇÕES',bullets:['Clarificação de bebidas','Farmoquímicos','Produção de vacinas e bioprocessos','Remoção de cor','Parenterais de grande volume','Veterinários','Biodiesel','Cosméticos']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante - Terra diatomácea, perlita, resina','Suportes - Polipropileno','Aneis de vedação - Silicone, viton, EPDM']},{titulo:'CARACTERÍSTICAS',bullets:['Filtração de alto fluxo nas indústrias farmacêutica e de alimentos & bebidas','O fluido de filtração térmica não causa impacto adverso nas células filtrantes de profundidade','Proteção para filtros estéreis subsequentes e colunas de cromatografia','A permeabilidade e a capacidade de adsorção das células filtrantes são aprimoradas devido às resinas carregadas','Alta capacidade de retenção de impurezas combinada com baixa adsorção de proteínas','Longa vida útil e alta eficiência econômica','Fácil de operar, disponível em diversos graus e tamanhos','Alça de remoção']}]},
    {id:7,slug:'cartuchos-plissado-absoluto-fgfp',nome:'Cartuchos Plissado Absoluto — FGFP',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartuchos de filtro plissado absoluto em polipropileno. Série β 5000.',tag:null,ph:'cartucho',img:'img/cartuchos-plissado-absoluto-fgfp.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos da série FGFP são elementos filtrantes plissados 100% em polipropileno, desenvolvidos para atender às demandas de um mercado altamente dinâmico. Estão disponíveis com tamanhos de poro entre 0,1 e 50 micra, oferecendo uma eficiência de retenção de 99,98% (β 5000). Essa estrutura de alta retenção proporciona excelente desempenho de filtração, mantendo uma vazão superior. A capacidade da membrana estende significativamente a vida útil do cartucho, reduzindo os custos operacionais com substituições frequentes. Além disso, são compatíveis com todo o espectro de pH, de 1 a 14, atendendo a uma ampla gama de aplicações em líquidos.'},{titulo:'APLICAÇÕES',bullets:['Alimentos e bebidas','Produtos químicos para galvanoplastia','Pré-filtração para osmose reversa','Produtos químicos finos','Água de processo','Farmacêuticos']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno (PP)','Suporte e gaiola: Polipropileno (PP)','Núcleo e adaptador: Polipropileno (PP) ou inserto de aço inoxidável (SS) disponíveis','Materiais de vedação: Silicone, EPDM, NBR, FKM, E-FKM']},{titulo:'DIMENSÕES',bullets:['Diâmetro externo: 69 mm','Comprimentos disponíveis: 5", 10", 20", 30", 40"','Área de filtração: 0,70 m² por cartucho de 10"']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80°C','Queda de pressão máxima: 4 bar (58 psi) a 20°C; 2 bar (29 psi) a 80°C','Esterilização SIP: até 125°C, 30 minutos, 10 ciclos']}]},
    {id:8,slug:'filtros-capsula-0-1-m-em-pes',nome:'Filtros Cápsula 0.1 µm em PES',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Filtros cápsula esterilizantes 0.1 µm em polietersulfona para aplicações críticas.',tag:null,ph:'capsula',img:'img/filtros-capsula-01um-pes.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros cápsula 0.1 µm em PES da série SPP são feitos de membrana PES assimétrica de dupla camada, possuindo uma membrana pré-filtro incorporada na frente da membrana final. A exclusiva membrana pré-filtro de Polietersulfona anisotrópica reduz efetivamente a taxa de obstrução da membrana final. Suas taxas de remoção de bactérias típicas na indústria foram verificadas em lotes, e sua capacidade de esterilização (LRV) é superior a 7.'},{titulo:'CARACTERÍSTICAS',bullets:['Forte compatibilidade química','Alto fluxo, baixa ligação de proteínas','Cartucho filtrante estéril comprovado','Vida útil extremamente longa']},{titulo:'APLICAÇÕES',bullets:['Filtração estéril de água para injeção, solução de limpeza, água purificada, água deionizada','Filtração estéril de LVP, IFAs, tampões, colírios, desinfetantes, etc.','Filtração estéril de vacinas, soros, produtos biológicos, líquidos antibióticos à base de água, etc.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana Filtrante: PES dupla camada','Suporte/Drenagem: PP','Núcleo/Gaiola/Tampa Final: PP','Corpo da Cápsula: PP']},{titulo:'GRAUS DE RETENÇÃO DISPONÍVEIS',bullets:['0,10 + 0,20 µm','0,20 + 0,80 µm','0,45 + 1,0 µm']},{titulo:'ÁREA DE FILTRAÇÃO',bullets:['Modelos disponíveis: C80 / C150 / C300 / C605 / C610 / C620 / C630','Áreas: 500 cm² / 1.000 cm² / 2.100 cm² / 3.000 cm² / 6.000 cm² / 12.000 cm² / 18.000 cm²']}]},
    {id:9,slug:'placas-e-discos-zeta-plus',nome:'Placas e Discos ZETA PLUS',cat:'zeta',catNome:'Cartuchos Lenticulares Zeta',desc:'Placas e discos de profundidade para clarificação de produtos sensíveis.',tag:null,ph:'cartucho',img:'img/placas-discos-zeta-plus.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'As placas e discos filtrantes de profundidade são utilizadas para filtração grosseira, clarificante e fina, sendo particularmente adequadas para a redução e remoção microbiana, bem como para a proteção preliminar de membranas filtrantes. A aplicação das placas varia desde a recuperação de materiais valiosos, como precipitados de proteínas, até como material de apoio para filtração com pré-capa. Fibras de celulose finamente fibriladas são combinadas com componentes ativos de filtração para fabricar as placas e discos filtrantes de profundidade. Sem adição de componentes minerais, as placas e discos de profundidade zeta possuem além das fibras de celulose, materiais que permitem adsorção de impurezas por efeito eletrocinético. Existem, também, na versão com carvão ativado para aplicações críticas como remoção de cor em farmoquímicos e orgânicos.'},{titulo:'APLICAÇÕES',bullets:['Clarificação de bebidas','Farmoquímicos','Cosméticos','Remoção de cor','Químicos']}]},
    {id:10,slug:'filtro-bag-big-blue-pbh420',nome:'FILTRO BAG BIG BLUE — PBH420',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Filtro bag big blue Atlas Filtri PBH420 para processos industriais robustos.',tag:null,ph:'cartucho',img:'img/filtro-bag-big-blue-atlas-filtri-pbh420.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O Filtro Bag Big Blue ATLAS FILTRI, de fabricação italiana, é uma solução eficiente e confiável para pré-filtração de fluidos com elevada carga de particulados, especialmente em aplicações que não exigem sistemas em aço inoxidável. Seu projeto versátil permite instalação simples e rápida, estando disponível nas versões opaca (azul) ou transparente, com alturas de 10 ou 20 polegadas, atendendo a diferentes demandas operacionais e vazões de processo. Apresenta-se como uma alternativa técnica competitiva aos modelos PBH-420 da Pentair, oferecendo excelente custo-benefício para aplicações industriais e comerciais.'},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Trabalho: 8 Bar','Temperatura Máxima de Trabalho: 45°C','Vazão: até 6 m³/h']},{titulo:'APLICAÇÕES',bullets:['Água em pontos de entrada','Pré-filtração de osmose reversa','Filtração de produtos em geral']}]},
    {id:11,slug:'cartucho-plissado-polypure-classic',nome:'Cartucho Plissado Polypure Classic',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartucho plissado de polipropileno Polypure Classic da MS Membrane Solutions.',tag:null,ph:'cartucho',img:'img/cartucho-plissado-polypure-classic.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O cartucho filtrante plissado MS® PolyPure Classic oferece uma solução econômica e eficiente para filtração de líquidos em múltiplas aplicações industriais. Construído 100% em polipropileno, apresenta ampla compatibilidade química e excelente área de superfície, o que proporciona maior vazão com baixa perda de carga. Os componentes são soldados termicamente, evitando extraíveis e contaminações.'},{titulo:'CARACTERÍSTICAS',bullets:['Classificações de retenção de partículas: 0.1 a 100 µm','Eficiência de filtração: 90% (β10)','Construção 100% polipropileno – sem adesivos ou lubrificantes','Estrutura de poros fixa – evita liberação de contaminantes sob alta pressão','Compatível com ampla variedade de líquidos e químicos','Diversas opções de juntas e terminações','Termicamente selado – sem risco de contaminação por colagem']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima: 80°C','Pressão máxima: 2,4 bar a 20°C','Pressão diferencial recomendada para troca: 2,4 bar']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno','Suporte e drenagem: Polipropileno','Núcleo interno, tampas e gaiola: Polipropileno']},{titulo:'VARIAÇÕES DISPONÍVEIS',bullets:['Micragens: 0.1 µm, 0.22 µm, 0.45 µm, 1 µm, 3 µm, 5 µm, 10 µm, 20 µm, 30 µm, 50 µm, 70 µm, 100 µm','Comprimentos: 9.75", 10", 20", 30", 40"','Conexões de extremidade: DOE, 222/Flat, 222/Fin, 226/Flat, 226/Fin','Materiais de vedação: Silicone, EPDM, NBR, Viton®, Teflon® encapsulado Viton®']}]},
    {id:12,slug:'carcacas-zeta-plus',nome:'Carcaças Zeta Plus',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaças específicas para cartuchos lenticulares Zeta Plus.',tag:null,ph:'carcaca',img:'img/carcacas-zeta-plus.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'As carcaças Zeta Plus, são fabricadas em aço inoxidável AISI 304 ou 316L, com alta qualidade de polimento sanitário. Design sem reentrâncias (crevice-free), com conexões do tipo TC (Tri-Clamp) ou SMS, facilitando desmontagem e higienização. Suportam cartuchos depth-stack de Ø 8", 12" ou 16" em até 4 módulos de altura.'},{titulo:'CARACTERÍSTICAS',bullets:['Acabamento interno: Ra ≤ 0,3 µm','Acabamento externo: Ra ≤ 0,4 µm','Projeto sanitário com fluxo interno otimizado, fácil instalação e mínima turbulência do líquido','Pernas robustas, fechamento com mola para compressão uniforme','Compatível com processos CIP (Clean-in-Place) e SIP (Steam-in-Place), com drenagem eficiente do fluido processado']},{titulo:'APLICAÇÕES',bullets:['Farmacêutica (filtração de injetáveis, LVP, água para injeção, antibióticos, vacinas)','Alimentos e bebidas (cerveja, vinho, destilados, sucos, xaropes, gelatinas)','Processos químicos (remoção de turbidez, substâncias gelatinosa)']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima: 150°C (302°F)','Pressão de operação: até 10 bar (150 psi)','Vazão máxima: depende do cartucho selecionado']},{titulo:'DOCUMENTAÇÕES',bullets:['Produzido sob sistema de gestão da qualidade ISO 9001:2015','Certificados aplicáveis: NSF/ANSI-61 e 372, Halal','Documentação de qualidade disponível mediante solicitação']}]},
    {id:13,slug:'pecas-e-partes-codeline',nome:'Peças e Partes Codeline',cat:'codeline',catNome:'Peças Codeline',desc:'Peças e partes para vasos de osmose reversa linha Codeline.',tag:null,ph:'carcaca',img:'img/pecas-partes-codeline.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Na VERTER, oferecemos soluções completas para sistemas de filtração que utilizam vasos de pressão da linha Pentair Codeline — referência mundial em qualidade e desempenho. Todas as partes e Partes Codeline disponíveis para consulta e muitas em estoque. Nossa equipe técnica especializada garante suporte eficiente e personalizado para cada aplicação.'},{titulo:'ESTOQUE ESTRATÉGICO E PRONTA ENTREGA',paragrafo:'Sabemos da urgência que muitas operações exigem. Por isso, mantemos em estoque as principais peças e componentes, com disponibilidade para entrega imediata em diversos casos. Oferecemos peças originais e compatíveis de alta qualidade, garantindo confiabilidade, durabilidade e segurança operacional para o seu sistema de osmose reversa.'}]},
    {id:14,slug:'filtro-high-flow-equivalente-3m',nome:'Filtro High Flow — Equivalente 3M™',cat:'highflow',catNome:'Cartuchos High Flow',desc:'Filtro cartucho high flow equivalente à linha 3M™ para alta vazão.',tag:null,ph:'cartucho',img:'img/filtro-cartucho-high-flow-3m.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Totalmente compatível com os filtros 3M™ High Flow. O filtro cartucho high flow - equivalente 3M™ - é projetado com design ergonômico e trava de segurança superior para reduzir o risco de vazamento. Como um filtro cartucho plissado de grande superfície com diâmetro externo de 6", possui excelente capacidade de retenção de partículas e alta vazão.'},{titulo:'CARACTERÍSTICAS',bullets:['Design ergonômico com trava de segurança superior','Menor número de cartuchos e menos tempo para montagem','Alta taxa de fluxo e eficiência','Grande área de superfície para maior vida útil','Compatível com sistemas High Flow 3M™']},{titulo:'APLICAÇÕES',bullets:['Dessalinização de água do mar','Processos com aminas (tratamento de gases industriais)','Indústria petroquímica','Processos à base de solventes','Tintas e revestimentos','Usinas de energia','Bebidas']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno plissado (PP) / Fibra de vidro plissada (GF)','Suporte: Fibra não tecida de polipropileno (PP)','Núcleo: Estrutura em polipropileno (gaiola de PP)']},{titulo:'PERFORMANCE',bullets:['Queda de pressão máxima: 0,35 MPa a 25°C; 0,20 MPa a 80°C','Temperatura máxima de trabalho: 80°C','ΔP recomendada para substituição: 0,25 MPa']}]},
    {id:15,slug:'cartuchos-lenticulares-retrolavaveis',nome:'Cartuchos Lenticulares Retrolaváveis',cat:'zeta',catNome:'Cartuchos Lenticulares Zeta',desc:'Cartuchos lenticulares retrolaváveis para aplicações industriais.',tag:'novo',ph:'cartucho',img:'img/cartuchos-lenticulares-retrolavaveis.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos lenticulares retrolaváveis da série PureDisc™ BDS2 são produtos novos projetados para aplicações com retrolavagem repetida. A derivação externa do modelo BDS2 tem a função de distribuir o fluido para cada placa de filtro. Os módulos da série BDS2 podem ser retrolavados com água ou com o próprio produto, a fim de remover contaminantes e prolongar sua vida útil. Esses módulos oferecem alta qualidade de filtrado com maior capacidade, confiabilidade, vantagens operacionais e robustez, atendendo às exigências dos clientes por produtos de alto desempenho.'},{titulo:'CARACTERÍSTICAS',bullets:['Projeto exclusivo e patenteado com conjunto de retrolavagem, possibilitando o processo de retrolavagem','Construção robusta para resistir a vácuo ou contrapressão','Atende à composição complexa de fluidos com maior rendimento','Suporta lavagem com água quente e esterilização in-place sem danos','Protege a filtração estéril posterior','Fácil de operar e compatível com a maioria das carcaças de filtros modulares']},{titulo:'DIMENSÕES',bullets:['1 m² (10,8 ft²) (diâmetro 12", 9 células)','1,7 m² (18,3 ft²) (diâmetro 12", 15 células)','1,8 m² (19,4 ft²) (diâmetro 12", 16 células)']},{titulo:'APLICAÇÕES',bullets:['Polimento e clarificação de cerveja, destilados, vinhos, vinho de frutas, sucos, adoçantes e xaropes, etc.']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura Máxima de Operação: 80°C (176°F)','Pressão diferencial máxima de operação: 3 bar (43,5 psi) a 25°C (77°F); 1 bar (14,5 psi) a 80°C (176°F)','Esterilização in-place (SIP): 125°C por 30 minutos, 3 ciclos']},{titulo:'QUALIDADE',bullets:['Fabricado em ambiente de sala limpa','Produzido segundo sistema de gestão da qualidade certificado ISO 9001:2015','Todos os materiais cumprem os requisitos do regulamento europeu [1935/2004/EC] para contato com alimentos','Todos os materiais cumprem os requisitos de aditivos indiretos para alimentos da FDA citados no 21 CFR 177-182']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Celulose / Terra diatomácea / Resinas, etc.','Estrutura, suporte, derivação: Polipropileno','Vedação: Silicone, EPDM, NBR, FKM']}]},
    // Cartuchos Carvão Ativado (confirmado no site real: 3 produtos)
    {id:16,slug:'elemento-lenticular-com-carvao-ativado',nome:'Elemento Lenticular com Carvão Ativado',cat:'carvao',catNome:'Cartuchos Carvão Ativado',desc:'Elemento lenticular com carvão ativado para remoção de cor, odor e compostos orgânicos.',tag:null,ph:'cartucho',img:'img/elemento-lenticular-carvao.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros lenticulares de carvão ativado da VERTER são compostos por carvão ativado altamente poroso, fibras de celulose e uma resina catiônica, disponíveis nas versões com 8, 12 ou 16 polegadas. O processo exclusivo de formulação cria um meio filtrante com volume interno extremamente alto, permitindo que o filtro atue como um absorvedor eficiente de cor, turbidez, proteínas e biocarga. A matriz de celulose e carvão ativado unida por resina específica elimina muitos dos problemas de processo e questões de segurança comumente associados ao uso de carvão ativado granulado. A VERTER oferece diversas tecnologias, para atender a uma ampla gama de aplicações. Cada uma formulada para otimizar a retenção e as propriedades de fluxo. O processo de produção automatizado proporciona desempenho consistente e alta qualidade.'},{titulo:'CARACTERÍSTICAS',bullets:['Correção de cor e sabor nas indústrias farmacêutica e de alimentos e bebidas','O fluido térmico de filtração não afeta negativamente as células filtrantes','Seguro e confiável, sem liberação de poeira de carvão','Capacidade de adsorção das células significativamente ampliada com carvão ativo e resinas carregadas','Baixo custo de descarte de resíduos sólidos e alta eficiência econômica','Alto fluxo e grande capacidade de retenção de sujeira, longa vida útil','Fácil de operar, disponível em vários tamanhos']},{titulo:'APLICAÇÕES',bullets:['Filtração de descarburação em grandes volumes parenterais (LVP)','Descloração de água','Descoloração de adoçantes e xaropes de açúcar','Correção de cor, sabor e odor em destilados alcoólicos','Correção de cor em sucos e cervejas','Descoloração e desodorização de gelatina','Descoloração em farmoquímicos (API\'s)']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Celulose / Terra diatomácea / Resinas / Carvão ativado','Suporte e camada de desvio: Polipropileno','Material de vedação: Silicone, EPDM, NBR, FKM']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima de operação: 80°C (176°F)','Pressão diferencial máxima: 2 bar (29 psi) a 25°C; 1 bar (14,5 psi) a 80°C']},{titulo:'DIMENSÕES',bullets:['Células disponíveis: 8 / 9 / 12 / 15 / 16 células','Diâmetro externo: 8", 12", 16"','Área de filtração: 0,36 m² (Φ8", 8 células); 1,08 m² (Φ12", 9 células); 1,44 m² (Φ12", 12 células); 1,80 m² (Φ12", 15 células); 1,92 m² (Φ12", 16 células); 2,34 m² (Φ16", 9 células); 3,12 m² (Φ16", 12 células); 3,90 m² (Φ16", 15 células); 4,16 m² (Φ16", 16 células)']}]},
    {id:17,slug:'filtro-plissado-de-celulose-com-carvao-ativado-pacf',nome:'Filtro Plissado de Celulose com Carvão Ativado PACF',cat:'carvao',catNome:'Cartuchos Carvão Ativado',desc:'Filtro plissado de celulose impregnado com carvão ativado para aplicações de clarificação avançada.',tag:null,ph:'cartucho',img:'img/filtro-plissado-celulose-carvao-pacf.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros Plissados de Celulose com Carvão Ativado PACF são fabricados com meio filtrante de celulose impregnada com carvão de alto desempenho, além de componentes em polipropileno e materiais de vedação compatíveis com as normas da FDA. O meio filtrante possui características como distribuição estreita de poros, grande área superficial, rápida velocidade de adsorção e adsorpção, boa conformabilidade, entre outras vantagens. A principal aplicação deste cartucho filtrante é a filtração para descoloração de líquidos farmacêuticos e produtos químicos finos.'},{titulo:'APLICAÇÕES',bullets:['Filtração para descoloração de solventes orgânicos','Filtração para descoloração de antibióticos, antivirais e hormônios','Filtração para descoloração de vitaminas, aminoácidos, açúcares e amido','Filtração para descoloração de pesticidas e produtos químicos finos']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio Filtrante: Celulose impregnada com carvão ativado','Suporte: Polipropileno','Estrutura/Corpo/Tampa Final: Polipropileno','Opções de Material de Vedação: Silicone, EPDM, FKM']},{titulo:'PERFORMANCE',bullets:['Grau de Filtração: 5 µm','pH: 1 a 13','Temperatura Máxima de Operação: ≤ 50°C (122°F)','Pressão Máxima de Operação: 65°C (149°F)','Diferença de Pressão Máxima de Operação (DP): 4 bar (58 psi) @ 20°C (68°F); 1 bar (15 psi) @ 65°C (149°F)']}]},
    {id:18,slug:'c-series-cartucho-celulose-impregnado-com-carvao',nome:'C-SERIES — Cartucho Celulose Impregnado com Carvão',cat:'carvao',catNome:'Cartuchos Carvão Ativado',desc:'Cartucho de celulose impregnado com carvão ativado. Série C para aplicações de alta performance.',tag:null,ph:'cartucho',img:'img/c-series-celulose-carvao.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos da série C são filtros de carvão com celulose impregnada e múltiplas camadas. Esses cartuchos garantem alta eficiência de filtração e longa vida útil. A camada interna é composta por tecido não tecido, que impede o vazamento de partículas finas de carvão. A camada de mídia de celulose impregnada é a mais importante do cartucho de carvão, composta por pó de carvão ativado de alta qualidade, proporcionando alta eficiência de filtração e purificação. A malha externa de polietileno é suficientemente resistente para garantir a integridade e firmeza do cartucho. Os cartuchos de carvão com celulose são usados principalmente no tratamento de água em aplicações residenciais e industriais. Eles bloqueiam e filtram partículas, além de remover sabores e odores desagradáveis. É uma solução econômica para filtração de água.'},{titulo:'CARACTERÍSTICAS',bullets:['Classificação nominal de retenção: 5 micra','Vazão recomendada: até 4 GPM (15,1 L/min)','Perda de carga inicial: 4 psi a 5 GPM','Capacidade de redução de cloro: até 6.000 galões (~22.700 L), dependendo da qualidade da água','Temperatura de operação: 40 a 125°F (4,4 a 51,7°C)','Pressão máxima: 125 psi (8,6 bar)']},{titulo:'APLICAÇÕES',bullets:['Água Potável e de Processo','Soluções de Galvanoplastia','Filtração Pré ou Pós para Sistemas de Osmose Reversa','Sistemas de Purificação de Água','Alimentos e Bebidas','Processamento Químico']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Celulose com carvão ativado impregnado','Núcleo: Polipropileno','Malha externa: Polietileno (auxilia na retenção de partículas)','Extremidades seladas: Tratadas termicamente']},{titulo:'DIMENSÕES',bullets:['Comprimento: 9 ¾" (248 mm), 10" (254 mm), 20" (508 mm)','Diâmetro externo: 2 ½" (65 mm), 4 ½" (115 mm)','Diâmetro interno: 1 1/8" (28,5 mm)']}]},
    // Cartuchos PTFE
    {id:19,slug:'cartuchos-de-filtro-plissado-ptfe-serie-st-gas',nome:'Cartuchos de Filtro Plissado PTFE — Série ST Gas',cat:'ptfe',catNome:'Cartuchos PTFE',desc:'Cartuchos plissados em PTFE para filtração de gases e vapores em aplicações farmacêuticas.',tag:null,ph:'cartucho',img:'img/cartuchos-ptfe-st-gas.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O cartucho de filtro plissado da série ST Gas adota uma membrana de PTFE hidrofóbica bicamada, com eficiência absoluta de interceptação para partículas de até 3 nm, atendendo aos requisitos de filtração de gases em microeletrônica. Possui hidrofobicidade natural, alta vazão e baixa perda de carga, sendo ideal para filtração fina de gases de uso final e gases de processo em aplicações de fabricação de semicondutores e painéis LCD.'},{titulo:'CARACTERÍSTICAS',bullets:['Intercepta partículas maiores que 3 nm nos gases, com eficiência absoluta de retenção','Membrana hidrofóbica com alta vazão e baixa perda de carga','Ampla compatibilidade química','Fabricado em sala limpa, 100% testado quanto à integridade']},{titulo:'APLICAÇÕES',bullets:['Filtração de gases de alta pureza','Filtração de gases de processo','Cromatografia']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: PTFE','Gaiola/Núcleo/Tampa de extremidade: PP','Material de vedação: EPDM, FKM, E-FKM']},{titulo:'PERFORMANCE',bullets:['Temperatura Máxima de Operação: 80°C','Pressão Máxima de Operação: 4,0 bar @ 21°C; 2,4 bar @ 80°C']}]},
    {id:20,slug:'filtro-esterilizante-ptfe-ptb-series',nome:'Filtro Esterilizante PTFE — PTB Series',cat:'ptfe',catNome:'Cartuchos PTFE',desc:'Filtro esterilizante em PTFE hidrofóbico para aplicações de gases, ar e solventes.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-ptfe-ptb.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos plissados da série PTB em PTFE apresentam membrana hidrofóbica de politetrafluoretileno (PTFE), que oferece excelente compatibilidade química e é uma escolha ideal como filtro de ventilação de ar/gás. Componentes de grau especial em polipropileno e camadas de suporte oferecem maior resistência à oxidação. São especialmente adequados como filtros de ventilação de ar em processos de fermentação. Permitem teste de integridade por intrusão de água (WIT). Os cartuchos da série PTB são selados por processo térmico, sem o uso de adesivos ou tensoativos. Seus componentes apresentam ampla compatibilidade química, podendo ser utilizados para filtrar a maioria dos gases e produtos químicos, com baixíssima precipitação.'},{titulo:'CONFORMIDADE REGULATÓRIA',bullets:['FDA 21 CFR 177','ISO 10993 - Parte 1, 5','EN 285:2015','Regulamento (CE) nº 1935/2004']},{titulo:'CARACTERÍSTICAS',bullets:['Eficiência absoluta de filtração de 0,22 µm','100% testado quanto à integridade','Lavagem final com água ultrapura para garantir a limpeza','Excelente compatibilidade química: tolera pH de 1 a 14']},{titulo:'APLICAÇÕES',bullets:['Ar de processo estéril','Envase asséptico','Ventilação de tanques','Ar de alimentação em fermentação','Gases comprimidos','Fluídos agressivos: solventes, ácidos fortes e bases']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana: PTFE hidrofóbico','Camadas de suporte: Polipropileno','Gaiola/Núcleo/Tampa: Polipropileno','Materiais de vedação: Silicone, EPDM, FKM']},{titulo:'EFICIÊNCIA',bullets:['Gases: 0,01 µm','Líquidos: 0,22 µm']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima: 80°C (176°F)','Pressão diferencial máxima (direcional): 4 bar (58 psi) @ 20°C; 2 bar (29 psi) @ 80°C','Esterilização: 135°C por 30 min (até 150 ciclos)']},{titulo:'QUALIDADE',bullets:['100% dos cartuchos são testados quanto à integridade','Produzidos em sala limpa segundo Boas Práticas de Fabricação','Sistema de Gestão da Qualidade certificado ISO 9001:2015','Cartuchos serializados individualmente com total rastreabilidade de materiais']}]},
    {id:21,slug:'filtro-esterilizante-ptfe-hidrofilico-bdp',nome:'Filtro Esterilizante PTFE Hidrofílico — BDP',cat:'ptfe',catNome:'Cartuchos PTFE',desc:'Filtro esterilizante PTFE hidrofílico série BDP para processos farmacêuticos críticos.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-ptfe-hidrofilico-bdp.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos de filtro plissado da série BDP utilizam membrana de politetrafluoretileno (PTFE) hidrofílica, que apresenta ampla compatibilidade química e é aplicada na filtração de diversos tipos de soluções ácidas, alcalinas e oxidantes. Possuem excelente molhabilidade e são seguros para uso. A série BDP passa por testes de biossegurança e desafios de esterilidade, garantindo remoção eficaz de bactérias.'},{titulo:'CARACTERÍSTICAS',bullets:['Boa molhabilidade','Tamanho de poro da membrana bem distribuído','Alto fluxo e grande capacidade de retenção de contaminantes','Resistência à corrosão e oxidação','Excelente compatibilidade química']},{titulo:'APLICAÇÕES',bullets:['Filtração de reagentes corrosivos','Filtração de líquidos fortemente oxidantes','Filtração estéril de grandes volumes (LVP)','Filtração clarificante de solventes orgânicos','Filtração de líquidos de alta viscosidade','Filtração estéril de colírios']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: PTFE hidrofílico','Suporte: Polipropileno','Gaiola/Núcleo/Tampas: Polipropileno','Opções de vedação: Silicone, EPDM, FKM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80°C','Pressão diferencial máxima: 4 bar @ 20°C; 2 bar @ 80°C']},{titulo:'ESTERILIZAÇÃO',bullets:['Autoclave: 125°C por 30 minutos, até 15 ciclos','SIP (Steam In Place): 125°C por 30 minutos, até 15 ciclos']},{titulo:'ÁREA DE FILTRAÇÃO',bullets:['0,65 m² por cartucho de 10"']},{titulo:'QUALIDADE',bullets:['Fabricado em ambiente de sala limpa','Produzido conforme sistema de gestão da qualidade certificado ISO 9001:2015','Materiais compatíveis com as normas FDA para contato com alimentos e bebidas (21 CFR dos EUA)','Validados com Brevundimonas diminuta (ATCC 19146) a 10⁷ CFU/cm² (para 0,22 µm)','Teste de integridade 100% realizado']}]},
    {id:22,slug:'mini-cartucho-ptfe-junior-style',nome:'Mini Cartucho PTFE — Junior Style',cat:'mini',catNome:'Mini Cartuchos',desc:'Mini cartucho em PTFE no formato junior style para pequenos volumes.',tag:null,ph:'cartucho',img:'img/mini-cartucho-ptfe-junior.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O cartucho MINIFIL Junior é um cartucho de filtro estéril (tipo "junior style") desenvolvido principalmente para aplicações de filtração de ar e gases na indústria farmacêutica e biotecnológica. Membrana PTFE (teflon) dupla camada, com capacidade de filtração de 0,2 µm, garantindo alta retenção de partículas e esterilidade. Utilizado como pré-filtro (pre-filtration) em sistemas que exigem ar ou gases totalmente livres de contaminantes. Com resistência a até 140°C durante esterilização a vapor, e apto para uso contínuo em temperaturas de até 60°C ou múltiplos ciclos de esterilização. Modelo "junior" refere-se ao formato compacto — geralmente com cerca de 6 cm de comprimento, adequado a sistemas piloto ou de menor porte.'},{titulo:'CARACTERÍSTICAS',bullets:['Eficiência de filtração absoluta de 0,22 µm','100% testado quanto à integridade','Recebe um enxágue final com água ultrapura para garantir a limpeza','Excelente compatibilidade química. Tolera pH de 1 a 14','A membrana é resistente à umidificação']},{titulo:'APLICAÇÕES',bullets:['Ar de processo estéril','Embalagem asséptica','Respiros de tanques','Ar de alimentação em processos de fermentação','Gases comprimidos','Tolera fluidos agressivos: solventes, ácidos fortes e bases']},{titulo:'EFICIÊNCIA',bullets:['Gás: 0,01 µm','Líquido: 0,22 µm']}]},
    // Mini Cartuchos
    {id:23,slug:'mini-cartuchos-grau-esterilizante-verter',nome:'Mini Cartuchos Grau Esterilizante VERTER',cat:'mini',catNome:'Mini Cartuchos',desc:'Mini cartuchos grau esterilizante para aplicações de pequeno volume em processos farmacêuticos.',tag:null,ph:'cartucho',img:'img/mini-cartuchos-grau-esterilizante.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os Mini Cartuchos Verter são usados para pesquisas laboratoriais, validação de processos em pequena escala na indústria farmacêutica, biotecnológica, microeletrônica e outras aplicações de filtração por esterilização, controle de partículas, pré-filtração, etc. Possibilidade de fornecer membranas microporosas com diferentes materiais e taxas de retenção, além de opções de produtos com diferentes interfaces de instalação para atender às diversas necessidades dos clientes. Completa linha de retrofit para os modelos existentes no mercado e documentação como guia de validação e 100% rastreável.'},{titulo:'CARACTERÍSTICAS',bullets:['Membranas hidrofóbicas 100% em PTFE com excelente resistência química, compatíveis com diversos reagentes químicos','Membranas hidrofílicas em Nylon, PVDF e PES','Validadas com Brevundimonas diminuta (ATCC 19146) a 10E7/cm² (0,22 µm)','100% testadas quanto à integridade, com correlação à retenção absoluta','Alta resistência a ciclos repetidos de esterilização por vapor in situ','Adequadas para pequenos a médios lotes de produtos e aplicações em respiros de tanques, filtração estéril e desenvolvimento de protocolos de validação de filtração']},{titulo:'APLICAÇÕES',bullets:['Filtração estéril de ar comprimido, nitrogênio e outros gases','Filtração do ar em embalagens assépticas','Filtração estéril de solventes, desinfetantes, etc.','Filtração estéril de preparações biológicas, meio de cultura, IFA estéreis, soluções antibióticas, etc.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['MEMBRANA: PVDF, NYLON, PES, PTFE','SUPORTE: POLIPROPILENO','ADAPTADOR: POLIPROPILENO COM INSERTO DE INOX 316L* (* se aplicável)']}]},
    {id:24,slug:'filtro-mini-cartucho-mcy-encaixe-com-o-ring-interior',nome:'Filtro Mini Cartucho MCY — Encaixe com O-RING Interior',cat:'mini',catNome:'Mini Cartuchos',desc:'Mini cartucho MCY com encaixe O-ring interior para aplicações sanitárias específicas.',tag:null,ph:'cartucho',img:'img/filtro-mini-cartucho-mcy-oring.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O mini cartucho MCY (junior cartridge) é um filtro de membrana de hidrofóbico ou hidrofílico, ideal para aplicações de filtração de ar ou gás estéril e líquidos em processos biotecnológicos. Possui construção sem adesivos, suporte em polipropileno e vedação com dupla O-ring de silicone. A construção júnior traz corpo compacto, ideal para sistemas onde o espaço é limitado, com versões de diferentes alturas com encaixe do tipo o\'ring interno.'},{titulo:'CARACTERÍSTICAS',bullets:['A interpolação é compacta e fácil de usar','Eficiência de esterilização comprovada','Alta vazão e longa vida útil','Suporta múltiplas esterilizações por calor úmido']},{titulo:'APLICAÇÕES',bullets:['Filtração estéril de ar comprimido, nitrogênio, etc.','Filtração do ar para envase asséptico','Filtração estéril de solventes, desinfetantes, etc.','Filtração estéril de preparações biológicas, meio de cultura, IFA estéril, soluções de antibióticos, etc.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio Filtrante: PP / PVDF / PTFE / PES / Nylon','Suporte: Polipropileno','Núcleo: Polipropileno','Vedações: Conforme aplicação']},{titulo:'PERFORMANCE',bullets:['Diâmetro externo: 56 mm','Altura: 1,5; 2,5; 5 polegadas','Área filtrante: 0,04 a 0,2 m²','Temperatura máxima: Até 80°C (ou 90°C para PVDF)']}]},
    {id:25,slug:'mini-cartucho-filter-disc-style',nome:'Mini Cartucho Filter DISC STYLE',cat:'mini',catNome:'Mini Cartuchos',desc:'Mini cartucho no formato disc style para aplicações de pequena escala.',tag:null,ph:'cartucho',img:'img/mini-cartucho-disc-style.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os elementos MINIFIL DISC STYLE são compatíveis com os sistemas OPTISEAL® da Merck, reconhecidos por sua confiabilidade em aplicações críticas. São oferecidos em múltiplas versões de membrana PES e PTFE, bem como em mídia de profundidade plissada de polipropileno com classificação absoluta. Projetados para substituição direta em carcaças compatíveis com Millipore Optiseal®, entre outras.'},{titulo:'CARACTERÍSTICAS',bullets:['A opção com mídia de profundidade em polipropileno oferece faixas de 0,2 µm a 70 µm com alta capacidade e baixa perda de carga','Membranas de PES hidrofílicas e PTFE hidrofóbicas disponíveis em faixas de 0,03 a 1 micra. Testes de integridade asseguram desempenho confiável e altamente retentivo. Alta tolerância a ciclos repetidos de limpeza e esterilização a vapor','Os produtos são fabricados em ambiente controlado conforme sistema de gestão da qualidade certificado pela norma ISO 9001:2015']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio Filtrante: Polipropileno; PES (Poliéter sulfona); PTFE (Politetrafluoretileno)','Camadas de Suporte: Polipropileno','Gaiola/Núcleo/Adaptadores: Polipropileno','Vedação (O-rings): Silicone, EPDM, Viton® FKM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Diferencial Máxima: 5 bar a 50°C (fluxo direto); 3 bar a 90°C (fluxo direto); 0,3 bar a 90°C (fluxo reverso)']}]},
    // Cartuchos Esterilizantes
    {id:26,slug:'filtro-polietersulfona-pes-pab-series',nome:'Filtro Polietersulfona PES — PAB Series',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Filtro em polietersulfona série PAB para aplicações esterilizantes farmacêuticas.',tag:null,ph:'cartucho',img:'img/filtro-pes-pab.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos filtrantes plissados da série PAB são fabricados com membrana de polietersulfona (PES) hidrofílica altamente assimétrica, proporcionando vazão excepcionalmente alta e longa vida útil para o processamento de grandes volumes de fluido. Apresentam excelente retenção de microrganismos, oferecendo proteção superior aos filtros finais. Essa característica os torna especialmente adequados para filtração nos setores de alimentos e bebidas.'},{titulo:'CARACTERÍSTICAS',bullets:['Baixo índice de extraíveis','Eficiência na redução da biocarga em processos com carga microbiana variável e altas exigências de vazão','100% testados quanto à integridade','Ampla compatibilidade com diferentes faixas de pH, permitindo o uso com diversos tipos de fluido']},{titulo:'APLICAÇÕES',bullets:['Alimentos e bebidas','Redução de biocarga','Requisitos de processo com alta vazão','Proteção de filtros finais ou equipamentos e sistemas a jusante, como cromatografia tangencial']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: PES','Camadas de suporte: PP','Gaiola/Núcleo/Tampa: PP','Inserto de conexão: Aço inoxidável (SS) ou Polissulfona (PSU)','Material de vedação: Silicone, EPDM, FKM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80°C (176°F)','Pressão diferencial máxima: 4 bar (58 psi) a 20°C | 2 bar (29 psi) a 80°C']},{titulo:'ESTERILIZAÇÃO',bullets:['Autoclave: 125°C (257°F), 30 minutos, até 30 ciclos','SIP (Steam In Place): 125°C (257°F), 30 minutos, até 30 ciclos']},{titulo:'QUALIDADE',bullets:['Validados com Brevundimonas diminuta (ATCC 19146) a 10⁷/cm² (0,22µm)','Cada elemento filtrante é individualmente testado quanto à integridade','Elementos rastreados por número de série','Fabricados conforme sistema de gestão da qualidade certificado ISO 9001:2015','Atendem aos requisitos do teste de reatividade biológica da USP <88>, Classe VI – 121°C','Possui Guia de Validação']}]},
    {id:27,slug:'filtro-esterilizante-polietersulfona-pae',nome:'Filtro Esterilizante — Polietersulfona — PAE',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Filtro esterilizante em polietersulfona linha PAE para processos críticos.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-pes-pae.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'[NOTA: o início desta descrição está cortado no print] ...polietersulfona (PES), são fabricados com membrana hidrofílica altamente assimétrica. Sua camada de membrana homogênea, juntamente com uma estrutura de poros com gradação contínua, permite que os filtros PAE retenham micro-organismos e impurezas particulares de diferentes tamanhos. O processo de soldagem térmica confere ao produto um nível mínimo de extrativos em uma ampla variedade de fluidos e aplicações. Os filtros PAE são adequados para filtração de líquidos grau estéril na indústria farmacêutica, oferecendo uma retenção bacteriana confiável. Possuem ampla compatibilidade química, alta vazão, grande capacidade de retenção de contaminantes, elevado rendimento e longa vida útil, atendendo simultaneamente às exigências de eficiência, qualidade e viabilidade econômica. Todos os componentes da série PAE estão em conformidade com as normas da FDA.'},{titulo:'CARACTERÍSTICAS',bullets:['Componentes duráveis em PES e PP','Excelente compatibilidade química','Capacidade de esterilização repetida, garantindo operação econômica','100% testado quanto à integridade durante a fabricação']},{titulo:'APLICAÇÕES',bullets:['Filtração estéril de produtos biológicos','Filtração estéril de meios de cultura celular e soluções tampão','Filtração estéril de aditivos, intermediários e soluções finais','Filtração estéril de LVP, SVP e colírios','Filtração estéril de preparações aquosas e liofilizadas de antibióticos','Filtração estéril de soluções [NOTA: texto cortado no print]']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: PES hidrofílico','Camada de suporte: PP','Estrutura/tampas terminais: PP','Opções de material de vedação: Silicone, EPDM, FKM','Adaptador de conexão: Inserto em aço inox (SS) ou PSU']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima de operação: 80°C (176°F)','Pressão diferencial máxima de operação: 4 bar (58 psi) a 20°C (68°F); 2 bar (29 psi) a 80°C (176°F)','Esterilização em autoclave: 125°C (257°F), 30 minutos, 30 ciclos','SIP (esterilização no local): 125°C (257°F), 30 minutos, 30 ciclos','Retenção bacteriana: 0,22 µm validado com Brevundimonas diminuta a 10⁷ CFU/cm²','Área de filtração: 0,65 m² por filtro de 10"']}]},
    {id:28,slug:'filtro-esterilizante-em-nylon',nome:'Filtro Esterilizante em Nylon',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Filtro esterilizante em membrana de nylon para aplicações químicas e farmacêuticas.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-nylon.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O filtro esterilizante em nylon da série SCB é um filtro de membrana plissada de Nylon 6.6, projetado para aplicações que exigem alta retenção de micro partículas e microrganismos. A linha oferece diferentes micragens (de 0.1 a 5 micra), cada uma especializada para líquidos específicos — de farmacêuticos, bebidas a químicos ultra-puros — com porosidade ajustada conforme o uso.'},{titulo:'CARACTERÍSTICAS',bullets:['Membrana Hidrofílica de Nylon 66','Sem agentes umectantes, alto fluxo e longa vida útil','Filtração com classificação absoluta','Construção totalmente por termofusão, sem uso de adesivos','Excelente resistência química','100% testada quanto à integridade']},{titulo:'APLICAÇÕES',bullets:['Farmacêutico','Solventes orgânicos e sistemas co-solventes aquosos','Filtração de água de alta pureza','Alimentos e Bebidas','Microeletrônica','Petroquímica']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio Filtrante: Nylon 6.6','Suporte: PET','Núcleo/Gaiola: Polipropileno','End Cap: Polipropileno','Vedações: Silicone, EPDM, NBR, FKM, E-FKM']},{titulo:'PERFORMANCE',bullets:['Temperatura Máxima de Operação: 80°C (176°F)','Máximo Diferencial de Pressão: 4 bar (58 psi) @ 25°C (77°F); 2 bar (29 psi) @ 80°C (176°F)','Esterilização: 125°C, 30 min, 30 Ciclos','Poros disponíveis: 0,1 e 0,22 µm esterilizantes; 0,45; 0,65; 1,2; 3 e 5 µm']}]},
    {id:29,slug:'filtro-cartucho-pvdf-esterilizante-pva',nome:'Filtro Cartucho PVDF Esterilizante — PVA',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Cartucho em PVDF esterilizante série PVA para soluções agressivas.',tag:null,ph:'cartucho',img:'img/filtro-pvdf-esterilizante-pva.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos da série PVA são feitos de membrana hidrofílica de fluoreto de polivinilideno PVDF, o material tem bom desempenho de resistência ao calor e pode ser usado a longo prazo em 80 graus - 90 graus. PVDF tem o desempenho de baixa adsorção de proteínas e é particularmente adequado em filtração de soluções parenterais, biológicos, vacinas, meios de cultura e bebidas.'},{titulo:'CARACTERÍSTICAS',bullets:['Baixa adsorção e precipitação de proteínas','Fácil de molhar e testar integridade','Alta vazão e maior vida útil','100% testado quanto à integridade durante a fabricação']},{titulo:'APLICAÇÕES',bullets:['Filtração na indústria de alimentos e bebidas','Retenção de partículas e microrganismos','Purificação de proteínas','Clareamento de cultivo celular','Fracionamento de sangue','Parenterais','Oftálmicos']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio Filtrante: PVDF','Suporte: Polipropileno','Núclei/Gaiola: Polipropileno','Tampa: Inserto SS 316L','Material de Vedação: Silicone, EPDM, FKM']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima de trabalho: menor ou igual a 90°C','Condições de esterilização: 121°C, 30min - 30 ciclos','Diferencial máximo de pressão de trabalho: 0,42 MPa / 25°C','Área filtrante: 0,65 m² por 10"','Retenção Bacteriológica: 10E7/cm² Brevundimonas diminuta','Graus de Filtração: 0,1; 0,22; 0,45 e 0,65 µm']}]},
    // Cartuchos Absolutos PP e GF (Glass Fiber)
    {id:30,slug:'cartuchos-de-polipropileno-pswm',nome:'Cartuchos de Polipropileno — PSWM',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartuchos em polipropileno linha PSWM para filtração de partículas.',tag:null,ph:'cartucho',img:'img/cartuchos-polipropileno-pswm.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos de polipropileno - PSWM - são projetados especialmente com uma estrutura em espiral, garantindo uma filtração precisa nos processos CMP. Esses filtros interceptam eficazmente partículas grandes, permitindo que as partículas alvo passem através deles. A estrutura gradiente, com a filtração começando do exterior para o interior, aumenta a capacidade de retenção de sujeira e estende a vida útil do filtro garantindo eficiência na fabricação de semicondutores.'},{titulo:'CARACTERÍSTICAS',bullets:['Baixa extração: Todos os materiais de PP utilizam soldagem térmica sem adesivo. A matéria dissolvida é extremamente baixa, e é possível controlar a matéria dissolvida extraível de forma eficaz.','Estrutura gradiente: A estrutura gradiente, de fora para dentro, evita que a lama bloqueie a superfície da membrana rapidamente e faz pleno uso do espaço de retenção de sujeira. O design em espiral filtra com precisão a lama do CMP, intercepta partículas grandes e libera as partículas-alvo de forma eficaz.','Filtração eficaz: O design exclusivo em espiral filtra com precisão a lama do CMP, intercepta partículas grandes e libera as partículas-alvo de forma eficaz.']},{titulo:'APLICAÇÕES',bullets:['Semicondutores','Farmacêuticos','Pigmentos','Redução de SDI']},{titulo:'GRAUS DE RETENÇÃO DISPONÍVEIS',bullets:['0010 = 0.1 µm','0020 = 0.2 µm','0030 = 0.3 µm','0050 = 0.5 µm','0070 = 0.7 µm','0100 = 1 µm','0200 = 2 µm','0300 = 3 µm','0500 = 5 µm','0900 = 9 µm','1000 = 10 µm','2500 = 25 µm','3000 = 30 µm','5000 = 50 µm']}]},
    {id:31,slug:'filtro-absoluto-polipropileno-polypure-ab',nome:'Filtro Absoluto Polipropileno — POLYPURE AB',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Filtro absoluto plissado em polipropileno Polypure AB.',tag:null,ph:'cartucho',img:'img/filtro-absoluto-polypure-ab.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O Cartucho Plissado de PP Absoluto PolyPure-AB utiliza matérias-primas aprovadas pela FDA CFR 21. Esse cartucho tolera uma grande variedade de solventes químicos, sendo indicado para filtração de fluidos comuns ou corrosivos. Com porosidades absoluta de 0,2 µm a 30 µm e comprimentos de 10 pol a 40 pol, e diversos tipos de conexão que podem ser escolhidos de acordo com a necessidade do cliente. A alta área superficial dos filtros PolyPure-AB garante longa vida útil e baixas perda de carga iniciais. Todos os componentes de hardware do cartucho são fabricados em polipropileno de alta pureza, adequados para aplicações de processo crítico. Os cartuchos PolyPure-AB são produzidos e montados em ambiente de sala limpa, minimizando qualquer possibilidade de contaminação. A Série PolyPure-AB está disponível em uma ampla gama de configurações para se adaptar à maioria das carcaças de filtros comercialmente disponíveis.'},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno Nanométrico (Nano Polypropylene)','Núcleo interno de suporte: Polipropileno','Gaiola de proteção externa: Polipropileno','Tampas (End Caps): Polipropileno']},{titulo:'VEDAÇÕES',bullets:['Junta (Gasket): Silicone / Viton / NBR / EPDM / Viton encapsulado em Teflon / Silicone encapsulado em Teflon','Anéis de vedação (O-Rings): Silicone / Viton / NBR / EPDM','Método de construção: Soldado (sem uso de adesivos)']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima: 80°C com ≤ 2,4 bar (35 psid)','Pressão diferencial máxima: 5,5 bar (80 psi) a 21°C; 3,4 bar (50 psi) a 70°F (66°C)']},{titulo:'PERFORMANCE',bullets:['7,53 ft² por cartucho de 10 polegadas (equivalente a 0,7 m² por 250 mm de comprimento)','Autoclavável ou vapor fluente a 121°C por 30 minutos','Faixas de retenção: 0.2µm, 0.45µm, 1µm, 3µm, 5µm, 10µm, 25µm, 30µm','Eficiência: ≥99.98%']}]},
    {id:32,slug:'cartuchos-absolutos-em-polisulfona',nome:'Cartuchos Absolutos em Polisulfona',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartuchos absolutos em polisulfona para aplicações de alta pureza.',tag:null,ph:'cartucho',img:'img/cartuchos-absolutos-polisulfona.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos absolutos em polisulfona da série SAA são construídos com membranas hidrofílica altamente assimétrica e componente de polipropileno. A exclusiva membrana de PS proporciona alta vazão, longa vida útil e excelente eficiência na remoção de partículas. Todos os cartuchos são fabricados em ambiente controlado e limpo. Os cartuchos são idealmente indicados para a filtração de fluidos à base de água.'},{titulo:'CARACTERÍSTICAS',bullets:['A membrana de polisulfona altamente assimétrica oferece excelente capacidade de retenção de contaminantes e ótimas características de vazão.','A membrana hidrofílica de polisulfona elimina a necessidade de pré-umidificação e enxágue.','A estrutura assimétrica da membrana proporciona altas taxas de fluxo com menor pressão diferencial e maior vida útil.','Ampla compatibilidade com aplicações de limpeza em diversos processos, como revelação, gravação e remoção (stripping).']},{titulo:'APLICAÇÕES',bullets:['Filtração de água para uso geral','Sistemas de água deionizada','Clarificação de líquidos','Filtração de produtos químicos','Sistemas de água ultrapura']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante - Membrana de PS Hidrofílica Altamente Assimétrica','Elemento de suporte - Polipropileno','Gaiola/Núcleo/Tampa de extremidade - Polipropileno','Opções de material de vedação - EPDM, FKM, E-FKM, Silicone, NBR']},{titulo:'PERFORMANCE',bullets:['Temperatura Máxima de Operação: 80°C (176°F)','Diferencial de Pressão Máximo: 4 bar (58 psi) @ 20°C (68°F); 2 bar (29 psi) @ 80°C (176°F)']},{titulo:'CONFORMIDADE PARA CONTATO COM ALIMENTOS',paragrafo:'Os materiais de construção estão em conformidade com as regulamentações da FDA para uso em contato com alimentos e bebidas, conforme detalhado no Código de Regulamentos Federais dos EUA 21CFR.'}]},
    // Cartuchos High Flow
    {id:33,slug:'filtro-plissado-high-flow-phf',nome:'Filtro Plissado High Flow — PHF',cat:'highflow',catNome:'Cartuchos High Flow',desc:'Filtro plissado high flow PHF, equivalente AQUALINE® Pentair, para alta vazão.',tag:null,ph:'cartucho',img:'img/filtro-plissado-high-flow-phf.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos filtrantes plissados da série PHF são cartuchos com extremidade única, de 6,7 polegadas de diâmetro, com fluxo de fora para dentro. Oferecem uma solução de alto fluxo com trocas rápidas para sistemas avançados de filtração de água, incluindo aplicações industriais e comerciais de osmose reversa e filtração de água do mar. Representam uma alternativa econômica aos cartuchos com diâmetro externo de 2,5 polegadas em aplicações de alto fluxo. Compatível com sistemas que utilizam cartuchos AQUALINE® da Pentair®.'},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno','Suporte: Polipropileno','Tampas: Polipropileno','Opções de vedação: EPDM, NBR']},{titulo:'APLICAÇÕES',bullets:['Alimentos e bebidas','Pré-filtração em sistemas de osmose reversa','Água de processo','Efluentes industriais','Dessalinização de água do mar','Compatível com sistemas que utilizam cartuchos AQUALINE® da Pentair®','Indústrias de petróleo e química','Tratamento de água em usinas elétricas','Máquinas e equipamentos']},{titulo:'CARACTERÍSTICAS',bullets:['Disponível nas versões econômica, nominal e absoluta, com graus de retenção de partículas de 0,5 a 100 micra','Componentes 100% em polipropileno, oferecendo ampla compatibilidade química, adequados para diversos fluidos','Alta capacidade de retenção de sujeira e longa vida útil','Compatível com sistemas que utilizam cartuchos AQUALINE® da Pentair®']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima de operação: 82°C (179,6°F)','Pressão diferencial máxima: 2,4 bar (35 psi)']}]},
    {id:34,slug:'bag-plissado-high-flow-bc',nome:'Bag Plissado High Flow — BC',cat:'highflow',catNome:'Cartuchos High Flow',desc:'Bag plissado high flow BC, equivalente Marksman™, para grandes vazões.',tag:null,ph:'cartucho',img:'img/bag-plissado-high-flow-bc.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O filtro é projetado com meio filtrante de polipropileno. Como equivalente perfeito ao cartucho filtrante Marksman™ da Pall Corporation, pode ser instalado como um filtro de bolsa em uma carcaça para filtros de bolsa. É ideal para aplicações de filtração nas indústrias de tintas e revestimentos, bebidas e óleos derivados de petróleo.'},{titulo:'CARACTERÍSTICAS',bullets:['Meio filtrante 100% em polipropileno','Filtro de alto fluxo para trocas menos frequentes e menor custo de manutenção','Perfeitamente montado em carcaças para filtros de bolsa','Alta área de superfície e taxa de eficiência proporcionam maior capacidade de retenção de carga e maior vida útil','Processo de solda térmica e isento de qualquer adesivo']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante: Polipropileno/Fibra de vidro','Suporte: Fibra não tecida de PP','Gaiola: Polipropileno']},{titulo:'APLICAÇÕES',bullets:['Dessalinização de água do mar','Aminas','Petroquímicos','Solventes','Tintas e revestimentos','Usinas de energia','Bebidas']},{titulo:'PERFORMANCE',bullets:['Diferencial de pressão máximo: 0,38 MPa @ 25°C / 0,20 MPa @ 80°C','Temperatura máxima de trabalho: 80°C','Troca recomendada: ΔP de 0,25 MPa']}]},
    {id:35,slug:'filtro-plissado-high-flow-xhf',nome:'Filtro Plissado High Flow XHF',cat:'highflow',catNome:'Cartuchos High Flow',desc:'Filtro plissado high flow XHF para aplicações industriais de alta demanda.',tag:null,ph:'cartucho',img:'img/filtro-plissado-high-flow-xhf.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Filtros Plissados High Flow: Alta Vazão e Eficiência em Processos Industriais. Os filtros plissados tipo High Flow são elementos filtrantes desenvolvidos para aplicações industriais que exigem alta vazão, grande capacidade de retenção de contaminantes e eficiência na clarificação de líquidos. São ideais para processos contínuos em setores como alimentos e bebidas, química fina, tratamento de água, óleo e gás, e farmacêutico. Diferente dos cartuchos filtrantes convencionais, os filtros High Flow possuem maior diâmetro (geralmente 6 a 8 polegadas) e área filtrante expandida, o que permite o uso de menos elementos por carcaça, reduzindo o espaço físico, o custo operacional e o tempo de manutenção.'},{titulo:'CARACTERÍSTICAS',bullets:['Classificação de remoção de partículas disponível de 0,3 a 100 micra','Componentes 100% em PP e fibra de vidro oferecem ampla compatibilidade química, adequados para diversos fluidos','Múltiplas camadas plissadas com grande área de filtração reduzem a queda de pressão e aumentam a vida útil','O meio filtrante plissado de grande diâmetro reduz os custos operacionais e facilita a troca dos cartuchos','Alta capacidade de retenção de partículas, evitando a recontaminação do filtrado ao aprisionar partículas dentro do cartucho']},{titulo:'APLICAÇÕES',bullets:['Tratamento de água potável e ultrapura','Filtração final de bebidas e líquidos alimentícios','Pré-filtração em sistemas farmacêuticos','Filtração de processos em usinas de etanol, biodiesel e papel e celulose','Separação de partículas em solventes, óleos e resinas','Substituição de filtros 3M High Flow, Pall Ultipleat, Parker ParMax']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Diâmetro externo: 6" (152 mm)','Comprimentos disponíveis: 20", 40", 60", 80"','Material da mídia filtrante: Polipropileno plissado / fibra de vidro','Eficiência: até 99,98% @ beta 5000','Micragem: 0,3 a 100 µm','Compatibilidade química: ampla, para ácidos, bases e solventes','Temperatura máxima: até 80°C','Conectores: com ou sem O-ring (EPDM, Viton, Silicone)']},{titulo:'COMO ESCOLHER?',paragrafo:'A escolha do cartucho plissado High Flow ideal depende de fatores como: vazão requerida (m³/h); tipo de fluido (água, solvente, bebida, óleo); grau de filtração necessário (micragem); compatibilidade química com o material filtrante; dimensões da carcaça existente (substituições compatíveis). Se você busca alto desempenho, confiabilidade e economia, os filtros High Flow da Verter são a solução ideal.'}]},
    {id:36,slug:'filtro-cartucho-fibra-de-vidro-beta-1000-serie-bs',nome:'Filtro Cartucho Fibra de Vidro — Beta 1000 Série BS',cat:'highflow',catNome:'Cartuchos High Flow',desc:'Filtro em fibra de vidro Beta 1000 série BS para alta eficiência de retenção.',tag:null,ph:'cartucho',img:'img/filtro-fibra-vidro-beta-1000-bs.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O filtro cartucho em fibra de vidro - Beta 1000 - Série BS - oferece alta eficiência, sendo ideal para a pré-filtração de gases e respiros e líquidos em geral, além de poderem ser utilizados de forma eficaz em diversas aplicações industriais. O cartucho apresenta uma ampla área de superfície, proporcionando altas vazões e elevada capacidade de retenção de partículas, além de reduzir os custos operacionais com menos trocas de filtro.'},{titulo:'CARACTERÍSTICAS',bullets:['Baixa queda de pressão e altas vazões','Alta eficiência de filtração, até 99,9%','Excelente compatibilidade química','Alta capacidade de retenção de contaminantes e longa vida útil']},{titulo:'APLICAÇÕES',bullets:['Alimentos e Bebidas','Indústria Química e Óleo','Farmacêutica','Tratamento de Água de Processo','Pré-filtração de gases e respiros']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura Máxima de Operação: 80°C (176°F)','Pressão Diferencial Máxima: 4 bar (58 psi) @ 20°C (68°F); 2 bar (29 psi) @ 80°C (176°F)']},{titulo:'POROS DISPONÍVEIS',bullets:['0045 = 0,45 µm','0100 = 1 µm','0300 = 3 µm','0500 = 5 µm','1000 = 10 µm','2000 = 20 µm']}]},
    // Cartuchos Lenticulares Zeta
    {id:37,slug:'filtro-zeta-plus-8-polegadas-serie-bds',nome:'Filtro Zeta Plus 8 polegadas — Série BDS',cat:'zeta',catNome:'Cartuchos Lenticulares Zeta',desc:'Filtro Zeta Plus 8 polegadas série BDS para clarificação avançada.',tag:null,ph:'cartucho',img:'img/filtro-zeta-plus-8-bds.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros Zeta Plus 8 polegadas - série BDS – também conhecidos como módulos de filtro lenticular – são desenvolvidos para aplicações que exigem alta eficiência na remoção de partículas finas e materiais coloidais, esses módulos contam com configurações de 4 a 8 células filtrantes, oferecendo flexibilidade para diferentes volumes de processo. Ideais para operações em pequenos lotes, os filtros lenticulares VERTER são especialmente indicados para aplicações que requerem acabamento de brilho no produto final, como em processos de filtração de cosméticos, produtos farmacêuticos, bebidas e especialidades químicas.'},{titulo:'APLICAÇÕES',bullets:['Clarificação de bebidas','Farmoquímicos','Remoção de cor','Veterinários','Cosméticos']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante - Terra diatomácea, perlita, resina','Suportes - Polipropileno','Aneis de vedação - Silicone, viton, EPDM']},{titulo:'GRAUS DE RETENÇÃO DISPONÍVEIS',bullets:['C210 — 10 a 15 µm','C200 — 3 a 7 µm','C150 — 2 a 5 µm','C100 — 1 a 3 µm','C006 — 0,6 a 1 µm','C004 — 0,4 a 0,6 µm','C002 — 0,2 a 0,4 µm']}]},
    // Carcaças Sanitárias
    {id:38,slug:'carcaca-sanitaria-multi-cartuchos',nome:'Carcaça Sanitária MULTI-CARTUCHOS',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaça sanitária multi-cartuchos (multi-round) para processos de grande volume.',tag:null,ph:'carcaca',img:'img/carcaca-sanitaria-multi-cartuchos.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Carcaças de Filtro Sanitário Multi-Cartuchos para Líquidos são projetadas para atender aos requisitos de construção sanitária, com soldas lisas e sem frestas e conexões sanitárias do tipo TC. Fáceis de limpar e desmontar. Adequadas para aplicações com maior vazão em condições de baixa à média pressão. Esse design é amplamente utilizado nas indústrias farmacêutica, biotecnológica e de alimentos/bebidas. A superfície interna pode ser finamente polida até Ra≤0,3µm. As aplicações típicas incluem: Farmacêutica: filtração de injetáveis, LVPs, água para injetáveis, antibióticos e outros produtos biológicos. Alimentos e bebidas: filtração de cerveja, vinho, destilados, sucos, xaropes e água potável. Indústria petroquímica: filtração de água de campos petrolíferos, solventes orgânicos, ácidos e fluidos alcalinos.'},{titulo:'CARACTERÍSTICAS',bullets:['Polimento de grau ultrafino: Interno Ra≤0,3µm; Externo Ra≤0,4µm','Atende aos padrões GMP com soldagem lisa e sem frestas e design sanitário. Excelente capacidade de limpeza e drenagem de líquidos.','Porta de ventilação: conexão tipo Tri-clamp para maior praticidade.','O sistema de fechamento reforçado permite uma pressão máxima de operação de 1,0 MPa.','A placa frontal pode ser removível para limpeza completa da superfície.','Adequado para processos CIP e SIP.','Compatível com conexão de cartucho tipo 222 e 226.','Porta de drenagem opcional N6 (porta de amostragem).']},{titulo:'MODELOS DISPONÍVEIS',paragrafo:'São disponíveis modelos para até 48 cartuchos de 40 polegadas com conexões do tipo TC, SMS, Flange, podendo ser customizados quanto à classe de pressão e temperatura de operação. Para maiores detalhes entre em contato com nossa equipe de engenharia.'},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 1,0 MPa (150 psi)','Temperatura Máxima de Operação: 140°C (284°F)']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Opções do Corpo: 304 ou 316L','Válvula de Ventilação: 304 ou 316L','Parafuso de Olhal (Eyebolt): 304 ou 316L','Lâmina Estabilizadora: 304','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONEXÕES',bullets:['Conexões do Corpo: Parafuso de olhal com flange','Entrada e Saída (N1, N2): 1, 1.1/2, 2" TC, SMS ou Flange','Porta de Ventilação (N4): Válvula sanitária com bico espigão compatível com interface para teste de integridade','Porta de Drenagem (N5, N6): Válvula sanitária com bico espigão para tubulação com diâmetro interno de 8 mm','Porta para Manômetro (N3): 1.1/2" TC']}]},
    {id:39,slug:'carcaca-sanitaria-com-traco-eletrico-eh',nome:'Carcaça Sanitária com Traço Elétrico — EH',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaça sanitária EH com traço elétrico para aplicações com aquecimento controlado.',tag:null,ph:'carcaca',img:'img/carcaca-sanitaria-traco-eletrico-eh.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'A série EH de aquecedores para carcaças de filtros é composta por uma carcaça de filtro em aço inoxidável, jaqueta de isolamento térmico e gabinete de controle de temperatura, com a finalidade de evitar a formação de condensado dentro do filtro de respiro estéril, o que poderia comprometer a exaustão. Os aquecedores da série EH são projetados para atender aos requisitos das Boas Práticas de Fabricação (GMP) e são amplamente utilizados em produtos biológicos, indústrias farmacêuticas, processos de fermentação e outros setores hídricos, em sistemas de injeção, processos de filtração e purificação, bem como em tanques e recipientes com vent filters.'},{titulo:'CARACTERÍSTICAS',bullets:['Previne efetivamente a condensação','Tecnologia avançada de aquecimento elétrico','Segurança e confiabilidade no uso, com temperatura ajustável de 0 a 150°C e alarme interno de superaquecimento','Caixas de controle em aço inox posicionadas conforme a necessidade, sem limitação quanto à localização do respirador ou recipiente','Atende aos requisitos das Boas Práticas de Fabricação (GMP)','Isolamento interno em silicone — seguro ao toque']},{titulo:'PERFORMANCE',bullets:['Tensão Nominal: 220V','Tensão de Suportabilidade: 1.5kv','Resistência de Isolamento: >5MΩ','Material Isolante: Silicone','Faixa de Temperatura Ambiente: -60°C - 250°C','Faixa de Ajuste: 0 - 150°C','Modo de Exibição do Termostato: Temperatura de Aquecimento – LED Vermelho; Temperatura Programada – LED Verde']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Corpo: 304 ou 316L','Tri-Clamp: 304','Vedações: Silicone, EPDM, FKM']}]},
    {id:40,slug:'carcaca-sanitaria-para-gases',nome:'Carcaça Sanitária para Gases',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaça sanitária específica para filtração de gases de processo.',tag:null,ph:'carcaca',img:'img/carcaca-sanitaria-gases.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Carcaças de Filtro Sanitário para Gases são adequadas para a remoção de partículas de correntes gasosas. Quando utilizadas com cartuchos filtrantes de grau esterilizante apropriados, a combinação pode ser empregada na filtração estéril de gases de alta pureza. Farmacêutico: esterilização de gases e filtração de ar/gás na produção de produtos biológicos. Alimentos e bebidas: esterilização de gases e filtração de ar/gás na produção de alimentos, bebidas e produtos fermentados. Indústria química: filtração de gases industriais como gás de carvão, hidrogênio, nitrogênio, gás natural, entre outros. Laboratório: filtração de ar ambiental.'},{titulo:'CARACTERÍSTICAS',bullets:['Polimento ultraelevado: Interno Ra ≤ 0,3µm; Externo Ra ≤ 0,4µm','Aceita cartuchos modelo 226 com travas de segurança para garantir vedação segura e confiável.','A conexão do corpo via Tri-Clamp permite fácil manutenção e substituição dos cartuchos.','Compatível com conexões de cartucho 222 e 226, a carcaça é aplicada em processos de alta pureza, alta temperatura, ambientes assépticos, fermentação, entre outros.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Opções de Corpo: Aço Inoxidável 304 ou 316L','Conexão Tri-Clamp: 304 ou 316L','Conexão Flange: 304 ou 316L','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 1,0 MPa (150 psi)','Temperatura Máxima de Operação: 140°C (284°F)']},{titulo:'CONEXÕES',bullets:['Corpo: Tri-Clamp ou Flange','Entrada e Saída: 1 ou 1.1/2" TC ou Flange DN25/DN50','Porta para Manômetro: M14*1.1/2 rosca','Dreno: 1/4 FNPT']}]},
    {id:41,slug:'carcaca-sanitaria-para-vent-filter',nome:'Carcaça Sanitária para VENT FILTER',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaça sanitária dedicada a vent filters de tanques.',tag:null,ph:'carcaca',img:'img/carcaca-sanitaria-vent-filter.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Carcaças de Filtro Sanitário de Respiro estão em conformidade com os requisitos de design de vasos sanitários. São adequadas para filtração de esterilização de gases nas indústrias farmacêutica e alimentícia. O cotovelo superior (Modelo B) é projetado para impedir a entrada de partículas grandes e detritos na carcaça. Permite a filtração estéril do fluxo de gás ventilado na produção e armazenamento de: Produtos farmacêuticos e biotecnológicos; Produtos de processos de fermentação; Alimentos, bebidas e água potável.'},{titulo:'CARACTERÍSTICAS',bullets:['Polimento ultraelevado: Interno Ra≤0,3µm; Externo Ra≤0,4µm','Conforme às normas GMP.','Excelente capacidade de limpeza.','O design evita o acúmulo de líquidos.','O cotovelo superior impede a entrada de partículas e detritos externos na carcaça.','As carcaças de filtros de respiro estão disponíveis nos modelos de abertura única A e cotovelo superior B, compatíveis com conexões de cartucho 222 e 226.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Opções de Corpo: Aço Inoxidável 304 ou 316L','Conexão Tri-Clamp: 304','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 1,0 MPa (150 psi)','Temperatura Máxima de Operação: 140°C (284°F)']},{titulo:'CONEXÕES',bullets:['Conexão do Corpo: Tri-clamp','Entrada e Saída (N1, N2): Tri-clamp 1" (T25)']}]},
    {id:42,slug:'carcaca-sanitaria-para-filtro-cartucho-inline',nome:'Carcaça Sanitária para Filtro Cartucho INLINE',cat:'carcacas',catNome:'Carcaças Sanitárias',desc:'Carcaça sanitária inline para instalação direta em linhas de processo.',tag:null,ph:'carcaca',img:'img/carcaca-sanitaria-inline.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Carcaças de Filtro Sanitário em Linha são a escolha ideal quando a aplicação exige um design compacto e econômico. Adequadas para filtração de líquidos e gases. Utilizam um prático sistema de fechamento por abraçadeira e possuem portas de dreno/respiro. Ideal para filtração de partículas e retenção microbiológica em tubulações, filtração de gases ou vent filters entre outras aplicações nas indústrias de segmentos health care.'},{titulo:'CARACTERÍSTICAS',bullets:['Grau de polimento ultraelevado: Interno Ra ≤ 0,3 µm; Externo Ra ≤ 0,4 µm','Atende aos padrões GMP, com soldagem lisa e sem fendas e design sanitário. Excelente capacidade de limpeza e drenagem de líquidos.','Portas de Respiro/Dreno: A luva roscada é separada do bico escalonado, de modo que o tubo de conexão não gira durante o processo de vent ou dreno. Excelente capacidade de limpeza e drenagem de líquidos.','Compatível com processos Clean-in-Place (CIP) e Steam-in-Place (SIP).','Compatível com conexões de cartucho tipo 222 e 226.','Porta de dreno opcional tipo N6 (porta de amostragem).']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Opções de Corpo: Aço Inoxidável 304 ou 316L','Porta de Dreno / Respiro: 304, 316L','Conexão Tri-Clamp: 304','Lâmina Estabilizadora: 304','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONEXÕES',bullets:['Conexão do Corpo: Tri-clamp','Entrada e Saída (N1, N2): Tri-clamp 1" (T25)','Porta de Respiro (N3): Válvula sanitária com bico escalonado compatível com interface para teste de integridade','Porta de Dreno (N4): Válvula sanitária com bico de mangueira para tubo com diâmetro interno de 8 mm']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 1,0 MPa (150 psi)','Temperatura Máxima de Operação: 140°C (284°F)']}]},
    // Linha Laboratorial
    {id:43,slug:'filter-holder-em-inox',nome:'Filter Holder em Inox',cat:'lab',catNome:'Linha Laboratorial',desc:'Filter holder em aço inox para aplicações laboratoriais de filtração.',tag:null,ph:'capsula',img:'img/filter-holder-inox.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O Porta-Filtro de Membrana em Aço Inoxidável é construído com material de aço inoxidável, sendo uma unidade pronta para uso em pesquisas laboratoriais e validação de processos em pequena escala na indústria farmacêutica. Este filtro possui modos de conexão por rosca e de instalação rápida. As superfícies interna e externa têm acabamento eletropolido, em grau sanitário.'},{titulo:'APLICAÇÕES',bullets:['Pesquisa laboratorial','Validação de processos em pequena escala na indústria farmacêutica']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Corpo: Aço Inoxidável 316L, 304','Opções de Fechamento: Abraçadeira tipo C (C-clamp) / Parafuso (Bolt Closure)','Materiais de Vedação: Silicone, FKM, EPDM']},{titulo:'CONEXÕES',bullets:['Entrada/Saída: Tri-clamp de 1"','Porta: Diâmetro interno de 4mm, conecta-se com tubo de 8mm']},{titulo:'ACABAMENTO',bullets:['Tipo: Eletropolido','Qualidade do Polimento: Interno Ra ≤ 0,4µm; Externo Ra ≤ 0,8µm']},{titulo:'ÁREA DE FILTRAÇÃO',bullets:['17,3 cm² — 47 mm','28,3 cm² — 60 mm','63,6 cm² — 90 mm','158,3 cm² — 142 mm']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão de Projeto: 0,6 MPa (90 psi)','Temperatura Máxima de Operação: 150°C (302°F)']}]},
    {id:44,slug:'suporte-de-filtracao-47-mm',nome:'Suporte de Filtração — 47 mm',cat:'lab',catNome:'Linha Laboratorial',desc:'Suporte de filtração 47mm para membranas laboratoriais.',tag:'novo',ph:'capsula',img:'img/suporte-filtracao-47mm.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O suporte de filtração - 47 mm é construído em polisulfona e possui uma câmara superior e um frasco coletor. As câmaras superiores estão disponíveis com capacidades de 250 mL ou 500 mL, enquanto os frascos coletores podem ter volumes de 250 mL, 500 mL ou 1000 mL — todos graduados a cada 50 mL. São projetados para utilização com membranas de 47 mm em processos de filtração a vácuo ou por pressão. O material em PSF transparente oferece alta resistência, permitindo múltiplas esterilizações por autoclave. Apresenta ainda baixa adsorção de proteínas (low protein binding), baixos níveis de oligometais e reduzida lixiviação de compostos orgânicos, garantindo desempenho superior em aplicações laboratoriais exigentes.'},{titulo:'SUPORTE DE FILTRAÇÃO - 47 MM',bullets:['Receptor Graduado de Filtração','Câmara de entrada com capacidade para 250 mL ou 500 mL','Câmara coletora com volumes disponíveis de 250 mL, 500 mL ou 1000 mL','Totalmente graduado a cada 50 mL para leitura precisa','Autoclavável — suporta múltiplos ciclos de esterilização','Fabricado com materiais conformes à norma US FDA 21 CFR','Compatível com membranas de 47 mm para filtração a vácuo ou por pressão']},{titulo:'PERFORMANCE',bullets:['Construído em polisulfona - PSF','Conexões laterais para tubos de pressão e vácuo','Permite utilização de filtros seringa','Compatível para membranas de 47 mm']}]},
    // Filtros para Vapor
    {id:45,slug:'filtro-esterilizante-para-ar-e-co2-serie-sth',nome:'Filtro Esterilizante para Ar e CO₂ — Série STH',cat:'vapor',catNome:'Filtros para Vapor',desc:'Filtro esterilizante para ar e CO₂ série STH, para aplicações em processos farmacêuticos e bebidas.',tag:null,ph:'cartucho',img:'img/filtro-esterilizante-ar-co2-sth.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos de filtro hidrofóbico da série STH são fabricados com membrana de PTFE hidrofóbica e suportes de polipropileno, oferecendo máxima garantia de desempenho de filtração e compatibilidade química em condições severas de processo. A membrana de PTFE altamente porosa proporciona altas vazões e longa vida útil. Ideal para setores críticos como farmacêuticos, alimentos e bebidas e aplicações onde a filtração de gases exige máxima retenção de particulados e microrganismos.'},{titulo:'CARACTERÍSTICAS',bullets:['Componentes de PTFE e polipropileno garantem compatibilidade química extremamente ampla','Sem adição de ligantes ou adesivos, oferecendo compatibilidade com solventes e extraíveis extremamente baixos','Totalmente testáveis quanto à integridade, garantindo desempenho e eficácia operacional','Teste de integridade 100% realizado durante a fabricação, assegurando confiabilidade e consistência do produto']},{titulo:'APLICAÇÕES',bullets:['Alimentos e Bebidas: Ventilação estéril de tanques de retenção; Filtração estéril de CO₂; Controle microbiológico do ar de entrada para bioprocessamento de alimentos','Farmacêutico: Respiros; Filtração de gases comprimidos; Filtração de solventes','Gases de Processo: Gases a granel e no ponto de uso; Ar comprimido']},{titulo:'DIMENSÕES',bullets:['Diâmetro externo: 69 mm','Comprimentos disponíveis: 5", 10", 20", 30", 40"']},{titulo:'PERFORMANCE',bullets:['Temperatura máxima de operação: 80°C (176°F)','Pressão diferencial máxima de operação: 4 bar (58 psi) @ 20°C (68°F); 2 bar (29 psi) @ 120°C (248°F)','Esterilização SIP: 125°C (275°F), 30 minutos, 30 ciclos']},{titulo:'GRAUS DE RETENÇÃO DISPONÍVEIS',bullets:['0002 µm','0003 µm','0005 µm','0010 µm','0022 µm','0045 µm','0100 µm','0500 µm','1000 µm']}]},
    {id:46,slug:'filtro-sinterizado-em-titanio',nome:'Filtro Sinterizado em Titânio',cat:'vapor',catNome:'Filtros para Vapor',desc:'Filtro sinterizado em titânio para aplicações com vapor e altas temperaturas.',tag:null,ph:'cartucho',img:'img/filtro-sinterizado-titanio.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os cartuchos filtrantes Série SIN são compostos por pó de titânio de grau industrial de alta pureza, com todos os elementos sinterizados em altas temperaturas. Possuem resistência à corrosão química, oxidação e altas temperaturas, além de longa vida útil. Sendo um cartucho para líquidos de baixa viscosidade, apresenta excelente eficiência na separação sólido-líquido. É utilizado principalmente como filtro químico para remoção de substâncias que destroem a camada de ozônio e para remoção de dióxido de carbono em aplicações nos setores alimentício, farmacêutico e de tratamento de água, inclusive vapor puro.'},{titulo:'CARACTERÍSTICAS',bullets:['Construção em titânio de alta pureza','Resistência à corrosão, oxidação e altas temperaturas','Estrutura uniforme com distribuição de poros estreita e alta eficiência de filtração','Sem partículas soltas','Alta porosidade, baixa resistência à filtração e alta eficiência de filtração','Boa compatibilidade com tecidos humanos e sangue devido à sua natureza atóxica e não magnética']},{titulo:'APLICAÇÕES',bullets:['Filtração de vapor','Líquidos oxidantes','Líquidos corrosivos','Filtração de líquidos/gases em altas temperaturas e pressões','Líquidos viscosos','Líquidos de forte polaridade','Filtração de líquidos para descarburação']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Meio filtrante - Titânio ultra puro','Tampas terminais - Titânio','Tampa roscada - Titânio','Camadas de reforço - Titânio','Opções de material de vedação - Silicone, EPDM, Viton','Disponível em 222, 226 e rosca']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 280°C (536°F)','Máximo diferencial de pressão: 3 Bar (44 psi)']}]},
    // Filtros Cápsulas
    {id:47,slug:'filtros-capsulas-rtu-ready-to-use',nome:'Filtros Cápsulas — RTU — Ready to Use',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Filtros cápsulas ready to use, pré-esterilizados, para aplicações assépticas.',tag:null,ph:'capsula',img:'img/filtros-capsulas-rtu.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros cápsulas estéreis - RTU - Ready to Use da Verter são fornecidos prontos para uso imediato, sem necessidade de sanitização prévia. Fabricados com membrana de Polietersulfona (PES), oferecem alta retenção microbiana, excelente compatibilidade química e baixo nível de extraíveis. Disponíveis em diferentes configurações, incluindo conexões hose barb ou tri-clamp (TC), esses filtros são ideais para aplicações farmacêuticas, cosméticas, laboratoriais e de biotecnologia. Cada unidade passa por rigorosos testes de integridade e é entregue esterilizada e validada. Principais benefícios: Membrana PES com alta eficiência de filtração; Fornecidos esterilizados e prontos para uso; Opções de conexão: hose barb ou TC; Compatíveis com aplicações críticas; Suporte técnico especializado Verter. Entre em contato conosco para especificações detalhadas, validação ou orçamento técnico.'},{titulo:'CARACTERÍSTICAS',bullets:['Forte compatibilidade química','Alto fluxo, baixa ligação proteica','Cartucho comprovadamente grau estéril','Vida útil extremamente longa','Já estéril pronta para uso']},{titulo:'APLICAÇÕES',bullets:['Filtração esterilizante de água para injeção, soluções de limpeza, água purificada, água deionizada','Filtração de esterilização de LVP, APIs, tampões, colírios, desinfetantes etc.','Filtração de esterilização de vacinas, soros, produtos biológicos, líquidos antibióticos base água.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana do Filtro: Dupla camada de PES','Suporte/Drenagem: PP','Núcleo/Gaiola/Tampa: PP','Cápsula: PP']},{titulo:'PERFORMANCE',bullets:['Eficiência de Remoção (Removal Ratings): 0,1–0,20 µm; 0,20–0,40 µm; 0,45–1,0 µm']},{titulo:'DIMENSÕES',bullets:['Diâmetro interno do cartucho filtrante: C80/C150/C300: 56 mm; C050/C100/C200/C630: 68 mm','Diâmetro externo da cápsula: C80/C150/C300: 72 ± 2 mm; C050/C100/C200/C630: 108 ± 2 mm','Conexões: Hose Barb 1/4", 1/2", Tri-Clamp']}]},
    {id:48,slug:'capsulas-filtrantes-dl707',nome:'Cápsulas Filtrantes DL707',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Cápsulas filtrantes DL707 para aplicações farmacêuticas e de alta pureza.',tag:null,ph:'capsula',img:'img/capsulas-filtrantes-dl707.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros cápsula DL707 utilizam conexões hose barb trapezoidais para entrada e saída, e possuem porta de exaustão e de líquido em sua estrutura. Suas membranas internas podem variar conforme o processo específico de filtração biológica — PTFE, PES, PVDF, PP e outros materiais estão disponíveis. O produto oferece alta eficiência de filtração durante o uso, além de ser fácil de instalar e operar. Pode ser amplamente utilizado na indústria biofarmacêutica, como na filtração de meios de cultura, tampões, solventes orgânicos e outros líquidos.'},{titulo:'CARACTERÍSTICAS',bullets:['Ampla compatibilidade química','Tecnologia de soldagem por fusão a quente que melhora a resistência à pressão','Alta vazão e baixos níveis de extraíveis','Fácil de instalar e desmontar','Diversas membranas filtrantes disponíveis','100% testado quanto à integridade']},{titulo:'APLICAÇÕES',bullets:['Filtração estéril de meio de cultura','Filtração de tampões','Filtração de suspensão viral','Filtração de soluções aquosas ou salinas, etc.']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['CARCAÇA - PP','MEIO FILTRANTE - PP, PES, PTFE, PVDF, NYLON']},{titulo:'DIMENSÕES',bullets:['DIÂMETRO EXTERNO - 71 mm','ALTURA - 92.5 mm e 195 mm','ENTRADA / SAÍDA - 1/4"-3/8" HB']}]},
    {id:49,slug:'filtros-de-ventilacao-50-mm-ptfe',nome:'Filtros de Ventilação 50 mm — PTFE',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Filtros de ventilação 50mm em PTFE hidrofóbico para tanques e biorreatores.',tag:'novo',ph:'capsula',img:'img/filtros-ventilacao-50mm-ptfe.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os Filtros de Ventilação 50 mm - PTFE possuem excelente resistência à corrosão química, tanto orgânica quanto inorgânica, além de apresentar hidrofobicidade natural. Podem ser amplamente utilizados em processos de ventilação estéril, como em biotecnologia, indústrias farmacêuticas, laboratórios etc. São fáceis de usar e operar, e seu design leve (apenas 20g) torna a estrutura muito estável e confiável, evitando a curvatura da mangueira que possa comprometer a ventilação.'},{titulo:'CARACTERÍSTICAS',bullets:['Componentes em PTFE oferecem ampla compatibilidade química','Hidrofobicidade natural e forte resistência à corrosão química','Alta vazão e baixos níveis de extrativos','Estrutura leve, fácil de instalar e desmontar','Teste de integridade 100% realizado']},{titulo:'APLICAÇÕES',bullets:['Ventilação estéril de recipientes de cultura e incubadoras de CO₂','Ventilação estéril de biorreatores e tanques de armazenamento','Troca de ar durante a esterilização a vapor em autoclave','Remoção de partículas gasosas']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura Máxima de Operação: 3 Bar (44psi) @20°C (68°F)','Autoclave: 125°C, 30min, 60 cycles']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['HOUSING - POLIPROPILENO','MEMBRANA - PTFE HIDROFÓBICO']}]},
    {id:50,slug:'capsulas-filtrantes-bioaxenic',nome:'Cápsulas Filtrantes BIOAXENIC',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Cápsulas filtrantes linha BIOAXENIC para processos biofarmacêuticos.',tag:null,ph:'capsula',img:'img/capsulas-filtrantes-bioaxenic.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Os filtros em cápsula da série Bioaxenic são projetados para processos de filtração estéril e apresentam desempenho de esterilização confiável e estável, sendo muito adequados para validação de pequenos lotes e validações críticas em laboratório. São projetados com estrutura de válvula de ventilação externa, que permite a remoção rápida e eficiente de gás-líquido. Na versão com membrana interna hidrofílica de polietersulfona (PES) grau estéril apresenta alta vazão, elevada capacidade de retenção de contaminantes e excelente compatibilidade química, garantindo ampla aplicação, como remoção de biocarga e bactérias em meio de cultura, soluções intermediárias, tampões e outros processos upstream e downstream. Já a versão composta por membrana hidrofóbica de politetrafluoretileno (PTFE) apresenta excelente resistência à corrosão por produtos químicos orgânicos e inorgânicos, além de características hidrofóbicas naturais, tendo ampla gama de aplicações, como: filtração estéril de gases comprimidos, ar de ventilação, líquidos fortemente corrosivos e oxidantes, solventes orgânicos, entre outros.'},{titulo:'CARACTERÍSTICAS',bullets:['Confiável capacidade de retenção de bactérias','Alta vazão e grande área de filtração','Excelente compatibilidade química','Excelente capacidade para lidar com líquidos obstrutivos','Teste de integridade 100%']},{titulo:'APLICAÇÕES',paragrafo:'<strong>BIOAXENIC - PES:</strong> Filtração estéril de meio de cultura; Filtração de tampões; Filtração de produtos intermediários; Filtração pré-ultrafiltração; Filtração estéril de produtos finais. <strong>BIOAXENIC - PTFE:</strong> Filtração de gases comprimidos ou ar de ventilação; Filtração de solventes e desinfetantes; Filtração de líquidos fortemente corrosivos e oxidantes; Filtração de entrada e saída de biorreatores descartáveis; Filtração de entrada e saída de bolsas descartáveis de mistura e armazenamento.'},{titulo:'DIMENSÕES',bullets:['ALTURA / ÁREA FILTRAÇÃO: 2"(65mm) / 0.12m²; 4"(103mm) / 0.24m²; 5"(118mm) / 0.29m²; 10"(266mm) / 0.68m²','DIÂMETRO EXTERNO: 87 mm']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['DIFERENCIAL PRESSÃO MÁXIMO: 2.5 Bar (36psi) @ 20°C (68°F)','AUTOCLAVAÇÃO: 125°C - 30min - 5 ciclos']},{titulo:'QUALIDADE',bullets:['Atende à norma 21CFR210.3(b)(6) sobre liberação "sem fibras"','Teste de integridade 100%','Validação com Brevundimonas diminuta (ATCC 19146) a 10E7/cm² (0,22 µm)','Endotoxina: Conforme USP<85>, teor de endotoxina <0,25 EU/mL','Biocompatibilidade: Conforme USP<87> e USP<88>']}]},
    {id:51,slug:'capsulas-filtrantes-ptfe',nome:'Cápsulas Filtrantes PTFE',cat:'capsulas',catNome:'Filtros Cápsulas',desc:'Cápsulas filtrantes em PTFE para filtração de gases e solventes.',tag:null,ph:'capsula',img:'img/capsulas-filtrantes-ptfe.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'Cápsulas filtrantes PTFE com construção totalmente em polipropileno oferece excelente compatibilidade química e está disponível nos materiais PP, PES e PTFE. É utilizado para filtração de volumes pequenos a médios em processos de produção, laboratório e testes-piloto. Nenhum adesivo, aglutinante ou surfactante é utilizado no processo de fabricação dessas cápsulas. Elas são enxaguadas com água EDI para reduzir extraíveis. Todos os filtros cápsula em PES e PTFE são 100% testados quanto à integridade para garantir o desempenho da filtração.'},{titulo:'CARACTERÍSTICAS',bullets:['Alta Qualidade e Preço Econômico','Membrana Farmacêutica / Componentes em PP','100% Testado quanto à Integridade','Enxaguado com Água EDI','Compatível com USP Classe VI']},{titulo:'APLICAÇÕES',bullets:['Soluções tampão e meios de cultura','Vacinas','Antibióticos','SVP (Parenterais de Pequeno Volume)','Produtos biológicos','Processos de escalonamento','Pré-filtração','Vent filters']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['ESTRUTURA: POLIPROPILENO','MEIO FILTRANTE: PP / PES / PTFE','ANÉIS DE VEDAÇÃO: SILICONE']},{titulo:'ÁREA DE FILTRAÇÃO',bullets:['PES/PP: 0.173 m²','PTFE: 0.214 m²']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Pressão Máxima de Operação: 5,5 bar a 22°C','Pressão Diferencial Máxima no Sentido Direto: 5,0 bar a 22°C','Pressão Diferencial Máxima no Sentido Reverso: 5,0 bar a 22°C','Temperatura Máxima de Operação: 80°C']}]},
    {id:52,slug:'filtro-esterilizante-pes-steripure-b',nome:'Filtro Esterilizante PES — STERIPURE B',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Cartucho plissado com membrana assimétrica de PES para filtração esterilizante de líquidos.',tag:'novo',ph:'cartucho',img:'img/filtro-esterilizante-pes-steripure-b.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O SteriPure-B é um cartucho filtrante plissado com membrana assimétrica de polietersulfona (PES), desenvolvido para aplicações que exigem elevada vazão, alta capacidade de retenção de contaminantes e baixos níveis de extraíveis. A estrutura otimizada aproveita as características de alto fluxo e alta capacidade da membrana de PES, contribuindo para maior eficiência de processo e redução do custo global de filtração. A versão de 0,20 µm é a configuração destinada à filtração esterilizante de líquidos em processos farmacêuticos e biotecnológicos, incluindo água para injeção (WFI), soluções parenterais de grande volume (LVP), APIs, buffers, colírios, vacinas, soros e outros produtos biológicos.'},{titulo:'CONFORMIDADE REGULATÓRIA',bullets:['FDA 21 CFR 177','ISO 10993 — Partes 1 e 5','EN 285:2015','Regulation (EC) No 1935/2004','Sistema de gestão da qualidade ISO 9001','Fabricado, testado e embalado em sala limpa','100% dos cartuchos submetidos a teste de integridade antes da liberação','Guia de validação disponível para atendimento a requisitos regulatórios','Endotoxina bacteriana: ≤ 0,25 EU/mL','Extraíveis: ≤ 40 mg por cartucho de 10 polegadas']},{titulo:'CARACTERÍSTICAS',bullets:['Membrana assimétrica de polietersulfona (PES) de alto fluxo e elevada capacidade','Versão 0,20 µm destinada a filtração esterilizante de líquidos','Área de filtração ≥ 0,65 m² por cartucho de 10 polegadas','Selagem por processo térmico, sem adesivos e sem surfactantes','Compatibilidade química na faixa de pH 1 a 14, conforme o fabricante','Baixo nível de extraíveis mesmo em temperatura elevada','Diâmetro externo aproximado de 69,0 mm e interno de 33,0 mm']},{titulo:'APLICAÇÕES',bullets:['Filtração esterilizante de água para injeção (WFI), água purificada e deionizada','Filtração esterilizante de soluções parenterais, incluindo LVP','Filtração esterilizante de colírios e demais soluções oftálmicas','Meios de cultura, buffers e soluções de processo biotecnológico','Vacinas, soros e produtos biológicos','APIs e soluções aquosas de antibióticos','Soluções de limpeza e desinfetantes','Bebidas: vinho, cerveja, sucos e água purificada']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana filtrante: polietersulfona (PES)','Suportes: polipropileno (PP)','Gaiola e tampas: polipropileno (PP)','Núcleo interno: polipropileno (PP) ou aço inoxidável 316L, conforme configuração','Adaptador: polipropileno (PP)']},{titulo:'VEDAÇÕES',bullets:['Anéis de vedação e juntas: silicone, EPDM, NBR ou FKM, conforme configuração','Método de construção: selagem térmica, sem adesivos e sem surfactantes']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80 °C','Pressão diferencial máxima no sentido direto: 5,2 bar a 25 °C','Pressão diferencial máxima no sentido reverso: 2,1 bar a 25 °C','Compatível com autoclavagem e vapor em linha (SIP)','Esterilização: 124 °C por 30 min, até 30 ciclos; 134 °C por 20 min, até 30 ciclos','Para autoclavagem e esterilização, o fabricante recomenda adaptador com inserto em aço inoxidável para assegurar a vedação após o resfriamento']},{titulo:'POROS DISPONÍVEIS',bullets:['0,10 µm · 0,20 µm · 0,45 µm · 0,65 µm · 0,80 µm','Configuração 0,20 µm: filtração esterilizante de líquidos','Teste de integridade (0,20 µm): ponto de bolha ≥ 3,3 bar a 25 °C','Teste de integridade (0,20 µm): difusão ≤ 18 mL/min a 2,6 bar, cartucho de 10 polegadas','Molhamento com água pura e ar comprimido como gás de teste','Alegações de retenção microbiológica devem ser suportadas pelo guia de validação do fabricante']}]},
    {id:53,slug:'cartucho-plissado-fibra-de-vidro-bs-series',nome:'Cartucho Plissado em Fibra de Vidro — BS SERIES',cat:'pp',catNome:'Cartuchos Absolutos PP e GF (Glass Fiber)',desc:'Cartucho plissado em fibra de vidro para pré-filtração e clarificação de líquidos, gases e respiros.',tag:'novo',ph:'cartucho',img:'img/cartucho-fibra-vidro-bs-series.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'A linha BS Series é composta por cartuchos filtrantes plissados em fibra de vidro, desenvolvidos para pré-filtração e clarificação em líquidos, gases e respiros. A configuração plissada proporciona elevada área efetiva de filtração, permitindo altas vazões com baixa perda de carga, elevada capacidade de retenção de contaminantes e maior vida útil do elemento. É a escolha típica para proteger filtros finais e membranas a jusante, reduzindo a carga de partículas e prolongando a vida útil da etapa seguinte.'},{titulo:'CARACTERÍSTICAS',bullets:['Construção plissada em fibra de vidro','Baixa perda de carga e elevada vazão','Eficiência de filtração de até 99,9%, conforme informado pelo fabricante','Excelente compatibilidade química','Elevada capacidade de retenção de contaminantes e longa vida útil','Diâmetro externo aproximado de 69 mm','Comprimentos disponíveis: 5, 10, 20, 30 e 40 polegadas','Diversas terminações: DOE, 222 e 226, em versões Flat, Fin e com insertos']},{titulo:'APLICAÇÕES',bullets:['Indústria de alimentos e bebidas','Indústria química e de óleos','Pré-filtração e clarificação em aplicações farmacêuticas','Tratamento de água de processo','Pré-filtração de respiros, gases e linhas de ventilação','Proteção de filtros finais e membranas a jusante']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Mídia filtrante: fibra de vidro (GF)','Suporte: polipropileno (PP)','Núcleo, gaiola e tampas: polipropileno (PP)','Núcleo — opção: polipropileno (PP) ou aço inoxidável, conforme configuração']},{titulo:'VEDAÇÕES',bullets:['Anéis de vedação e juntas: silicone, EPDM, NBR, FKM ou E-FKM']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 80 °C','Pressão diferencial máxima: 4 bar a 20 °C','Pressão diferencial máxima: 2 bar a 80 °C']},{titulo:'GRAUS DE RETENÇÃO DISPONÍVEIS',bullets:['0,45 µm · 1 µm · 3 µm · 5 µm · 10 µm · 20 µm','A seleção do grau deve considerar o contaminante, a vazão, as propriedades do fluido e o objetivo da etapa de pré-filtração']},{titulo:'QUALIDADE',bullets:['Fabricado em ambiente de sala limpa','Produzido sob sistema de gestão da qualidade ISO 9001:2015','Os dados de desempenho do fabricante referem-se a ensaios em condições controladas de laboratório; recomenda-se qualificar o elemento nas condições reais do processo']}]},
    {id:54,slug:'filtro-esterilizante-pvdf-kynarpure-l',nome:'Filtro Esterilizante PVDF — KYNARPURE L',cat:'esteril',catNome:'Cartuchos Esterilizantes',desc:'Cartucho plissado absoluto com membrana hidrofílica de PVDF de alta porosidade e baixa ligação proteica.',tag:'novo',ph:'cartucho',img:'img/filtro-esterilizante-pvdf-kynarpure-l.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O KynarPure-L é um cartucho filtrante plissado absoluto construído com membrana hidrofílica de PVDF (polifluoreto de vinilideno) de alta porosidade. A configuração aproveita a elevada capacidade de fluxo da membrana, melhora a retenção de contaminantes e prolonga a vida útil do elemento filtrante. Segundo o fabricante, a linha é especialmente indicada para filtração de grandes volumes, combinando desempenho, eficiência de processo e menor custo operacional. A baixa ligação proteica torna o elemento adequado a etapas de processo biotecnológico e purificação de proteínas.'},{titulo:'CONFORMIDADE REGULATÓRIA',bullets:['ASTM D6394 SP0112','FDA 21 CFR 177.1655','ISO 10993 — Partes 1 e 5','EN 285:2006 + A2:2009','Regulation (EC) No 1935/2004','Endotoxina bacteriana: ≤ 0,25 EU/mL','Extraíveis: ≤ 20 mg por cartucho de 10 polegadas','Produção, testes e embalagem em sala limpa, sob sistema de gestão da qualidade ISO 9001','100% dos cartuchos submetidos a teste de integridade após a fabricação']},{titulo:'CARACTERÍSTICAS',bullets:['Membrana de PVDF hidrofílico de alta porosidade e baixa ligação proteica','Maior hidrofilicidade e estabilidade hidrofílica em relação a produtos similares, conforme o fabricante','Área de filtração ≥ 0,62 m² por cartucho de 10 polegadas','Elementos selados por união térmica, sem adesivos e sem surfactantes','Ampla compatibilidade química dos componentes em PVDF, polipropileno e silicone/EPDM','Diâmetro externo aproximado de 68,5 mm e interno de 33,0 mm']},{titulo:'APLICAÇÕES',bullets:['Filtração esterilizante de soluções parenterais, colírios, meios de cultura e vacinas, desde que a configuração seja validada para retenção microbiológica e integridade nas condições reais do processo','Vinhos, sucos de frutas, cervejas e água engarrafada','Filtração intermediária de buffers, meios de cultura celular e etapas downstream','Purificação de proteínas','Redução de carga e turbidez em processos sem requisitos assépticos rigorosos','Proteção de etapas subsequentes de filtração para bactérias e micoplasma','Aplicações com operação prolongada em meio ácido, conforme o fabricante']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana filtrante: PVDF (polifluoreto de vinilideno) hidrofílico','Suportes: polipropileno','Gaiola e tampas: polipropileno','Núcleo: polipropileno ou polisulfona, conforme configuração','Adaptador: polipropileno']},{titulo:'VEDAÇÕES',bullets:['Anéis de vedação: silicone ou EPDM','Método de construção: união térmica, sem adesivos e sem surfactantes']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação: 82 °C a 1,7 bar','Pressão diferencial máxima no sentido direto: 5,2 bar a 25 °C','Pressão diferencial máxima no sentido reverso: 2,1 bar a 25 °C','Pressão de substituição recomendada: 2,4 bar']},{titulo:'ESTERILIZAÇÃO',bullets:['Autoclave: 109 °C por 30 min, até 50 ciclos','Autoclave: 124 °C por 30 min, até 30 ciclos','Vapor em linha (SIP): 109 °C por 30 min, até 50 ciclos','Vapor em linha (SIP): 124 °C por 30 min, até 30 ciclos','Sanitização com água quente: 80 °C por 30 min, até 50 ciclos']},{titulo:'POROS DISPONÍVEIS',bullets:['0,22 µm · 0,45 µm · 0,65 µm · 1,0 µm','A porosidade deve ser definida conforme a retenção necessária e a etapa do processo']}]},
    {id:55,slug:'filtro-ptfe-fluorpure-sg',nome:'Filtro PTFE Hidrofóbico — FLUORPURE SG',cat:'ptfe',catNome:'Cartuchos PTFE',desc:'Cartucho plissado com membrana hidrofóbica de PTFE para gases, solventes e produtos químicos agressivos.',tag:'novo',ph:'cartucho',img:'img/filtro-ptfe-fluorpure-sg.png',secoes:[{titulo:'DESCRIÇÃO DO PRODUTO',paragrafo:'O FluorPure-SG é um cartucho filtrante plissado com membrana hidrofóbica de PTFE (politetrafluoretileno), desenvolvido para retenção microbiológica em correntes gasosas e para filtração de produtos químicos e solventes agressivos. A construção emprega componentes em polipropileno e união por processo térmico, sem uso de adesivos, o que contribui para alta compatibilidade química, confiabilidade e longa vida útil. A faixa de porosidades permite selecionar o cartucho conforme a criticidade da aplicação.'},{titulo:'CONFORMIDADE REGULATÓRIA',bullets:['ASTM D6394 SP0112','FDA 21 CFR 177.1555','ISO 10993 — Partes 1 e 5','EN 285:2006 + A2:2009','Regulation (EC) No 1935/2004','Endotoxina bacteriana: ≤ 0,25 EU/mL','Extraíveis: ≤ 15 mg por cartucho de 10 polegadas']},{titulo:'CARACTERÍSTICAS',bullets:['Membrana de PTFE naturalmente hidrofóbica e de elevada capacidade de retenção','Área efetiva de filtração ≥ 0,74 m² por cartucho de 10 polegadas','Elementos selados por união térmica, sem adesivos e sem surfactantes','Compatibilidade com ampla faixa de agentes químicos, gases e solventes orgânicos','Diâmetro externo aproximado de 68,5 mm e interno de 33,0 mm']},{titulo:'APLICAÇÕES',bullets:['Filtração esterilizante de gases nas indústrias farmacêutica e de alimentos','Filtração de ar estéril em salas limpas e equipamentos biofarmacêuticos','Filtração esterilizante de solventes fortemente corrosivos e solventes orgânicos','Clarificação em processos de eletrodeposição, combustíveis e indústria química','Processos que exijam elevada resistência química e estabilidade térmica']},{titulo:'MATERIAIS DE CONSTRUÇÃO',bullets:['Membrana filtrante: PTFE (politetrafluoretileno) hidrofóbico','Suportes: polipropileno','Gaiola e tampas: polipropileno','Núcleo: polipropileno ou polisulfona, conforme configuração','Adaptador: polipropileno']},{titulo:'VEDAÇÕES',bullets:['Anéis de vedação: silicone, EPDM, FPM/FKM, NBR ou opções encapsuladas em FEP, conforme configuração','Método de construção: união térmica, sem adesivos']},{titulo:'CONDIÇÕES DE OPERAÇÃO',bullets:['Temperatura máxima de operação informada: 82 °C a 1,9 bar','Pressão diferencial máxima no sentido direto: 5,0 bar a 25 °C','Pressão diferencial máxima no sentido reverso: 3,4 bar a 25 °C','Pressão de substituição recomendada: 2,4 bar']},{titulo:'ESTERILIZAÇÃO',bullets:['Adequado para autoclave e vapor em linha (SIP), nos limites indicados pelo fabricante','O fabricante informa ciclos a 126 °C e a 140 °C','Recomenda-se resfriar o cartucho até a temperatura de operação do sistema antes do uso','Para autoclavagem e esterilização, o fabricante recomenda adaptador Code 5 para assegurar a vedação após o resfriamento','Configuração, número de ciclos e tipo de adaptador devem ser confirmados conforme o código selecionado']},{titulo:'POROS DISPONÍVEIS',bullets:['0,05 µm · 0,10 µm · 0,22 µm · 0,45 µm','Cobre desde retenção extremamente fina até filtração esterilizante de gases']}]},
  ];

  const filtros = document.getElementById('filtros');
  if (filtros) categorias.forEach((cat,i)=>{
    const li = document.createElement('li');
    li.className = 'filtro-item' + (i===0?' active':'');
    li.dataset.cat = cat.id;
    li.innerHTML = `<span>${cat.nome}</span>`;
    li.onclick = ()=>filterProducts(cat.id);
    filtros.appendChild(li);
  });

  // ---------- PRODUTOS: FILTRO + PAGINAÇÃO ----------
  const PRODUCTS_PER_PAGE = 15;
  let currentCategory = 'all';
  let currentPage = 1;

  function getFilteredProducts(){
    return currentCategory === 'all'
      ? produtos
      : produtos.filter(p => p.cat === currentCategory);
  }

  function filterProducts(catId){
    currentCategory = catId;
    currentPage = 1;
    document.querySelectorAll('.filtro-item').forEach(el=>el.classList.toggle('active',el.dataset.cat===catId));
    const cat = categorias.find(c=>c.id===catId);
    document.getElementById('current-cat').textContent = cat.nome;
    renderAll();
  }

  function goToPage(page){
    currentPage = page;
    renderAll();
    // rolar para o topo do grid
    document.getElementById('prod-grid').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function renderAll(){
    const filtered = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
    if(currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const pageItems = filtered.slice(start, start + PRODUCTS_PER_PAGE);

    document.getElementById('count-shown').textContent = filtered.length;
    renderProducts(pageItems);
    renderPagination(totalPages);
  }

  function renderPagination(totalPages){
    const nav = document.getElementById('pagination');
    if(!nav) return;
    nav.innerHTML = '';
    if(totalPages <= 1){ return; }

    // Seta anterior
    const prev = document.createElement('button');
    prev.className = 'arrow';
    prev.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>';
    prev.disabled = currentPage === 1;
    prev.style.opacity = currentPage === 1 ? '0.4' : '1';
    prev.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';
    prev.onclick = ()=>{ if(currentPage>1) goToPage(currentPage-1); };
    nav.appendChild(prev);

    // Números
    for(let i=1; i<=totalPages; i++){
      const btn = document.createElement('button');
      btn.textContent = i;
      if(i === currentPage) btn.classList.add('active');
      btn.onclick = ()=>goToPage(i);
      nav.appendChild(btn);
    }

    // Seta próxima
    const next = document.createElement('button');
    next.className = 'arrow';
    next.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>';
    next.disabled = currentPage === totalPages;
    next.style.opacity = currentPage === totalPages ? '0.4' : '1';
    next.style.cursor = currentPage === totalPages ? 'not-allowed' : 'pointer';
    next.onclick = ()=>{ if(currentPage<totalPages) goToPage(currentPage+1); };
    nav.appendChild(next);
  }

  function askCardHTML(){
    return `
      <div class="prod-card ask" onclick="location.href='/contato'">
        <div class="ask-inner">
          <div>
            <div class="ask-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>
            </div>
            <div class="ask-eyebrow">Não encontrou aqui?</div>
            <h4>Solicite a solução ideal para seu processo</h4>
            <p>Nosso portfólio técnico é significativamente mais amplo. Fale com um especialista e receba a recomendação exata para sua aplicação.</p>
          </div>
          <span class="ask-cta">
            Falar com especialista
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>`;
  }

  function renderProducts(list){
    const grid = document.getElementById('prod-grid');
    grid.innerHTML = '';
    list.forEach(p=>{
      const card = document.createElement('div');
      card.className='prod-card';
      card.onclick = ()=>{ location.href = '/produto/' + p.slug; };
      const visual = p.img
        ? `<img src="${p.img}" alt="${p.nome}" class="prod-img" loading="lazy">`
        : `<div class="ph ${p.ph}"></div>`;
      card.innerHTML = `
        ${p.tag?`<span class="tag ${p.tag}">${p.tag}</span>`:''}
        <div class="img-wrap">${visual}</div>
        <div class="prod-info">
          <div class="prod-cat">${p.catNome}</div>
          <div class="prod-name">${p.nome}</div>
          <div class="prod-desc">${p.desc}</div>
          <div class="prod-footer">
            <a class="ver" href="/produto/${p.slug}" onclick="event.stopPropagation()">Ver detalhes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
    // Card "não encontrou?" aparece SEMPRE — em todas as categorias e páginas
    const askWrap = document.createElement('div');
    askWrap.innerHTML = askCardHTML();
    grid.appendChild(askWrap.firstElementChild);
  }

  function renderDestaques(){
    const grid = document.getElementById('destaque-grid');
    produtos.slice(0,7).forEach(p=>{
      const card = document.createElement('div');
      card.className='prod-card';
      card.onclick=()=>{ location.href = '/produto/' + p.slug; };
      const visual = p.img
        ? `<img src="${p.img}" alt="${p.nome}" class="prod-img" loading="lazy">`
        : `<div class="ph ${p.ph}"></div>`;
      card.innerHTML = `
        <div class="img-wrap">${visual}</div>
        <div class="prod-info">
          <div class="prod-cat">${p.catNome}</div>
          <div class="prod-name">${p.nome}</div>
          <div class="prod-footer">
            <a class="ver" href="/produto/${p.slug}" onclick="event.stopPropagation()">Ver detalhes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
    // Card "não encontrou?" no final dos destaques também
    const askWrap = document.createElement('div');
    askWrap.innerHTML = askCardHTML();
    grid.appendChild(askWrap.firstElementChild);
  }

  // Helper: renderiza uma seção (paragrafo OU bullets) como um acordeão.
  // Primeiro acordeão fica aberto por padrão; outros fechados.
  function _renderSecao(secao, idx){
    var aberto = idx === 0;
    var classeHead = aberto ? 'pd-spec-head open' : 'pd-spec-head';
    var styleBody = aberto ? '' : ' style="display:none"';
    var conteudo;
    if(secao.bullets && secao.bullets.length){
      conteudo = '<ul>' + secao.bullets.map(function(b){ return '<li>'+b+'</li>'; }).join('') + '</ul>';
    } else if(secao.paragrafo){
      conteudo = secao.paragrafo;
    } else {
      conteudo = '';
    }
    return '<div class="pd-spec-box">'
      + '<div class="' + classeHead + '" onclick="this.classList.toggle(\'open\');this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'">'
      + '<span>'+secao.titulo+'</span><span class="plus">+</span></div>'
      + '<div class="pd-spec-body"' + styleBody + '>'+conteudo+'</div>'
      + '</div>';
  }

  // Seções padrão (vazias) para produtos que ainda não têm dados próprios.
  // Aparece nos 31 produtos do lote 3 enquanto não chegam os prints.
  var SECOES_PADRAO = [
    {titulo:'DESCRIÇÃO DO PRODUTO', paragrafo:'<em style="color:#8a9bb0">Conteúdo técnico em atualização. Para informações específicas, fale com nosso time pelo botão abaixo.</em>'},
    {titulo:'APLICAÇÕES', paragrafo:'<em style="color:#8a9bb0">Conteúdo em atualização.</em>'},
    {titulo:'CARACTERÍSTICAS', paragrafo:'<em style="color:#8a9bb0">Conteúdo em atualização.</em>'},
    {titulo:'MATERIAIS DE CONSTRUÇÃO', paragrafo:'<em style="color:#8a9bb0">Conteúdo em atualização.</em>'}
  ];

  function showDetail(p){
    location.href = '/produto/' + p.slug;
  }

  function showPage(pageName){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-'+pageName).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(el=>el.classList.toggle('active',el.dataset.page===pageName));
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // ===== Mobile drawer (menu hambúrguer) =====
  function openMobileDrawer(){
    document.getElementById('mobile-drawer').classList.add('open');
    document.getElementById('mobile-drawer-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileDrawer(){
    document.getElementById('mobile-drawer').classList.remove('open');
    document.getElementById('mobile-drawer-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  // Fechar drawer com tecla ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMobileDrawer();
  });

  if (document.getElementById('prod-grid')) renderAll();
  if (document.getElementById('destaque-grid')) renderDestaques();
  if (document.getElementById('blog-cats')) renderBlogCats();
  if (document.getElementById('blog-grid')) renderBlogList();

  // ===== Handler de envio do formulário (Formspree + Turnstile) =====
  const contatoForm = document.getElementById('contato-form');

  // Callback chamado pelo Turnstile quando obtém o token com sucesso
  // Definida no escopo global (window) para o Turnstile conseguir chamar
  let envioSolicitado = false; // só envia quando o usuário clicar em Enviar

  window.onTurnstileSuccess = async function(token){
    if(!envioSolicitado) return; // ignora execuções automáticas do widget
    envioSolicitado = false;
    const btn = document.getElementById('contato-submit');
    const msg = document.getElementById('contato-msg');
    const label = btn.querySelector('.btn-label');
    const labelOriginal = label.dataset.original || 'Enviar mensagem';
    try {
      const formData = new FormData(contatoForm);

      // 1) Porteiro: valida Turnstile + filtro anti-spam no Worker
      const guard = await fetch('https://solitary-hill-77c0.verter.workers.dev', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if(!guard.ok) throw new Error('Bloqueado na verificação');
      const guardData = await guard.json();
      if(guardData.spam){
        // Spam detectado: finge sucesso e descarta (não envia pro Formspree)
        contatoForm.reset();
        const msgOk = document.getElementById('contato-msg');
        msgOk.style.display = 'block';
        msgOk.style.background = 'rgba(61,155,142,0.12)';
        msgOk.style.border = '1px solid rgba(61,155,142,0.4)';
        msgOk.style.color = 'var(--teal)';
        msgOk.style.padding = '14px 18px';
        msgOk.style.borderRadius = '10px';
        msgOk.style.fontSize = '0.95rem';
        msgOk.innerHTML = '<strong>Mensagem enviada com sucesso!</strong><br>Nossa equipe técnica entrará em contato em até 24h úteis.';
        label.textContent = labelOriginal;
        btn.disabled = false;
        if(window.turnstile) turnstile.reset(document.querySelector('.cf-turnstile'));
        return;
      }

      // 2) Aprovado: o navegador envia direto pro Formspree
      // (o token cf-turnstile-response vai junto — o Formspree valida ele com a Secret Key)
      const resp = await fetch(contatoForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if(resp.ok){
        contatoForm.reset();
        msg.style.display = 'block';
        msg.style.background = 'rgba(61,155,142,0.12)';
        msg.style.border = '1px solid rgba(61,155,142,0.4)';
        msg.style.color = 'var(--teal)';
        msg.style.padding = '14px 18px';
        msg.style.borderRadius = '10px';
        msg.style.fontSize = '0.95rem';
        msg.innerHTML = '<strong>Mensagem enviada com sucesso!</strong><br>Nossa equipe técnica entrará em contato em até 24h úteis.';
        trackConversion(CONV_LABEL_FORM);
        label.textContent = labelOriginal;
        btn.disabled = false;
        // Reseta o Turnstile pra permitir novo envio
        if(window.turnstile) turnstile.reset();
      } else {
        throw new Error('Erro no envio');
      }
    } catch(err){
      msg.style.display = 'block';
      msg.style.background = 'rgba(220,80,80,0.1)';
      msg.style.border = '1px solid rgba(220,80,80,0.4)';
      msg.style.color = '#c44';
      msg.style.padding = '14px 18px';
      msg.style.borderRadius = '10px';
      msg.style.fontSize = '0.95rem';
      msg.innerHTML = '<strong>Erro ao enviar.</strong><br>Por favor, fale conosco pelo WhatsApp (48) 98469-1375 ou e-mail verter@verterfiltration.com.br';
      label.textContent = labelOriginal;
      btn.disabled = false;
      if(window.turnstile) turnstile.reset();
    }
  };

  if(contatoForm){
    contatoForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('contato-submit');
      const msg = document.getElementById('contato-msg');
      const label = btn.querySelector('.btn-label');
      label.dataset.original = label.textContent;
      btn.disabled = true;
      label.textContent = 'Verificando...';
      msg.style.display = 'none';
      // Dispara o Turnstile — quando ele terminar, chama onTurnstileSuccess
      envioSolicitado = true;
      if(window.turnstile){
        turnstile.execute(document.querySelector('.cf-turnstile'));
      } else {
        // Fallback: se o Turnstile não carregou, tenta enviar direto (evita travar o form)
        console.warn('Turnstile não carregou, enviando sem verificação');
        window.onTurnstileSuccess('');
      }
    });
  }

  /* ---------- Deep links (#cat-, #p-, #post-) ---------- */
  (function(){
    function aplicaHash(){
      var h = location.hash || '';
      if(document.getElementById('page-produtos')){
        var mp = h.match(/^#p-(\d+)$/);
        if(mp){
          var alvo = produtos.find(function(x){ return String(x.id) === mp[1]; });
          if(alvo){ showDetail(alvo); return; }
        }
        var mc = h.match(/^#cat-([a-z0-9-]+)$/i);
        if(mc && categorias.some(function(c){ return c.id === mc[1]; })){
          filterProducts(mc[1]);
          showPage('produtos');
          return;
        }
      }
      if(document.getElementById('page-post')){
        var mb = h.match(/^#post-(.+)$/);
        if(mb){ openPost(decodeURIComponent(mb[1])); return; }
      }
    }
    window.addEventListener('hashchange', aplicaHash);
    aplicaHash();
  })();

/* ================================================================
   MOBILE — recolher o cabeçalho ao rolar para baixo
   Evita que o nav sticky fique por cima do carrossel e do conteúdo.
   Reaparece assim que o usuário rola para cima ou volta ao topo.
   ================================================================ */
(function(){
  var nav = document.querySelector('nav.main');
  if(!nav) return;
  var ultimo = window.pageYOffset || 0, limite = 140, pendente = false;

  function aplicar(){
    pendente = false;
    var y = window.pageYOffset || 0;
    if(window.innerWidth > 768 || document.body.classList.contains('drawer-aberto')){
      document.body.classList.remove('nav-recolhido');
      ultimo = y; return;
    }
    if(Math.abs(y - ultimo) < 6) return;
    if(y > limite && y > ultimo) document.body.classList.add('nav-recolhido');
    else document.body.classList.remove('nav-recolhido');
    ultimo = y;
  }
  function agendar(){ if(!pendente){ pendente = true; window.requestAnimationFrame(aplicar); } }

  window.addEventListener('scroll', agendar, {passive:true});
  window.addEventListener('resize', function(){ document.body.classList.remove('nav-recolhido'); ultimo = window.pageYOffset || 0; }, {passive:true});

  // ao abrir o menu lateral, o cabeçalho volta
  ['openMobileDrawer','closeMobileDrawer'].forEach(function(fn){
    var orig = window[fn];
    if(typeof orig !== 'function') return;
    window[fn] = function(){
      document.body.classList.toggle('drawer-aberto', fn === 'openMobileDrawer');
      document.body.classList.remove('nav-recolhido');
      return orig.apply(this, arguments);
    };
  });
})();
