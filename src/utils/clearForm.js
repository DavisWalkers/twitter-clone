export const clearForm = (formElement) => {
  const inputs = formElement.querySelectorAll('textarea');

  for (const input of inputs) {
    input.value = '';
  }
};
