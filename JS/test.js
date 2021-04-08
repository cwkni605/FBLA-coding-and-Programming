var form = document.getElementById("form");
var formValidity = true;

diminishingRandNum(questionList.length-1, 5, (i, questionNumber)=>
{
    var form = document.getElementsByTagName("form")[0];
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
            var tempLabel = document.createElement("label");
            tempLabel.appendChild(document.createTextNode(temp));
            //questions
            if (questionList[questionNumber][1] == "check")
            {
                tempQuestion.type = "checkbox";
                
            }
            else if(questionList[questionNumber][1] == "radio")
            {
                tempQuestion.type = "radio";
                tempQuestion.defaultChecked = true;
            }
            else if(questionList[questionNumber][1] == "text")
            {
                tempQuestion.type = "text";
            }
            if(questionList[questionNumber][1] !== "text")
            {
                tempQuestion.value = (ii-2);
            }
            fieldset.appendChild(tempQuestion);
            fieldset.appendChild(tempLabel);
            fieldset.appendChild(document.createElement("br"));
        }
    }
    document.getElementsByTagName("form")[0].appendChild(fieldset);
});
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
    evt.preventDefault();
    let form = document.getElementsByTagName("form")[0];
    formValidity = false;
    if (evt.preventDefault)
    {
        
    }
    else
    {
        evt.returnValue = false;
    }
    //validity checks
    checkValidity();

    if (formValidity === true)
    {
        //form.submit();
    }
    else {
        scroll(0,0);
    }
}

function checkValidity()
{

}