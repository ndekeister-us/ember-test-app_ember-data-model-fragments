import Fragment from 'ember-data-model-fragments/fragment';
import { attr } from '@ember-data/model';

export default class TagFragment extends Fragment {
  @attr('string') name;
}
