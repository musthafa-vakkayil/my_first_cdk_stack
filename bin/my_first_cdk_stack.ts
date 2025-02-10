#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyFirstCdkStackStack } from '../lib/my_first_cdk_stack-stack';

const app = new cdk.App();
new MyFirstCdkStackStack(app, 'MyFirstCdkStackStack', {});