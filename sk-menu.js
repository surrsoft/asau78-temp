const variablesRule = document.querySelector('.sk-menu');

const elemBaseCount = cssVariableVal(variablesRule, '--sk-menu-count1');

const elemsAll = [
	{ id: '1', text: 'Contacts', link: '#at-contacts' },
	{ id: '2', text: 'About me', link: '#at-aboutme' },
	{ id: '3', text: 'Skills', link: '#at-skills' },
	{ id: '4', text: 'Work expirience', link: '#at-work' },
	{ id: '5', text: 'Education', link: '#at-edu' },
	{ id: '6', text: 'Code example', link: '#at-ce' },
	{ id: '7', text: 'Languages', link: '#at-lang' },
	{ id: '8', text: 'My location', link: '#at-location' },
]

let indexCurr = 0;

const btnL = document.querySelector('.sk-menu__btn_l');
const btnR = document.querySelector('.sk-menu__btn_r');
const menuBody = document.querySelector('.sk-menu__body');

btnL.addEventListener('click', btnLHandler)
btnR.addEventListener('click', btnRHandler)

refresh()

function refresh() {
	menuBody.innerHTML = ''
	elemsAll.forEach((el) => {
		const dv1 = document.createElement('div')
		dv1.classList.add('sk-menu__elem')
		dv1.innerHTML = `<a href="${el.link}">${el.text}</a>`
		menuBody.appendChild(dv1)
	})
}

function btnLHandler() {
	if (indexCurr > 0) {
		indexCurr--;
		btnFinalHandler(false)
	}
}

function btnRHandler() {
	if (indexCurr < elemsAll.length - elemBaseCount) {
		indexCurr++;
		btnFinalHandler(true)
	}
}

function btnFinalHandler(isRight) {
	const propNameOffset = '--sk-menu-offset';
	const propNameWidth = '--sk-menu-width1';
	const propNameGap = '--sk-menu-gap1';

	const nmW = numExtract(cssVariableVal(variablesRule, propNameWidth));
	const nmGap = numExtract(cssVariableVal(variablesRule, propNameGap));
	const sumNum = (nmW + nmGap) * indexCurr;
	const sumSt = sumNum + 'px';
	console.log('!!-!!-!! sumSt {220327210719}\n', sumSt) // del+

	const rr1 = ('-');
	const valResult = rr1 + sumSt;
	console.log('!!-!!-!! valResult {220327211711}\n', valResult) // del+

	cssVariableValSet(variablesRule, propNameOffset, valResult);
}

/**
 * Получение значения CSS-переменной (2) правила (1)
 * @param rule
 * @param propName {string}
 * @return {string}
 */
function cssVariableVal(rule, propName) {
	const rs = getComputedStyle(rule);
	return rs.getPropertyValue(propName);
}

/**
 * Задание значения (3) CSS-переменной (2) правила (1)
 * @param rule
 * @param propName {string}
 * @param val
 */
function cssVariableValSet(rule, propName, val) {
	rule.style.setProperty(propName, val);
}

/**
 * Получение числа из конструкции вида 'Xpx' где X - это число
 * @param val (1) -- например '10px'
 * @return {number} например 10
 */
function numExtract(val) {
	const st = val.replace('px', '')
	return Number(st);
}
