const currentData	= document.querySelector(".currentData");
const storeData		= document.querySelector(".storeData");
const numbers		= document.querySelectorAll(".number");
const operators		= document.querySelectorAll(".operator");
const clearAll		= document.querySelector("#clearAll");
const backspace		= document.querySelector("#backspace");
const equalBtn		= document.querySelector("#equalBtn");
const plusMinus		= document.querySelector("#plusMinus");


const operate = (currentValue) => {
	return eval(`(${currentValue})`);
}

//Check this
plusMinus.addEventListener("click", () => {
	let current = currentData.textContent;
  
	if (current.startsWith("-")) {
	  // If it's negative, remove the minus
	  currentData.textContent = current.slice(1);
	} else if (current !== "") {
	  // If it's positive and not empty, add a minus
	  currentData.textContent = "-" + current;
	}
  });

clearAll.addEventListener("click", () => {
	currentData.textContent = "";
	storeData.textContent = "";
});
backspace.addEventListener("click", () => {
	currentData.textContent = currentData.textContent.slice(0, -1);
});

numbers.forEach( number => {
	number.addEventListener("click", () => {
		const value = number.textContent;
		currentData.append(value);
	});
});

operators.forEach( operator => {
	operator.addEventListener("click", () => {
		const value = operator.textContent;
		currentData.append(value);
	});
});

equalBtn.addEventListener("click", () => {
	let value = currentData.textContent;
	const result = operate(value);
	storeData.textContent = currentData.textContent;
	currentData.textContent = result;
});