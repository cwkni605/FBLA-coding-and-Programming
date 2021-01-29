var post = location.search;
if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("testSaves", localStorage.getItem("testSaves")+"<h1>FBLA test 1</h1><ul><li>this is question one<ul><li>answer 1</li><li>answer 2</li><li>answer 3</li><li>answer 4</li></ul></li><li>this is question two<ul><li>answer 1</li><li>answer 2</li><li>answer 3</li><li>answer 4</li></ul></li><li>this is question three<ul><li>answer 1</li><li>answer 2</li><li>answer 3</li><li>answer 4</li></ul></li></ul>");
    //localStorage.setItem("testSaves", null);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("testSaves");
    console.log(localStorage.getItem(post));
    console.log(localStorage.getItem("lastname"));
}
else
{
    while(true)
    {
        if(confirm("Your Browser does NOT allow for site storage. Click ok to return to the menu."))
        {
            location.assign("index.html");
        }
    }
}