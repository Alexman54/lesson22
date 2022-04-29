const lists = document.querySelectorAll('.list__item');
const button = document.querySelector('.button');



if (lists[3]){
	if (lists[3].classList.contains('list__item_hidden')){
		button.innerHTML = "Показать еще";
	} else {
		button.innerHTML = "Скрыть";
	};
	document.addEventListener('click', function (e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('button') && lists[3].classList.contains('list__item_hidden')){
			button.innerHTML = "Скрыть";
			lists.forEach(function (listItem){
				listItem.classList.remove('list__item_hidden');
			})
		} else 	if (targetElement.classList.contains('button') && !lists[3].classList.contains('list__item_hidden')){
			button.innerHTML = "Показать еще";
			lists.forEach(function (listItem, i){
				if (i > 2){
					listItem.classList.add('list__item_hidden');
				}
			})
		}
	})
} else {
	button.classList.add('hidden');
}