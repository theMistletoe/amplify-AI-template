import { Tags } from 'aws-cdk-lib';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});


const tags = Tags.of(backend.stack);
tags.add('project', 'amplify-test-app');