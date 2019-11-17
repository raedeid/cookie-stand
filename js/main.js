var Seattle = {
    max : 65,
    min : 23,
    avg : 6.3,
    location : 'Seattle', 
    statistic : [],
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    getRndInteger:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    avgCookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.getRndInteger()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total);
    },
    list : function(){
        var cookie = document.getElementById("cookie")
        var createPEl = document.createElement('p');
        cookie.appendChild(createPEl);
        createPEl.textContent = this.location ;
        var createUlEl = document.createElement('ul');
        // divEl.appendChild(createUlEl);
        var ulEi = document.getElementById('cookie').appendChild(createUlEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.statistic[i]}`+'cookies';
        }
    }
};


var Tokyo = {
    max : 24,
    min : 3,
    avg : 1.2,
    statistic : [],
    location : 'Tokyo', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    getRndInteger:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    avgCookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.getRndInteger()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total);
    },
    list : function(){
        var cookie = document.getElementById("cookie")
        var createPEl = document.createElement('p');
        cookie.appendChild(createPEl);
        createPEl.textContent = this.location ;
        var createUlEl = document.createElement('ul');
        // divEl.appendChild(createUlEl);
        var ulEi = document.getElementById('cookie').appendChild(createUlEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.statistic[i]}`+'cookies';
        }
    }
};

var Dubai = {
    max : 38,
    min : 11,
    avg : 3.7,
    statistic : [],
    location : 'Dubai', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    getRndInteger:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    avgCookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.getRndInteger()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total);
    },
    list : function(){
        var cookie = document.getElementById("cookie")
        var createPEl = document.createElement('p');
        cookie.appendChild(createPEl);
        createPEl.textContent = this.location ;
        var createUlEl = document.createElement('ul');
        // divEl.appendChild(createUlEl);
        var ulEi = document.getElementById('cookie').appendChild(createUlEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.statistic[i]}`+'cookies';
        }
    }
};

var Paris = {
    max : 38,
    min : 20,
    avg : 2.3,
    statistic : [],
    location : 'Paris', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    getRndInteger:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    avgCookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.getRndInteger()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total);
    },
    list : function(){
        var cookie = document.getElementById("cookie")
        var createPEl = document.createElement('p');
        cookie.appendChild(createPEl);
        createPEl.textContent = this.location ;
        var createUlEl = document.createElement('ul');
        // divEl.appendChild(createUlEl);
        var ulEi = document.getElementById('cookie').appendChild(createUlEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.statistic[i]}`+'cookies';
        }
    }
};

var lima = {
    max : 16,
    min : 2,
    avg : 4.6,
    statistic : [],
    location : 'Lima', 
    hours : ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'],
    getRndInteger:function() {
        // return Math.floor(Math.random() * (this.max - this.min) ) + this.min;
        return Math.floor(Math.random() * (this.max - this.min) + 1 + this.min);
    },
    avgCookiePerHour : function (){
        var total = 0
        for (var i=0;i<(this.hours.length-1);i++){
            var multiplication = Math.floor(this.getRndInteger()* this.avg) ;
            total = total + multiplication ;
            this.statistic.push(multiplication);
        }
        this.statistic.push(total);
    },
    list : function(){
        var cookie = document.getElementById("cookie")
        var createPEl = document.createElement('p');
        cookie.appendChild(createPEl);
        createPEl.textContent = this.location ;
        var createUlEl = document.createElement('ul');
        // divEl.appendChild(createUlEl);
        var ulEi = document.getElementById('cookie').appendChild(createUlEl);
        for (var i=0;i<this.hours.length;i++){
            var createLiEl = document.createElement('li');
            ulEi.appendChild(createLiEl) ;
            createLiEl.textContent = this.hours[i] +' : '+ `${this.statistic[i]}`+'cookies';
        }
    }
};

var loc = [Seattle,Tokyo,Dubai,Paris,lima];
for (var i =0;i<loc.length;i++){
    loc[i].avgCookiePerHour();
    loc[i].list();
    loc[i].getRndInteger();
    
}