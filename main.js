//==markup area
var body = document.querySelector('body');
//create main area
var mainArea = document.createElement('div');
body.insertAdjacentElement('afterbegin', mainArea);
mainArea.style.backgroundColor = "#ddd";
mainArea.style.width = "400px";
mainArea.style.margin = "auto";
mainArea.style.paddingTop = "30px";
mainArea.style.paddingBottom = "10px";
mainArea.style.textAlign = "center";

//create elements
//score area
var scoreArea = document.createElement('span');
mainArea.insertAdjacentElement('afterbegin', scoreArea);
scoreArea.textContent = "0";//contet text
scoreArea.style.fontSize = "80px";
scoreArea.style.display = "block";
scoreArea.style.marginBottom = "50px";

//description 
var desc = document.createElement('p');
desc.textContent = "If you click the Click-Button 10 times under the 2 seconds, You are a winner otherwise you are a loser.";
mainArea.insertBefore(desc, scoreArea);
desc.style.padding = "0px 30px";
desc.style.marginBottom = "50px";
//button
function buttonArea(name, text) {
	var name = name;
	var text = text;
	var button = document.createElement('button');
	mainArea.appendChild(button);
	button.classList.add(name);
	button.setAttribute("name", name);
	button.textContent = text;//text;
	button.style.padding = "8px 20px";
	button.style.margin = "0px 10px";
	button.style.border = "none";
	button.style.borderRadius = "50px";
	button.style.backgroundColor = "green";
	button.style.fontSize = "16px";
	button.style.color = "white";
	button.style.cursor = "pointer";
	button.style.textTransform = "uppercase";
	button.onmouseover = function () { this.style.backgroundColor = "tomato" };
	button.onmouseout = function () { this.style.backgroundColor = "green" };

}
buttonArea('start-btn', 'start');
buttonArea('click-btn', 'click');
//owner
var owner = document.createElement("span");
owner.textContent = "Created by Nazmul Hasan";
mainArea.appendChild(owner);
owner.style.display = "block";
owner.style.marginTop = "50px";
owner.style.padding = "10px";
owner.style.borderTop = "1px solid #fff";

//==dynamic area
const winScore = 10;
let count = 0;

//start btn
const btnStart = document.querySelector('button[name=start-btn]');
btnStart.addEventListener('click', () => {
	start();
});

const start = () => {
	count = 0;
	scoreArea.textContent = count;
	btnClick.removeAttribute('disabled');
	startCounting();
}
const startCounting = () => {
	setTimeout(() => {
		if (isWin()) {
			scoreArea.textContent = 'You Won!';
		} else {
			scoreArea.textContent = 'You Lost!';
		}
		btnClick.setAttribute('disabled', true);
	}, 2000);
}
const isWin = () => {

	if (count < winScore) {
		return false;
	} else {
		return true;
	}
}

//click btn
const btnClick = document.querySelector('button[name=click-btn]');
btnClick.setAttribute('disabled', '');
btnClick.addEventListener('click', () => {
	count++;
	scoreArea.textContent = count;
});