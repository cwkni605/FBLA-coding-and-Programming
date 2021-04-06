var questionList = 
[
    ["What does FBLA stand for?","text","Answer:"],
    ["Who is the FBLA national President","radio","Drew Lojewski","Faith Kierzek","-Keshav Ramesh","-Donald Trump"],
    ["Who is the founder of FBLA?","radio","Traivis Johnson","Hamden L. Forkner","Emily Berkstone","Jean Buckley"],
    ["When was the concept of FBLA first developed?","radio","2005","2002","1985","1937"],
    ["What are the FBLA official colors?","check","blue","red","orange","gold"],
    ["How many different divisions are there for FBLA?","radio","11","3","8","4"],
    ["Where are the national headquarters for FBLA?","radio","California","Arizona","Virginia","Ohio"],// i6
    ["When are the National Fall Leadership conferences held?","radio","October","November","July","march"],
    ["Which group of students is the PBL division for?","radio","High School","Middle School","Elementary","College"],
    ["When are State Leadership Conferences(SLC) held?","radio","Spring","Summer","Fall","Winter"],
    ["How many hours total will it take to complete the third level of recognition for Community service awards?","radio","25 hours","100 hours","300 hours","500 hours"],
    ["To close the meeting when no motion is pending and there is no further business is called?","radio","Restorative","Adjourn","Release","Subsidiary"],// i11
    ["What is the first line of the FBLA creed?","text","Answer:"],// i12
    ["What kind of attire does FBLA expect?","radio","Casual","semi-formal","Buisness","anything"],
    ["FBLA is offered to students in what grades?","radio","9-12","6-8","6-12","8-12"],// i14
    ["FBLA-PBL’s national conferences help students prepare for _______ in business by focusing on academic competitions and leadership development.","text","Fill in the blank:"],
    ["FBLA-PBL inspires and prepares students to become _______-minded business leaders in a global society through relevant career preparation and leadership experiences.","text","Fill in the blank:"],
    ["FBLA-ML division is for ______ school students","text","Fill in the blank:"],// i17
    ["FBLA-PBL is governed by a set of ______, defined and interpreted by the FBLA-PBL Board of Directors","text","fill in the blank:"],
    ["Students compete in over __ competitions that cover finance, marketing, technology, and much more.","text","fill in the blank:"],
    ["Competitions begin at the state level and culminate at the _______Leadership Conference where the nation’s top students are recognized","text","fill in the blank:"],// i20
];

var answerList = 
[                                               //i q
    ["Future+Business+Leaders+of+America"],     //0 1
    [0],                                        //1 2
    [1],                                        //2 3
    [3],                                        //3 4
    [0,3],                                      //4 5
    [3],                                        //5 6
    [2],                                        //6 7
    [1],                                        //7 8
    [3],                                        //8 9
    [0],                                        //9 10
    [3],                                        //10 11
    [1],                                        //11 12
    ["education+is+the+right+of+every+person"], //12 13
    [2],                                        //13 14
    [0],                                        //14 15
    ["careers"],                                //15 16
    ["community"],                              //16 17
    ["middle"],                                 //17 18
    ["bylaws"],                                 //18 19
    ["60"],                                     //19 20
    ["national"],                               //20 21
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