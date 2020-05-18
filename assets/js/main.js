//Get Date
let actualDate;
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
actualDate = `${months[d.getMonth()]} ${d.getDate()} 2030`;

const $date = document.querySelector( '#date' );
$date.innerHTML = actualDate;

// Wrap every letter in a span
function wrap(){
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
}

/*Intro Text*/ 
const $line1 = document.querySelector( '#line1' );
const $line2 = document.querySelector( '#line2' );
const $line3 = document.querySelector( '#line3' );
const $line4 = document.querySelector( '#line4' );
const $line5 = document.querySelector( '#line5' );

const $title = document.querySelector( '#mainTitle' );

/* Zoom */
const $planet1 = document.querySelector( '#planet1' );
const $planet2 = document.querySelector( '#planet2' );
const $planet3 = document.querySelector( '#planet3' );

const $info1 = document.querySelector( '#info1' );
const $info2 = document.querySelector( '#info2' );
const $info3 = document.querySelector( '#info3' );

const $chart = document.querySelectorAll('.chartContainer');
const $chart1 = document.querySelector( '#chart1' );
const $chart2 = document.querySelector( '#chart2' );
const $chart3 = document.querySelector( '#chart3' );

let flag = false;

function clicked(num){

  const a = num.toString();
  const $selectedInfo = document.querySelector( '#info'+a );
  const $selectedChart = document.querySelector( '#chart'+a );
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

      //$chart.classList.remove("hide");
      //$chart.classList.add("show"); 

      $selectedChart.classList.remove("hide");
      $selectedChart.classList.add("show"); 

      $selectedInfo.classList.remove("hide");
      $selectedInfo.classList.add("show"); 


    }  //También lo puedo agregar arriba al inicio de clicked(). Sin usar callback.
  });

  flag = true;
}

var myVar;
var happen;
var loadDate;

function loadMap(){
    loadDate = setTimeout(showDate, 5000);
    myVar = setTimeout(helloPlanets, 10500);
}

function introText(){
  happen = setTimeout(enfasis, 44000);
}

function showDate(){
  $date.classList.add("anim-typewriterTitle");
  $date.classList.remove("hide");
}

function helloPlanets(){
    
    $planet1.classList.add("show");
    $planet2.classList.add("show");
    $planet3.classList.add("show");

    $planet1.classList.remove("hide");
    $planet2.classList.remove("hide");
    $planet3.classList.remove("hide");
}

function enfasis(){
  $line1.classList.add("hide");
  $line2.classList.add("hide");
  $line3.classList.add("hide");
  $line4.classList.add("hide");
  $line5.classList.add("hide");

  theTitle();
}

function theTitle(){ 
  $title.classList.add("ml3");
  wrap();
  $title.classList.remove("hide");
  $title.classList.add("show");

  loadMap();
}

/* Charts */

let saiphChart = document.getElementById('saiphChart').getContext('2d');
let apolloChart = document.getElementById('apolloChart').getContext('2d');
let sigmaChart = document.getElementById('sigmaChart').getContext('2d');

// Global Options

Chart.defaults.global.defaultFontFamily = "'Rajdhani', sans-serif";
Chart.defaults.global.defaultFontSize =  12;
Chart.defaults.global.defaultFontColor = '#ffffff';

let massPopChart = new Chart(saiphChart,{
  type: 'bubble', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets: [
      {
      label: 'Entertainment Industry',
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
        } 
      ],

      backgroundColor: '#8b008b7a'
      },
      {
        label: 'Technology Industry',
        data: [
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
        }
        ],

        backgroundColor: '#0090d47a'
      },
      {
        label: 'Space Transportation',
        data: [
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
        ],
        backgroundColor: '#00188b7a'
      }
    ],
    borderWidth:4,
    borderColor:'rgba(0, 0, 0, 0.8)',
    hoverBorderWidth:'3',
    hoverBorderColor:'rgba(0, 0, 0, 0.8)',
    radius: 3
  },
  options:{
    responsive : true,
    scaleBeginAtZero : false,
    devicePixelRatio: 7,
    title:{
      display: true,
      text: 'Bussinesses Trends in Saiph',
      fontStyle: 'normal',
      fontSize: 18,
    },
    legend:{
      display: true,
      position:'bottom',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:0,
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


/* CHART 2 */


let secondChart = new Chart(apolloChart,{
  type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
      label: 'Companies & Research',
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
          x: 2029,
          y: 15,
          r: 18
        },
        {
          x: 2030,
          y: 20,
          r: 7
        },
        {
          x: 2030,
          y: 20,
          r: 7
        } 
      ],

      backgroundColor: '#8b008b7a'
      },
      {
        label: 'Visitors',
        data: [
        /*Green*/
        {
          x: 2020,
          y: 13,
          r: 10
        },
        {
          x: 2022,
          y: 18,
          r: 8
        },
        {
          x: 2024,
          y: 20,
          r: 20
        },
        {
          x: 2030,
          y: 21,
          r: 10
        },
        {
          x: 2030,
          y: 25,
          r: 10
        }
        ],

        backgroundColor: '#0090d47a'
      },
      {
        label: 'Residents',
        data: [
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
          y: 17,
          r: 30
        },
        {
          x: 2028,
          y: 18,
          r: 30
        },
        {
          x: 2028,
          y: 15,
          r: 30
        }
        ],
        backgroundColor: '#00188b7a'
      }
    ],
    borderWidth:4,
    borderColor:'rgba(0, 0, 0, 0.8)',
    hoverBorderWidth:'3',
    hoverBorderColor:'rgba(0, 0, 0, 0.8)',
    radius: 3
  },
  options:{
    responsive : true,
    scaleBeginAtZero : false,
    devicePixelRatio: 7,
    title:{
      display: true,
      text: 'Travels to Apollo',
      fontStyle: 'normal',
      fontSize: 18,
    },
    legend:{
      display: true,
      position:'bottom',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:0,
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


//CHART 3


let thirdChart = new Chart(sigmaChart,{
  type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
      label: 'Bussinessmen',
      data: [
        /*Purple*/
        {
          x: 2024,
          y: 15,
          r: 15
        },
        {
          x: 2025,
          y: 24,
          r: 10
        },
        {
          x: 2026,
          y: 15,
          r: 18
        },
        {
          x: 2027,
          y: 20,
          r: 7
        },
        {
          x: 2028,
          y: 18,
          r: 7
        },
        {
          x: 2029,
          y: 16,
          r: 7
        },
        {
          x: 2030,
          y: 14,
          r: 7
        }
      ],

      backgroundColor: '#8b008b7a'
      },
      {
        label: 'Artists',
        data: [
        /*Green*/
        {
          x: 2020,
          y: 13,
          r: 10
        },
        {
          x: 2022,
          y: 18,
          r: 8
        },
        {
          x: 2024,
          y: 20,
          r: 20
        },
        {
          x: 2030,
          y: 21,
          r: 10
        },
        {
          x: 2030,
          y: 25,
          r: 10
        },
        {
          x: 2030,
          y: 18,
          r: 10
        },
        {
          x: 2030,
          y: 16,
          r: 10
        }
        ],

        backgroundColor: '#00188b7a'
      },
      {
        label: 'Civilians',
        data: [
        /*Light blue*/
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
          y: 17,
          r: 30
        },
        {
          x: 2028,
          y: 18,
          r: 30
        },
        {
          x: 2028,
          y: 15,
          r: 30
        },
        {
          x: 2028,
          y: 17,
          r: 30
        },
        {
          x: 2028,
          y: 25,
          r: 30
        }
        ],
        backgroundColor: '#0090d47a'
      }
    ],
    borderWidth:4,
    borderColor:'rgba(0, 0, 0, 0.8)',
    hoverBorderWidth:'3',
    hoverBorderColor:'rgba(0, 0, 0, 0.8)',
    radius: 3
  },
  options:{
    responsive : true,
    scaleBeginAtZero : false,
    devicePixelRatio: 7,
    title:{
      display: true,
      text: 'Sigma’s visitors',
      fontStyle: 'normal',
      fontSize: 18,
    },
    legend:{
      display: true,
      position:'bottom',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      },
      width: 300,
      height: 160
    },
    tooltips:{
      enabled:true
    }
  }
});



/*
let secondChart = new Chart(apolloChart,{
  type: 'doughnut', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
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