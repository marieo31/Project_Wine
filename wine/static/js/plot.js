var data= data; 
  function draw(data) {
     console.log(data[0]); 
  }
  draw(data);
// data
//   price= data.map(row => row.price)
//      console.log(price[0])
//   score= data.map(row => row.points)
//   console.log(score[0])
//   year= data.map(row => row.Year)
//   console.log(year[0])
// // Set the dimensions of the canvas / graph
  
//   // Create our first trace
//   var trace1 = {
//     x: year,
//     y: score,
//     type: "scatter"
//   };
  
//   // Create our second trace
//   var trace2 = {
//     x: year,
//     y: price,
//     type: "scatter"
//   };
  
//   // The data array consists of both traces
//   var data = [trace1, trace2];
  
//   // Note that we omitted the layout object this time
//   // This will use default parameters for the layout
//   Plotly.newPlot("plot", data);
  

  chart = {
    const svg = d3.select(DOM.svg(width, height));
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line);
    
    return svg.node();
  }