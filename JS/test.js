var form = document.getElementById("form");
var formValidity = true;

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
            tempQuestion.name = questionNumber+"-"+i;
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

function checkValidity()
{

}