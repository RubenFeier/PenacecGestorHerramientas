document.addEventListener("DOMContentLoaded", () => {
  const formInv = document.getElementById("formInventario");
  const tablaInv = document.getElementById("tablaInventario")?.querySelector("tbody");
  const tablaHist = document.getElementById("tablaHistorico")?.querySelector("tbody");

  // Guardar herramienta
  if (formInv) {
    formInv.addEventListener("submit", e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(formInv).entries());
      let herramientas = JSON.parse(localStorage.getItem("herramientas")) || [];
      herramientas.push(data);
      localStorage.setItem("herramientas", JSON.stringify(herramientas));
      mostrarHerramientas(tablaInv);
      formInv.reset();
    });
  }

  // Mostrar en tabla
  function mostrarHerramientas(tabla) {
    if (!tabla) return;
    tabla.innerHTML = "";
    const herramientas = JSON.parse(localStorage.getItem("herramientas")) || [];
    herramientas.forEach(h => {
      tabla.innerHTML += `
        <tr>
          <td>${h.fecha}</td><td>${h.codigo}</td><td>${h.herramienta}</td>
          <td>${h.entrega}</td><td>${h.recibe}</td><td>${h.lugar}</td><td>${h.observaciones}</td>
        </tr>`;
    });
  }

  // Mostrar según la tabla presente
  mostrarHerramientas(tablaInv);
  mostrarHerramientas(tablaHist);
});
