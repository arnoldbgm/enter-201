// Variables globales
const form = document.getElementById("transaction-form");
const balanceAmount = document.getElementById("balance-amount");
const transactionsList = document.getElementById("transactions-list");
let transacciones = []; // Almacenará solo números (+ para ingresos, - para gastos)

// Actualizar balance
function actualizarBalance() {
	// Suma todos los números del array (positivos y negativos)
	const balance = transacciones.reduce(function (acc, monto) {
		return acc + monto;
	}, 0);

	balanceAmount.textContent = formatearMonto(balance);

	balanceAmount.classList.remove("low-balance", "regular-balance", "extra-balance");
	balanceAmount.classList.add(getBalanceClass(balance));
}

// Actualizar lista de transacciones
function actualizarListaTransacciones() {
	transactionsList.innerHTML = "";
	const fragmento = document.createDocumentFragment();

	transacciones.forEach(function (monto) {
		const li = document.createElement("li");
		li.className = "transaction-item";

		const esIngreso = monto > 0;
		const montoAbsoluto = Math.abs(monto);
		const tipoClase = esIngreso ? "text-success" : "text-danger";
		const tipoTexto = esIngreso ? "ingreso" : "gasto";

		li.innerHTML = `
   		<span>${tipoTexto}</span>
   		<span class="${tipoClase}">
   			${formatearMonto(montoAbsoluto)}
   		</span>
   	`;

		fragmento.appendChild(li);
	});

	transactionsList.appendChild(fragmento);
}

// Agregar nueva transacción
function agregarTransaccion(monto, tipo) {
	// Si es gasto, convertimos el monto a negativo
	const montoFinal = tipo === "gasto" ? -monto : monto;

	transacciones.push(montoFinal);

	actualizarBalance();
	actualizarListaTransacciones();
}

// Manejador del formulario
function manejarFormulario(event) {
	event.preventDefault();

	try {
		const formData = new FormData(event.target);
		const monto = validarMonto(formData.get("monto"));
		const tipo = validarTipo(formData.get("tipo"));

		agregarTransaccion(monto, tipo);
		event.target.reset();
	} catch (error) {
		alert(error.message);
	}
}

// Inicialización
function inicializar() {
	form.addEventListener("submit", manejarFormulario);
	actualizarBalance();
}

// Iniciar la aplicación
inicializar();