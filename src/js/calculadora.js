let salvarAcao
let num1=0, num2=0
const MAX_NA_TELA = 10
let operador = ""

function LimparTudo(){
	document.getElementById("total").innerHTML = ""
	document.getElementById("conta").innerHTML = ""
	num1 = 0
	num2 = 0
	operador = ""
}

function LimparUm(){
	var str = document.getElementById("conta").innerHTML
	console.log(str)
	str = str.substring(0, str.length - 1)
	document.getElementById("conta").innerHTML = str
}

function Virgula(virgula){
	document.getElementById("conta").innerHTML += "."	
}

function AdicionarNumero(num){
	if(document.getElementById("conta").innerHTML.length < 10){
		document.getElementById("conta").innerHTML += num
	}
}

function FazerConta(operador){
	switch(operador){
		case'+': 
			num1 = parseFloat(num1) + parseFloat(num2)
			if(document.getElementById("total").innerHTML.length < MAX_NA_TELA){
				document.getElementById("total").innerHTML += `= ${num1}`
			} else {
				document.getElementById("total").innerHTML = ""
				document.getElementById("total").innerHTML += `= ${num1}`
			}
		break;
		case'-': 
			num1 = num1 - num2
			if(document.getElementById("total").innerHTML.length < MAX_NA_TELA){
				document.getElementById("total").innerHTML += `= ${num1}`
			} else {
				document.getElementById("total").innerHTML = ""
				document.getElementById("total").innerHTML += `= ${num1}`
			}
		break;
		case'/': 
			num1 = num1 / num2
			if(document.getElementById("total").innerHTML.length < MAX_NA_TELA){
				document.getElementById("total").innerHTML += `= ${num1}`
			} else {
				document.getElementById("total").innerHTML = ""
				document.getElementById("total").innerHTML += `= ${num1}`
			}
		break;
		case'*': 
			num1 = num1 * num2
			if(document.getElementById("total").innerHTML.length < MAX_NA_TELA){
				document.getElementById("total").innerHTML += `= ${num1}`
			} else {
				document.getElementById("total").innerHTML = ""
				document.getElementById("total").innerHTML += `= ${num1}`
			}
		break;
		case'%':
		num1 = parseFloat(num1)/100
		if(document.getElementById("total").innerHTML.length < MAX_NA_TELA){
				document.getElementById("total").innerHTML += `= ${num1}`
			} else {
				document.getElementById("total").innerHTML = ""
				document.getElementById("total").innerHTML += `= ${num1}`
			}
	}
}


function Operador(simbolo){
	if (document.getElementById("conta").innerHTML === "") {return}
	if(operador === ""){
		num1 = document.getElementById("conta").innerHTML
		console.log(num1)
		document.getElementById("total").innerHTML += num1
		document.getElementById("total").innerHTML += `${operador}`
		document.getElementById("conta").innerHTML = ""
		operador = simbolo
	} else {
		num2 = document.getElementById("conta").innerHTML
		console.log(num2)
		document.getElementById("total").innerHTML += `${operador}`
		document.getElementById("total").innerHTML += num2
		document.getElementById("conta").innerHTML = ""
		console.log(operador)
		if(simbolo === "="){
			FazerConta(operador)
			operador = " "
		} else if(operador === " "){
			operador = simbolo
			if (num2 === "") { 
				return 
			} else {
				operador = simbolo 
				FazerConta(operador)
			}
		} else {
			FazerConta(operador)
			operador = simbolo
		}
	}
}

function Porcentagem(simbolo){
	if(num1 === 0){
		num1 = document.getElementById("conta").innerHTML
		FazerConta(simbolo)	
	} else {
		FazerConta(simbolo)
	}
}