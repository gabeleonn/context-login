import React from 'react';

import { AuthProvider } from './AuthHook';
import { ToastProvider } from './ToastHook';

const Providers: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default Providers;
