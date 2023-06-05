import Application from 'ember-test-app-ember-data-model-fragments/app';
import config from 'ember-test-app-ember-data-model-fragments/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
