$(document).ready(() =>{
  $('#openbtn').on('click' , ()=>{
    
    $('.leftEls').toggle();
  })
  
  
  
  // first chart
  
  var vertical = ["one", "two", "three", "four", "five" , "six" , "seven"];
  
  new Chart($('#myChart'), {
  type: "line",
  data: {
    labels: vertical,
    datasets: [{
      label: 'first',
      order:1,
      pointRadius: 4,
      borderWidth: 0,
      backgroundColor: 'rgb(221, 134, 131 )',
      data: [1,30,20,60,5,60,0],
      color: 'rgb(255, 255, 255)'
    },
    {
      label: 'second',
      pointRadius: 4,
      borderWidth: 0,
      backgroundColor: 'rgb(119, 112, 209 , 0.9)',
      data: [1,20,70,15,100,5,50],
      color: 'rgb(255, 255, 255)'
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      scales: {
        title: {
            display: false
        },
        xAxes: [{
          display: false,
          gridLines: {
            display: false
          }
        }],
        
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false
            }
          },
        ],
      },
    }
  }
  
  });
  
  
  // second chart
  const data = {
    labels: ["1","2","3","4","5","6","7"],
    datasets: [{
        label: 'first',
        data: [100, 75, 50, 70, 60, 68, 95],
        backgroundColor: 'rgb(240, 61, 99)',
        barPercentage: 0.8,
        categoryPercentage: 0.5,
    },
    {
        label: 'second',
        data: [90, 65, 40, 60, 50, 60, 90],
        backgroundColor: 'rgb(133, 110, 236)',
        barPercentage: 0.8,
        categoryPercentage: 0.5,
  
    }
  
    ]
   }; 
  
  new Chart($('#chart') , {
    type: 'bar',
    data,
    options: {
        legend: {display: false},
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    })
    // TO DO LIST

  $('#submit').click(
    function(){
        var toAdd = $('input[name=ListItem]').val();
          $('#ul').append('<li id="todoList">'+'<input type="checkbox" class="ms-5" id="checkbox"></input>'+'<div class="toAdd me-3">'+ toAdd +'</div>'+"<span id='trashy'> <i class='mdi mdi-trash-can-outline'> </i> </span>"+ '</li>');
          $('#ul').on('click' ,'#trashy' , function(){
            if($('#checkbox').is(':checked')){
              $(this).parent('li').fadeOut()
            }
            
          })
  });
})




