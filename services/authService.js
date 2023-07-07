
let userDetail = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    })
}).then(response => {
    return response.json();
}).then(data => {
    return data;
});

export { userDetail };
