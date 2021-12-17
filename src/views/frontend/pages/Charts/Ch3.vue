<template>
  <div>
    <h6>Function of Data</h6>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
    name: "Ch3",
    mounted() {
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
    }
}
</script>
