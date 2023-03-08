window.onload=function(){
    
    // Get form element
    const form=document.getElementById("formDiv");
    form.onsubmit=async (e)=>{
        e.preventDefault();
        
        let url=new URL(`https://calm-gray-goat-wear.cyclic.app/api/v1/exchange/${e.target.Type.value}?year=${e.target.YearDropDown.value}&fcurrency=${e.target.Currency1.value}&exchange=${e.target.Currency2.value}`)
        let curr=e.target.Currency2.value;
        // let url="./devanshu.json"
        //hit url to fetch date from backend 
        await fetch(url)
        .then(async (response)=>{
            let res=await response.json();
            res=(res.result);
            var xaxis=[]
            var yaxis=[]
            
            //convert object to list for chart
            for (const [key, value] of Object.entries(res)) {
                yaxis.push(value[curr]);
                console.log("Datetete->"+value.Date)
                var date=value.Date.split(" ",3)
                xaxis.push(date);
            }
            
            //call function to create chart
            createChart(yaxis,xaxis,e.target.chart.value,e.target.YearDropDown.value)
        })
        .catch(err=>{
            console.log("error->"+err)
        })

        var type="min";
        var para=e.target.Currency2.value;
        if(e.target.values.value=="Max") {
            type="max"
            para='-'+para;
        }
        
        //hit url to get maximum/minimum value from database
        url=new URL(`https://calm-gray-goat-wear.cyclic.app/api/v1/exchange/${e.target.Type.value}/min_max?&year=${e.target.YearDropDown.value}&exchange=${e.target.Currency2.value}&sort=${para}`)
        console.log(url)
        fetch(url)
        .then(async (response)=>{
            res=await response.json();
            res=(res.result);
            console.log(res[0][curr],res[0].Date)
            
            //call function to update values
            console.log(e.target.Type.value)
            updateWidget(res[0][curr],res[0].Date,e.target.Type.value,type)
        })


        
    }
    function createChart(yAxis,xAxis,typeChart,year){
        
        //creating new chart everytime the function is called
        let container=document.getElementById("canvasContainer")
        let chartDocument=document.getElementById("myChart");
        if(chartDocument!=undefined){
            chartDocument.remove();
        }
        

        chartDocument=document.createElement("canvas")
        chartDocument.id="myChart"
        chartDocument.style.maxWidth="50em"
        chartDocument.style.width="100%"
        
        //describing type of chart
        new Chart(chartDocument, {
            type: typeChart,
            data: {
              labels: xAxis,
              datasets: [{
                label:year,
                fill:false,
                backgroundColor: "#77d879",
                borderColor: "rgb(75, 192, 192)",
                data: yAxis
              }]
            },
          });
        container.appendChild(chartDocument)
    }


    function updateWidget(max,date,type,type2){
        
        //updating values of predefined elements in our DOM
        let datepara=document.getElementById("datePara");
        let maxPara=document.getElementById("maxPara");
        if(type!="Yearly"){
            var ref=date.split(" ",3)
            datepara.innerHTML="Date:"+ref;
        }else{
            datepara.innerHTML="Date:"+date;
        }
        if(type2=="min") maxPara.innerHTML="Min:"+max
        else maxPara.innerHTML="Max:"+max;
    }

}