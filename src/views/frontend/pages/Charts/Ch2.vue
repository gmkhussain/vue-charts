<template>
    <div>
        <h5>DOM Manipulation using D3</h5>
        <p>N/A</p>
        <blockquote></blockquote>
        <div id="_html"></div>

        <p><label>Checkbox</label><input type="checkbox" /></p>

        <div class="classed">classed</div>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: "Ch2",
    mounted() {

      // text()
      d3.select("p").text("This is paragraph.")

      // append()
      d3.select("p").append("mark").text("amoos")

      // insert()
      d3.select("blockquote").insert("em").text("Second paragraph.");
      d3.select("blockquote").insert("strong").text("Second paragraph.");

      // remove()
      d3.select("strong").remove();

      // html()
      d3.select("#_html").html("<span>This is <p>new</p> inner html.</span>");

      // attr()
      d3.select("#_html").attr("class","error");

      // property()
      d3.select("input").property("checked",true);

      // style()
      d3.select("label").style("color", "orange");

      // classed()
      d3.select(".classed").classed('error', true);

      
      // Method Chaining in D3 
        // # 1
        // var bodyElement = d3.select("body");
        // var paragraph = bodyElement.append("p");
        //     paragraph.text("Hello World!");

        // # 2
        // d3.select("body").append("p").text("Hello Kitty!");

    }
}
</script>

<style scoped>
    .error {
        color: #d00;
    }
</style>
