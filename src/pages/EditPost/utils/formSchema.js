import * as yup from 'yup';

export const formSchema = yup.object().shape({
  title: yup.string()
    .trim()
    .min(1, 'Too Short')
    .max(300, 'Too Long')
    .required('Required'),
  body: yup.string()
    .trim()
    .min(1, 'Too Short')
    .max(3000, 'Too Long')
    .required('Required')
});