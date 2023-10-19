import {
  InvalidateOptions,
  InvalidateQueryFilters,
  QueryClient,
  QueryKey,
  useQuery as __useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';

import {
  APITemplate,
  ClientQueries,
  InferHandlerInput,
  QueryPaths,
} from './types';

const validateApiError = () => {
  return (apiError: any) => {
    throw new Error(apiError.toString());
  };
};

export default class API<APISchema extends APITemplate> {
  public queryClient: QueryClient;

  private contract: APISchema;

  constructor(contract: APISchema) {
    this.queryClient = new QueryClient();
    this.contract = contract;
  }

  public useQuery<
    TPath extends QueryPaths<APISchema> & string,
    TQueryOutput extends ClientQueries<APISchema>[TPath]['awaitedResponse'],
    TQueryInput extends InferHandlerInput<APISchema[TPath]>
  >(pathAndInput: [path: TPath, args: TQueryInput], opts?: UseQueryOptions<TQueryOutput>) {
    const [path, args] = pathAndInput;
    const endpoint = this.contract[path];

    return __useQuery(
      pathAndInput as QueryKey,
      () => endpoint(args).catch(validateApiError()),
      opts
    );
  }

  public invalidateQueries<
    TPath extends QueryPaths<APISchema> & string,
    TQueryInput extends InferHandlerInput<APISchema[TPath]>
  >(
    filters: InvalidateQueryFilters & { queryKey: [path: TPath, args: Partial<TQueryInput>] },
    options?: InvalidateOptions
  ) {
    return this.queryClient.invalidateQueries(filters, options);
  }
}
