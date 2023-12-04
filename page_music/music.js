const API1 = "http://localhost:3000/data1"
let formAdd = document.querySelector(".formAdd")
let container_data = document.querySelector(".container_data")
let dialogAdd = document.querySelector(".dialogAdd")
let btnAddNew = document.querySelector(".btnAddNew")
btnAddNew.onclick = () => {
    dialogAdd.showModal()
}


// get 
async function getData() {
    try {
        let { data } = await axios.get(API1)
        console.log(data);
        get(data)
    } catch (error) {
        console.error(error);
    }
}
getData()


// get
function get(newData) {
    newData.forEach(element => {

        let forId = document.createElement("h4")
        forId.innerHTML = element.id

        let forAvatar = document.createElement("img")
        forAvatar.src = element.avatar

        let forName = document.createElement("h1")
        forName.innerHTML = element.name

        let forCountry = document.createElement("h3")
        forCountry.innerHTML = element.country

        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.classList.add("btnDel")


        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.classList.add("btnDel")
        btnDel.onclick = () => {
            delUser(element.id)
        }

        let btnInfo = document.createElement("button")
        btnInfo.innerHTML = "more..."
        btnInfo.classList.add("btnDel")

        let card = document.createElement("div")

        card.append(forId, forAvatar, forName, forCountry, btnDel, btnEdit, btnInfo)
        card.classList.add("card")

        container_data.append(card)

    });
}


// delUser
async function delUser(id) {
    try {
        let { data } = await axios.delete(`${API1}/${id}`)
    } catch (error) {
        console.error(error);
    }
}



formAdd.onsubmit = (event) => {
    event.preventDefault()
    let newUser = {
        name: formAdd.name.value
    }
    addNewUser(newUser)
}

async function addNewUser(newUser) {
    try {
        let { data } = await axios.put(`${API1}/${newUser}`)
    } catch (error) {
        console.error(error);
    }
}


