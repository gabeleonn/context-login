import { useState, FormEvent } from 'react';

interface useFormType {
  <T>(arg: T): [T, (e: FormEvent<HTMLInputElement>) => void, (e: T) => void];
}

const useForm: useFormType = initialValues => {
  const [state, setState] = useState(initialValues);

  return [
    state,
    (e): void => {
      setState({
        ...state,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    (e): void => {
      setState({ ...state, ...e });
    },
  ];
};

export default useForm;
