// Задача 1.  Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.-----------------------------


const today = new Date()

const returnDate = new Date(today.getTime() + (56 * 24 * 60 * 60 * 1000))

const formattedDate = `${returnDate.getDate()}.${returnDate.getMonth() + 1}.${returnDate.getFullYear()}`
console.log(`Дата повернення: ${formattedDate}`)










