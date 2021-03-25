export function extractFormParams(formElement) {
  const inputs = formElement.querySelectorAll('textarea');

  const title = inputs[0].value.trim();
  const body = inputs[1].value.trim();

  return { title, body };
}
