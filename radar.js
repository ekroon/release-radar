function createQuarterCircle(radius) {
    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
        .startAngle(0)
        .endAngle(Math.PI / 2);

    var svg = d3.select("body").append("svg")
        .attr("width", 2 * radius)
        .attr("height", 2 * radius)
        .append("g")
        .attr("transform", "translate(" + 0 + "," + radius + ")");

    svg.append("path")
        .attr("d", arc)
        .attr("fill", "red");
}

function createCircle(radius, padding) {
  var svg = d3.select("body").append("svg")
    .attr("width", 2 * radius + 20)
    .attr("height", 2 * radius + 20)
    .append("g")
    .attr("transform", "translate(" + (radius + 10) + "," + (radius + 10) +  ")");

  var quarters = [
    { startAngle: 0, endAngle: Math.PI / 2, fill: "green", translateX: padding, translateY: -padding },
    { startAngle: Math.PI / 2, endAngle: Math.PI, fill: "yellow", translateX: padding, translateY: padding },
    { startAngle: Math.PI, endAngle: 1.5 * Math.PI, fill: "blue", translateX: -padding, translateY: padding },
    { startAngle: 1.5 * Math.PI, endAngle: 2 * Math.PI, fill: "gray", translateX: -padding, translateY: -padding }
  ];

  quarters.forEach(function(quarter) {
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius * 0.45)
      .startAngle(quarter.startAngle)
      .endAngle(quarter.endAngle);

    svg.append("path")
      .attr("d", arc)
      .attr("fill", quarter.fill)
      .attr("transform", "translate(" + quarter.translateX + "," + quarter.translateY + ")");

    var arc = d3.arc()
      .innerRadius(radius * 0.50)
      .outerRadius(radius)
      .startAngle(quarter.startAngle)
      .endAngle(quarter.endAngle);

    svg.append("path")
      .attr("d", arc)
      .attr("fill", quarter.fill)
      .attr("transform", "translate(" + quarter.translateX + "," + quarter.translateY + ")");
  });
}


// on dom load run something
document.addEventListener("DOMContentLoaded", function (event) { 
      createCircle(400, 10);
});