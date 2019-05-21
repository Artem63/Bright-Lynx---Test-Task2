// Создание неизменяемого массива со всеми клетками классической шахматной доски 8х8
const Arr_сhessBoard = [
	"a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
	"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
	"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
	"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
	"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
	"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
	"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
	"h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8",
];

console.log(Arr_сhessBoard.length); // проверка количества элементов в массиве = 64

// создаем 2 объекта с целью конвертирования символьное значение координаты клетки к числовому значению
// в объекте arr_new присваиваем элементам числовое значение
const arr_new = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8};
// в объекте arr_new2 делаем обратную операцию
const arr_new2 = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h'};

// функция show: принимает вводимое значение из поля-input id = "position" и выводит возможные ходы коня
function show(position) { 
	// проверяем есть ли в массиве Arr_сhessBoard схожий элемент, если нет выдаем сообщение об ошибке	
	if (Arr_сhessBoard.indexOf(position) == -1) // метод indexOf сравнивает искомый элемент в массиве
		{
			alert('Ошибка. Исправьте ход');
			return;
		}
	
	// задаем координаты по осям x и y, метод Number() приводит к числовому значению
	let x = Number(arr_new[position[0]]);
	let y = Number(position[1]);

	// записываем в переменные все возможные ходы коня
	let coordX1 = arr_new2[1+x];
	let coordX2 = arr_new2[x-1];
	let coordX3 = arr_new2[2+x];
	let coordX4 = arr_new2[x-2];

	let coordY1 = 1+y;
	let coordY2 = y-1;
	let coordY3 = 2+y;
	let coordY4 = y-2;
	
	// Создаем пустой массив и добавляем в него все возможные варианты ходов коня
	let coord = [];				 

								 // -1 и -2 ход вниз или влево на 1 или 2 клетки && 1 и 2 ход вправо или вверх на 1 или 2 клетки
	coord.push(coordX1+coordY3); // 1 ход коня: по оси x на 1 и по оси y на +2 хода
	coord.push(coordX2+coordY3); // 2 ход коня: по оси x на -1 и по оси y на +2 хода
	coord.push(coordX3+coordY1); // 3 ход коня: по оси x на +2 и по оси y на +1 ход
	coord.push(coordX3+coordY2); // 4 ход коня: по оси x на +2 и по оси y на -1 ход
	coord.push(coordX1+coordY4); // 5 ход коня: по оси x на 1 и по оси y на -2 хода
	coord.push(coordX2+coordY4); // 6 ход коня: по оси x на -1 и по оси y на -2 хода
	coord.push(coordX4+coordY2); // 7 ход коня: по оси x на -2 и по оси y на -1 ход
	coord.push(coordX4+coordY1); // 8 ход коня: по оси x на -2 и по оси y на +1 хода

	// создаем пустой массив куда будет выводиться отфильтрованные ходы из массива coord 
	let arr_coord = [];
	
	// в массив записываем отфильтрованные ходы - для это используется метод filter() 
	arr_coord = coord.filter(function(currentValue){
		if (Arr_сhessBoard.indexOf(currentValue) != -1)
			return currentValue;
	})

	//выводим результат	
	alert(arr_coord);
};







