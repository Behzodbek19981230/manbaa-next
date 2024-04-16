export type UserType = {
  id: number;
  fullName: string;
};
export type NewsType = {
  id: number;
  title: string;
  user: UserType;
  description: string;
};
