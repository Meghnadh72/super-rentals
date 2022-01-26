import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import 'plotly.js-dist';
import { doc } from 'prettier';
import ENV from 'super-rentals/config/environment';

const fetch_url = ENV.FLASK_FETCHURL;
export default class DatasetComponentComponent extends Component {

    @tracked xAxis;
    @tracked yAxis;
    @tracked columnsList;
    @tracked computedValue;
    

/*  Invoked by   : Compute Button (id : computeButton )
    Invoked for  : get Min or Max of selected Column in the dataset, sets variable ComputedValue
    Signature    : compute() , returns nothing
    Type         : asynchronous, uses fetch() GET  */ 

    @action 
    async compute() 
    {
        let minOrmax    = document.getElementById("operation").value;
        let column      = document.getElementById("column1ComputeID").value;
        let datasetName = document.getElementById("datasetNamec").value;
        let computeUrl  = fetch_url+ "compute?" + "datasetName=" +datasetName + "&value="+minOrmax + "&column=" + column;

        try{
            let resp           = await fetch(computeUrl);
            let { value }      = await resp.json();
            this.computedValue = value;
        }
        catch(e)
        {
            console.log(e);
        }
    }

 /* Invoked by   : Select Event (id : datasetNamef )
    Invoked for  : get Columns of selected Dataset, sets variable columnsList
    Signature    : getDatasetColumns() , returns nothing
    Type         : asynchronous, uses fetch() GET  */ 

    @action
    async getDatasetColumns(datasetId) {
        let datasetName       = document.getElementById(datasetId).value;
        let requrlCol         = fetch_url + "getHeadersList?datasetName="+datasetName;
        
        try {
            let response      = await fetch(requrlCol);
            let {headersList} = await response.json();
            this.columnsList  = headersList;
        }
        catch(e)
        {
            console.log(e);
        }
    }

/*  Invoked by   : Plot Button ( id: plotButton)
    Invoked for  : get the 25 values of selected 2 Columns
    Signature    : plotGraph() , returns nothing, uses Plotly to generate Graph
    Type         : asynchronous, uses fetch() GET  */ 

    @action
    async plotGraph(){
        let datasetName = document.getElementById("datasetNamef").value;
        let col1        = document.getElementById("column1PlotID").value;
        let col2        = document.getElementById("column2PlotID").value;

        //Form the request URL from three values above as request Parameters
        let requrl      = fetch_url + "plotGraph?firstCol=" + col1 +  "&dsName=" + datasetName + "&secondCol=" + col2;
        
        let layout = {
            title: 'Scroll and Zoom',
            showlegend: false
        };
        console.log(requrl);
        
        try{
            let response      = await fetch(requrl);
            let { Col1,Col2 } = await response.json();
            let data = [
                {
                    x : Col1,
                    y : Col2,
                    type :'scatter'
                }
            ];
            
            Plotly.react('graph1', data, layout);

            console.log(this.xAxis);
            console.log(this.yAxis);
            
        }catch(e){
            console.log(e);
        }

        
    }
}
