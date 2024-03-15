/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { App } from './app';
import { AppCustomData } from './app-custom-data';
import { PulzeModelActiveForApp } from './pulze-model-active-for-app';

/**
 * 
 * @export
 * @interface AppWithModelUpdatesInfo
 */
export interface AppWithModelUpdatesInfo {
    /**
     * 
     * @type {App}
     * @memberof AppWithModelUpdatesInfo
     */
    'app': App;
    /**
     * List of files associated with the app.
     * @type {Array<AppCustomData>}
     * @memberof AppWithModelUpdatesInfo
     */
    'files'?: Array<AppCustomData>;
    /**
     * 
     * @type {{ [key: string]: PulzeModelActiveForApp; }}
     * @memberof AppWithModelUpdatesInfo
     */
    'model_settings': { [key: string]: PulzeModelActiveForApp; };
}
