// Set the API endpoint
const samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(samples_url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(samples_url).then((data) => {
    console.log(data)

  // get all of the sampledatas
    let sampleData = data.samples;
    console.log(sampleData)
    
    function testOne(one) {
        return one.id == "940"
    }
    let sampleOne = sampleData.filter(testOne)
    

    sampleOneResults = sampleOne[0]
    console.log(sampleOneResults)

    let otu_ids = sampleOneResults.otu_ids
    let otu_labels = sampleOneResults.otu_labels
    let sample_values = sampleOneResults.sample_values

    let yVals = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse()
    let xVals = sample_values.slice(0,10).reverse()
    let labelVals = otu_labels.slice(0,10).reverse()

    console.log(yVals)
    console.log(xVals)
    console.log(labelVals)

let trace1= {
  x: xVals,
  y: yVals,
  text: labelVals,
  name: "OTU",
  type: "bar",
  orientation: "h"

}

// Apply a title to the layout
let layout = {
  title: "OTU Results",

};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("bar", [trace1], layout)})