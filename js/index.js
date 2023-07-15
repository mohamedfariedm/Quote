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
var allHeading=
[
` faried `,    
` mohamed`,
`mahmod`,
`ahmed` ,
`hassan`,
` mark roson` , 
` tim-bearners-lee` 
];
var matchNum=0;
var box="";
function changetext() {
    //كده مفيش حاجه هتتكرر ورا بعض بنفس الكلمه 
    var ranNum = Math.floor( Math.random() * alltext.length );
    if(ranNum!=matchNum){
        box= `
        <h1 class="mt-5 fs-1 text-center fw-bolder">${allHeading[ranNum]}</h1>
        <p class="mt-5 fs-3 text-center fw-lighter">${alltext[ranNum]}</p>
        `;
        seentext.innerHTML=box;
        matchNum=ranNum;
        // console.log(ranNum)
    }
}




