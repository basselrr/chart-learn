

let data=["bassel","student",52]

$('#click-me' ).on("click" ,function(){

   
    $('#bassel').append('<div class="box" >hala</div>');
    $('#r-me' ).on("click" ,function(){
        $(this).hide()
 

})


   
  

})


let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
function myHtml(){
  let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
const bage = document.getElementById("boxey")
bage.innerHTML = html;

}




