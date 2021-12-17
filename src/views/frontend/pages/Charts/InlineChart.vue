<script>
import * as d3 from 'd3';

export default {
    name: "InlineChart",
    data() {
      return {
        // Data
      }
    },
    computed: {
     dd() {
        return d3.select(".dd").append("g")
                .attr("class", "at-chart--edges").append("path");
      }
    },
    mounted() {
      this.dd();
    }
}
</script>


<template>
    <div class="dd">
      Text
    </div>
</template>