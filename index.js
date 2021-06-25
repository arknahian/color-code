var columHover = document.getElementsByClassName("column");
for (let i = 0; i < columHover.length; i++) {
    const element = columHover[i];
    element.addEventListener("mouseover", function(){
        var cardN = document.getElementsByClassName("card");
        for (let i = 0; i < cardN.length; i++) {
            const element = cardN[i];
            var btnAttribute = document.createElement("button");
            // btnAttribute.innerHTML = "Click Here";
            
        }
    })
}
var columHove = document.getElementsByClassName("column");
for (let i = 0; i < columHove.length; i++) {
    const element = columHove[i];
    element.addEventListener("onmouseout", function(){
        var cardN = document.getElementsByClassName("card");
        for (let i = 0; i < cardN.length; i++) {
            const element = cardN[i];
        }

    })
}

var buttonOver = document.getElementsByClassName("card");
for (let i = 0; i < buttonOver.length; i++) {
    const element = buttonOver[i];
    element.addEventListener("click", function(){
        console.log("clicked")
    })
}


var openPopUp= document.getElementsByClassName("open-popup-btn");

for (let i = 0; i < openPopUp.length; i++) {
    const element = openPopUp[i];
    element.addEventListener("click",function(){
        var activePopUp = document.getElementsByClassName("popup")[0].classList.add("active");
        if (activePopUp = true) {
            setTimeout(function(){ document.getElementsByClassName("popup")[0].classList.remove("active"); }, 1000);
         }
      });      
}


// #f6e58d
var beekeeper = document.getElementById("beekeeper");












// const element = document.getElementsByClassName("btn-copy");
// for (let i = 0; i < element.length; i++) {
//     const copyButton = element[i];
//     copyButton.addEventListener("click", async function (event) {

//         const content = document.getElementById('#f6e58d').textContent;
//         await navigator.clipboard.writeText(content);
//         console.log(await navigator.clipboard.readText());

//     });
// }
// const pasteButton = document.getElementById("btn-paste");

// const pasteArticle = document.getElementById('content-paste');


// // execCommand -- deprecated
// // use clipboard api moving forward


// pasteButton.addEventListener('click', async function (event){
//     // clear paste article
//     pasteArticle.textContent = '';
//     try{
//         // this will return an array of clipboard item
//         const data = await navigator.clipboard.read();

//         // check if img
//         const clipboardContent = data[0];

//         console.log(clipboardContent);

//         // blob is a data format that represent a large binary file
//         // eg pdf, img and etc
//         const blob = await clipboardContent.getType('image/png');
//         // retrieve the blob url so we can pass into image element
//         const blobUri = window.URL.createObjectURL(blob);
//         const img = document.createElement('img');
//         img.src = blobUri;
//         pasteArticle.appendChild(img);
//     }catch(err){
//         console.log(err);
//         // if there is an error, that means there is no image
//         const text = await navigator.clipboard.readText();
//         pasteArticle.textContent = text;
//     }
    
    

// })





function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy1').onclick = function() {
    Clipboard_CopyTo('#130f40');
  }



  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy2').onclick = function() {
    Clipboard_CopyTo('#4834d4');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy3').onclick = function() {
    Clipboard_CopyTo('#be2edd');
  }

  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy4').onclick = function() {
    Clipboard_CopyTo('#535c68');
  }



  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy5').onclick = function() {
    Clipboard_CopyTo('#22a6b3');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy6').onclick = function() {
    Clipboard_CopyTo('#95afc0');
  }




  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy7').onclick = function() {
    Clipboard_CopyTo('#30336b');
  }




  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy8').onclick = function() {
    Clipboard_CopyTo('#686de0');
  }






  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy9').onclick = function() {
    Clipboard_CopyTo('#e056fd');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy10').onclick = function() {
    Clipboard_CopyTo('#7ed6df');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy11').onclick = function() {
    Clipboard_CopyTo('#c7ecee');
  }



  
  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy12').onclick = function() {
    Clipboard_CopyTo('#6ab04c');
  }












  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy13').onclick = function() {
    Clipboard_CopyTo('#eb4d4b');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy14').onclick = function() {
    Clipboard_CopyTo('#f0932b');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy15').onclick = function() {
    Clipboard_CopyTo('#f9ca24');
  }



  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy16').onclick = function() {
    Clipboard_CopyTo('#dff9fb');
  }




  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy17').onclick = function() {
    Clipboard_CopyTo('#badc58');
  }



  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy18').onclick = function() {
    Clipboard_CopyTo('#ff7979');
  }



  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy19').onclick = function() {
    Clipboard_CopyTo('#ffbe76');
  }


  function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#copy20').onclick = function() {
    Clipboard_CopyTo('#f6e58d');
  }