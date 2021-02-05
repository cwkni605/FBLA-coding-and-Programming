
console.log("data start");


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
    ["15 this is a question test tralse or frue","text","Answer:"]
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

if (questionList.length !== answerList.length)
{
    if (confirm("The question and answer lists do NOT match. Do you want to reload the page?"))
    {
        location.reload();
    }
}

var used = [];
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
function diminishingRandNumClear()
{
    used = [];
}



function processThis(max, limiter, callback) {
    var used = [];

    if (typeof callback == "function"){
        for (let Index = 0; Index < limiter; Index++) {
            var notUsed = false;
            for (let i = 0; notUsed != true; i++)
            {
                var num = Math.floor(Math.random() * max);
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
            var validRandNum = num;
            callback(validRandNum);
        }
    }
    else
    {
        throw "The callback function in not a function.";
    }
}
//processThis(3,3,(d)=>{
    //console.log(d);
//});