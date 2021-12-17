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
                    return d;
                });



        console.log(p, p2)
    }
}
</script>
