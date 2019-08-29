function BankAccount(name, deposit){
  this.name = name;
  this.balance = deposit;
}

bankAccount.prototype.deposit = function(deposit){
  this.balance += deposit;
  return this.balance;
}

bankAccount.prototype.withdraw = function(withdrawal){
  this.balance -= withdrawal;
  return this.balance;
}



// UI stuff
var newBankAccount = new BankAccount (name, initialDeposit);

$(document).ready(function(){
  $("#newCustomer").submit(function(event){
    event.preventDefault();
    var name = $("#name").val()
    var initialDeposit = parseInt($("#initialDeposit").val());
    $("#custName").text(name);
    $("#balance").text(initialDeposit);
  });

  $("#existingCustomer").submit(function(event){
    event.preventDefault();
    var deposit = $("#deposit").val();
    var withdraw = $("#withdraw").val();
    $("#deposit").text(deposit);
    $("#withdraw").text(withdraw);

  });
});
