const widgetId = 723467

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=${widgetId}`)
    return promise.then((response) => response.data)
}

function createTask(title, text) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: widgetId,
        title: title,
        description: text
    })
    return promise.then((response) => response.data)
}

function updateTask(id, title, text) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: widgetId,
        taskId: id,
        title: title,
        text: text
    })
    return promise.then((response) => response.data)
}

function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=${widgetId}&taskId=${id}`)
    return promise.then((response) => response.data)
}