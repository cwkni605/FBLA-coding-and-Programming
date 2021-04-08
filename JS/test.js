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
                if (ii== 2) {
                    //tempQuestion.defaultChecked = true;
                }
                
            }
            else if(questionList[questionNumber][1] == "radio")
            {
                tempQuestion.type = "radio";
                if (ii== 2) {
                    //tempQuestion.defaultChecked = true;
                }
            }
            else if(questionList[questionNumber][1] == "text")
            {
                tempQuestion.type = "text";
                tempQuestion.placeholder = "Answer:";
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
tempSubmit.appendChild(document.createTextNode("Submit"));
document.getElementsByTagName("form")[0].appendChild(tempSubmit);

// this validates the check boxes
function validateForm()
{
    let valid = true;
    var form = document.forms[0];
    console.log(form);
    for(let I = 1; I < form.children.length-1; I++)
    {
        let feildset = form.children[I];
        let feildValid = false;
        for (let i = 0; i < feildset.children.length; i++) {
            const element = feildset.children[i];
            if(element.type == "radio" || element.type == "check")
            {
                if (element.checked == true)
                {
                    feildValid = true;
                }
            }
            else if(element.type == "text")
            {
                console.log(element.type);
                console.log(element.value);
                if (element.value !== "")
                {
                    feildValid = true;
                }
            }
        }
        console.log(feildValid);
        if (feildValid == false) {
            valid = false;
        }
    }
    // check if valid and then handle
    if(valid == false)
    {
        //alert("The form must be filled out");
        return valid;
    }
}