const loadMeals = (searchText) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}



const displayMeals = meals =>{
    console.log(meals);
    const mealsContainer = document.getElementById('display-meals');
    mealsContainer.innerHTML = '';
    // meals = meals.slice(0, 3);

     // ...No Meals Found Messege..............
    //  const noMeals = document.getElementById('mealsNoFound');
    //  if(meals === 0){
    //    noMeals.classList.remove('d-none');
    //  }

    //  else{
    //   noMeals.classList.add('d-none');
    //  }
 
    
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML =`
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title"> ${meal.strMeal}</h1>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
       Details
        </button
          </div>
      </div>
   
        `;
       
        mealsContainer.appendChild(mealDiv);
    })
  

};

const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
loadMeals(searchText);

};

// const loadMealDetails = idMeal =>{
// const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

// fetch(url)
// .then(res => res.json())
// .then(data => displayMealsDetalis(data.meals[0]))
// };

const loadMealDetails2 = async(idMeal) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
 try{
  const res = await fetch(url);
  const data = await res.json();
  displayMealsDetalis(data.meals[0]);
 }
 catch(error){
console.log(error)
 }
}

const displayMealsDetalis = meal =>{
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  const mealBody = document.getElementById('mealDetailsBody');
  mealBody.innerHTML =`
  <img class="img-fluid" src="${meal.strMealThumb}"
 
  `

}

loadMeals('fish');