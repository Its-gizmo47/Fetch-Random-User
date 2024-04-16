let getBtn = document.querySelector(".get-user");
let users = document.querySelector(".users");



function getNewUser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    const {name, gender, email, picture} = result.results[0];
    users.innerHTML += `<div class="user w-60 h-72 p-4 rounded-xl flex flex-col justify-center items-center bg-purple-300">
    <div class="user-img h-20 w-20 rounded-2xl overflow-hidden">
        <img src="${picture.large}" alt="">
    </div>
    <h4 class="text-2xl ">${name.first}</h4>
    <h4 class="text-md opacity-70">${gender}</h4>
    <h4 class="text-xs opacity-50">${email}</h4>
    <p class="opacity-80 text-lg text-center">Lorem ipsum dolor, sit amet elit. Nulla aut ipsa amet vero saepe sequi!</p>
</div>`
});
}

getBtn.addEventListener("click", getNewUser);

// ()=>{
//     getNewUser();
// }