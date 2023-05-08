// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

const strings1 = ['Hello', 'world', '123', 'JavaScript', 'CSS3']

const regex1 = /\d/

const result1 = strings1.filter(str => regex1.test(str))

console.log(result1)

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

const strings2 = ['Hello', 'world', '123', 'JavaScript', 'CSS3']

const regex2 = /\d/

const result2 = strings2.filter(str => !regex2.test(str))

console.log(result2)

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

const strings3 = ['Hello', 'world', '123', 'JavaScript', 'CSS3']

const regex3 = /[aeiou]/i

const result3 = strings3.filter(str => regex3.test(str))

console.log(result3)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

const strings4 = ['Hello', 'world', '123', 'JavaScript', 'CSS3']

const regex4 = /[^aeiou]/i

const result4 = strings4.filter(str => regex4.test(str))

console.log(result4)

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

const strings5 = ['Hello', 'world', '123', 'JavaScript', 'CSS3']

const regex5 = /[13]/

const result5 = strings5.filter(str => regex5.test(str))

console.log(result5)

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const text6 = 'The price is $12.99 and the discount is 25%'

const regex6 = /\d+(.\d+)?/g

const result6 = text6.match(regex6)

console.log(result6)

//Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

const text7 = "Це рядок тексту з різними знаками пунктуації, такими як крапки, коми, знаки оклику та питання.";

const punctuation = text7.match(/\p{P}/gu)

console.log(punctuation)

//Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

let text8 = "Це рядок тексту з різними розділовими знаками, такими як крапки, коми, дужки (та) і тире.";

let components = text8.match(/\W+/g)

console.log(components)

//Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

const text9 = "Сьогодні 08.05.2023. Завтра 09.05.2023."

const dateRegex9 = /\b\d{2}\.\d{2}\.\d{4}\b/g

const dates = text9.match(dateRegex9)

console.log(dates)

//Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

const text10 = "Це речення містить кілька двоцифрових чисел, таких як 23, 45 і 67."

const numberRegex10 = /\b\d{2}\b/g

const numbers = text10.match(numberRegex10)

console.log(numbers.length)

//Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.

const text = "Моє замовлення: 4142-3433-2323-3434 та 1111-2222-3333-4444"

const cardNumberRegex = /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g

const cardNumbers = text.match(cardNumberRegex)

console.log(cardNumbers)

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

const websiteAddress = "https://www.example.gov"
const pattern = /gov/;
const isGovernmentWebsite = pattern.test(websiteAddress)

if (isGovernmentWebsite) {
	console.log("Це урядовий сайт")
} else {
	console.log("Це не урядовий сайт")
}


// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення

let message = 'The year 2022 will be better than 2021, and in 2023 we will achieve even more!'

let regex13 = /\b(20[2-9][2-9])\b/g

let years = message.match(regex13)

console.log(years)

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починається на «+38»)

let phoneNumber = '+380961234567'

let isUkrainian = phoneNumber.startsWith('+38')

console.log(isUkrainian)

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.

let fullName = "Vasilie Orfort"

let hyphenatedName = fullName.replace(" ", "-")

console.log(hyphenatedName)

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»

let inputDate = '18.09.2023'

let dateParts = inputDate.split(".")

let day = dateParts[0]

let month = dateParts[1]

let year = dateParts[2]

let formattedDate = `${day}/${month}/${year}`

console.log(formattedDate)

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи є це день вихідним

// отримуємо введення користувача
let input = prompt("Введіть день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»)");

// створюємо регулярний вираз для днів тижня та чисел від 0 до 6
let regex = /^([0-6]|[smtwrf]|[sS][uU][nN]|[mM][oO][nN]|[tT][uU][eE]|[wW][eE][dD]|[tT][hH][uU]|[fF][rR][iI]|[sS][aA][tT])$/;

// перевіряємо, чи відповідає введене значення регулярному виразу
if (regex.test(input)) {
	// якщо введене значення відповідає регулярному виразу, то перевіряємо, чи є цей день вихідним
	if (input === "0" || input === "6" || input.toLowerCase() === "sun" || input.toLowerCase() === "sat") {
		console.log("Це вихідний день!");
	} else {
		console.log("Це не вихідний день.");
	}
} else {
	console.log("Ви ввели невірне значення!");
}
