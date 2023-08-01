const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCoutries(data))
}

const displayCoutries = countries => {
   const countriesContainer = document.getElementById('all-countries');
   countries.forEach(country => {
    const countriesDiv = document.createElement('div');
  
    countriesDiv.classList.add('country')
   

        countriesDiv.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h1>Name: ${country.name.common}</h1>
        <h3>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h3>
       <button onClick="loadCountryDetails('$(country.cca2)')">Details</button>
    
        `;
        countriesContainer.appendChild(countriesDiv);
   })
   
};

const loadCountryDetails = code =>{
const url = `https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res => res.json())
.then(data => displayDetails(data[0]));

};

const displayDetails = country =>{
    const countryDetails = document.getElementById('country-detail');
   countryDetails.innerHTML = `
  
   <h1>Name: ${country.name.common}</h1>
   

   `;
 
}

loadCountries()

