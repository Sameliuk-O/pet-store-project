export interface ILanding {
  description: string;
  id?: number;
  image: string;
  title: string;
}

export interface IComment {
  comment: string;
  group: string;
  index?: number;
  userName: string;
}
