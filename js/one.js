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
    const catchMeal = data.meals.map(element => {
        const mealName = element.strMeal;
        const mealPic = element.strMealThumb
        console.log(mealName, mealPic)

        // now show me the item in display
        const ul = document.getElementById('show_recipe');
        const recipeInfo = ` <li>${mealName}</li>
        `
        ul.innerHTML = recipeInfo


    })
}