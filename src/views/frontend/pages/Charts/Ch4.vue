<template>
    <div>
        <h5>Event Handling</h5>
        <div id="EventHandling">Click Here</div>
    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
    name: "Ch4",
    mounted() {

        // Event Handling
        d3.selectAll("#EventHandling")
            .on("mouseover", function() {
                d3.select(this)
                    .style("background-color", "orange");

                // Get current event info
                console.log(d3.event);
                
                // Get x & y co-ordinates
                console.log(d3.mouse(this));
            })
            .on("mouseout", function() {
                d3.select(this)
                    .style("background-color", "steelblue")
            });
    }
}
</script>
