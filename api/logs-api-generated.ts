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
import { FilterLogsRequest } from '../models';
// @ts-ignore
import { GetTableSortParams } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { LogResponseRatingRequest } from '../models';
// @ts-ignore
import { RequestNormalized } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LogsApi - axios parameter creator
 * @export
 */
export const LogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a specific log by id. If accessing via API Key, this endpoint will only return a log if it belongs to that App. If the log\'s App is disabled, this endpoint won\'t return it.
         * @summary Get Log By Id
         * @param {string} logId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (logId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'logId' is not null or undefined
            assertParamExists('getById', 'logId', logId)
            const localVarPath = `/v1/logs/{log_id}`
                .replace(`{${"log_id"}}`, encodeURIComponent(String(logId !== undefined ? logId : `-log_id-`)));
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
                pathTemplate: '/v1/logs/{log_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the list of logs that match the specified filters. When accessing via an App\'s API Key, only logs for that app will be returned.
         * @summary Get Logs For App
         * @param {FilterLogsRequest} filterLogsRequest 
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatchingLogs: async (filterLogsRequest: FilterLogsRequest, page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'filterLogsRequest' is not null or undefined
            assertParamExists('getMatchingLogs', 'filterLogsRequest', filterLogsRequest)
            const localVarPath = `/v1/logs`;
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
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: filterLogsRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/logs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(filterLogsRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Rate a specific request by its ID. When accessing it via an App\'s API Key, this endpoint will only allow rating a log of that specific app.
         * @summary Rate Log By Id
         * @param {string} logId 
         * @param {LogResponseRatingRequest} logResponseRatingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rateById: async (logId: string, logResponseRatingRequest: LogResponseRatingRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'logId' is not null or undefined
            assertParamExists('rateById', 'logId', logId)
            // verify required parameter 'logResponseRatingRequest' is not null or undefined
            assertParamExists('rateById', 'logResponseRatingRequest', logResponseRatingRequest)
            const localVarPath = `/v1/logs/{log_id}/rating`
                .replace(`{${"log_id"}}`, encodeURIComponent(String(logId !== undefined ? logId : `-log_id-`)));
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
                requestBody: logResponseRatingRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/logs/{log_id}/rating',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(logResponseRatingRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LogsApi - functional programming interface
 * @export
 */
export const LogsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LogsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a specific log by id. If accessing via API Key, this endpoint will only return a log if it belongs to that App. If the log\'s App is disabled, this endpoint won\'t return it.
         * @summary Get Log By Id
         * @param {LogsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: LogsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestNormalized>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.logId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the list of logs that match the specified filters. When accessing via an App\'s API Key, only logs for that app will be returned.
         * @summary Get Logs For App
         * @param {LogsApiGetMatchingLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMatchingLogs(requestParameters: LogsApiGetMatchingLogsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const filterLogsRequest: FilterLogsRequest = {
                app_ids: requestParameters.app_ids,
                date_from: requestParameters.date_from,
                date_to: requestParameters.date_to,
                labels: requestParameters.labels,
                params: requestParameters.params,
                query: requestParameters.query
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMatchingLogs(filterLogsRequest, requestParameters.page, requestParameters.size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Rate a specific request by its ID. When accessing it via an App\'s API Key, this endpoint will only allow rating a log of that specific app.
         * @summary Rate Log By Id
         * @param {LogsApiRateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rateById(requestParameters: LogsApiRateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequestNormalized>> {
            const logResponseRatingRequest: LogResponseRatingRequest = {
                feedback: requestParameters.feedback,
                good_answer: requestParameters.good_answer
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.rateById(requestParameters.logId, logResponseRatingRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LogsApi - factory interface
 * @export
 */
export const LogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LogsApiFp(configuration)
    return {
        /**
         * Get a specific log by id. If accessing via API Key, this endpoint will only return a log if it belongs to that App. If the log\'s App is disabled, this endpoint won\'t return it.
         * @summary Get Log By Id
         * @param {LogsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: LogsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<RequestNormalized> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the list of logs that match the specified filters. When accessing via an App\'s API Key, only logs for that app will be returned.
         * @summary Get Logs For App
         * @param {LogsApiGetMatchingLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatchingLogs(requestParameters: LogsApiGetMatchingLogsRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getMatchingLogs(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Rate a specific request by its ID. When accessing it via an App\'s API Key, this endpoint will only allow rating a log of that specific app.
         * @summary Rate Log By Id
         * @param {LogsApiRateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rateById(requestParameters: LogsApiRateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<RequestNormalized> {
            return localVarFp.rateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in LogsApi.
 * @export
 * @interface LogsApiGetByIdRequest
 */
export type LogsApiGetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof LogsApiGetById
    */
    readonly logId: string
    
}

/**
 * Request parameters for getMatchingLogs operation in LogsApi.
 * @export
 * @interface LogsApiGetMatchingLogsRequest
 */
export type LogsApiGetMatchingLogsRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof LogsApiGetMatchingLogs
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof LogsApiGetMatchingLogs
    */
    readonly size?: number
    
} & FilterLogsRequest

/**
 * Request parameters for rateById operation in LogsApi.
 * @export
 * @interface LogsApiRateByIdRequest
 */
export type LogsApiRateByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof LogsApiRateById
    */
    readonly logId: string
    
} & LogResponseRatingRequest

/**
 * LogsApiGenerated - object-oriented interface
 * @export
 * @class LogsApiGenerated
 * @extends {BaseAPI}
 */
export class LogsApiGenerated extends BaseAPI {
    /**
     * Get a specific log by id. If accessing via API Key, this endpoint will only return a log if it belongs to that App. If the log\'s App is disabled, this endpoint won\'t return it.
     * @summary Get Log By Id
     * @param {LogsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiGenerated
     */
    public getById(requestParameters: LogsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return LogsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the list of logs that match the specified filters. When accessing via an App\'s API Key, only logs for that app will be returned.
     * @summary Get Logs For App
     * @param {LogsApiGetMatchingLogsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiGenerated
     */
    public getMatchingLogs(requestParameters: LogsApiGetMatchingLogsRequest, options?: AxiosRequestConfig) {
        return LogsApiFp(this.configuration).getMatchingLogs(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rate a specific request by its ID. When accessing it via an App\'s API Key, this endpoint will only allow rating a log of that specific app.
     * @summary Rate Log By Id
     * @param {LogsApiRateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiGenerated
     */
    public rateById(requestParameters: LogsApiRateByIdRequest, options?: AxiosRequestConfig) {
        return LogsApiFp(this.configuration).rateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
