function lighttheme()
{
var element = document.getElementById("themer");
if(element.href == "Photos Page Light Theme.css") element.setAttribute("href", "Photos Page Dark Theme.css");
else element.setAttribute("href", "Photos Page Light Theme.css");
}

function darktheme()
{
var element = document.getElementById("themer");
element.setAttribute("href", "Photos Page Dark Theme.css");
}