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
 * @interface OrgUpdate
 */
export interface OrgUpdate {
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'added_on'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_1': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_2': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_city': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_country': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_state': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'address_zip': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'billing_email': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'currency'?: OrgUpdateCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'last_invoice_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'org_display_name': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'org_logo': string;
    /**
     * 
     * @type {string}
     * @memberof OrgUpdate
     */
    'org_name': string;
    /**
     * 
     * @type {number}
     * @memberof OrgUpdate
     */
    'pending_expense'?: number;
}

type OrgUpdateCurrencyEnum = 'USD'


