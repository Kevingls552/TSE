
function Consultar(){
    var ELECCION = "201902";
    var _PRESIDENTE = "1";
    var _DEP = $("#DEP").val();
    var _MUN = "0";

$.post('https://ws2v.tse.org.gt/api/tse/resultados',{

    PROCESO: ELECCION,
    TIPOELECCION: _PRESIDENTE,
    DEP: _DEP,
    MUN: _MUN
},
function (data, status) {
console.log(data.data["0"].V1);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['UNE', 'VAMOS'],
        datasets: [{
            label: 'Segunda Vuelta',
            data: [data.data["0"].V2,data.data["0"].V1,],
            backgroundColor: [
                'green',
                'blue' 
               
            ],
            borderColor: [
                'green',
                'blue' 
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});







}
    ) 
    console.log(_DEP);





}