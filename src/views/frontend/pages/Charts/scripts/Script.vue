<template>
    <div>
        <div ref="container"></div>
    </div>
</template>

<script>
import * as d3 from "d3";
import chart from "@/views/frontend/pages/Charts/scripts/chart.js";
// import categoryBrands from '@/assets/category-brands.csv'

export default {
    name: "ChartWithExtScript",
    async mounted() {
        let data = await d3.csv("@/views/frontend/pages/Charts/scripts/category-brands.csv");
        // let data = d3.csvParse(categoryBrands);
        chart.play(this.$refs.container, data);
    }
};
</script>
