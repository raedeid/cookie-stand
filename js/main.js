var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Total'];
function city (min,max,avg,location){
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
}


var loc = ['Seattle','Tokyo','Dubai','Paris','Lima','total'];
var Seattle = new city(23,65,6.3,'Seattle');
var Tokyo = new city(3,24,1.2,'Tokyo');
var Dubai = new city(11,38,3.7,'Dubai');
var Paris= new city (20,38,2.3,'Paris');
var Lima = new city (2,16,4.6,'Lima');
Seattle.avgCookiePerHour();
Tokyo.avgCookiePerHour();
Dubai.avgCookiePerHour();
Paris.avgCookiePerHour();
Lima.avgCookiePerHour();
total = [];
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
        if (n<5 && w<14){
            sumation = sumation + tableDetail [n][w];
        // console.log(tableDetail[w][n])
        }
    }
}total.push(sumation)
    
var thEl = document.createElement('th');
trEl.appendChild(thEl);
thEl.textContent = ''
for (var i=0;i<hours.length;i++){
    var thEl = document.createElement('th');
    thEl.setAttribute('scope',"col");
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];   
}
var footEl = document.createElement('tfoot');
table.appendChild(footEl);
var footEltr = document.createElement('tr')
footEl.appendChild(footEltr);




