let input;
let i = 0;
const todos = [ 'dsadsadasdsa', 'asdsadasdasdsa' ];
while (input !== `quit` && input !== `q`) {
	input = prompt('what would you like to do?');

	if (input === `list`) {
		console.log('******************');
		for (num of todos) {
			console.log(`${i}:${num}`);
			i++;
		}
		console.log('******************');
		i = 0;
	} else if (input === 'new') {
		const newTodo = prompt('OK, what is new todo?');
		todos.push(newTodo);
		console.log(`${newTodo} added to list`);
	} else if (input === 'delete') {
		const index = parseInt(prompt('OK, enter an index to delete:'));
		if (!Number.isNaN(index) && typeof todos[index] !== 'undefined') {
			const deleted = todos.splice(index, 1);
			console.log(`OK, deleted ${deleted[0]}`);
		} else {
			console.log('Unkonwn index');
		}
	}
}
console.log('OK. QUIT THE APP!');
