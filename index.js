const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com",
    }),
};

function renderData(object) {
    let text = document.createElement('h4')
    text.className = "human"
    text.innerHTML = `
    <h4>${object.id}</h4>
    `
    document.querySelector('body').appendChild(text)
}

function renderError(object){
    let errorMSG = document.createElement('h4')
    errorMSG.className = "errorMSG"
    errorMSG.innerHTML = `
    <h4>${object.message}</h4>
    `
    document.querySelector('body').appendChild(errorMSG)
}

function submitData() {
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (thing) {
        renderData(thing)
    })
    .catch(function (error) {
        alert(error.message)
        console.log(`${error.message}`)
        renderError(error)
    })
}
