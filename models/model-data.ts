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
 * @interface ModelData
 */
export interface ModelData {
    /**
     * A description of the model
     * @type {string}
     * @memberof ModelData
     */
    'description': string;
    /**
     * The user (auth0_id) who created the model
     * @type {string}
     * @memberof ModelData
     */
    'added_by'?: string;
    /**
     * When the model was added. Auto-populated in DB
     * @type {string}
     * @memberof ModelData
     */
    'added_on'?: string;
    /**
     * The app_id that has access to this model (if only one)
     * @type {string}
     * @memberof ModelData
     */
    'app_id'?: string;
    /**
     * Extra model settings inferred from namespace
     * @type {string}
     * @memberof ModelData
     */
    'at'?: string;
    /**
     * A (usually 0) cost added on top of a request. Some models charge per request, not only per token
     * @type {number}
     * @memberof ModelData
     */
    'base_cost': number;
    /**
     * The cost of a completion token, in USD
     * @type {number}
     * @memberof ModelData
     */
    'completion_token_cost': number;
    /**
     * The max_tokens for this model
     * @type {number}
     * @memberof ModelData
     */
    'context_window': number;
    /**
     * This determines if the model will be available + pre-selected when users create new apps.
     * @type {boolean}
     * @memberof ModelData
     */
    'default_active': boolean;
    /**
     * The ID of this model
     * @type {string}
     * @memberof ModelData
     */
    'id'?: string;
    /**
     * True if the model is of type Chat Completions, False if it\'s a Text Completion model.
     * @type {boolean}
     * @memberof ModelData
     */
    'is_chat': boolean;
    /**
     * Whether it\'s fine-tuned or not
     * @type {boolean}
     * @memberof ModelData
     */
    'is_ft': boolean;
    /**
     * True if the model complies with GDPR
     * @type {boolean}
     * @memberof ModelData
     */
    'is_gdpr': boolean;
    /**
     * True if the model is open source
     * @type {boolean}
     * @memberof ModelData
     */
    'is_open_source': boolean;
    /**
     * True if the model is publicly accessible to all
     * @type {boolean}
     * @memberof ModelData
     */
    'is_public': boolean;
    /**
     * Model has been created and shared by Pulze.ai
     * @type {boolean}
     * @memberof ModelData
     */
    'is_pulze_owner': boolean;
    /**
     * Whether it\'s rag-tuned or not
     * @type {boolean}
     * @memberof ModelData
     */
    'is_rag': boolean;
    /**
     * The name of the model. Can belong to many providers
     * @type {string}
     * @memberof ModelData
     */
    'model': string;
    /**
     * When the model was updated. Auto-populated in DB
     * @type {string}
     * @memberof ModelData
     */
    'modified_on'?: string;
    /**
     * The fully qualified (namespaced) model name
     * @type {string}
     * @memberof ModelData
     */
    'namespace': string;
    /**
     * The org_id that has acccess to this model
     * @type {string}
     * @memberof ModelData
     */
    'org_id'?: string;
    /**
     * The owner of the model. Sometimes, for a provider/model combination, many instances exist, trained on different data
     * @type {string}
     * @memberof ModelData
     */
    'owner'?: string;
    /**
     * The cost of a prompt token, in USD
     * @type {number}
     * @memberof ModelData
     */
    'prompt_token_cost': number;
    /**
     * The provider for the model.
     * @type {string}
     * @memberof ModelData
     */
    'provider'?: string;
    /**
     * True if the model supports `function`/`tool` call
     * @type {boolean}
     * @memberof ModelData
     */
    'supports_functions': boolean;
    /**
     * True if the model supports `json`-formatted responses
     * @type {boolean}
     * @memberof ModelData
     */
    'supports_json': boolean;
    /**
     * True if the model supports `n` and `best_of` -- i.e, multiple responses
     * @type {boolean}
     * @memberof ModelData
     */
    'supports_n': boolean;
    /**
     * True if the model supports `frequency_penalty` and `presence_penalty`
     * @type {boolean}
     * @memberof ModelData
     */
    'supports_penalties': boolean;
    /**
     * True if the model supports streaming responses
     * @type {boolean}
     * @memberof ModelData
     */
    'supports_stream': boolean;
    /**
     * The most recent data this model has been trained with
     * @type {string}
     * @memberof ModelData
     */
    'until'?: string;
    /**
     * A URL to the model\'s page or more informatino
     * @type {string}
     * @memberof ModelData
     */
    'url': string;
}

