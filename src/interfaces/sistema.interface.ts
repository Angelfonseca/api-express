import { User } from './user.interface'
import { Sensores } from './sensores.interface'

export interface Sistema {
    user: User
    sensores: Sensores
    place: string
  }
  