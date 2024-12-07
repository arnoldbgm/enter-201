const montoInput = document.getElementById("monto")
const tipoValue = document.getElementById("tipo").value
const form = document.getElementById("transactionForm")
// Vamos a crear un array (Arreglo)
const data = []


form.addEventListener("submit", (e)=> {
   e.preventDefault()

   const montoValue = montoInput.value

   validadorMonto(montoValue)
   // data.push({
   //    tipo: tipoValue,
   //    monto: parseFloat(montoValue),
   //    fecha: new Date( Date.now())
   // })

   // console.log(data)   

})