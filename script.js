const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    card.style.display =
      text.includes(value)
      ? "block"
      : "none";

  });

});

/* COPY BUTTON */

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {

  button.addEventListener("click", () => {

    const code =
      button
        .closest(".card")
        .querySelector("code")
        .innerText;

    navigator.clipboard.writeText(code);

    button.innerText = "✅ Copiado";

    setTimeout(() => {
      button.innerText = "📋 Copiar";
    }, 1500);

  });

});