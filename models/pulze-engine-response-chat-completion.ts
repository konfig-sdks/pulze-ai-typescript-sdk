/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PulzeEngineResponseMetadata } from './pulze-engine-response-metadata';
import { PulzeEngineTokens } from './pulze-engine-tokens';
import { ResponseCompletionChatChoice } from './response-completion-chat-choice';

/**
 * The response returned to the user by the Chat Completions endpoint
 * @export
 * @interface PulzeEngineResponseChatCompletion
 */
export interface PulzeEngineResponseChatCompletion {
    /**
     * 
     * @type {Array<ResponseCompletionChatChoice>}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'choices': Array<ResponseCompletionChatChoice>;
    /**
     * Creation timestamp
     * @type {number}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'created'?: number;
    /**
     * This ID gets generated by the database when we save the request
     * @type {string}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'id'?: string;
    /**
     * Metadata of the response
     * @type {PulzeEngineResponseMetadata}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'metadata'?: PulzeEngineResponseMetadata;
    /**
     * The fully qualified model name used by PulzeEngine
     * @type {string}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'model': string;
    /**
     * The type of response object
     * @type {string}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'object': PulzeEngineResponseChatCompletionObjectEnum;
    /**
     * Tokens used
     * @type {PulzeEngineTokens}
     * @memberof PulzeEngineResponseChatCompletion
     */
    'usage'?: PulzeEngineTokens;
}

type PulzeEngineResponseChatCompletionObjectEnum = 'text_completion' | 'chat.completion'


