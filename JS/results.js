var post = location.search;
if(post !== undefined){
    if (typeof(Storage) !== "undefined") {
        // Store
        if(localStorage.getItem("testSaves") == null || !localStorage.getItem("testSaves").startsWith("null")){
            //localStorage.setItem("testSaves", localStorage.getItem("testSaves")+post);
        }
        else{
            localStorage.setItem("testSaves", post);
        }
        //localStorage.setItem("testSaves", null);
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
var answerSheets = [];
if (typeof(Storage) !== "undefined") {
    // Retrieve
    answerSheets = localStorage.getItem("testSaves").split("?");
    answerSheets.shift();
    for (let I = 0; I < answerSheets.length; I++) {
        answerSheets[I] = answerSheets[I].split("&");
        var tempAnswerSheet;
        for (let i = 0; i < answerSheets[I].length; i++) {
            answerSheets[I][i] = answerSheets[I][i].split("=");
        }
        for (let i = 1; i < answerSheets[I].length; i++) {
            if (answerSheets[I][i-1][0] !== undefined && answerSheets[I][i][0] == answerSheets[I][i-1][0]) {
                answerSheets[I][i-1].push(answerSheets[I][i][1])
                answerSheets[I][i][0] = "nulled";
            }
        }
        for (let i = 0; i < answerSheets[I].length; i++) {
            answerSheets[I].sort(function(a, b){
                if(a[0] == "nulled" && b[0] == "nulled")return 0; 
                else if(a[0] == "nulled") return 1;
                else if(b[0] == "nulled") return -1;
            });
            answerSheets[I].forEach((question)=>{
                if (question[0] == "nulled") {
                    answerSheets[I].pop();
                }
            });
        }
    }
    console.log(answerSheets);
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
for (let I = 0; I < answerSheets.length; I++) {
    const currentSheet = answerSheets[I];
    var tempTitle = document.createElement("h2");
    tempTitle.appendChild(document.createTextNode(`Attempt: ${I+1}:`));
    var tempForm = document.createElement('form');
    tempForm.appendChild(tempTitle);
    document.body.appendChild(tempForm);
    
    for (let i = 0; i < 5; i++)
    {
        var questionNumber = Number(answerSheets[I][i][0].slice(0,answerSheets[I][i][0].indexOf("-")));
        var form = document.getElementsByTagName("form")[I];
        var fieldset = document.createElement("fieldset");

        for (let ii = 0; ii < questionList[questionNumber].length; ii++)
        {
            const temp = questionList[questionNumber][ii];
            if(ii == 0)
            {
                //question
                var tempLabel = document.createElement("h2");
                tempLabel.appendChild(document.createTextNode(`${i+1}. `+temp));
                fieldset.appendChild(tempLabel);
            }
            else if(ii == 1)
            {
                //type
            }
            else if(ii > 1)
            {
                var tempQuestion = document.createElement("input");
                tempQuestion.name = questionNumber+"-"+i;
                tempQuestion.disabled = true;
                var tempLabel = document.createElement("label");
                if(answerList[questionNumber].includes(ii-2))
                {
                    tempLabel.style.color = "Green";
                }
                else if(answerSheets[I][i][1].includes(answerList[questionNumber]) && answerSheets[I][i][1].length > 1)tempLabel.style.color = "Green";
                else tempLabel.style.color = "red";
                tempLabel.appendChild(document.createTextNode(temp));
                fieldset.appendChild(tempLabel);
                //questions
                if (questionList[questionNumber][1] == "check")
                {
                    tempQuestion.type = "checkbox";
                    if(answerSheets[I][i][1].includes(ii-2))
                    {
                        tempQuestion.checked = true;
                    }
                }
                else if(questionList[questionNumber][1] == "radio")
                {
                    tempQuestion.type = "radio";
                    if(answerSheets[I][i][1].includes(ii-2))
                    {
                        tempQuestion.checked = true;
                    }
                }
                else if(questionList[questionNumber][1] == "text")
                {
                    tempQuestion.type = "text";
                    if(answerSheets[I][i][1].includes(answerList[questionNumber]))
                    {
                        tempQuestion.placeholder = answerSheets[I][i][1].replace("+", " ");
                    }
                }
                if(questionList[questionNumber][1] !== "text")
                {
                    tempQuestion.value = ii-2;
                }
                fieldset.appendChild(tempQuestion);
            }
        }
        document.getElementsByTagName("form")[I].appendChild(fieldset);
    }
}
