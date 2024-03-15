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
 * @interface AppCustomData
 */
export interface AppCustomData {
    /**
     * The timestamp the file was added
     * @type {string}
     * @memberof AppCustomData
     */
    'added_on'?: string;
    /**
     * The ID of the App it\'s associated with
     * @type {string}
     * @memberof AppCustomData
     */
    'app_id': string;
    /**
     * The type of custom data (file, database, ...)
     * @type {string}
     * @memberof AppCustomData
     */
    'data_type': AppCustomDataDataTypeEnum;
    /**
     * The contents of the file
     * @type {Uint8Array | File | buffer.File}
     * @memberof AppCustomData
     */
    'file_content'?: Uint8Array | File | buffer.File;
    /**
     * The mimetype of the file
     * @type {string}
     * @memberof AppCustomData
     */
    'file_mime': string;
    /**
     * The name of the file
     * @type {string}
     * @memberof AppCustomData
     */
    'file_name': string;
    /**
     * The size of the file in Bytes
     * @type {number}
     * @memberof AppCustomData
     */
    'file_size'?: number;
    /**
     * The ID
     * @type {string}
     * @memberof AppCustomData
     */
    'id'?: string;
}

type AppCustomDataDataTypeEnum = 'file'


