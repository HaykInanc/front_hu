export const addAuthor = (data, resolve, reject = ()=>{}) =>{
    fetch('http://localhost:5000/api/author/add', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(data=>data.json(), reject)
    .then(data => {
        resolve(data);
        console.log(data);
    });
}

export const getAuthors = (resolve, reject = ()=>{}) =>{
    fetch('http://localhost:5000/api/author/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}