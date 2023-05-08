// Задача 3.Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і вставкою.---------------------------------------------------------------------------------


const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 800) + 1);

// Bubble sort
let start = performance.now();
for (let i = 0; i < arr.length - 1; i++) {
	for (let j = 0; j < arr.length - 1 - i; j++) {
		if (arr[j] > arr[j + 1]) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}
let end = performance.now();
console.log(`Bubble sort time: ${end - start} ms`);

// Insertion sort
start = performance.now();
for (let i = 1; i < arr.length; i++) {
	let current = arr[i];
	let j = i - 1;
	while (j >= 0 && arr[j] > current) {
		arr[j + 1] = arr[j];
		j--;
	}
	arr[j + 1] = current;
}
end = performance.now();
console.log(`Insertion sort time: ${end - start} ms`);






