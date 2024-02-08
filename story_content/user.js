function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nkaZCbb37Y":
        Script1();
        break;
      case "6keqBqOrHgh":
        Script2();
        break;
      case "5lYAs2qQxJf":
        Script3();
        break;
      case "62y8ufxPOKs":
        Script4();
        break;
      case "5gBFlHrtvaJ":
        Script5();
        break;
      case "5uVyYrfnPvq":
        Script6();
        break;
      case "6Up1Jska9wP":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const player = GetPlayer();

const data = "CJ Lederton the CEO on EnNerPrise. CJ grew up on the continent of Tangea.  CJ's father was a civil engineer working on major projects, such as dams, nuclear installations, etc., so CJ moved around frequently based on the location of project.  As a consequence, CJ has lived in all four states of Tangea. CJ's mother was a journalist for the national newspaper, a role which afforded her access to the highest levels of government and enabled her to establish a strong network of stakeholders. CJ played with the idea of becoming a journalist but discovered a passion for science.  CJ became an internationally-renowned specialist in EnNPs, which are enzymes with nanoparticle supports.Sadly, both CJ's parents passed away when CJ was relatively young. CJ's father died of prostate cancer while CJ's mother succumbed to breast cancer.  The increasing evidence of the role of emerging contaminants in contributing to higher rates of breast and prostate cancer (and other aspects of human health) further spurred CJ's drive to harness innovative science to improve health and well-being. Welcome to Tangea, a thriving continent dominated by four different landscapes with very different economic drivers.   Marhav has the biggest population, with an industrialised economy and a busy seaport where the bulk of trade takes place.   Towering above Marhav are the mountains that characterise the highlands of Serrania, a beautiful and inspiring state where the source of the River Elven is also located.  Serrania uses its ample water and lofty hills to generate power and for tourism, but it is the least populous state.    The River Elven wends its way through the mountains into Lembah, a rich fertile valley state that contains much of Tangea's agricultural production.  However,  the geology of the area also means that it generates significant revenue from mining operations, with a focus on lithium, zinc and copper.   This verdant land is stark contrast to Orken,  a desert ecosystem renowned for its diverse flora and fauna. But the main driver of Orken's ecosystem is its scientific research centred around the city of Andeo, where industry, education and research come together to drive innovation, especially in the area of biotechnology. Serrania is the highland region of Tangea.   Fringed by mountains on both sides, Serrania has a relatively low population of around 5 million people.  It is renowned for the beauty of its landscape, with lakes and rivers winding through the highveldt.";

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "data-" + data + "please respond to my question based on the above data only. If the provided data is not sufficient, reply with - No information available. Do not write any extra information. My question - "
const userInputVariable = "TextEntry";
const aiOutputVariable = "response";

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

window.Script2 = function()
{
  const player = GetPlayer();
player.SetVar("data1", "");
player.SetVar("data2", "");
player.SetVar("data3", "");
player.SetVar("data4", "");
}

window.Script3 = function()
{
  const player = GetPlayer();
player.SetVar("data4", "yes"); 
}

window.Script4 = function()
{
  const player = GetPlayer();
player.SetVar("data2", "yes"); 
}

window.Script5 = function()
{
  const player = GetPlayer();
player.SetVar("data1", "yes"); 
}

window.Script6 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbwUtGfkXi-weRiuPD_CTXTcAJGpFZe3xLSSJ8aTYJvAGNelTpGShvFv3fwjjPf1xLEsIQ/exec";

const player = GetPlayer();
let feedBack = player.GetVar("name"); 
let feedBack1 = player.GetVar("email"); 
let feedBack2 = player.GetVar("TextEntry"); 
let feedBack3 = player.GetVar("data1"); 
let feedBack4 = player.GetVar("data2"); 
let feedBack5 = player.GetVar("data3");
let feedBack6 = player.GetVar("data4");

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({texta: feedBack, textb: feedBack1, textc: feedBack2, newspaper: feedBack3, radio: feedBack4, coffee: feedBack5, tv:feedBack6}) 
});
}

window.Script7 = function()
{
  const player = GetPlayer();
player.SetVar("data3", "yes");
}

};
