function Budget() {
   this.budget = [];
}

// Recibiremos Transacciones
Budget.prototype.add = function (elmtTrans) {
   this.budget.push(elmtTrans)
}

Budget.prototype.calculateTotal = function () {
   return this.budget.reduce((total, valorActual) => total + valorActual.getSignedAmount(), 0)
}
