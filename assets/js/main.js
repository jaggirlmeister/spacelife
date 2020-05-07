// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    //duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

const $planet1 = document.querySelector( '#planet1' );
const $planet2 = document.querySelector( '#planet2' );
const $planet3 = document.querySelector( '#planet3' );

const $info1 = document.querySelector( '#info1' );

let flag = false;

function clicked(num){

  const a = num.toString();
  const $selectedInfo = document.querySelector( '#info'+a );

  if(flag == true){
    $selectedInfo.classList.remove("show");
    $selectedInfo.classList.add("hide");
    flag = false
  }
  
  zoom.to({
    element: document.querySelector( '#planet'+a ),
    callback: function() { 
      $selectedInfo.classList.remove("hide");
      $selectedInfo.classList.add("show"); 
    }  //También lo puedo agregar arriba al inicio de clicked(). Sin usar callback.
  });

  flag = true;
}

var myVar;

function loadPlanets(){
    myVar = setTimeout(helloPlanets, 10000);
}

function helloPlanets(){
    
    $planet1.classList.add("show");
    $planet2.classList.add("show");
    $planet3.classList.add("show");

    $planet1.classList.remove("hide");
    $planet2.classList.remove("hide");
    $planet3.classList.remove("hide");
}

/* Charts */

