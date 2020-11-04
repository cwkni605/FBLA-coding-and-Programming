

var questionList = 
[
    ["1 this is a question test tralse or frue","check","tralse","frue",],
    ["2 this is a question test good, bad or ugly","radio","good","bad","ugly"],
    ["3 this is a question test tralse or frue","radio","tralse","frue"],
    ["4 this is a question test tralse or frue","check","tralse","frue"],
    ["5 this is a question test tralse or frue","check","tralse","frue"],
    ["6 this is a question test tralse or frue","check","tralse","frue"],
    ["7 this is a question test good, bad or ugly","radio","good","bad","ugly"],
    ["8 this is a question test tralse or frue","check","tralse","frue"],
    ["9 this is a question test tralse or frue","check","tralse","frue"],
    ["10 this is a question test tralse or frue","check","tralse","frue"],
    ["11 this is a question test tralse or frue","check","tralse","frue"],
    ["12 this is a question test good, bad or ugly","radio","good","bad","ugly"],
    ["13 this is a question test tralse or frue","check","tralse","frue"],
    ["14 this is a question test tralse or frue","check","tralse","frue"],
    ["15 this is a question test tralse or frue","check","tralse","frue"]
];

var answerList = 
[
    [1,2],
    [2],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1]
]

var form = document.getElementById("form");
var used = [];
var formValidity = true;

function diminishingRandNum(number)
{
    var notUsed = false;
    for (let i = 0; notUsed != true; i++)
    {
        var num = Math.floor(Math.random() * questionList.length);
        if(used.find((trying)=>{return trying === num;}) === undefined)
        {
            notUsed = true;
        }
    }
    used.push(num);
    notUsed = true;
    if(number !== undefined)
    {
        while (number < used.length)
        {
            used.shift();
        }
    }
    return num;
}

if (questionList.length !== answerList.length)
{
    if (confirm("The question and answer lists do NOT match. Do you want to reload the page?"))
    {
        location.reload();
    }
}

for (let i = 0; i < 5; i++)
{
    var questionNumber = diminishingRandNum();
    var form = document.getElementsByTagName("form")[0];
    var fieldset = document.createElement("fieldset");

    for (let Index = 0; Index < questionList[questionNumber].length; Index++)
    {
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
            tempQuestion.name = Index;
            tempQuestion.dataset.questionId = questionNumber;
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
            fieldset.appendChild(tempQuestion);
        }
    }
    document.getElementsByTagName("form")[0].appendChild(fieldset);
}
var tempSubmit = document.createElement("button");
if (tempSubmit.addEventListener)
{
    tempSubmit.addEventListener("mousedown", submit, false);
}
else if (tempSubmit.attachEvent)
{
    tempSubmit.attachEvent("onmousedown", submit);
}
tempSubmit.appendChild(document.createTextNode("Submit"));
document.getElementsByTagName("form")[0].appendChild(tempSubmit);

// this validates the check boxes
function submit(evt)
{
    let form = document.getElementsByTagName("form")[0];
    formValidity = false;
    if (evt.preventDefault)
    {
        evt.preventDefault();
    }
    else
    {
        evt.returnValue = false;
    }
    //validity checks
    checkValidity();

    if (formValidity === true)
    {
        form.submit();
    }
    else {
        scroll(0,0);
    }
}