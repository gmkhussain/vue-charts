<template>
    <div>
        <h5>Data Binding in D3</h5>

        
        <div id="joinData">
            <span>Join Data to Existing Element</span>
            <p>N/A</p>
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

        console.log(p)
    }
}
</script>
