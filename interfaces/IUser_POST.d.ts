export interface IUser_POST {
  name: string;
  email: string;
  userImage?: string;
  cpf: string;
  contact: string;
  birthDate?: Date;
  description?: string;
  userType: string;
  address: IAddress_POST;
}

export interface IAddress_POST {
  cep: string;
  state: string;
  city: string;
  street: string;
  complement?: string;
}
