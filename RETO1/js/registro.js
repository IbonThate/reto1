const organizadorBtn = document.getElementById("organizador-btn");
  const casualBtn = document.getElementById("casual-btn");
  const organizadorForm = document.getElementById("organizador-form");
  const casualForm = document.getElementById("casual-form");
  const tipoEmpresa = document.getElementById("tipo-empresa");
  const cantidadContainer = document.getElementById("cantidad-container");

  organizadorBtn.addEventListener("click", () => {
    organizadorBtn.classList.add("active");
    casualBtn.classList.remove("active");
    organizadorForm.classList.add("active");
    casualForm.classList.remove("active");
  });

  casualBtn.addEventListener("click", () => {
    casualBtn.classList.add("active");
    organizadorBtn.classList.remove("active");
    casualForm.classList.add("active");
    organizadorForm.classList.remove("active");
  });