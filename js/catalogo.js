const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjcJ46K8Rz7jxkl386WvJCb7EldFf8CYdqtFFQnx-u3K_2c3PPXn6ORxng6Ch7uijdbkc-9jxExipc8GH33spzWzmwKPPAI6PfCxQ9DjoJ3it4YlSDpDB4LgoCCmlEw_g2But26X0hdBKlcwD1zB57h72Eld4TJFgVJ6-luRIEYdE37WH61uU3y8eLOwlkLa611l7lA8aiTLiPO1fmu7MS0llBAtOngOhT_hM4qRufJkIm2H8QEXvRvA0vf9riplqvKEKpaA_ijEA62c6RC4i9D_og34g&lib=MKwTSaAW_9Mw0X8fiDPHhQhPNnzvyV8Oh"; // depois eu te ajudo a colocar

fetch(API_URL)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("produtos");

    data
      .filter(p => p.Status === "ATIVO")
      .forEach(p => {

        const card = document.createElement("div");
        card.className = "produto";

        card.innerHTML = `
          <img src="${p['Imagem URL']}" alt="${p['Nome do Produto']}">

          <h3>${p['Nome do Produto']}</h3>

          <p>${p['Descrição']}</p>

          <strong>R$ ${p['Preço (R$)']}</strong>

          <div class="botoes">

            <a href="${p['Link WhatsApp']}" target="_blank">
              Comprar no WhatsApp
            </a>

            <a href="${p['Link Shopee']}" target="_blank">
              Shopee
            </a>

          </div>
        `;

        container.appendChild(card);
      });

  })
  .catch(err => {
    console.error("Erro:", err);
  });
