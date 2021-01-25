import React from 'react';
import { useAuth } from '../../hooks/AuthHook';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>Protected Route</h1>
      <button type="button" onClick={signOut}>
        Logout
      </button>
    </Container>
  );
};

export default Dashboard;
