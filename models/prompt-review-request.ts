/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PromptReviewRequest
 */
export interface PromptReviewRequest {
    /**
     * Whether Admin accepts(1) or declines(0) review
     * @type {string}
     * @memberof PromptReviewRequest
     */
    'accept'?: PromptReviewRequestAcceptEnum;
    /**
     * Reason for decline
     * @type {string}
     * @memberof PromptReviewRequest
     */
    'decline_reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof PromptReviewRequest
     */
    'id': string;
}

type PromptReviewRequestAcceptEnum = '0' | '1'


