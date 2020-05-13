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

/* Zoom */
const $planet1 = document.querySelector( '#planet1' );
const $planet2 = document.querySelector( '#planet2' );
const $planet3 = document.querySelector( '#planet3' );

const $info1 = document.querySelector( '#info1' );
const $info2 = document.querySelector( '#info2' );
const $info3 = document.querySelector( '#info3' );

const $chart = document.querySelector('.chartContainer');

let flag = false;

function clicked(num){

  const a = num.toString();
  const $selectedInfo = document.querySelector( '#info'+a );
/*
  if(flag == true){
    $selectedInfo.classList.remove("show");
    $selectedInfo.classList.add("hide");
    flag = false
  }
  */
  
  zoom.to({
    element: document.querySelector( '#planet'+a ),
    callback: function() { 
      //Agregar Charts acá

      $chart.classList.remove("hide");
      $chart.classList.add("show"); 
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

let myChart = document.getElementById('myChart').getContext('2d');

// Global Options

Chart.defaults.global.defaultFontFamily = 'Rajdhani';
Chart.defaults.global.defaultFontSize =  18;
Chart.defaults.global.defaultFontColor = '#ffffff';

let massPopChart = new Chart(myChart,{
  type: 'bubble', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets: [{
      label: 'Population',
      data: [
        /*Purple*/
        {
          x: 2020,
          y: 15,
          r: 15
        },
        {
          x: 2022,
          y: 24,
          r: 10
        },
        {
          x: 2024,
          y: 15,
          r: 18
        },
        {
          x: 2030,
          y: 10,
          r: 7
        },
        /*Green*/
        {
          x: 2020,
          y: 17,
          r: 10
        },
        {
          x: 2022,
          y: 20,
          r: 8
        },
        {
          x: 2024,
          y: 20,
          r: 20
        },
        {
          x: 2030,
          y: 15,
          r: 10
        },
        /*Orange*/
        {
          x: 2025,
          y: 12,
          r: 10
        },
        {
          x: 2026,
          y: 14,
          r: 13
        },
        {
          x: 2028,
          y: 20,
          r: 30
        }
        /*
        181045,
        153060,
        106519,
        105162,
        95072*/
      ],
      //backgroundColor:'green'
      backgroundColor:[
        //Violet
        '#b538b56b',
        '#b538b56b',
        '#b538b56b',
        '#b538b56b',
        //Green
        '#38afb56b',
        '#38afb56b',
        '#38afb56b',
        '#38afb56b',
        //Orange
        '#b571386b',
        '#b571386b',
        '#b571386b'
      ],
      //borderWidth:0,
      //borderColor:'#0000007a',
      //hoverBorderWidth:'3',
     // hoverBorderColor:'#0000007a',
      //hoverRadius: '1',
      //radius: 3
    }]
  },
  options:{
    responsive : true,
    scaleBeginAtZero : false,
    devicePixelRatio: 7,
    title:{
      display: true,
      text: 'Bussiness in Saiph',
      fontSize: 25,
    },
    legend:{
      display: true,
      position:'right',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      width: 220,
      height: 110
    },
    tooltips:{
      enabled:true
    }
  }
});






/*
let massPopChart = new Chart(myChart,{
  type: 'bubble', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  devicePixelRatio: 10,
  data: {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets: [{
      label:'Population',
      data: [
        {
          x: 617594,
          y: 5,
          r: 15
        },
        {
          x: 200,
          y: 24,
          r: 10
        },
        {
          x: 10,
          y: 4,
          r: 7
        }
        //181045,
        //153060,
        //106519,
        //105162,
        //95072
      ],
      //backgroundColor:'green'
      backgroundColor:[
        'violet',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:'3',
      hoverBorderColor:'#000',
      radius: 3
    }]
  },
  options:{
    title:{
      display: true,
      text: 'Largest Cities in Saiph',
      fontSize: 25
    },
    legend:{
      display: true,
      position:'right',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      },
      width: 220,
      height: 110
    },
    tooltips:{
      enabled:false
    }
  }
});

*/