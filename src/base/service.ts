export interface ResponseService<T> {
  data: T;
  totalPage: number;
}

//TODO
// * Mudar o tipo de retorno do  execute para promise;

export interface Service<TModel> {
  execute(...args: Array<any>): ResponseService<TModel>;
}
