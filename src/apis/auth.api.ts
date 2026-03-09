import type { LoginPayloadType, LoginResponseType } from '@/types/auth.type'
import http from '@/utils/http'

export const login = (body: LoginPayloadType) => http.post<LoginResponseType>('/auth/login', body)
