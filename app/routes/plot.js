import Route from '@ember/routing/route';



export default class PlotRoute extends Route {
    async model(){
    let response = await fetch('http://127.0.0.1:5000/datasets');
    let { datasets } = await response.json();

    return datasets;
    }

}


