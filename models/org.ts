/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrgUsage } from './org-usage';
import { SubscriptionPaused } from './subscription-paused';

/**
 * 
 * @export
 * @interface Org
 */
export interface Org {
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'added_on'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_1'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_2'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_city'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_country'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_state'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'address_zip'?: string;
    /**
     * Billing email
     * @type {string}
     * @memberof Org
     */
    'billing_email'?: string;
    /**
     * The balance in this Org\'s account
     * @type {number}
     * @memberof Org
     */
    'credit_balance'?: number;
    /**
     * The currency for this organization
     * @type {string}
     * @memberof Org
     */
    'currency'?: OrgCurrencyEnum;
    /**
     * If this is > 0, we will deduct the balance from here instead of the credit_balance. Add credits to this Org by updating this column
     * @type {number}
     * @memberof Org
     */
    'free_balance'?: number;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'hubspot_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof Org
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Org
     */
    'is_personal'?: boolean;
    /**
     * We track the expenses with `pending_expense`, but when we charge, we add up all the requests between `last_invoice_date` and now.
     * @type {string}
     * @memberof Org
     */
    'last_invoice_date': string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'loki_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'loki_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'loki_token'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'modified_on'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'org_creator': string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'org_display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'org_logo'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'org_name': string;
    /**
     * The Stripe\'s customer ID. `cus_xxxxxx`
     * @type {string}
     * @memberof Org
     */
    'org_stripe_id': string;
    /**
     * A reference value for how much money has a customer spent since the last sync with Stripe. When we charge them, we don\'t use this value, and instead add up all the requests\' costs.
     * @type {number}
     * @memberof Org
     */
    'pending_expense'?: number;
    /**
     * The timestamp (in s) when the subscription ended or will end. The user will be billed at this point
     * @type {number}
     * @memberof Org
     */
    'period_end'?: number;
    /**
     * The timestamp (in s) when the subscription started or will start. If it\'s not the first cycle, the user was billed at this point
     * @type {number}
     * @memberof Org
     */
    'period_start'?: number;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'prom_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'prom_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'prom_token'?: string;
    /**
     * The rate limit for this org, per minute
     * @type {number}
     * @memberof Org
     */
    'rate_limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof Org
     */
    'spending_limit_hard'?: number;
    /**
     * 
     * @type {number}
     * @memberof Org
     */
    'spending_limit_soft'?: number;
    /**
     * The length of the Platform subscription cycle. Useful for upgrades and downgrades
     * @type {string}
     * @memberof Org
     */
    'subscription_cycle'?: OrgSubscriptionCycleEnum;
    /**
     * The reason the subscription was paused. If `null`, the subscription is considered active
     * @type {SubscriptionPaused}
     * @memberof Org
     */
    'subscription_pause_reason'?: SubscriptionPaused;
    /**
     * PRICE ID (on Stripe). The user\'s current Subscription ID is created from this Price
     * @type {string}
     * @memberof Org
     */
    'subscription_price_id'?: string;
    /**
     * The subscription tier this user is in.
     * @type {string}
     * @memberof Org
     */
    'subscription_tier'?: OrgSubscriptionTierEnum;
    /**
     * The timestamp (in s) when the trial will end and the paid subscription will start. The user will be billed at this point
     * @type {number}
     * @memberof Org
     */
    'trial_end'?: number;
    /**
     * The Usage stats (view) for this org
     * @type {OrgUsage}
     * @memberof Org
     */
    'usage'?: OrgUsage;
}

type OrgCurrencyEnum = 'USD'
type OrgSubscriptionCycleEnum = 'monthly' | 'yearly'
type OrgSubscriptionTierEnum = '_NONE_' | 'STARTUP' | 'GROWTH' | 'SCALE' | 'ENTERPRISE'

