document.getElementById('search_meal').addEventListener('click', () => {
    let inputMeal = document.getElementById('input_meal').value;
    const base_link = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    const fullLink = base_link + inputMeal
    fetch(fullLink)
        .then(response => response.json())
        .then(data => displayMeals(data))



})

//display recipe by search name
const displayMeals = data => {
    console.log(data)

    const recipeContainer = document.getElementById('show_recipe');
    const allmealsList = data.meals
    allmealsList.forEach(element => {
        const mealName = element.strMeal
        const mealPic = element.strMealThumb

        const recipeInnerDIv = document.createElement('div')
        recipeInnerDIv.className = 'main_recipe'
        const recipeInfo = `     <img src ="${mealPic}">
        <h4>${mealName}</h4>     `
        recipeInnerDIv.innerHTML = recipeInfo

        recipeContainer.appendChild(recipeInnerDIv)




        // recipe details event handelar

        recipeInnerDIv.addEventListener('click', () => {

            const recipeDetails = document.getElementById('meals_details')

            var recipeDetailsContainer = document.createElement('div');

            const recipeDetailsInfo = `<img src = "${mealPic}">
                <h3>${mealName}</h3> 
                <h4>Ingredients</h4>
                <p> <i class="fas fa-check-square"></i> Mojmul</p>
                `
            recipeDetailsContainer.innerHTML = recipeDetailsInfo;
            recipeDetails.appendChild(recipeDetailsContainer)

            // ingridents element;
            const ingredients = [element.strIngredient1, element.strIngredient2, element.strIngredient3, element.strIngredient4, element.strIngredient5, element.strIngredient6, element.strIngredient7, element.strIngredient8, element.strIngredient9, element.strIngredient10, element.strIngredient11, element.strIngredient12, element.strIngredient13]
            ingredients.map(item => {
                const li = document.createElement('p')
                li.innerText = item
                recipeDetailsContainer.appendChild(li)
            })








        })



    })




}