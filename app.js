// Exibe mensagem de boas-vindas ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    console.log("Taste of Travel carregado com sucesso!");
    alert("🍜 Bem-vindo(a) ao Taste of Travel! Prepare-se para uma aventura de sabores!");
});

// Lista de dicas culinárias aleatórias
const dicas = [
    "Use ingredientes frescos para realçar os sabores autênticos.",
    "Adicione as ervas no final do cozimento para preservar o aroma.",
    "Equilibre o sabor: um bom prato tailandês combina doce, salgado, ácido e picante.",
    "Use caldo caseiro em vez de água para dar mais profundidade à sopa.",
    "Se preferir menos picante, retire as sementes das pimentas antes de usá-las."
];

// Referências ao botão e ao parágrafo
const btnDica = document.getElementById("btnDica");
const dicaTexto = document.getElementById("dicaTexto");

// Evento de clique no botão
btnDica.addEventListener("click", () => {
    // Escolhe uma dica aleatória
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    dicaTexto.textContent = "💡 " + dicaAleatoria;
});

// Efeito de destaque suave nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
});
