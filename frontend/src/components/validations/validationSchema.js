import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(20).max(60).required(),
  email: Yup.string().email().required(),
  address: Yup.string().max(400),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Z])(?=.*\W)/, 'Password must have at least one uppercase letter and one special character')
    .required(),
});
