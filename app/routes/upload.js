import Route from '@ember/routing/route';
import { action } from '@ember/object';
import axios from 'axios';
import ENV from 'super-rentals/config/environment';

const fetch_url = ENV.FLASK_FETCHURL;
export default class UploadRoute extends Route {
    async model(){

        let response        = await fetch(fetch_url+"datasets");
        let { datasetList } = await response.json();
    
        return datasetList;
        
    }
    
       
    
    
    
    
    

       
}
