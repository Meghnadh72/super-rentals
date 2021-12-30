import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API =
  'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/';

export default class MapComponent extends Component {
  get src() {
    let { lat, lng, zoom, width, height } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let size = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}${coordinates}/${size}@2x?${accessToken}`;
  }
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
