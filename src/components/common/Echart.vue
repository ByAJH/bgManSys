<template>
<div class="echart" ref="echart">
</div>
</template>

<script>
import * as echarts from 'echarts';
 export default {
   name: '',
   components: {

   },
   data() {
       return {
           echart: null,
           axisOption: {
               legend: {data:[]},
               tooltip: {
                   trigger: 'axis'
               },
               xAxis: [
                    {
                        type: 'category',
                        data: []
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: []
                    },
                ]
           },
           normalOption: {
               legend: {data:[]},
               tooltip: {
                   trigger: 'item'
               },
               series: []
           },

       }
   },
   props: {
       chartData: {
           type: Object,
           default() {
               return { 
                   isAxisEchart: true,
                   legend: {data:[]},
                   xData: [],
                   series: []
               }
           }
       }
   },
   mounted() {
    window.addEventListener('resize', this.resizeChart)
   },
   destroyed() {
    window.addEventListener('resize', this.resizeChart)
   },
   watch: {
       chartData: {
           handler: function() {
               this.initEchart()
           },
           deep: true,
        //    imidiate: true
        //    immediate: true
       }
   },
   methods: {
       initEchart() {
           this.initChartData()
            if(this.echart) {
                this.option && this.echart.setOption(this.option)
            }else{
                this.echart = echarts.init(this.$refs.echart)
                this.option && this.echart.setOption(this.option)
            }  
       },
       initChartData() {
           if(this.chartData.isAxisEchart) {
               this.axisOption.xAxis[0].data = this.chartData.xData
               this.axisOption.series = this.chartData.series
               this.axisOption.legend = this.chartData.legend
           }else {
               this.normalOption.series = this.chartData.series
               this.normalOption.legend = this.chartData.legend
           }
       },
       resizeChart() {
           this.echart ? this.echart.resize() : ''
       }
   },
   computed: {
       option() {
           return this.chartData.isAxisEchart ? this.axisOption : this.normalOption
       }
   }
 }
</script>

<style scoped>
.echart {
    width: 100%;
    height: 300px;
}
 
</style>
