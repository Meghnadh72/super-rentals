import Route from '@ember/routing/route';
import { action } from '@ember/object';
import axios from 'axios';


export default class UploadRoute extends Route {
    async model(){

        let response        = await fetch('http://127.0.0.1:5000/datasets');
        let { datasetList } = await response.json();
    
        return datasetList;
        
    }
    
       
    
    
    
    
    

       
}
