
function BankAccount(){
	console.log("Start");
	var accountName = document.getElementById('accountName').value;
	var accountNumber = document.getElementById('accountNumber').value;
	var accountBalance = parseInt(document.getElementById('accountBalance').value);
	var transactionamount = parseInt(document.getElementById('amount').value);
	var method = document.getElementById('method').value;
	
	var BankTransactions = new TransactionManager(accountName, accountNumber, accountBalance, method);
	var ans=0;
	
	if(method == 'withdraw'){
		 ans = BankTransactions.withdraw(transactionamount);
		 console.log(ans);
	}
	if(method == 'deposit'){

		 ans = BankTransactions.deposite(transactionamount);
		 console.log(ans);
	}
	
	var para = document.getElementById('ans');
	var bal1 = document.createElement("p");
	bal1.innerHTML = "Balance " + ans;
	console.log(BankTransactions.accountBalance);
	para.appendChild(bal1);
}

function TransactionManager( accountName, accountNumber , accountBalance , method){
	console.log("In transaction manager");
	
	var method ="";
	this.accountName = accountName;
	this.accountNumber = accountNumber;
	this.accountBalance = accountBalance;
	this.method = method;
	this.withdraw = function withdraw(transactionamount){
		if(transactionamount > this.accountBalance ){
			alert("Withdraw amount is exceeding the account balance");
		}else{
			this.accountBalance = this.accountBalance - transactionamount;
		}

		console.log("In withdraw");
		console.log(this.accountBalance);
		return this.accountBalance;
	}
	this.deposite = function deposite(transactionamount){
		this.accountBalance += transactionamount;

		console.log("In deposite");
		console.log(this.accountBalance);
		return this.accountBalance;
	}
}