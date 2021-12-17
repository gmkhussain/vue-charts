<template>
    <div>
        <h5>Loading Data</h5>

        <div>
            <svg class="chart" width="420" height="120">
                <template v-for="(b, index ) in bar" :key="index ">
                  <g :transform="`translate(${b.g})`">
                    <rect :width="b.rect" height="19"></rect>
                    <text :x="10" y="9.5" dy=".35em">5</text>
                  </g>
                </template>
            </svg>
        </div>

    </div>
</template>

<script>
// import * as d3 from 'd3'

export default {
    name: "Ch8",
    data() {
        return {
            bar:[
                {
                    g: '0, 40',
                    rect: 50
                },
                {
                    g: '0, 60',
                    rect: 80
                },
                {
                    g: '0, 80',
                    rect: 120
                }
            ]
        }
    },
    mounted() {
        
    //   console.log( this.ddd )
    }
}
</script>

<style scoped>
svg text {
  fill: #fff;
}
</style>
