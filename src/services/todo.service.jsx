export const todoService = {
    gettodoList
}

function gettodoList() {
    const requestOption = {
        method: 'GET',
        header: { 'Content-Type': 'application/json' }
    }

    return fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities', requestOption)
    .then(response => response.json())
    .then(response => {
        return response;
    });
}