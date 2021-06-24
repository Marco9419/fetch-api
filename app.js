const btnUser = document.querySelector('.btn-user')
const list = document.querySelector('.lista')
const ver = document.querySelector(".ver")


// mostramos Gatos mediante api
function verGato() {

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        
        let img = document.querySelector('.img-cat')
        // let imag = data[0].url
        img.src = data[0].url
        
        img.appendChild(img)
        
        
        
    })
    
}

ver.addEventListener("click", () => {
    verGato()
})

// Mostrar lista de usuarios usando una api

function apiJson() {

    list.textContent = " "

   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {

        data.forEach(users => {

            let li = document.createElement('li')

            li.innerText = users.name

            list.appendChild(li)
            console.log(data)

        })

    }).catch(error => console.log(error));

}

    btnUser.addEventListener('click', () => {

        apiJson();

    })



