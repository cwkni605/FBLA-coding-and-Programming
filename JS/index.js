var questionList = 
[
    ["1this is a question test tralse or frue","check","tralse","frue"],
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
    ["4this is a question test tralse or frue","check","tralse","frue"],
];

var form = document.getElementById("form");
var used = [];

for (let Question = 0; Question < 5; Question++) {
    var num = Math.round(Math.random()*20);
    var notUsed = false;
    for (let i = 0; notUsed == true; i++) {
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
                            notUsed = true;
                        }
                    }
                }
            }
        }
        else
        {
            
        }
    }
    const question = questionList[num];
    console.log(Question);
}