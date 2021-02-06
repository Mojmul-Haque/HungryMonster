fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => displayMealItem(data))


// get obejct property
const displayMealItem = mealstem => {
    console.log(mealstem)
    const mealsAll = mealstem.meals

    mealsAll.forEach(element => {
        const recipeName = element.strMeal;
        const recipeThumb = element.strMealThumb;
        const ul = document.getElementById('show_meals');
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = recipeThumb
        li.innerText = recipeName;
        li.appendChild(img)
        ul.appendChild(li)

        //event handeler
        li.addEventListener('click', () => {

            const ingredient1 = element.strIngredient1;
            const ingredient2 = element.strIngredient2;
            const ingredient3 = element.strIngredient3;
            const ingredient4 = element.strIngredient4;
            const ingredient5 = element.strIngredient5;
            const ingredient6 = element.strIngredient13;

            var showDetails = document.getElementById('show_details')
            const detailsInfo = ` <img src ="${recipeThumb}"> 
            <h2>${recipeName}</h2>
            <h4>Ingredients</h4>
            <ul>
            <li>${ingredient1}</li>
            <li>${ingredient2}</li>
            <li>${ingredient3}</li>
            <li>${ingredient4}</li>
            <li>${ingredient5}</li>
            <li>${ingredient6}</li>
           
            
            </ul>
            `
            showDetails.innerHTML = detailsInfo
        })


    })

}


//event handelar
document.getElementById('search_meal').addEventListener('click', () => {
    const inputMeal = document.getElementById('input_meal')
    if (inputMeal == recipeName) {
        console.log('got it')
    }
})