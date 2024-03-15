<div align="left">

[![Visit Pulze.ai](./header.png)](https://www.pulze.ai&#x2F;)

# [Pulze.ai](https://www.pulze.ai&#x2F;)<a id="pulzeai"></a>

At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`pulzeai.apps.getAppForApiKey`](#pulzeaiappsgetappforapikey)
  * [`pulzeai.apps.updateProperties`](#pulzeaiappsupdateproperties)
  * [`pulzeai.chat.performCompletionRequest`](#pulzeaichatperformcompletionrequest)
  * [`pulzeai.completions.performTextRequest`](#pulzeaicompletionsperformtextrequest)
  * [`pulzeai.logs.getById`](#pulzeailogsgetbyid)
  * [`pulzeai.logs.getMatchingLogs`](#pulzeailogsgetmatchinglogs)
  * [`pulzeai.logs.rateById`](#pulzeailogsratebyid)
  * [`pulzeai.models.getAllModels`](#pulzeaimodelsgetallmodels)
  * [`pulzeai.models.getRankOfBest`](#pulzeaimodelsgetrankofbest)
  * [`pulzeai.models.listActiveModels`](#pulzeaimodelslistactivemodels)
  * [`pulzeai.models.toggleModelForApp`](#pulzeaimodelstogglemodelforapp)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Pulze.ai&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { PulzeAi } from "pulze-ai-typescript-sdk";

const pulzeai = new PulzeAi({
  // Defining the base path is optional and defaults to https://api.pulze.ai
  // basePath: "https://api.pulze.ai",
  accessToken: "ACCESS_TOKEN",
});

const getAppForApiKeyResponse = await pulzeai.apps.getAppForApiKey();

console.log(getAppForApiKeyResponse);
```

## Reference<a id="reference"></a>


### `pulzeai.apps.getAppForApiKey`<a id="pulzeaiappsgetappforapikey"></a>

Retrieves the App for the given API key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAppForApiKeyResponse = await pulzeai.apps.getAppForApiKey();
```

#### 🔄 Return<a id="🔄-return"></a>

[AppWithModelUpdatesInfo](./models/app-with-model-updates-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/apps/self` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.apps.updateProperties`<a id="pulzeaiappsupdateproperties"></a>

Update an App's properties: description, weights and policies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePropertiesResponse = await pulzeai.apps.updateProperties({
  description: "description_example",
  id: "id_example",
  policies: {
    max_cost: 0.02,
    max_same_model_retries: 1,
    max_switch_model_retries: 1,
    optimize_internal_requests: 0,
    privacy_level: 1,
  },
  weights: {
    cost: 0.4,
    latency: 0.4,
    quality: 0.4,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

##### id: `string`<a id="id-string"></a>

##### policies: [`LLMModelPolicies`](./models/llmmodel-policies.ts)<a id="policies-llmmodelpoliciesmodelsllmmodel-policiests"></a>

##### weights: [`LLMModelWeights`](./models/llmmodel-weights.ts)<a id="weights-llmmodelweightsmodelsllmmodel-weightsts"></a>

##### prompt_id: `string`<a id="prompt_id-string"></a>

Prompt ID that we will use for requests

#### 🔄 Return<a id="🔄-return"></a>

[AppWithModelUpdatesInfo](./models/app-with-model-updates-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/apps/update` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.chat.performCompletionRequest`<a id="pulzeaichatperformcompletionrequest"></a>

Perform a Chat Completion request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const performCompletionRequestResponse =
  await pulzeai.chat.performCompletionRequest({
    best_of: 1,
    _false: 1,
    frequency_penalty: 0,
    messages: [],
    model: "pulze",
    presence_penalty: 0,
    stream: false,
    suffix: "",
    temperature: 1,
    top_p: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### best_of: `number`<a id="best_of-number"></a>

The number of responses to _generate_. Out of those, it will return the best `n`.

##### false: `number`<a id="false-number"></a>

How many completions to generate for each prompt. @default 1 

##### frequency_penalty: `number`<a id="frequency_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-frequency_penalty Increase the model\\\'s likelihood to not repeat tokens/words 

##### logit_bias: `object`<a id="logit_bias-object"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logit_bias Modify the likelihood of specified tokens appearing in the completion.  See here for a detailed explanation on how to use: https://help.openai.com/en/articles/5247780-using-logit-bias-to-define-token-probability 

##### logprobs: `number`<a id="logprobs-number"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logprobs Include the log probabilities on the logprobs most likely tokens, as well the chosen tokens. 

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens that the response can contain.

##### messages: [`RoleContentChatChoice`](./models/role-content-chat-choice.ts)[]<a id="messages-rolecontentchatchoicemodelsrole-content-chat-choicets"></a>

The conversation sent (with or without history) (for a /chat/completions request)

##### model: `string`<a id="model-string"></a>

https://docs.pulze.ai/overview/models Specify the model you\\\'d like Pulze to use. (optional). Can be the full model name, or a subset for multi-matching.  Defaults to our dynamic routing, i.e. best model for this request. 

##### presence_penalty: `number`<a id="presence_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty Increase the model\\\'s likelihood to talk about new topics 

##### prompt: [`PromptProperty`](./models/prompt-property.ts)<a id="prompt-promptpropertymodelsprompt-propertyts"></a>

##### stop: [`StopProperty`](./models/stop-property.ts)<a id="stop-stoppropertymodelsstop-propertyts"></a>

##### stream: `boolean`<a id="stream-boolean"></a>

** COMING SOON ** Specify if you want the response to be streamed or to be returned as a standard HTTP request 

##### suffix: `string`<a id="suffix-string"></a>

COMING SOON

##### temperature: `number`<a id="temperature-number"></a>

Optionally specify the temperature for this request only. Leave empty to allow Pulze to guess it for you.

##### tool_choice: [`ToolChoiceProperty`](./models/tool-choice-property.ts)<a id="tool_choice-toolchoicepropertymodelstool-choice-propertyts"></a>

##### tools: [`ToolFunction`](./models/tool-function.ts)[]<a id="tools-toolfunctionmodelstool-functionts"></a>

##### top_p: `number`<a id="top_p-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-top_p An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass 

#### 🔄 Return<a id="🔄-return"></a>

[PulzeEngineResponseChatCompletion](./models/pulze-engine-response-chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/chat/completions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.completions.performTextRequest`<a id="pulzeaicompletionsperformtextrequest"></a>

Perform a text Completion request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const performTextRequestResponse = await pulzeai.completions.performTextRequest(
  {
    best_of: 1,
    _false: 1,
    frequency_penalty: 0,
    messages: [],
    model: "pulze",
    presence_penalty: 0,
    stream: false,
    suffix: "",
    temperature: 1,
    top_p: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### best_of: `number`<a id="best_of-number"></a>

The number of responses to _generate_. Out of those, it will return the best `n`.

##### false: `number`<a id="false-number"></a>

How many completions to generate for each prompt. @default 1 

##### frequency_penalty: `number`<a id="frequency_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-frequency_penalty Increase the model\\\'s likelihood to not repeat tokens/words 

##### logit_bias: `object`<a id="logit_bias-object"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logit_bias Modify the likelihood of specified tokens appearing in the completion.  See here for a detailed explanation on how to use: https://help.openai.com/en/articles/5247780-using-logit-bias-to-define-token-probability 

##### logprobs: `number`<a id="logprobs-number"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logprobs Include the log probabilities on the logprobs most likely tokens, as well the chosen tokens. 

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens that the response can contain.

##### messages: [`RoleContentChatChoice`](./models/role-content-chat-choice.ts)[]<a id="messages-rolecontentchatchoicemodelsrole-content-chat-choicets"></a>

The conversation sent (with or without history) (for a /chat/completions request)

##### model: `string`<a id="model-string"></a>

https://docs.pulze.ai/overview/models Specify the model you\\\'d like Pulze to use. (optional). Can be the full model name, or a subset for multi-matching.  Defaults to our dynamic routing, i.e. best model for this request. 

##### presence_penalty: `number`<a id="presence_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty Increase the model\\\'s likelihood to talk about new topics 

##### prompt: [`PromptProperty`](./models/prompt-property.ts)<a id="prompt-promptpropertymodelsprompt-propertyts"></a>

##### stop: [`StopProperty`](./models/stop-property.ts)<a id="stop-stoppropertymodelsstop-propertyts"></a>

##### stream: `boolean`<a id="stream-boolean"></a>

** COMING SOON ** Specify if you want the response to be streamed or to be returned as a standard HTTP request 

##### suffix: `string`<a id="suffix-string"></a>

COMING SOON

##### temperature: `number`<a id="temperature-number"></a>

Optionally specify the temperature for this request only. Leave empty to allow Pulze to guess it for you.

##### tool_choice: [`ToolChoiceProperty`](./models/tool-choice-property.ts)<a id="tool_choice-toolchoicepropertymodelstool-choice-propertyts"></a>

##### tools: [`ToolFunction`](./models/tool-function.ts)[]<a id="tools-toolfunctionmodelstool-functionts"></a>

##### top_p: `number`<a id="top_p-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-top_p An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass 

#### 🔄 Return<a id="🔄-return"></a>

[PulzeEngineResponseCompletion](./models/pulze-engine-response-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/completions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.logs.getById`<a id="pulzeailogsgetbyid"></a>

Get a specific log by id. If accessing via API Key, this endpoint will only return a log if it belongs to that App.
If the log's App is disabled, this endpoint won't return it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await pulzeai.logs.getById({
  logId: "logId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logId: `string`<a id="logid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RequestNormalized](./models/request-normalized.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/logs/{log_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.logs.getMatchingLogs`<a id="pulzeailogsgetmatchinglogs"></a>

Get the list of logs that match the specified filters. When accessing via an App's API Key, only logs for that
app will be returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMatchingLogsResponse = await pulzeai.logs.getMatchingLogs({
  page: 1,
  size: 50,
  app_ids: [],
  date_from: "1970-01-01T00:00:00.00Z",
  params: [],
  query: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date_from: `string`<a id="date_from-string"></a>

The earliest date we are searching for.

##### app_ids: `string`[]<a id="app_ids-string"></a>

The list of API Keys we want to filter for. Leave the list empty to disable filtering (and return data for all apps) instead.

##### date_to: `string`<a id="date_to-string"></a>

The latest date we are searching for.

##### labels: Record<string, `string`><a id="labels-record"></a>

Only logs (requests) with all of the specified labels will be returned. Values get compared between their lowercase forms.

##### params: [`GetTableSortParams`](./models/get-table-sort-params.ts)[]<a id="params-gettablesortparamsmodelsget-table-sort-paramsts"></a>

The sorting parameters for the query

##### query: `string`<a id="query-string"></a>

Search for logs containing the `query` in their Request or Response.

##### page: `number`<a id="page-number"></a>

##### size: `number`<a id="size-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/logs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.logs.rateById`<a id="pulzeailogsratebyid"></a>

Rate a specific request by its ID. When accessing it via an App's API Key, this endpoint will only allow
rating a log of that specific app.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rateByIdResponse = await pulzeai.logs.rateById({
  logId: "logId_example",
  feedback: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logId: `string`<a id="logid-string"></a>

##### feedback: `string`<a id="feedback-string"></a>

An optional text with accompanies the feedback\\\'s rating

##### good_answer: `boolean`<a id="good_answer-boolean"></a>

The rating given to this request. It can be good (`True`), bad (`False`) or none (`None` == `null`)

#### 🔄 Return<a id="🔄-return"></a>

[RequestNormalized](./models/request-normalized.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/logs/{log_id}/rating` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.models.getAllModels`<a id="pulzeaimodelsgetallmodels"></a>

Get a list of all the Models which this App can potentially use.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllModelsResponse = await pulzeai.models.getAllModels();
```

#### 🔄 Return<a id="🔄-return"></a>

[ModelParts](./models/model-parts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/models/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.models.getRankOfBest`<a id="pulzeaimodelsgetrankofbest"></a>

Get Rank Of Best Models For Payload

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRankOfBestResponse = await pulzeai.models.getRankOfBest({
  best_of: 1,
  _false: 1,
  frequency_penalty: 0,
  messages: [],
  model: "pulze",
  presence_penalty: 0,
  stream: false,
  suffix: "",
  temperature: 1,
  top_p: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### best_of: `number`<a id="best_of-number"></a>

The number of responses to _generate_. Out of those, it will return the best `n`.

##### false: `number`<a id="false-number"></a>

How many completions to generate for each prompt. @default 1 

##### frequency_penalty: `number`<a id="frequency_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-frequency_penalty Increase the model\\\'s likelihood to not repeat tokens/words 

##### logit_bias: `object`<a id="logit_bias-object"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logit_bias Modify the likelihood of specified tokens appearing in the completion.  See here for a detailed explanation on how to use: https://help.openai.com/en/articles/5247780-using-logit-bias-to-define-token-probability 

##### logprobs: `number`<a id="logprobs-number"></a>

COMING SOON https://platform.openai.com/docs/api-reference/completions/create#completions/create-logprobs Include the log probabilities on the logprobs most likely tokens, as well the chosen tokens. 

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens that the response can contain.

##### messages: [`RoleContentChatChoice`](./models/role-content-chat-choice.ts)[]<a id="messages-rolecontentchatchoicemodelsrole-content-chat-choicets"></a>

The conversation sent (with or without history) (for a /chat/completions request)

##### model: `string`<a id="model-string"></a>

https://docs.pulze.ai/overview/models Specify the model you\\\'d like Pulze to use. (optional). Can be the full model name, or a subset for multi-matching.  Defaults to our dynamic routing, i.e. best model for this request. 

##### presence_penalty: `number`<a id="presence_penalty-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty Increase the model\\\'s likelihood to talk about new topics 

##### prompt: [`PromptProperty`](./models/prompt-property.ts)<a id="prompt-promptpropertymodelsprompt-propertyts"></a>

##### stop: [`StopProperty`](./models/stop-property.ts)<a id="stop-stoppropertymodelsstop-propertyts"></a>

##### stream: `boolean`<a id="stream-boolean"></a>

** COMING SOON ** Specify if you want the response to be streamed or to be returned as a standard HTTP request 

##### suffix: `string`<a id="suffix-string"></a>

COMING SOON

##### temperature: `number`<a id="temperature-number"></a>

Optionally specify the temperature for this request only. Leave empty to allow Pulze to guess it for you.

##### tool_choice: [`ToolChoiceProperty`](./models/tool-choice-property.ts)<a id="tool_choice-toolchoicepropertymodelstool-choice-propertyts"></a>

##### tools: [`ToolFunction`](./models/tool-function.ts)[]<a id="tools-toolfunctionmodelstool-functionts"></a>

##### top_p: `number`<a id="top_p-number"></a>

https://platform.openai.com/docs/api-reference/completions/create#completions/create-top_p An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass 

#### 🔄 Return<a id="🔄-return"></a>

[PulzeEngineModelRanking](./models/pulze-engine-model-ranking.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/models/rank` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.models.listActiveModels`<a id="pulzeaimodelslistactivemodels"></a>

Get a list of the Models which are active for a specific App.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActiveModelsResponse = await pulzeai.models.listActiveModels();
```

#### 🔄 Return<a id="🔄-return"></a>

[ModelParts](./models/model-parts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/models/active` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pulzeai.models.toggleModelForApp`<a id="pulzeaimodelstogglemodelforapp"></a>

Enable or disable a model.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleModelForAppResponse = await pulzeai.models.toggleModelForApp({
  modelId: "modelId_example",
  enable: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### modelId: `string`<a id="modelid-string"></a>

##### enable: `boolean`<a id="enable-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PulzeToggleModelResponse](./models/pulze-toggle-model-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/models/{model_id}/toggle` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
