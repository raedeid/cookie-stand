var hours = ['6:00am',
            '7:00am',
            '8:00am',
            '9:00am',
            '10:00am',
            '11:00am',
            '12:00am',
            '1:00pm',
            '2:00pm',
            '3:00pm',
            '4:00pm',
            '5:00pm',
            '6:00pm',
            '7:00pm',
            'Total'];
var loc = ['Seattle','Tokyo','Dubai','Paris','Lima','total'];
total = [];


function city (location,min,max,avg){
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.total = 0;
    this.statistic = []
    this.location = location;
    this.random = function(){
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);        
    };
    this.avgCookiePerHour = function (){
        var total = 0
        for (var i=0;i<hours.length-1;i++){
            var multiplication = Math.floor(this.random()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total)
        
    }
    this.avgCookiePerHour()
}


var Seattle = new city('Seattle',23,65,6.3,);
var Tokyo = new city('Tokyo',3,24,1.2);
var Dubai = new city('Dubai',11,38,3.7,);
var Paris= new city ('Paris',20,38,2.3,);
var Lima = new city ('Lima',2,16,4.6,);
// console.log(Seattle.statistic);
var tableDetail = [Seattle.statistic,Tokyo.statistic,Dubai.statistic,Paris.statistic,Lima.statistic,total];


for (var n=0;n<Seattle.statistic.length-1;n++){
    var total_vertical = 0
    for (var w=0;w<tableDetail.length-1;w++){
        total_vertical = total_vertical + tableDetail[w][n];    
    }
    total.push(total_vertical)
}
console.log(tableDetail);
var sumation = 0
var cookie = document.getElementById('cookie');
var  table = document.createElement('table');
cookie.appendChild(table);
var trEl = document.createElement('tr');
table.appendChild(trEl);
for (var n=0;n<tableDetail.length;n++){
    var trElDetail = document.createElement('tr');
    table.appendChild(trElDetail)
    var thDetail = document.createElement('th')
    thDetail.setAttribute('scope',"row");
    trElDetail.appendChild(thDetail);
    thDetail.textContent = loc[n] ;
    for (var w=0;w<Seattle.statistic.length;w++){
        var dtEl = document.createElement('td');
        trElDetail.appendChild(dtEl);
        dtEl.textContent = tableDetail[n][w];
        // if (n<5 && w<14){
        //     sumation = sumation + tableDetail [n][w];
        // console.log(tableDetail[w][n])
        }
}
// }total.push(sumation)
    
var thEl = document.createElement('th');
trEl.appendChild(thEl);
thEl.textContent = ''
for (var i=0;i<hours.length;i++){
    var thEl = document.createElement('th');
    thEl.setAttribute('scope',"col");
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];   
}

function footer(name,minimum,maximum,average){
    var footEl = document.createElement('tfoot');
    table.appendChild(footEl);
    var footEltr = document.createElement('tr');
    footEl.appendChild(footEltr);
    new_name = new city(name,minimum,maximum,average)
    var name_element = document.createElement('th');
    footEltr.appendChild(name_element)
    name_element.textContent = new_name.location
    for (var new_data=0;new_data<new_name.statistic.length;new_data++){
        var name_element = document.createElement('td');
        footEltr.appendChild(name_element);
        name_element.textContent = new_name.statistic[new_data];
        

    }
}
var new_location = document.getElementById('cookieshop');
function submit(event){
    event.preventDefault()
    var first = event.target.name.value;
    var seconed = event.target.min.value;
    var third = event.target.max.value;
    var four = event.target.avg.value;
    footer(first,parseInt(seconed),parseInt(third),parseFloat(four));
    
}
new_location.addEventListener('submit',submit)


