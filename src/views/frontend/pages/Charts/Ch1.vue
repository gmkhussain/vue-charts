<template>
    <div>
        <h5>Select Element By Name</h5>
        <p>First paragraph</p>
        <p id="p2">Second paragraph</p>
        <h5>Another heading</h5>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: "Ch_1",
    data() {
        return {

        }
    },
    mounted() {
        d3.select("p").style("color", "green");
        d3.select("#p2").style("color", "orange");
        d3.selectAll("h5").style('color','blue');
    }
}
</script>
