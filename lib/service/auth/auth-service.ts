import clientEnv from '@/lib/env/client-env';
import token from '@/lib/service/auth/token';
import { ReissueTokenResponse } from '@/types/auth-types';
import axios from 'axios';

export function logout() {
  const accessToken = token.accessToken.get();
  const refreshToken = token.refreshToken.get();
  return axios.post<void>(`${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });
}

export function reissueToken() {
  const accessToken = token.accessToken.get();
  const refreshToken = token.refreshToken.get();
  return axios.get<ReissueTokenResponse>(
    `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/reissue`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    },
  );
}
