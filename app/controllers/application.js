import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service store;

  @tracked internalTags =
    this.model.currentState.recordData.__fragmentData.tags;

  @action
  async reloadModel() {
    let model = await this.model.reload();
    this.internalTags = model.currentState.recordData.__fragmentData.tags;
  }
}
