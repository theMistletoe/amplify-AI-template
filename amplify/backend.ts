import { Tags } from 'aws-cdk-lib';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});


const backendTags = Tags.of(backend.stack);
backendTags.add('project', 'amplify-test-app');

const authTags = Tags.of(backend.auth.stack);
authTags.add('service', 'amplify-test-app-auth');

const dataTags = Tags.of(backend.data.stack);
dataTags.add('service', 'amplify-test-app-data');
