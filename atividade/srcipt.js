let idades = [];
let totalIdades = 0;
let maiorIdade = null;

document.getElementById("adicionarBtn").addEventListener("click", adicionarIdade);

function adicionarIdade() {
  const idadeInput = document.getElementById("idadeInput");
  const idade = parseInt(idadeInput.value);

  if (!isNaN(idade)) {
    idades.push(idade);
    totalIdades += idade;

    if (maiorIdade === null || idade > maiorIdade) {
      maiorIdade = idade;
    }

    mostrarResultados();
  } else {
    alert("Por favor, digite uma idade válida.");
  }
}

function mostrarResultados() {
  document.getElementById("totalIdades").textContent = idades.length;
  document.getElementById("somaIdades").textContent = totalIdades;
  document.getElementById("maiorIdade").textContent = maiorIdade === null ? "-" : maiorIdade;
}
