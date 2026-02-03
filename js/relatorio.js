document.addEventListener("DOMContentLoaded", () => {

  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });
  }

  // 🔴 EXPOR FUNÇÕES GLOBALMENTE
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

  window.addCustom = function () {};
  window.addChecked = function () {};
  window.validarStep2 = function () {
    nextStep();
  };

  window.gerarRelatorio = function () {
    document.getElementById("resultado").textContent =
      "Relatório gerado com sucesso.";
  };

  window.copiar = function () {
    navigator.clipboard.writeText(
      document.getElementById("resultado").textContent
    );
  };

  showStep(currentStep);
});
