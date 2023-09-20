const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
	let sum = 0;
	const prices = document.querySelectorAll(".price");
	prices.forEach((element)=>{
		sum = sum+parseInt(element.innerHTML);
	})
	let table = document.getElementById("tableBody");
	let tr     = document.createElement('tr');
	let c1 = document.createElement("td");
	let c2 = document.createElement("td");
	c1.innerText = "Total Price";
	c2.innerText = sum;
	c2.setAttribute("id","ans")
	tr.appendChild(c1);
	tr.appendChild(c2);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

