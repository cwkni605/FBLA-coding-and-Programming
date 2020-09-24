var questionType = 
{
    check:"<>"
}

var questionList = 
[
    ["1this is a question test tralse or frue","check","tralse","frue",],
    ["1this is a question test good, bad or ugly","select","good","bad","ugly"],
    ["1this is a question test tralse or frue","check","tralse","frue"],
    ["1this is a question test tralse or frue","check","tralse","frue"],
    ["1this is a question test tralse or frue","check","tralse","frue"],
    ["2this is a question test tralse or frue","check","tralse","frue"],
    ["2this is a question test good, bad or ugly","select","good","bad","ugly"],
    ["2this is a question test tralse or frue","check","tralse","frue"],
    ["2this is a question test tralse or frue","check","tralse","frue"],
    ["2this is a question test tralse or frue","check","tralse","frue"],
    ["3this is a question test tralse or frue","check","tralse","frue"],
    ["3this is a question test good, bad or ugly","select","good","bad","ugly"],
    ["3this is a question test tralse or frue","check","tralse","frue"],
    ["3this is a question test tralse or frue","check","tralse","frue"],
    ["3this is a question test tralse or frue","check","tralse","frue"],
    ["4this is a question test tralse or frue","check","tralse","frue"],
    ["4this is a question test good, bad or ugly","select","good","bad","ugly"],
    ["4this is a question test tralse or frue","check","tralse","frue"],
    ["4this is a question test tralse or frue","check","tralse","frue"],
    ["4this is a question test tralse or frue","check","tralse","frue"]
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
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
]

var form = document.getElementById("form");
var used = [];
var notUsed = false;
function diminishingRandNum()
{
    notUsed = false;
    for (let i = 0; notUsed != true; i++)
    {
        var num = Math.floor(Math.random()*20);
        if(num != used[0] || used[0] == undefined)
        {
            if(num != used[1] || used[1] == undefined)
            {
                if(num != used[2] || used[2] == undefined)
                {
                    if(num != used[3] || used[3] == undefined)
                    {
                        if(num != used[4] || used[4] == undefined)
                        {
                            used.push(num);
                            notUsed = true;
                            return num;
                        }
                    }
                }
            }
        }
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
            tempLabel.appendChild(document.createTextNode(temp));
            fieldset.appendChild(tempLabel);
        }
        else if(Index == 1)
        {
            //type
        }
        //else if(Index == 2)
        //{
            //correct answer
            //answer = temp;
        //}
        else if(Index > 1)
        {
            //questions
            if (questionList[questionNumber][1] == "check")
            {
                var tempQuestion = document.createElement("input");
                tempQuestion.type = "checkbox";
                tempQuestion.name = questionNumber;
                var tempLabel = document.createElement("label");
                tempLabel.appendChild(document.createTextNode(temp));
                fieldset.appendChild(tempLabel);
                fieldset.appendChild(tempQuestion);
            }
            else if(questionList[questionNumber][1] == "select")
            {
                var tempQuestion = document.createElement("input");
                tempQuestion.type = "radio";
                tempQuestion.required = true;
                tempQuestion.name = questionNumber;
                var tempLabel = document.createElement("label");
                tempLabel.appendChild(document.createTextNode(temp));
                fieldset.appendChild(tempLabel);
                fieldset.appendChild(tempQuestion);
            }
        }
    }
    document.getElementsByTagName("form")[0].appendChild(fieldset);
}
var tempSubmit = document.createElement("button");
tempSubmit.type = "submit";
tempSubmit.appendChild(document.createTextNode("Submit"));
document.getElementsByTagName("form")[0].appendChild(tempSubmit);

function log(out) {
    console.log(out);
}