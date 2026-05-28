console.log("arquivo js carregou");

document.addEventListener("DOMContentLoaded", () => {

  const container =
    document.getElementById("tablesContainer");

  const card =
    document.createElement("section");

  card.className = "doc-card";

  card.innerHTML = `

    <div class="doc-header">

      <h2>TESTE</h2>

      <span class="doc-badge">
        FUNCIONOU
      </span>

    </div>

    <p class="doc-description">
      JavaScript renderizou corretamente.
    </p>

  `;

  container.appendChild(card);

});
