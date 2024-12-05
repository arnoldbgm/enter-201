const montoInput = document.getElementById("monto")
const tipoValue = document.getElementById("tipo").value
const form = document.getElementById("transactionForm")
// Vamos a crear un array (Arreglo)
const data = []

function obtenerMonto(monto){
   // Me lanze un error si el monto es valido o no
   // EL monto no puede ser texto 
   // El monto no puede ser negativo
   // Alerta que me muestre el monto que tengo
   if (isNaN(monto) || monto<=0){
      alert("Este no es un numero valido")
      return false
   }
   alert("El monto ingresado es valido")
   return alert(monto)
}

form.addEventListener("submit", (e)=> {
   e.preventDefault()

   const montoValue = montoInput.value

   // obtenerMonto(montoValue)
   data.push({
      tipo: tipoValue,
      monto: parseFloat(montoValue),
      fecha: new Date( Date.now())
   })

   console.log(data)   

})