<template>
    <div>
        <h5>Select Element By Name</h5>
        <p>First paragraph</p>
        <p id="p2">Second paragraph</p>
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
    }
}
</script>
