const loadPhones = async(searchText, dataLimit) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
 
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
};

const displayPhone = (phones, dataLimit) =>{
    console.log(phones);
    const phoneContainer = document.getElementById('display-phones');
    phoneContainer.innerHTML = '';
// show all.............................................
const showPhone = document.getElementById('show-all');
if(dataLimit && phones.length > 3){
    phones = phones.slice(0, 3)
showPhone.classList.remove('d-none')
}
else{
    showPhone.classList.add('d-none')  
}


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
        <div class="card h-75 m-5">
          <img class="p-0" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h1 class="text-primary mt-5"> ${phone.phone_name}</h1>
            <h5 class="card-title text-danger"> ${phone.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
    
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    
}

const showProces = (dataLimit) =>{
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText, dataLimit);
}

const searchPhone = () =>{
   showProces(3);

};


document.getElementById('show-button').addEventListener('click', function(){
  
    showProces();
})



