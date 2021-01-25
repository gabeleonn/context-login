import React, { InputHTMLAttributes, useState } from 'react';

import { FiMail, FiUser, FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

const Input: React.FC<InputProps> = ({ error, type, ...rest }) => {
  const [isFocused, setFocus] = useState(false);

  return (
    <Container
      isFocused={isFocused}
      hasError={!!error}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {type !== 'email' ? <FiUser size={24} /> : <FiMail size={24} />}
      <input type={type} {...rest} />
      <div>
        {!!error && <FiAlertCircle size={18} />}
        {!!error && <span>{error}</span>}
      </div>
    </Container>
  );
};

export default Input;
