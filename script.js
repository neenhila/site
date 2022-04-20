var jsdate = new Date("Jan 13, 2019 14:44:44").getTime();

var jsInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - jsdate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("jsyear").innerText = years
    document.getElementById("jsmonth").innerText = months
    document.getElementById("jsday").innerText = days
    document.getElementById("jshour").innerText = hours
    document.getElementById("jsminute").innerText = minutes
    document.getElementById("jssecond").innerText = seconds
    document.getElementById("jsmillisecond").innerText = milliseconds
}, 81)

var pydate = new Date("Nov 24, 2018 02:15:41").getTime();

var pyInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - pydate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("pyyear").innerText = years
    document.getElementById("pymonth").innerText = months
    document.getElementById("pyday").innerText = days
    document.getElementById("pyhour").innerText = hours
    document.getElementById("pyminute").innerText = minutes
    document.getElementById("pysecond").innerText = seconds
    document.getElementById("pymillisecond").innerText = milliseconds
}, 81)

var javadate = new Date("Feb 15, 2022 03:15:12").getTime();

var javaInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - javadate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("javayear").innerText = years
    document.getElementById("javamonth").innerText = months
    document.getElementById("javaday").innerText = days
    document.getElementById("javahour").innerText = hours
    document.getElementById("javaminute").innerText = minutes
    document.getElementById("javasecond").innerText = seconds
    document.getElementById("javamillisecond").innerText = milliseconds
}, 81)

var restdate = new Date("Jan 17, 2019 16:11:24").getTime();

var restInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - restdate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("restyear").innerText = years
    document.getElementById("restmonth").innerText = months
    document.getElementById("restday").innerText = days
    document.getElementById("resthour").innerText = hours
    document.getElementById("restminute").innerText = minutes
    document.getElementById("restsecond").innerText = seconds
    document.getElementById("restmillisecond").innerText = milliseconds
}, 81)

var reactjsdate = new Date("Apr 13, 2022 06:15:21").getTime();

var reactjsInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - reactjsdate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("reactjsyear").innerText = years
    document.getElementById("reactjsmonth").innerText = months
    document.getElementById("reactjsday").innerText = days
    document.getElementById("reactjshour").innerText = hours
    document.getElementById("reactjsminute").innerText = minutes
    document.getElementById("reactjssecond").innerText = seconds
    document.getElementById("reactjsmillisecond").innerText = milliseconds
}, 81)

var nodedate = new Date("Jan 26, 2019 19:12:24").getTime();

var nodeInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - nodedate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("nodeyear").innerText = years
    document.getElementById("nodemonth").innerText = months
    document.getElementById("nodeday").innerText = days
    document.getElementById("nodehour").innerText = hours
    document.getElementById("nodeminute").innerText = minutes
    document.getElementById("nodesecond").innerText = seconds
    document.getElementById("nodemillisecond").innerText = milliseconds
}, 81)

var discorddate = new Date("Jan 20, 2019 04:03:15").getTime();

var discordInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - discorddate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("discordyear").innerText = years
    document.getElementById("discordmonth").innerText = months
    document.getElementById("discordday").innerText = days
    document.getElementById("discordhour").innerText = hours
    document.getElementById("discordminute").innerText = minutes
    document.getElementById("discordsecond").innerText = seconds
    document.getElementById("discordmillisecond").innerText = milliseconds
}, 81)

var mongodate = new Date("Jun 20, 2019 08:10:22").getTime();

var mongoInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - mongodate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("mongoyear").innerText = years
    document.getElementById("mongomonth").innerText = months
    document.getElementById("mongoday").innerText = days
    document.getElementById("mongohour").innerText = hours
    document.getElementById("mongominute").innerText = minutes
    document.getElementById("mongosecond").innerText = seconds
    document.getElementById("mongomillisecond").innerText = milliseconds
}, 81)

var sqlitedate = new Date("Mar 20, 2022 19:15:44").getTime();

var sqliteInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - sqlitedate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("sqliteyear").innerText = years
    document.getElementById("sqlitemonth").innerText = months
    document.getElementById("sqliteday").innerText = days
    document.getElementById("sqlitehour").innerText = hours
    document.getElementById("sqliteminute").innerText = minutes
    document.getElementById("sqlitesecond").innerText = seconds
    document.getElementById("sqlitemillisecond").innerText = milliseconds
}, 81)

var electronjsdate = new Date("Aug 16, 2021 16:19:17").getTime();

var electronjsInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - electronjsdate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("electronjsyear").innerText = years
    document.getElementById("electronjsmonth").innerText = months
    document.getElementById("electronjsday").innerText = days
    document.getElementById("electronjshour").innerText = hours
    document.getElementById("electronjsminute").innerText = minutes
    document.getElementById("electronjssecond").innerText = seconds
    document.getElementById("electronjsmillisecond").innerText = milliseconds
}, 81)

var herokudate = new Date("Feb 26, 2019 18:24:11").getTime();

var herokuInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - herokudate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("herokuyear").innerText = years
    document.getElementById("herokumonth").innerText = months
    document.getElementById("herokuday").innerText = days
    document.getElementById("herokuhour").innerText = hours
    document.getElementById("herokuminute").innerText = minutes
    document.getElementById("herokusecond").innerText = seconds
    document.getElementById("herokumillisecond").innerText = milliseconds
}, 81)

var luadate = new Date("Apr 19, 2022 09:10:24").getTime();

var luaInterval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - luadate;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("luayear").innerText = years
    document.getElementById("luamonth").innerText = months
    document.getElementById("luaday").innerText = days
    document.getElementById("luahour").innerText = hours
    document.getElementById("luaminute").innerText = minutes
    document.getElementById("luasecond").innerText = seconds
    document.getElementById("luamillisecond").innerText = milliseconds
}, 81)

var html5date = new Date("Jul 19, 2020 19:10:44").getTime();

var html5Interval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - html5date;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("html5year").innerText = years
    document.getElementById("html5month").innerText = months
    document.getElementById("html5day").innerText = days
    document.getElementById("html5hour").innerText = hours
    document.getElementById("html5minute").innerText = minutes
    document.getElementById("html5second").innerText = seconds
    document.getElementById("html5millisecond").innerText = milliseconds
}, 81)

var css3date = new Date("Jul 20, 2020 06:16:15").getTime();

var css3Interval = setInterval(function (){
    let now = new Date().getTime();
    let distance = now - css3date;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24) % 30);
    let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(distance / (1000 * 60) % 60);
    let seconds = Math.floor(distance / (1000) % 60);
    let milliseconds = Math.floor(distance % 100)
    document.getElementById("css3year").innerText = years
    document.getElementById("css3month").innerText = months
    document.getElementById("css3day").innerText = days
    document.getElementById("css3hour").innerText = hours
    document.getElementById("css3minute").innerText = minutes
    document.getElementById("css3second").innerText = seconds
    document.getElementById("css3millisecond").innerText = milliseconds
}, 81)
