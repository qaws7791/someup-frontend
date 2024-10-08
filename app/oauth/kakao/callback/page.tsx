import Callback from '@/app/oauth/kakao/callback/kakao-callback-client';
import React, { Suspense } from 'react';

export default function KaKaoCallbackClient() {
  return (
    <Suspense>
      <Callback />
    </Suspense>
  );
}
