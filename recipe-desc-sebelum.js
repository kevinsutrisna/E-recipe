var counter = 0
document.getElementById("click").addEventListener("click", function()
{
    counter++
    document.getElementById("counter").innerHTML = counter + " likes"
})

document.getElementById("fav").addEventListener("click", function()
{
    document.getElementById("image").src = "Source/star-2.png";
})

