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
 * @interface PaymentDetailsBalance
 */
export interface PaymentDetailsBalance {
    /**
     * The balance in the account. Synced with Stripe periodically
     * @type {number}
     * @memberof PaymentDetailsBalance
     */
    'balance'?: number;
    /**
     * The Zipcode of the address of the Organization
     * @type {string}
     * @memberof PaymentDetailsBalance
     */
    'billing_zip': string;
    /**
     * This represents balance that\'s either gifted or earned, and non-redeemable for any cash.
     * @type {number}
     * @memberof PaymentDetailsBalance
     */
    'free_balance'?: number;
    /**
     * The datetime when the local balance (i.e. the value we keep track of) was synced with stripe (and the customer was billed)
     * @type {string}
     * @memberof PaymentDetailsBalance
     */
    'last_sync': string;
    /**
     * The usage your account had since it last synced with Stripe. Used for reference purposes, this is the amount we will charge Stripe for.  This value does not only contain the sum of all the log tokens, but it might also contain other expenses, like uptime for custom models or base subscription prices, premium features, etc (all of this might come in the future) 
     * @type {number}
     * @memberof PaymentDetailsBalance
     */
    'pending_expense'?: number;
    /**
     * When the balance crosses this value, a high-warning email will be sent informing the customer that services will be disrupted if the balance reaches 0
     * @type {number}
     * @memberof PaymentDetailsBalance
     */
    'spending_limit_hard'?: number;
    /**
     * When the balance crosses this value, a warning email will be sent informing the customer
     * @type {number}
     * @memberof PaymentDetailsBalance
     */
    'spending_limit_soft'?: number;
}

