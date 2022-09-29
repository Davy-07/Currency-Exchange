var weekly=['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9','Week 10','Week 11','Week 12','Week 13','Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26','Week 27','Week 28','Week 29','Week 30','Week 31','Week 32','Week 33','Week 34','Week 35','Week 36','Week 37','Week 38','Week 39','Week 40','Week 41','Week 42','Week 43','Week 44','Week 45','Week 46','Week 47','Week 48','Week 49','Week 50','Week 51','Week 52']

window.onload=function(){
    const form=document.getElementById("formDiv");
    form.onsubmit=async (e)=>{
        e.preventDefault();
        let url=new URL(`http://localhost:3000/api/v1/exchange/${e.target.Type.value}?year=${e.target.YearDropDown.value}&exchange=${e.target.Currency2.value}`)
        
        fetch(url)
        .then(async (response)=>{
            let res=await response.json();
            res=(res.result);
            console.log(res)
            var xaxis=[]
            var yaxis=[]
            let curr=e.target.Currency2.value;
            for (const [key, value] of Object.entries(res)) {
                xaxis.push(value[curr]);
                yaxis.push(value.Date);
            }
            createChart(xaxis,yaxis,e.target.chart.value)
        })
        .catch(err=>{
            console.log("error->"+err)
        })


        
    }
    function createChart(xAxis,yAxis,typeChart){
        let container=document.getElementById("canvasContaienr")
        let chartDocument=document.getElementById("myChart");
        if(chartDocument!=undefined){
            chartDocument.remove();
        }
        chartDocument=document.createElement("canvas")
        chartDocument.id="myChart"
        chartDocument.style.maxWidth="1000px"
        chartDocument.style.width="100%"
        new Chart(chartDocument, {
            type: typeChart,
            data: {
              labels: yAxis,
              datasets: [{
                backgroundColor: "#6297cc",
                borderColor: "rgba(0,0,0,0.1)",
                data: xAxis
              }]
            },
          });
        container.appendChild(chartDocument)
    }

}