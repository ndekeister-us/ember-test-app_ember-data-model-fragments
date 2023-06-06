import Model from '@ember-data/model';
import { fragmentArray } from 'ember-data-model-fragments/attributes';

export default class PostModel extends Model {
  @fragmentArray('tag') tags;
}
