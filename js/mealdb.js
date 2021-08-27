const searchFood = () => {
    const searInput = document.getElementById('search-input');
    const searcheText = searInput.value;
    // console.log(searcheText);

    // clear data 
    searInput.value = '';
    if (searcheText == '') {
        // somthing
    }
    else {
        // load data 

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searcheText}`;
        // console.log(url); url kaj korse kina seta check korea hoise
        fetch(url)
        .then(res => res.json())
            .then(data => searchDisplay(data.meals))
            .catch(error=>displayError());
    }
    
}
const displayError = (error) => {
    alert("please give here your search food");
}

const searchDisplay = (meals) => {
    // console.log(meals); function kaj korse kina seta check kora hoise
    const searchResul = document.getElementById('search-result');
    // searchResul.innerHTML = ''; eta teo load data clear hbe but jamela kore
    searchResul.textContent = '';
    
    if (meals.length == 0) {
        // something
    }
    meals.forEach(meal => {
        // console.log(meal); meal kaj korse kina set a check kora hoise
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="col">
        <div onclick="loadMealDitail(${meal.idMeal})" class="card text-light bg-success">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal.slice(0,6)}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
            </div>
            </div>
        </div>`;
        searchResul.appendChild(div);
        
    });

}

const loadMealDitail = (mealId) => {
    // console.log(mealId); mealId kaj korse kina seta check kora hoise
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>dispalyMealDitials(data.meals[0]))
}

const dispalyMealDitials = (meal) => {
    console.log(meal);
    const mealDitails = document.getElementById('meal-details');
    mealDitails.textContent = '';
    const div = document.createElement('div');
    div.style.marginBottom = '20px';
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body bg-success text-light">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDitails.appendChild(div);
}