/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ToolChoiceFunction } from './tool-choice-function';

/**
 * 
 * @export
 * @interface ToolChoice
 */
export interface ToolChoice {
    /**
     * The definition of the function you would like the LLM to guess the parameters for.
     * @type {ToolChoiceFunction}
     * @memberof ToolChoice
     */
    'function'?: ToolChoiceFunction;
    /**
     * (Note: Not supported by all models yet) // `json_object`: If you instruct the model to return a JSON object, the model will respond in a valid JSON format. || `function`: If you set this to function, you must also pass the `function` parameter with extra information. || 
     * @type {string}
     * @memberof ToolChoice
     */
    'type'?: ToolChoiceTypeEnum;
}

type ToolChoiceTypeEnum = 'function' | 'json_object'

