const category = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list' //strCategory: "Beef","Breakfast", chicken;etc;
const area = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list' // american, british, thai etc;

const ingredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list' // name & description

const mealByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s'

const completedURl = mealByName


fetch(completedURl)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.meals.map(item => {
            // console.log(item)

            const mealName = item.strMeal;
            console.log(mealName)
            const mealThumb = item.strMealThumb // item picture
            const ul = document.getElementById('item_list')
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.src = mealThumb
            li.innerText = mealName;
            ul.appendChild(li)
            li.appendChild(img)


            const figcaption = `<li><h4>${mealName}</h4></li>`
            figcaption.innerH
            ul.appendChild(figcaption)









            // const mealName = item.strMeal;
            // console.log(mealName)
            // const mealThumb = item.strMealThumb // item picture
            // const ul = document.getElementById('item_list')
            // const li = document.createElement('li')
            // const img = document.createElement('img')
            // img.src = mealThumb
            // li.innerText = mealName;
            // ul.appendChild(li)
            // li.appendChild(img)










        })

    })

























document.getElementById('search_meal').addEventListener('click', function() {
    console.log('got')
})