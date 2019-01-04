
// d3.json("/data").then(data=> {
//   var price= data.map(row => row.price)
//   var score= data.map(row => row.points)
//   var tasterhandle= data.map(row => row.taster_twitter_handle)
//   // console.log(tasterhandle)


//   var trace1 = {
//     x: price,
//     y: score,
//     mode: "markers",
//     type: "scatter",
//     name: "PricePoints",
//     marker: {
//       color: "#2077b4",
//       symbol: "hexagram"
//     }
//   };
//   priceData= [trace1]
//   // Define the plot layout
//   var layout = {
//     title: "Price vs Score",
//     xaxis: { title: "Scores" },
//     yaxis: { title: "Price" }
//   };
  
//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot", priceData, layout);

// });

d3.json("/avg").then(avgPoints=>{
  console.log(avgPoints)
  var gc= avgPoints["@gordone_cellars"]
  var mm= avgPoints["@mattkettmann"]
  var pa= avgPoints["@paulgwine\x8cæ"]
  var sa= avgPoints["@suskostrzewa"]
  var vb= avgPoints["@vboone"]
  var vr= avgPoints["@vossroger"]
  var wt= avgPoints["@wawinereport"]
  var x_ax=  ['@gordone_cellars', '@mattkettmann', '@paulgwine\x8cæ', '@suskostrzewa','@vboone','@vossroger','@wawinereport']
  var y_ax=  [gc,mm,pa,sa,vb,vr,wt]
  console.log(x_ax)
  var data2 = {
      x: x_ax,
      y: y_ax,
      type: 'bar'
    };
  data33= [data2]
   // Define the plot layout
    var layout = {
      title: "Average Scores per user",
      xaxis: { title: "Users" },
      yaxis: { title: "Average score" }
    };
  
  Plotly.newPlot("plot", data33, layout);

});

// d3.json("/glu").then(avgPrice=>{
//   console.log(avgPrice)
//   var gc= avgPoints["@gordone_cellars"]
//   var mm= avgPoints["@mattkettmann"]
//   var pa= avgPoints["@paulgwine\x8cæ"]
//   var sa= avgPoints["@suskostrzewa"]
//   var vb= avgPoints["@vboone"]
//   var vr= avgPoints["@vossroger"]
//   var wt= avgPoints["@wawinereport"]
//   var x_ax=  ['@gordone_cellars', '@mattkettmann', '@paulgwine\x8cæ', '@suskostrzewa','@vboone','@vossroger','@wawinereport']
//   var y_ax=  [gc,mm,pa,sa,vb,vr,wt]
//   console.log(x_ax)
//   var data2 = {
//       x: x_ax,
//       y: y_ax,
//       type: 'bar'
//     };
//   data33= [data2]
//    // Define the plot layout
//     var layout = {
//       title: "Average Scores per user",
//       xaxis: { title: "Users" },
//       yaxis: { title: "Average score" }
//     };
  
//   Plotly.newPlot("plot", data33, layout);

// });