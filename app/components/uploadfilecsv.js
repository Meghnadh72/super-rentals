import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import ENV from 'super-rentals/config/environment';


const fetch_url = ENV.FLASK_FETCHURL;
export default class UploadfilecsvComponent extends Component {
    
    constructor(){
        super(...arguments);
    }

    @tracked datasetLists;


/*  Invoked by   : Upload Button and one other button (id : refreshButton, uploadButton )
    Invoked for  : get Min or Max of selected Column in the dataset, sets variable ComputedValue
    Signature    : refresh() , returns nothing
    Type         : asynchronous, uses fetch() GET  */ 

    @action
    async refresh(){
        let response        = await fetch(fetch_url + "datasets");
        let { datasetList } = await response.json();
        this.datasetLists   = datasetList ;
    }


/*  Invoked by   : Submit Button (id :  )
    Invoked for  : Uploading CSV File, Calls refresh() at the end
    Signature    : submitForm() , returns nothing
    Type         : asynchronous, uses fetch() POST  */ 

    
    @action
    async submitForm(){
        
        let uploadedFile   = document.getElementById("file1").files[0];
        
        let datasetName    = document.getElementById("datasetName").value;
        let uploadFormData = new FormData();
        debugger;
        uploadFormData.append("csvfile" , uploadedFile);
        uploadFormData.append("datasetName", datasetName);

       
        try { 

            let response = await fetch(fetch_url+"datasets" ,
            {
                method: "POST",
                body: uploadFormData
            })
            
        }
        catch(e) {
            console.log(e);
        }

        this.refresh();
             
        
        }

        
}
