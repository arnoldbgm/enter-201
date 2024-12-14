// Aqui creamos el constructor
function Transaction(type, amount) {
   this.id = Date.now()
   this.type = type
   this.amount = amount
   this.date = new Date()
}

Transaction.prototype.getFormattedDate = function () {
   return this.date.toLocaleDateString();
};

// Si es un ingreso +amount si no es -amount
Transaction.prototype.getSignedAmount = function () {
   return this.type === "ingreso" ? this.amount : -this.amount;
};

//  Si introduzco  15   ->    15.00
Transaction.prototype.formatAmount = function() {
   return this.amount.toFixed(2);
}