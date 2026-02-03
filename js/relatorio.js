document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  const problemas = [];
  const solucoes = [];

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

  window.toggleTema = function () {
    document.body.classList.toggle("dark");
  };

  // ===== ADICIONAR ITEM DIGITADO =====
  window.addCustom = function (tipo) {
    if (tipo === "problemas") {
      const input = document.getElementById("novoProblema");
      if (!input.value.trim()) return;

      problemas.push(input.value.trim());
      input.value = "";
      renderLista("problemas");
    }

    if (tipo === "solucoes") {
      const input = document.getElementById("novaSolucao");
      if (!input.value.trim()) return;

      solucoes.push(input.value.trim());
      input.value = "";
      renderLista("solucoes");
    }
  };

  // ===== (placeholder) CHECKBOX =====
  window.addChecked = function () {
    alert("Funcionalidade de checkboxes ainda não implementada.");
  };

  // ===== RENDER LISTAS =====
  function renderLista(tipo) {
    const ul =
      tipo === "problemas"
        ? document.getElementById("listaProblemas")
        : document.getElementById("listaSolucoes");

    const dados = tipo === "problemas" ? problemas : solucoes;

    ul.innerHTML = "";
    dados.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${item}`;
      ul.appendChild(li);
    });
  }

  // ===== STEP 2 =====
  window.validarStep2 = function () {
    if (problemas.length === 0 || solucoes.length === 0) {
      alert("Adicione pelo menos um problema e uma solução.");
      return;
    }
    nextStep();
  };

  // ===== RELATÓRIO =====
  window.gerarRelatorio = function () {
    const texto = `
LOCAL: ${document.getElementById("local").value}
WOT: ${document.getElementById("wot").value}
RESPONSÁVEL: ${document.getElementById("responsavel").value}
FUNÇÃO: ${document.getElementById("funcao").value}

PROBLEMAS:
${problemas.map(p => "- " + p).join("\n")}

SOLUÇÕES:
${solucoes.map(s => "- " + s).join("\n")}

STATUS: ${document.getElementById("status").value}
    `;

    document.getElementById("resultado").textContent = texto.trim();
  };

  window.copiar = function () {
    navigator.clipboard.writeText(
      document.getElementById("resultado").textContent
    );
  };

  showStep(currentStep);
});
