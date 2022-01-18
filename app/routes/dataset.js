import Route from '@ember/routing/route';
import { doc } from 'prettier';
import { action } from '@ember/object';

export default class DatasetRoute extends Route {
    async model(){
        let response = await fetch('http://127.0.0.1:5000/datasets');
        let { datasetList } = await response.json();
    
        return datasetList;
        }

    
    

    
}
