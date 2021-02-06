fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => displayMealItem(data))

const displayMealItem = mealstem => {
    console.log(mealstem)
    const mealsAll = mealstem.meals

    mealsAll.forEach(element => {
        const recipeName = element.strMeal;
        const recipeThumb = element.strMealThumb;
        const ul = document.getElementById('one');
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = recipeThumb
        li.innerText = recipeName;
        li.appendChild(img)
        ul.appendChild(li)

    });




}