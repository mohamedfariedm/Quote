var seentext=document.getElementById("text");

var alltext=
[
` “Be yourself; everyone else is already taken.”― Oscar Wilde `,    
` “Be the change that you wish to see in the world.” ― Mahatma Gandhi `,
`“So many books, so little time.”`,
`“You only live once, but if you do it right, once is enough.”` ,
`“We accept the love we think we deserve.”`,
` “If you tell the truth, you dont have to remember anything”― Mark Twain ` , 
` “Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde ` 
];
var matchNum=0;

function changetext() {
    //كده مفيش حاجه هتتكرر ورا بعض بنفس الكلمه 
    var ranNum = Math.floor( Math.random() * alltext.length );
    if(ranNum!=matchNum){
        var box= `${alltext[ranNum]}`;
        seentext.innerHTML=box;
        matchNum=ranNum;
        // console.log(ranNum)
    }
}




