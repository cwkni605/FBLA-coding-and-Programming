if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("firstname");
}
else
{
    while(true)
    {
        if(confirm("Your Browser does NOT allow for site storage. Click ok to return to the menu."))
        {
            location.replace("index.html");
        }
    }
}