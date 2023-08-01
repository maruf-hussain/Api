const loadPhones = async(searchText) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
 
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
};

const displayPhone = phones =>{
    console.log(phones);
    const phoneContainer = document.getElementById('display-phones');
    phoneContainer.innerHTML = '';
// no Phone found ....................................no phone found
const noPhones = document.getElementById('phonesNoFound');
if(phones.length === 0){
    noPhones.classList.remove('d-none')
}
else{
    noPhones.classList.add('d-none')
}

    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="card h-100 p-5 w-75">
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h1> ${phone.phone_name}</h1>
            <h5 class="card-title"> ${phone.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
    
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    
}

const searchPhone = () =>{
    const searchText = document.getElementById('search-field').value;
loadPhones(searchText);

};

loadPhones();

