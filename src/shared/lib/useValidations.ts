export const useValidations = () => {
  return {
    required: (value: unknown) => {
      if (value) return true;

      return 'Обязательное поле';
    },
  };
};
