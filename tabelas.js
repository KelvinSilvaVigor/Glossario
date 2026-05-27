fetch("data/tabelas.json")

  .then(response => response.json())

  .then(data => {

    const container =
      document.getElementById("tablesContainer");

    data.forEach(table => {

      const card = document.createElement("section");

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

        <div class="info-group">

          <div class="info-item">
            <strong>Relacionamentos</strong><br>
            ${table.relacionamentos.join(", ") || "Nenhum"}
          </div>

        </div>

      `;

      container.appendChild(card);

    });

  });