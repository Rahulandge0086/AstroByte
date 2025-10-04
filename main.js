function dataAnalyze(y){
        console.log(y.meals[0]);
        document.getElementById("mealName").innerHTML=y.meals[0].strMeal;
        document.getElementById("strArea").innerHTML=y.meals[0].strArea;
        document.getElementById("strInstructions").innerHTML=y.meals[0].strInstructions;
        document.getElementById("image").src=y.meals[0].strMealThumb;
         document.getElementById("con").style.display="flex";
}

document.getElementById("frm1").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.mealName.value);
  const mealName=e.target.mealName.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(x => x.json())
    .then(y => dataAnalyze(y))
});
