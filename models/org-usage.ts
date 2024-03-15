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
 * @interface OrgUsage
 */
export interface OrgUsage {
    /**
     * Number of tokens the response used
     * @type {number}
     * @memberof OrgUsage
     */
    'completion_tokens': number;
    /**
     * Cost (in $) of the response
     * @type {number}
     * @memberof OrgUsage
     */
    'completion_tokens_cost': number;
    /**
     * Cost (in $) saved in the completion costs comparison to the benchmark model
     * @type {number}
     * @memberof OrgUsage
     */
    'completion_tokens_cost_savings': number;
    /**
     * The number of active apps this Organization has
     * @type {number}
     * @memberof OrgUsage
     */
    'num_apps': number;
    /**
     * The number of requests this Organization has performed in the current cycle
     * @type {number}
     * @memberof OrgUsage
     */
    'num_requests': number;
    /**
     * The Org\'s ID
     * @type {string}
     * @memberof OrgUsage
     */
    'org_id': string;
    /**
     * Number of tokens the request used
     * @type {number}
     * @memberof OrgUsage
     */
    'prompt_tokens': number;
    /**
     * Cost (in $) of the prompt
     * @type {number}
     * @memberof OrgUsage
     */
    'prompt_tokens_cost': number;
    /**
     * Cost (in $) saved in the prompt costs comparison to the benchmark model
     * @type {number}
     * @memberof OrgUsage
     */
    'prompt_tokens_cost_savings': number;
    /**
     * Number of tokens of (request + response)
     * @type {number}
     * @memberof OrgUsage
     */
    'total_tokens': number;
    /**
     * Cost (in $) of the (request + response)
     * @type {number}
     * @memberof OrgUsage
     */
    'total_tokens_cost': number;
    /**
     * Cost (in $) saved in total, in comparison to the benchmark model
     * @type {number}
     * @memberof OrgUsage
     */
    'total_tokens_cost_savings': number;
}
