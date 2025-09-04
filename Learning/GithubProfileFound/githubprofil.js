const username = document.querySelector('input')
const btn = document.querySelector('button')
const userImage = document.getElementById("userImage")

const getUser = async (user)=>{
    try {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()
    console.log(data);
    
    userImage.innerHTML = `
      <div class="user-card">
            <div class="user-image">
              <img src="${data.avatar_url}" alt="User Avatar">
            </div>
            <div class="user-details">
              <h2>${data.name}</h2>
              <p><strong>Username:</strong> ${data.login}</p>
              <p><strong>Followers:</strong> ${data.followers}</p>
              <p><strong>Following:</strong> ${data.following}</p>
              <p><strong>Bio:</strong> ${data.bio }</p>
            </div>
        </div>
        `;
} catch (error) {
    console.log(error);
}
}

btn.addEventListener('click',()=>{
    let querry = username.value
    getUser(querry);
})
