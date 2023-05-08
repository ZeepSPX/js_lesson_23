// Задача 2. Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.----------------------------------------

function checkYogurt() {
	const productionDate = new Date(document.getElementById("production-date-input").value)
	const shelfLife = parseInt(document.getElementById("shelf-life-input").value)

	const expirationDate = new Date(productionDate.getTime() + shelfLife * 24 * 60 * 60 * 1000)

	const today = new Date()

	if (expirationDate >= today) {
		document.getElementById("result").innerHTML = "Цей йогурт ще придатний"
	} else {
		document.getElementById("result").innerHTML = "Сторк придатності вийшов, утілізуйте його будь-ласка"
	}
}