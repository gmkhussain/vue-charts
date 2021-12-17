<template>
    <div>
        <h5>D3 Animation</h5>
        <div id="d3Animation">Color Transition</div>

        <div id="d3Animation_Reuse">Color Transition Re-Use</div>

        <hr/>
        <h5>transition.ease | transition.delay</h5>

        <div id="d3Animation_svg"></div>

    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: "Ch5",
    mounted() {

        // D3 Animation
        d3.select("#d3Animation")
          .transition().duration(2000)
          .style("background-color", "red")
          
          .transition().duration(4000)
          .style("background-color", "green");



        var t = d3.transition()
                  .duration(4000)

            d3.select("#d3Animation_Reuse")
              .transition(t)
              .style("background-color", "orange");













    // Animation with SVG
    var svg = d3.select("#d3Animation_svg")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);


    var bar1 = svg.append("rect")
        .attr("fill", "blue")
        .attr("x", 100)
        .attr("y", 20)
        .attr("height", 20)
        .attr("width", 10)

    var bar2 = svg.append("rect")
        .attr("fill", "blue")
        .attr("x", 120)
        .attr("y", 20)
        .attr("height", 20)
        .attr("width", 10)


    function updateSvg() {  // `d3.easeLinear` optional
        bar1.transition().ease(d3.easeLinear).duration(1000)
        .attr("height", 100)
        bar2.transition().duration(1000).delay(1000)
        .attr("height", 80)
    }


    updateSvg();

    }
}
</script>
