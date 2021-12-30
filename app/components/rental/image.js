import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RentalImageComponent extends Component {
  @tracked isLarge = false;

  @action
  toggleImageState() {
    this.isLarge = !this.isLarge;
  }
}
