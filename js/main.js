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


var Seattle = new city('Seattle',23,65,6.3);
var Tokyo = new city('Tokyo',3,24,1.2);
var Dubai = new city('Dubai',11,38,3.7);
var Paris= new city ('Paris',20,38,2.3);
var Lima = new city ('Lima',2,16,4.6);
// console.log(Seattle.statistic);
var tableDetail = [Seattle.statistic,Tokyo.statistic,Dubai.statistic,Paris.statistic,Lima.statistic,total];


function totalize(){
    var total_horzintal = 0 
    for (var n=0;n<Seattle.statistic.length-1;n++){
        var total_vertical = 0;
        for (var w=0;w<tableDetail.length-1;w++){
            total_vertical = total_vertical + tableDetail[w][n];    
        }
        total.push(total_vertical);
        total_horzintal = total_horzintal + total_vertical ;
        }
    total.push(total_horzintal);

}
totalize();

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
    var footEltr = document.createElement('tr');
    table.appendChild(footEltr);
    new_name = new city(name,minimum,maximum,average)
    var name_element = document.createElement('th');
    footEltr.appendChild(name_element)
    name_element.textContent = new_name.location
    for (var new_data=0;new_data<new_name.statistic.length;new_data++){
        var name_element = document.createElement('td');
        footEltr.appendChild(name_element);
        name_element.textContent = new_name.statistic[new_data];
        
    }
    tableDetail.splice(5,0,new_name.statistic);
    total = []
    totalize();
    var new_row = document.createElement('tfoot');
    table.appendChild(new_row)
    var new_child = document.createElement('tr');
    new_row.appendChild(new_child);
    var new_coloum = document.createElement('th');
    new_child.appendChild(new_coloum);
    new_coloum.textContent = 'Total'
    for (var q=0;q<total.length;q++){
        new_coloum = document.createElement('td');
        new_child.appendChild(new_coloum);
        new_coloum.textContent = total[q]
    }
}
var new_location = document.getElementById('cookieshop');
function submit(event){
    event.preventDefault()
    var first = event.target.name.value;
    if (first){
        var seconed = parseInt( event.target.min.value);
        if (seconed > 0){
            var third = parseInt(event.target.max.value);
            if(third && parseInt(third) > seconed){
                var four = parseFloat(event.target.avg.value);
                if (four<third && four>seconed){
                    console.log(!(isNaN(four)))
                    footer(first,seconed,third,four);

                }else{
                    alert('please add number for average');

                }


            }else if(third<seconed){
                alert('please add maximum upper thn minumum ');
            }else{
                alert('please add number for maximum');
            }


        }else{
            alert('please add number for minumum');
        }
    }else{
        alert('please add your name');
    }
   
    
}
new_location.addEventListener('submit',submit)


