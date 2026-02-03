document.addEventListener("DOMContentLoaded", () => {

  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  const listaProblemas = document.getElementById("listaProblemas");
  const listaSolucoes = document.getElementById("listaSolucoes");

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });
  }

  // ===== NAVEGAÇÃO =====
  window.nextStep = function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  };

  window.prevStep = function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  };

  // ===== TEMA =====
  window.toggleTema = function () {
    document.body.classList.toggle("dark");
  };

  // ===== ADICIONAR ITEM =====
  window.addCustom = function (tipo) {
    let input, lista;

    if (tipo === "problemas") {
      input = document.getElementById("novoProblema");
      lista = listaProblemas;
    } else {
      input = document.getElementById("novaSolucao");
      lista = listaSolucoes;
    }

    const texto = input.value.trim();
    if (!texto) return;

    const li = document.createElement("li");
    li.textContent = texto;

    const btn = document.createElement("small");
    btn.textContent = "✖";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    lista.appendChild(li);

    input.value = "";
  };

  window.addChecked = function () {
    alert("Função de seleção ainda não implementada 🙂");
  };

  window.validarStep2 = function () {
    nextStep();
  };

  // ===== RELATÓRIO =====
  window.gerarRelatorio = function () {
    const problemas = [...listaProblemas.children].map(li => li.firstChild.textContent);
    const solucoes = [...listaSolucoes.children].map(li => li.firstChild.textContent);

    let texto = "RELATÓRIO TÉCNICO\n\n";
    texto += "PROBLEMAS:\n";
    problemas.forEach(p => texto += "- " + p + "\n");

    texto += "\nSOLUÇÕES:\n";
    solucoes.forEach(s => texto += "- " + s + "\n");

    document.getElementById("resultado").textContent = texto;
  };

  window.copiar = function () {
    navigator.clipboard.writeText(
      document.getElementById("resultado").textContent
    );
    alert("Copiado!");
  };

  showStep(currentStep);
});
