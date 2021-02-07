document.getElementById('search_meal').addEventListener('click', () => {

    let inputMeal = document.getElementById('input_meal').value;
    if (inputMeal !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
            .then(response => response.json())
            .then(data => displayMeals(data))
    } else {
        alert('give a value in input field')
    }



})

//display recipe by search name
const displayMeals = data => {
    console.log(data)
    if (data.meals !== null) {
        let inputMeal = document.getElementById('input_meal').value;

        const recipeContainer = document.getElementById('show_recipe');
        const allmealsList = data.meals
        allmealsList.forEach(element => {



            const mealName = element.strMeal
            const mealPic = element.strMealThumb

            const recipeInnerDIv = document.createElement('div')
            recipeInnerDIv.className = 'col-lg-3 recipie'

            const recipeInfo = `     <img src ="${mealPic}">
            <h4>${mealName}</h4>     `

            recipeInnerDIv.innerHTML = recipeInfo

            recipeContainer.appendChild(recipeInnerDIv)



            // recipe details event handelar

            recipeInnerDIv.addEventListener('click', () => {

                const recipeDetails = document.getElementById('meals_details')

                var recipeDetailsContainer = document.createElement('div');
                recipeDetailsContainer.className = 'col-lg-4'

                const recipeDetailsInfo = `<img src = "${mealPic}">
                    <h3>${mealName}</h3> 
                    <h4>Ingredients</h4>
                    `

                recipeDetailsContainer.innerHTML = recipeDetailsInfo;
                recipeDetails.appendChild(recipeDetailsContainer)
                    // ingridents element;
                const ingredients = [element.strIngredient1, element.strIngredient2, element.strIngredient3, element.strIngredient4, element.strIngredient5, element.strIngredient6, element.strIngredient7, element.strIngredient8, element.strIngredient9, element.strIngredient10, element.strIngredient11, element.strIngredient12, element.strIngredient13, element.strIngredient14, element.strIngredient15, element.strIngredient16, element.strIngredient17, element.strIngredient18, element.strIngredient19, element.strIngredient20]

                ingredients.map(item => {
                    if (item !== '') {
                        const ingredientDiv = document.createElement('div')
                        ingredientDiv.className = 'ingredients_item'

                        const allIngridents = `<p> <i class="fas fa-check-square"></i> ${item}</p>`
                        ingredientDiv.innerHTML = allIngridents;

                        recipeDetailsContainer.appendChild(ingredientDiv)

                    }

                })


            })




        })

    } else {
        const eror = document.getElementById('eror_msg')
        const erorInfo = `<h3>No meals found</h3>
        `
        eror.innerHTML = erorInfo
    }

}