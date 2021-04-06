var questionList = 
[
    ["What does FBLA stand for?","text","Answer:"],
    ["Who is the FBLA national President","radio","Drew Lojewski","Faith Kierzek","-Keshav Ramesh","-Donald Trump"],
    ["Who is the founder of FBLA?","radio","Traivis Johnson","Hamden L. Forkner","Emily Berkstone","Jean Buckley"],
    ["When was the concept of FBLA first developed?","radio","2005","2002","1985","1937"],
    ["What are the FBLA official colors?","check","blue","red","orange","gold"],
    ["How many different divisions are there for FBLA?","radio","11","3","8","4"]
];

var answerList = 
[
    ["Future+Business+Leaders+of+America"],//0
    [0],                                   //1
    [1],                                   //2
    [3],                                   //3
    [0,3],                                 //4
    [3]                                    //5
];

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
 * @param {number} maxNumber -This is the maximum for the random number generator.
 * @param {number} loopLimiter -This is the amount of loops.
 * @param {Function} callback -This is the code you want to run.
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