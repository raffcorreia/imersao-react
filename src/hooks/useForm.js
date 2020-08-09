import { useState } from 'react';

function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(
      name,
      value,
    );
  }

  function clearForm() {
    setValues(valoresInicias);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
