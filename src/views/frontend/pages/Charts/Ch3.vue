<template>
  <div>
    <h6>Function of Data</h6>
    <p></p>
    <p></p>
    <p></p>

    <p>Error: This is error.</p>
    <p>Warning:This is warning.</p>

  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
    name: "Ch3",
    mounted() {


        // Function of Data
        var data = [100, 200, 300];
        var paragraph = d3.select("body")
                .selectAll("p")
                .data(data)
                .text(function (d, i) {
                    console.log("d: " + d);
                    console.log("i: " + i);
                    console.log("this: " + this);

                    return d;
                });

            console.log(paragraph);



        // Dynamic Properties
        d3.selectAll("p").style("color", function(d, i) {
            var text = this.innerText;
            
            console.log(i); // i never used..

            if (text.indexOf("Error") >= 0) {
                return "red";
            } else if (text.indexOf("Warning") >= 0) {
                return "yellow";
            }
        });


    }
}
</script>
