export interface Todo {
  title: string;
  status: boolean;
}

export interface TodoDocument extends Todo {
  _id: string;
}
