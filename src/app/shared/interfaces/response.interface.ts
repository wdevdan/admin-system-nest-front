export interface Response<T> {
  statusCode?: number;
  success?: boolean;
  message?: string;
  body?: T | T[];
  content?: T;
}

export function HttpErrorToResponse<T>(err: MegaResponse) {
  return {
    message: (err && err.error && err.error.message) ?? (err && err.message) ?? (err && err.statusText) ?? 'undefined error',
    statusCode: (err && err.error.statusCode) ?? (err && err.status) ?? 500,
    success: false,
  } as Response<T>;
}

export function ResponseError(e) {
  const res = {} as Response<any>;
  res.statusCode = e.StatusCode;
  res.success = e.Success;
  res.message = e.Message;
  return res;
}

export interface MegaResponse {
  error?: Response<any>;

  headers?: any;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
  message: string;
}

export const getMessages = (res: any) => {
  let messages = res.message;
  let response = { title: [], body: [] };

  response.title = messages.map(m => Object.keys(m));

  messages.map(m => Object.getOwnPropertyNames(m).forEach(
    prop => response.body.push(m[prop])
  ));

  return response;
}
