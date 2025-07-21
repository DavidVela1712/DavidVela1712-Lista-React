export const getTodos = () => {
    return fetch('https://playground.4geeks.com/todo/users/DavidVela1712', {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            return responseJSON.todos
        })
        .catch(
            error => {
                console.log("Error:", error);
                return [];
            });
}

export const putTodos = (frase) => {
    return fetch('https://playground.4geeks.com/todo/todos/DavidVela1712', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "label": frase,
                "is_done": false
            })
    })
        .then(response => {
            return response.json();
        })
        .then(() => {
            return getTodos();
        })
        .catch(
            error => {
                console.log("Error:", error);
                return [];
            });
}

export const deleteTodos = async (id) => {
    try {
        const respuesta = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE'
        })
        await new Promise(res => setTimeout(res, 200))
        
        return await getTodos();
    } catch (error) {
        console.log(error)
    }
}