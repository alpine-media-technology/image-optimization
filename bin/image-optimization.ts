#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';


const app = new cdk.App();

// This is the example stack that comes with the project.
// new ImageOptimizationStack(app, 'ImgTransformationStack', {});

new ImageOptimizationStack(app, 'ImgOptimizationDevelopmentStack', { S3_ORIGINALS_AUTO_DELETE: 'true' });
new ImageOptimizationStack(app, 'ImgOptimizationStagingStack', {});
new ImageOptimizationStack(app, 'ImgOptimizationProductionStack', {});
