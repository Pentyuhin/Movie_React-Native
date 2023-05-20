import { IUser } from '@/shared/types/user.interface'

export interface IAuthInterfaceData extends Pick<IUser, 'email' | 'password'> {}
