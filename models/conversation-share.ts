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
 * @interface ConversationShare
 */
export interface ConversationShare {
    /**
     * A title for this conversation
     * @type {string}
     * @memberof ConversationShare
     */
    'title': string;
    /**
     * The Auth0-ID of the user that shared this. Could be used by a user to share a conversation between their different organizations (as long as they open it themselves)
     * @type {string}
     * @memberof ConversationShare
     */
    'auth0_id'?: string;
    /**
     * Will be used for analytics. We can know from which conversation this was shared.
     * @type {string}
     * @memberof ConversationShare
     */
    'continuation_of'?: string;
    /**
     * To avoid creating duplicated shared links, we use this value as a quick way to verify that we are receiving new IDs
     * @type {string}
     * @memberof ConversationShare
     */
    'hashed_ids'?: string;
    /**
     * Whether the conversation is shared publicly or only members of your organization
     * @type {boolean}
     * @memberof ConversationShare
     */
    'is_public'?: boolean;
    /**
     * The organization that shared this. Important, as it can be used to filter users belonging to different organizations
     * @type {string}
     * @memberof ConversationShare
     */
    'org_id'?: string;
    /**
     * The HASH that was shared. Used to fetch all the conversation items
     * @type {string}
     * @memberof ConversationShare
     */
    'share_hash': string;
    /**
     * Some extra information, like when was the conversation shared
     * @type {string}
     * @memberof ConversationShare
     */
    'shared_on': string;
}

