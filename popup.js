function atualizarBarra(id, valor) {
  anime({
    targets: id,
    width: valor + "%",
    easing: 'easeOutElastic(1, .5)',
    duration: 1500
  });
}

// Exemplo inicial
atualizarBarra("#vicio-bar", 50);
atualizarBarra("#stamina-bar", 100);
document.querySelector("#tickets").innerText = "Tickets: 54";
