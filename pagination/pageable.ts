/*
Pulze.ai API

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosPromise } from "axios";
import {
  PageBase,
  PageInfo,
  PageParameterProperties,
  PageParameters,
} from "./page-types";

export type PageParametersBase<Parameters> = Parameters & {
  requestBody?: Parameters;
};
export type PageRequest<
  Data extends PageInfo,
  Parameters extends PageParameters
> = (parameters: Parameters) => AxiosPromise<Data>;

export abstract class Pageable<
  Data extends PageInfo,
  Parameters extends PageParameters
> {
  readonly data: Data;
  protected readonly initialParameters: Parameters;
  private readonly _request: PageRequest<Data, Parameters>;
  async previous(): Promise<PageBase<Data, Parameters>> {
    if (!this.hasPrevious()) return this;
    if (this.previousParameters === null) return this;
    const response = await this.makeRequest(this.previousParameters);
    return this.withData(response.data);
  }
  async next(): Promise<PageBase<Data, Parameters>> {
    if (!this.hasNext()) return this;
    if (this.nextParameters === null) return this;
    const response = await this.makeRequest(this.nextParameters);
    return this.withData(response.data);
  }

  /**
   * Generate minimal set of parameters needed to get the previous page
   */
  protected abstract get previousParameters(): PageParameterProperties | null;

  /**
   * Generate minimal set of parameters needed to get the next page
   */
  protected abstract get nextParameters(): PageParameterProperties | null;

  /**
   * Is there a previous page based on PageInfo?
   */
  abstract hasPrevious(): boolean;

  /**
   * Is there a next page based on PageInfo?
   */
  abstract hasNext(): boolean;

  /**
   * Helper for invoking a request. Handles request body and parameter based pagination
   */
  private makeRequest(parameters: PageParameterProperties): AxiosPromise<Data> {
    // Handle request body pagination
    if (this.initialParameters.requestBody !== undefined) {
      return this._request({
        ...this.initialParameters,
        requestBody: { ...this.initialParameters.requestBody, ...parameters },
      });
    }
    return this._request({ ...this.initialParameters, ...parameters });
  }

  /**
   * Helper for creating new page
   */
  private withData(data: Data): PageBase<Data, Parameters> {
    return this.make({
      data,
      initialParameters: this.initialParameters,
      request: this._request,
    });
  }

  constructor({
    data,
    initialParameters,
    request,
  }: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }) {
    this.data = data;
    this._request = request;
    this.initialParameters = initialParameters;
  }

  abstract make(parameters: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }): Pageable<Data, Parameters>;
}
