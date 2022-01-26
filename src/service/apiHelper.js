import urlPath from '../constants/kApiPaths';

const apiCall = {

    get: async function () {
        var data = [];
        await fetch(urlPath.fetchTodos)
            .then(res => res.json())
            .then((res) => {
                data = res;
            });
        return data;
    },

    save: async function (todos) {
        if (todos) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(todos)
                };
                await fetch(urlPath.saveTodosURL, requestOptions)
                    .then(data => console.log(''));
            } catch (ex) {
                console.log(ex);
            }
        }
    },
}

export default apiCall;
