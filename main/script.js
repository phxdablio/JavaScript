let alunos = [];

function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  
  const media = (nota1 + nota2) / 2;
  
  const aluno = { nome, nota1, nota2, media };
  alunos.push(aluno);
  
  exibirResultado();
}

function exibirResultado() {
  const listaAlunos = document.getElementById("lista-alunos");
  const resultado = document.getElementById("resultado");
  
  let maiorMedia = 0;
  let somaMedias = 0;
  
  listaAlunos.innerHTML = "";
  
  alunos.forEach(aluno => {
    const alunoInfo = document.createElement("p");
    alunoInfo.textContent = `${aluno.nome}: Nota 1 - ${aluno.nota1}, Nota 2 - ${aluno.nota2}, Média - ${aluno.media}`;
    listaAlunos.appendChild(alunoInfo);
    
    somaMedias += aluno.media;
    if (aluno.media > maiorMedia) {
      maiorMedia = aluno.media;
    }
  });
  
  const mediaTurma = somaMedias / alunos.length;
  
  resultado.textContent = `Maior média da turma: ${maiorMedia.toFixed(2)}. Média da turma: ${mediaTurma.toFixed(2)}`;
}
