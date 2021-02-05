var post = location.search;
console.log("step 1");
if(post !== undefined){
    if (typeof(Storage) !== "undefined") {
        // Store
        if(!localStorage.getItem("testSaves").startsWith("null")){
            //localStorage.setItem("testSaves", localStorage.getItem("testSaves")+post);
        }
        else{
            localStorage.setItem("testSaves", post);
        }
        localStorage.setItem("testSaves", null);
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
}
console.log("step 2")
var answerSheets;
if (typeof(Storage) !== "undefined") {
    // Retrieve
    answerSheets = localStorage.getItem("testSaves").split("?");
    answerSheets.shift();
    console.log(answerSheets);
    //console.log(localStorage.getItem("lastname"));
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
console.log("step 3");
for (let I = 0; I < answerSheets.length; I++) {
    console.log("I:"+I);
    const element = answerSheets[I];
    var tempTitle = document.createElement("legend");
    tempTitle.appendChild(document.createTextNode(`Attempt: ${I}:`));
    var tempForm = document.createElement('form');
    tempForm.appendChild(tempTitle);
    document.body.appendChild(tempForm);
    diminishingRandNumClear();
    for (let i = 0; i < 5; i++)
    {
        console.log("i:"+i);
        var questionNumber = diminishingRandNum();
        var form = document.getElementsByTagName("form")[I];
        var fieldset = document.createElement("fieldset");

        for (let Index = 0; Index < questionList[questionNumber].length; Index++)
        {
            console.log("Index:"+Index);
            const temp = questionList[questionNumber][Index];
            if(Index == 0)
            {
                //question
                var tempLabel = document.createElement("h2");
                tempLabel.appendChild(document.createTextNode(`${i+1}. `+temp));
                fieldset.appendChild(tempLabel);
            }
            else if(Index == 1)
            {
                //type
            }
            else if(Index > 1)
            {
                var tempQuestion = document.createElement("input");
                tempQuestion.name = questionNumber+"-"+i;
                tempQuestion.disabled = true;
                var tempLabel = document.createElement("label");
                tempLabel.appendChild(document.createTextNode(temp));
                fieldset.appendChild(tempLabel);
                //questions
                if (questionList[questionNumber][1] == "check")
                {
                    tempQuestion.type = "checkbox";
                    
                }
                else if(questionList[questionNumber][1] == "radio")
                {
                    tempQuestion.type = "radio";
                }
                else if(questionList[questionNumber][1] == "text")
                {
                    tempQuestion.type = "text";
                }
                if(questionList[questionNumber][1] !== "text")
                {
                    tempQuestion.value = questionNumber+"-"+i+"-"+(Index-2);
                }
                fieldset.appendChild(tempQuestion);
            }
            console.log("append question");
        }
        document.getElementsByTagName("form")[I].appendChild(fieldset);
    }
}
console.log("step 4");