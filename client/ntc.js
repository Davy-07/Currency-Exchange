window.onload=function(){
    const form=document.getElementById("formDiv");
    form.onsubmit=async (e)=>{
        e.preventDefault();
        let url=new URL(`http://localhost:3000/api/v1/exchange/${e.target.Type.value}?year=${e.target.YearDropDown.value}&fcurrency=${e.target.Currency1.value}&exchange=${e.target.Currency2.value}`)
        let curr=e.target.Currency2.value;
        await fetch(url)
        .then(async (response)=>{
            let res=await response.json();
            res=(res.result);
            var xaxis=[]
            var yaxis=[]
            for (const [key, value] of Object.entries(res)) {
                xaxis.push(value[curr]);
                yaxis.push(value.Date);
            }
            createChart(xaxis,yaxis,e.target.chart.value)
        })
        .catch(err=>{
            console.log("error->"+err)
        })
        var para=e.target.Currency2.value;
        if(e.target.values.value=="Max") para='-'+para;
        url=new URL(`http://localhost:3000/api/v1/exchange/${e.target.Type.value}/min_max?&fcurrency=${e.target.Currency1.value}&exchange=${e.target.Currency2.value}&sort=${para}`)
        console.log(url)
        fetch(url)
        .then(async (response)=>{
            res=await response.json();
            res=(res.result);
            console.log(res[0][curr],res[0].Date)
            updateWidget(res[0][curr],res[0].Date)
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
    function updateWidget(max,date){
        let datepara=document.getElementById("datePara");
        let maxPara=document.getElementById("maxPara");
        datepara.innerHTML="Date:"+date;
        maxPara.innerHTML="Max:"+max;
    }

}