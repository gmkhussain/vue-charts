<template>
    <div>
        <h5>Data Binding in D3</h5>

        
        <div id="joinData">
            <span>Join Data to Existing Element</span>
            <p>N/A</p>
        </div>

        <hr />

        <div id="joinMultiData">
            <span>joining data to multiple elements</span>
            <p></p>
            <p></p>
            <p></p>
        </div>


        <div id="dataBinding">
            <span>Data Binding</span>
            <p>N/A</p>
            <p></p>
        </div>


        <div id="enters">
            <span>enter()</span>

        </div>






        <div id="changeTextColor">
            <span>Change Text Color</span>
            <p></p>
        </div>


    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: "Ch6",
    mounted() {

        // Join Data to Existing Element
        var myData = ["Hello World!"];
     
        var p = d3.select("#joinData")
            .selectAll("p")
            .data(myData)
            .text(function (d) {
                // d = Data here
                return d;
            });

      








        // ****** Joining data to multiple elements ****** //

        var myData2 = ["Hello World!", "Hello D3", "Hello JavaScript"];
     
        var p2 = d3.select("#joinMultiData")
                .selectAll("p")
                .data(myData2)
                .text(function (d, i) {
                    console.log(i)
                    return `${i} - ${d}`;
                });










        var myData3 = [1,2,3,4];

        var p3 = d3.select("#dataBinding")
                .selectAll("p")
                .data(myData3)
                .text(function(d, i) {
                    console.log(i)
                    return d;
                } );





        
        /*
           The enter() method dynamically creates placeholder
           references corresponding to the number of data values
        */

        var data4 = [4, 1, 6, 2, 8, 9];
        var p4 = d3.select("#enters")
                    .selectAll("p")
                    .data(data4)
                    .enter()
                    .append("span")
                    .text(function(d) { return d + " "; });










            // Change Text Color

            var data5 = [4, 1, 6, 2, 8, 9];
            var p5 = d3.select("#changeTextColor")
                        .selectAll("p")
                        .data(data5)
                        .enter().append("p")
                        .style('color', function(d) {
                            if (d % 2 === 0) {
                                return "green";
                            } else {
                                return "red";
                            }
                        })
                        .text(function(d) { return d + " "; });








        console.log(p, p2, p3, p4, p5 );


    }
}
</script>
