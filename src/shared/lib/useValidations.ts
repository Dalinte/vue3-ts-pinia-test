// Хук для добавления валидации во vuetify. В реальном проекте использовалась бы библиотека для валидации
export const useValidations = () => {
  return {
    required: (value: unknown) => {
      if (value) return true;

      return 'Обязательное поле';
    },
  };
};
