const tabelas = [

  {
    nome: "DimCalendario",
    tipo: "Dimensão",
    descricao: "Tabela calendário criada em Linguagem M"
  },

  {
    nome: "DimClientes",
    tipo: "Dimensão",
    descricao: "Base PFT 2026ap"
  },

  {
    nome: "DimTransportador",
    tipo: "Dimensão",
    descricao: "Base PFT 2026ap"
  },

  {
    nome: "DimVendedor",
    tipo: "Dimensão",
    descricao: "Base PFT 2026ap"
  },

  {
    nome: "Regional_Logistica",
    tipo: "Dimensão",
    descricao: "Tabela logística regional"
  },

  {
    nome: "PEX 1031",
    tipo: "Fato",
    descricao: "Retorno por SKU"
  },

  {
    nome: "PFT 1302",
    tipo: "Fato",
    descricao: "Faturamento"
  }

];

const container =
  document.getElementById("tablesContainer");

tabelas.forEach(table => {

  const card =
    document.createElement("section");

  card.className = "doc-card";

  card.innerHTML = `

    <div class="doc-header">

      <h2>${table.nome}</h2>

      <span class="doc-badge">
        ${table.tipo}
      </span>

    </div>

    <p class="doc-description">
      ${table.descricao}
    </p>

  `;

  container.appendChild(card);

});