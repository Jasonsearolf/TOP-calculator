const displayData	= document.querySelector(".data");
const numbers		= document.querySelectorAll(".number");
const operators		= document.querySelectorAll(".operator");
const clearAll		= document.querySelector("#clearAll");
const backspace		= document.querySelector("#backspace");
const equalBtn		= document.querySelector("#equalBtn");
const plusMinus		= document.querySelector("#plusMinus");

let a	= null;
let b	= null;
let op	= null;


const operate = (a, b, op) => {
	return eval(`(${Number(a)})${op}(${Number(b)})`);
}

//Check this
plusMinus.addEventListener("click", () => {
	let current = displayData.textContent;
  
	if (current.startsWith("-")) {
	  // If it's negative, remove the minus
	  displayData.textContent = current.slice(1);
	} else if (current !== "") {
	  // If it's positive and not empty, add a minus
	  displayData.textContent = "-" + current;
	}
  });

clearAll.addEventListener("click", () => {
	displayData.textContent = "";
});
backspace.addEventListener("click", () => {
	displayData.textContent = displayData.textContent.slice(0, -1);
});

numbers.forEach( number => {
	number.addEventListener("click", () => {
		const value = number.textContent;
		displayData.append(value);
	});
});

operators.forEach( operator => {
	operator.addEventListener("click", () => {
		a = displayData.textContent;
		op = operator.textContent;
		displayData.textContent = "";
	});
});

equalBtn.addEventListener("click", () => {
	b = displayData.textContent;
	const result = operate(a, b, op);
	displayData.textContent = result;
});