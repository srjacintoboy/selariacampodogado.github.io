const catalogContainer = document.getElementById("catalog");
const API_URL = "https://script.google.com/macros/s/AKfycbzGHCH4LtN3OdvSmyWp-EUYgVvrlqcGqdNAJSHHgHt0cNwlXvPRpIqKZya44LSefVuJ/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    data.filter(p => p.Status === "ATIVO").forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p["Imagem URL"]}" alt="${p["Nome do Produto"]}">
        <h3>${p["Nome do Produto"]}</h3>
        <p>${p["Descrição"]}</p>
        <strong>R$ ${p["Preço (R$)"]}</strong>
        <a href="${p["Link WhatsApp"]}" target="_blank">WhatsApp</a>
        <a href="${p["Link Shopee"]}" target="_blank">Shopee</a>
      `;
      catalogContainer.appendChild(card);
    });
  })
  .catch(err => {
    catalogContainer.innerHTML = "<p>Erro ao carregar produtos.</p>";
    console.error(err);
  });
