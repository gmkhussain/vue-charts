<template>
    <div>
        <h5>Data Loading in D3</h5>
        
        <div id="dataLoading">
            <span>d3.csv()</span>

        </div>

    </div>
</template>

<script>
import * as d3 from 'd3'
// import dataset from '@/views/frontend/pages/Charts/data.csv'

export default {
    name: "Ch7",
    
    async mounted() {
        // CSV Data
        // let d = `Name, Age
        // John, 30,
        // Jane, 32`;
        // console.log("A")
        // let data = d3.csvParse(dataset);
        
        // d3.csv( data , function(data) {
        //     console.log("D", data )
        //     // for (var i = 0; i < data.length; i++) {
        //     //     console.log( data[i].Name );
        //     // }
        // });
  
        let data = await d3.csvParse("@/views/frontend/pages/Charts/data.csv");
        console.log(data)
        // let data = d3.csvParse(categoryBrands);
        

    }
}
</script>

