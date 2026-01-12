const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')

const UserData = [] // how may way to create object

function setDataLocalStorage(Data){
localStorage.setItem('usersData',JSON.stringify(Data))
}

const handleSubmit = (e)=>{
    e.preventDefault()
    getFormData()  
}



const getFormData = ()=>{
    // UserDatad.Username  = usernameEl.value
    const SingleData  = {
        Username : usernameEl.value,
        Email : emailEl.value,
        Password : passwordEl.value
    }
    UserData.push(SingleData)
    setDataLocalStorage(UserData)
    usernameEl.value = ""
    passwordEl.value = ""
    emailEl.value = ""
       
}

const getLocalStroageData = localStorage.getItem('usersData')
console.log(getLocalStroageData);



