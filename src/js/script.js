// Seleção
const textValidacao = document.getElementById("validacao");
const formAddTarefa = document.getElementById("adicionar-tarefa");
const todoInput = document.getElementById("adicionar");
const buttonAddTarefa = document.getElementById("btn-adicionar");
const areaTarefas = document.getElementById("area-tarefas");
const textPlaceholder = document.getElementById("text-placeholder")
let contaTarefas = 0;

// Funções
const verificarNaoTemTarefas = () => {
  if(contaTarefas === 0) {
    textPlaceholder.classList.remove("hide");
  } else {
    textPlaceholder.classList.add("hide");
  }
}

const salvarTarefa = tarefaDigitada => {
  // tarefa
  const tarefa = document.createElement("div");
  tarefa.classList.add("tarefa");
  
  // buttons
  const btnConcluirTarefa = document.createElement("button");
  btnConcluirTarefa.innerHTML = '<i class="fas fa-check"></i>';
  btnConcluirTarefa.classList.add("btn-tarefa");
  btnConcluirTarefa.classList.add("concluir");
  
  const btnRemoverTarefa = document.createElement("button");
  btnRemoverTarefa.innerHTML = '<i class="fas fa-times"></i>';
  btnRemoverTarefa.classList.add("btn-tarefa");
  btnRemoverTarefa.classList.add("remover");
  
  // titulo
  const tituloTodo = document.createElement("h3");
  tituloTodo.innerText = tarefaDigitada;
  
  // estruturando
  tarefa.appendChild(tituloTodo);
  tarefa.appendChild(btnConcluirTarefa);
  tarefa.appendChild(btnRemoverTarefa);
  
  // adicionando tarefa
  areaTarefas.appendChild(tarefa);
  todoInput.value = "";
  todoInput.focus();
  
} 

const validaInput = tarefaDigitada => {
  if(tarefaDigitada.trim() === "") {
    return false;
  } else {
    return true;
  }
}

verificarNaoTemTarefas();

// Eventos 
formAddTarefa.addEventListener("submit", (e) => {
  e.preventDefault(); // impede que o forms seja enviado
  
  const tarefaDigitada = todoInput.value;
  
  let validacao = validaInput(tarefaDigitada);

  if(validacao) {
    salvarTarefa(tarefaDigitada);
    contaTarefas++;
    verificarNaoTemTarefas(contaTarefas);
    textValidacao.innerHTML = "";
  } else {
    textValidacao.innerText = "Digite a tarefa!";
  }
  
}); 

document.addEventListener("click", (e) => {
  botaoClicado = e.target;

  // acha a div tarefa
  const parentEl = botaoClicado.closest("div");

  if(botaoClicado.classList.contains("concluir")) {
    parentEl.classList.toggle("done")
    if(parentEl.classList.contains("done")) {
      botaoClicado.innerHTML = '<i class="fas fa-undo"></i>';
    } else {
      botaoClicado.innerHTML = '<i class="fas fa-check"></i>';
    }
  } else if (botaoClicado.classList.contains("remover")) {
    parentEl.remove();
    contaTarefas--;
    verificarNaoTemTarefas(contaTarefas);
  }
});





