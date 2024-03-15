/* tslint:disable */
/* eslint-disable */
/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CompletionRequestPayload } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { ModelParts } from '../models';
// @ts-ignore
import { PromptProperty } from '../models';
// @ts-ignore
import { PulzeEngineModelRanking } from '../models';
// @ts-ignore
import { PulzeToggleModelResponse } from '../models';
// @ts-ignore
import { RoleContentChatChoice } from '../models';
// @ts-ignore
import { StopProperty } from '../models';
// @ts-ignore
import { ToolChoiceProperty } from '../models';
// @ts-ignore
import { ToolFunction } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ModelsApi - axios parameter creator
 * @export
 */
export const ModelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of all the Models which this App can potentially use.
         * @summary Get All Available Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllModels: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/models/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/all',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Rank Of Best Models For Payload
         * @param {CompletionRequestPayload} completionRequestPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRankOfBest: async (completionRequestPayload: CompletionRequestPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'completionRequestPayload' is not null or undefined
            assertParamExists('getRankOfBest', 'completionRequestPayload', completionRequestPayload)
            const localVarPath = `/v1/models/rank`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: completionRequestPayload,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/rank',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(completionRequestPayload, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of the Models which are active for a specific App.
         * @summary Get Active Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listActiveModels: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/models/active`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/active',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enable or disable a model.
         * @summary Toggle Model For App
         * @param {string} modelId 
         * @param {boolean} [enable] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toggleModelForApp: async (modelId: string, enable?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('toggleModelForApp', 'modelId', modelId)
            const localVarPath = `/v1/models/{model_id}/toggle`
                .replace(`{${"model_id"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-model_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (enable !== undefined) {
                localVarQueryParameter['enable'] = enable;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/{model_id}/toggle',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ModelsApi - functional programming interface
 * @export
 */
export const ModelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list of all the Models which this App can potentially use.
         * @summary Get All Available Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllModels(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelParts>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllModels(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Rank Of Best Models For Payload
         * @param {ModelsApiGetRankOfBestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRankOfBest(requestParameters: ModelsApiGetRankOfBestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PulzeEngineModelRanking>> {
            const completionRequestPayload: CompletionRequestPayload = {
                best_of: requestParameters.best_of,
                false: requestParameters.false,
                frequency_penalty: requestParameters.frequency_penalty,
                logit_bias: requestParameters.logit_bias,
                logprobs: requestParameters.logprobs,
                max_tokens: requestParameters.max_tokens,
                messages: requestParameters.messages,
                model: requestParameters.model,
                presence_penalty: requestParameters.presence_penalty,
                prompt: requestParameters.prompt,
                stop: requestParameters.stop,
                stream: requestParameters.stream,
                suffix: requestParameters.suffix,
                temperature: requestParameters.temperature,
                tool_choice: requestParameters.tool_choice,
                tools: requestParameters.tools,
                top_p: requestParameters.top_p
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRankOfBest(completionRequestPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of the Models which are active for a specific App.
         * @summary Get Active Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listActiveModels(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelParts>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listActiveModels(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Enable or disable a model.
         * @summary Toggle Model For App
         * @param {ModelsApiToggleModelForAppRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async toggleModelForApp(requestParameters: ModelsApiToggleModelForAppRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PulzeToggleModelResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.toggleModelForApp(requestParameters.modelId, requestParameters.enable, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModelsApi - factory interface
 * @export
 */
export const ModelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModelsApiFp(configuration)
    return {
        /**
         * Get a list of all the Models which this App can potentially use.
         * @summary Get All Available Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllModels(options?: AxiosRequestConfig): AxiosPromise<Array<ModelParts>> {
            return localVarFp.getAllModels(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Rank Of Best Models For Payload
         * @param {ModelsApiGetRankOfBestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRankOfBest(requestParameters: ModelsApiGetRankOfBestRequest, options?: AxiosRequestConfig): AxiosPromise<PulzeEngineModelRanking> {
            return localVarFp.getRankOfBest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of the Models which are active for a specific App.
         * @summary Get Active Models For App
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listActiveModels(options?: AxiosRequestConfig): AxiosPromise<Array<ModelParts>> {
            return localVarFp.listActiveModels(options).then((request) => request(axios, basePath));
        },
        /**
         * Enable or disable a model.
         * @summary Toggle Model For App
         * @param {ModelsApiToggleModelForAppRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        toggleModelForApp(requestParameters: ModelsApiToggleModelForAppRequest, options?: AxiosRequestConfig): AxiosPromise<PulzeToggleModelResponse> {
            return localVarFp.toggleModelForApp(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getRankOfBest operation in ModelsApi.
 * @export
 * @interface ModelsApiGetRankOfBestRequest
 */
export type ModelsApiGetRankOfBestRequest = {
    
} & CompletionRequestPayload

/**
 * Request parameters for toggleModelForApp operation in ModelsApi.
 * @export
 * @interface ModelsApiToggleModelForAppRequest
 */
export type ModelsApiToggleModelForAppRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ModelsApiToggleModelForApp
    */
    readonly modelId: string
    
    /**
    * 
    * @type {boolean}
    * @memberof ModelsApiToggleModelForApp
    */
    readonly enable?: boolean
    
}

/**
 * ModelsApiGenerated - object-oriented interface
 * @export
 * @class ModelsApiGenerated
 * @extends {BaseAPI}
 */
export class ModelsApiGenerated extends BaseAPI {
    /**
     * Get a list of all the Models which this App can potentially use.
     * @summary Get All Available Models For App
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApiGenerated
     */
    public getAllModels(options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).getAllModels(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Rank Of Best Models For Payload
     * @param {ModelsApiGetRankOfBestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApiGenerated
     */
    public getRankOfBest(requestParameters: ModelsApiGetRankOfBestRequest, options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).getRankOfBest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of the Models which are active for a specific App.
     * @summary Get Active Models For App
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApiGenerated
     */
    public listActiveModels(options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).listActiveModels(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enable or disable a model.
     * @summary Toggle Model For App
     * @param {ModelsApiToggleModelForAppRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelsApiGenerated
     */
    public toggleModelForApp(requestParameters: ModelsApiToggleModelForAppRequest, options?: AxiosRequestConfig) {
        return ModelsApiFp(this.configuration).toggleModelForApp(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
