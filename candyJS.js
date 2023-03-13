let submitBtn = document.getElementById("Submit")

submitBtn.onclick = (e) => {
    e.preventDefault()
    console.log("CLICKEED BVUTTON")
    Add_Data_To_SERVER()
}
function get_Data_from_Fom() {
    Candydata = {
        candy: document.forms["myform"]["candy"].value,
        description: document.forms["myform"]["description"].value,
        price: document.forms["myform"]["price"].value,
        quantity: document.forms["myform"]["quantity"].value
    }
    return (Candydata)
}

function Add_Data_To_SERVER() {
    let Candydata = get_Data_from_Fom()
    console.log(Candydata)
    axios.post("https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/CandyData", Candydata)
        .then((response) => {
            Show_On_Screen(response.data)
        })
        .catch(err => {
            document.body.innerHTML += "<h6>SOMETHING WENT WRONG</h6>"
        })
}

// function Add_Data_To_LS() {
//     let data = get_Data_from_Fom()
//     localStorage.setItem(data.candy, JSON.stringify(data))
// }

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata")
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                Show_On_Screen(res.data[i])
            }

        })
})


function Show_On_Screen(data) {
    let parentNode = document.getElementById("info")
    parentNode.innerHTML += `<li id=${data._id}> ${data.candy} - ${data.description} - ${data.price}-${data.quantity}
    <button type="button" class="btn btn-primary" onclick="buy1('${data._id}','${data.candy}','${data.description}','${data.price}','${data.quantity}')">BUY 1</button>
    <button type="button" class="btn btn-primary" onclick="buy2('${data._id}','${data.candy}','${data.description}','${data.price}','${data.quantity}')">BUY 2</button>
    <button type="button" class="btn btn-primary" onclick="buy3('${data._id}','${data.candy}','${data.description}','${data.price}','${data.quantity}')">BUY 3</button>
    </li>`
}

function buy1(id, newcandy, newdescription, newprice, newquantity) {
    let newQuanty = newquantity - 1

    axios.put(`https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata/${id}`, {
        candy: newcandy,
        description: newdescription,
        price: newprice,
        quantity: newQuanty
    })
        .catch(err => {
            console.log(err)
        })

    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    Show_On_Screen(res.data[i])
                }

            })
    })

}
function buy2(id, newcandy, newdescription, newprice, newquantity) {
    let newQuanty = newquantity - 2

    axios.put(`https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata/${id}`, {
        candy: newcandy,
        description: newdescription,
        price: newprice,
        quantity: newQuanty
    })
        .catch(err => {
            console.log(err)
        })
    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    Show_On_Screen(res.data[i])
                }

            })
    })

}
function buy3(id, newcandy, newdescription, newprice, newquantity) {
    let newQuanty = newquantity - 2

    axios.put(`https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata/${id}`, {
        candy: newcandy,
        description: newdescription,
        price: newprice,
        quantity: newQuanty
    })
        .catch(err => {
            console.log(err)
        })
    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/8dacb0a0ccc2498fbee5d55ca4a8e7c4/Candydata")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    Show_On_Screen(res.data[i])
                }

            })
    })

}