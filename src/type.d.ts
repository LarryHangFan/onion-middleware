
export interface CtxType {
  promise: {
    resolve: (arg: any) => void | any;
    reject: (arg: any) => void | any;
    [key: string]: any;
  };
  request: {
    config: {
      timeout?: number;
      baseUrl?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  response?: any;
  [key: string]: any;
}
