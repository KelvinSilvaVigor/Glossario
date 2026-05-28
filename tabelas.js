console.log("JS funcionando");

fetch("data/tabelas.json")

  .then(response => response.json())

  .then(data => {

    console.log(data);

    const container =
      document.getElementById("tablesContainer");

    data.forEach(table => {

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
          ${table.descricao || "Sem descrição"}
        </p>

      `;

      container.appendChild(card);

    });

  })

  .catch(error => {

    console.error("ERRO:", error);

  });