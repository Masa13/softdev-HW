console.log('owo');

var republicans_allotted = [
    ["Iowa",30],
    ["New Hampshire",23],
    ["Nevada",30],
    ["South Carolina",50],
    ["Alabama",50],
    ["Arkansas",39],
    ["Colorado",0],
    ["Georgia",72],
    ["Massachusetts",42],
    ["Minnesota",38],
    ["Oklahoma",40],
    ["Tennessee",58],
    ["Texas",155],
    ["Vermont",16],
    ["Virginia",49],
    ["American Samoa",0],
    ["Kansas",40],
    ["Louisiana",41],
    ["Maine",23],
    ["Michigan",59],
    ["Mississippi",37],
    ["Northern Mariana Islands",9],
    ["Florida",99],
    ["Illinois",65],
    ["Missouri",30],
    ["North Carolina",71],
    ["Ohio",66],
    ["Idaho",32],
    ["Alaska",28],
    ["Hawaii",19],
    ["Wyoming",11],
    ["Connecticut",28],
    ["Kentucky",46],
    ["Puerto Rico",23],
    ["District of Columbia",19]
];

var republicans_notAllotted = [
    ["Nebraska",36], 
    ["Arizona",58],
    ["Utah",40],
    ["Washington",44],
    ["Wisconsin",42],
    ["New York",95],
    ["Connecticut",28],
    ["Delaware",16],
    ["Maryland",38],
    ["Pennsylvania",71],
    ["Rhode Island",19],
    ["Indiana",57],
    ["Guam",9],
    ["West Virginia",34],
    ["Oregon",28],
    ["Virgin Islands",9],
    ["California",172],
    ["Montana",27],
    ["New Jersey",51],
    ["New Mexico",24],
    ["North Dakota",28],
    ["South Dakota",29],
];
var scale = d3.scale.linear()
    .domain([0,600])
    .range([0,2000]);
d3.select('.allotted')
    .selectAll('div')
    .data(republicans_allotted)
    .enter().append('div')
    .style('width', function(d) {
	return scale(d[1]) + 'px';})
    .text(function(d) {
	return d[0] + " " + d[1];
    });

d3.select('.notAlloted')
    .selectAll('div')
    .data(republicans_notAllotted)
    .enter().append('div')
    .style('width', function(d) {
	return scale(d[1]) + 'px';})
    .text(function(d) {
	return d[0] + " " + d[1];
    });
