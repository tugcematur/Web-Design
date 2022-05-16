//const drinkinput = document.getElementById("ad")
const drinkform = document.getElementById( "drinkform")


drinkform.addEventListener("submit", submitForm)

function submitForm(e)
{
    console.log('Hi')

    e.preventDefault();   // Hi 'ı kalıcı yapar ekranda
}