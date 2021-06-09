let input = prompt("Hi welcome to To-Do list, Select a functionality.\n *Type 'new' to add a todo \n *Type 'list' to list all to-do(s) \n *Type 'delete' to remove specific Todo \n *Type 'quit' to Quit the App")
input = input.toLowerCase();

//DS to store todo
const todo = [];

while (input !== 'quit' && input !== 'q') {
    if (input === 'new') {
        const task = prompt("Enter the task.");
        todo.push(task);
        alert(`${task} added o the To-Do!`);
    }
    else if (input === 'list') {
        // alert(`****************** \n ${todo} \n******************`);
        console.log('**************');
        console.log('To-Do List....\nTask no.   Task');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i + 1}      ${todo[i]}`);
        }
        console.log('***************');
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter task number to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index - 1, 1);
            alert(`Ok, deleted ${deleted[0]}`);
        } else {
            alert('Unknown index');
        }
    }
    else {
        alert("Invalid Option");
    }
    input = prompt('What would u like to do next? \nPlease select among new, list, delete or quit.');
}

alert("You Quit bye!");

/* todo List
make new list delete quit
*/
