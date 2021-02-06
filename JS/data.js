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
    [0,1],
    [1],
    [0],
    [0],
    [0],
    [0],
    [2],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    ["chief+"]
]

if (questionList.length !== answerList.length)
{
    if (confirm("The question and answer lists do NOT match. Do you want to reload the page?"))
    {
        location.reload();
    }
}



/** Similar to a for loop and has three parameters. 
 * The first is a maximum for the callback random number. The second is the amount of times the function will loop. 
 * The third parameter is a callback that has two parameters, the current index of the loop and the random number between zero and the given maximum that has not been given previously in the loop. 
 * @param {number} maxNumber
 * @param {number} loopLimiter
 * @param {Function} callback
*/
function diminishingRandNum(maxNumber, loopLimiter, callback){
    if (typeof callback !== "function") throw "The callback function in not a function.";
    if (maxNumber < loopLimiter) throw "The maximum for the random number cannot be below the loop count.";
    var used = [];
    for (let Index = 0; Index < loopLimiter; Index++) {
        var notUsed = false;
        for (let i = 0; notUsed != true; i++) {
            var num = Math.round(Math.random() * maxNumber);
            if(used.find((trying)=>{return trying === num;}) === undefined) notUsed = true;
        }
        used.push(num);
        var validRandNum = num;
        callback(Index, validRandNum);
    }
}