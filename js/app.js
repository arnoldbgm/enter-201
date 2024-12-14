// Arreglo para almacenar las transacciones
let transacciones = new Budget();

// Elementos del DOM
const form = document.getElementById("transactionForm");
const lista = document.getElementById("transactionList");
const balanceElement = document.getElementById("balance");
const montoInput = document.getElementById("monto");

// UI => User Interface => Interface de Usuario
// Actualiza el balance y la lista de transacciones
function actualizarUI() {
   // Calcular balance
   // const balance = transacciones.reduce((total, t) =>
   //    t.tipo === "ingreso" ? total + t.monto : total - t.monto, 0
   // );
   // balanceElement.textContent = `$${balance.toFixed(2)}`;

   // Limpiar la lista antes de renderizar
   lista.innerHTML = "";

   // Renderizar las transacciones
   transacciones.budget.forEach((transaccion) => {
      // Crear el elemento de la lista
      const li = document.createElement("li");
      li.className = `transaction-item ${transaccion.type}`;
      li.innerHTML = `
      <span>${transaccion.getFormattedDate()}</span>
      <span>${transaccion.type === "ingreso" ? "+" : "-"}$${transaccion.formatAmount()}</span>
   `;
      lista.appendChild(li);
   });
}

// Registrar una nueva transacción
form.addEventListener("submit", (e) => {
   e.preventDefault();

   const monto = parseFloat(montoInput.value);
   const tipo = document.getElementById("tipo").value;

   // Validar monto
   if (isNaN(monto) || monto <= 0) {
      alert("Por favor ingrese un monto válido mayor a 0");
      return;
   }
   // Agregar transacción y actualizar UI
   transacciones.add(new Transaction(tipo, monto));

   console.log(transacciones)

   actualizarUI();
   form.reset(); // Limpiar formulario
});

