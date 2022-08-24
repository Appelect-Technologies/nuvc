import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import { Link as RRLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

// import { UserSignup } from "../../services/authService";
// import { handleCatch } from "../../utils/utils";
// import Main from "../../layout/main";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Axios from 'src/apiClient/Axios';
import COUNTRIES_CODE_JSON from '../../data/country_phone_codes.json';
// import { INITIAL_USER_DATA } from "../../redux/reducers/userData";
// import { LOGGED_IN } from "../../redux/reducers/authData";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values) => {
    try {
      // dispatch(isFormSubmitting());
      const vals = {
        ...values,
        phone: {
          number: values.number,
          cc: values.country_code,
        },
      };
      // const res = await UserSignup(vals);
      // localStorage.setItem('access_token', res.access_token);
      // Axios.defaults.headers.common['Authorization'] = `Bearer ${res.access_token}`;
      // dispatch(INITIAL_USER_DATA(res));
      // dispatch(LOGGED_IN());
      navigate('/dashboard');
    } catch (error) {
      // handleCatch(error);
    } finally {
      formik.setSubmitting();
      // dispatch(resetFormSubmitting());
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      country_code: '+91',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};

      const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email);

      if (!email) {
        errors.emailErr = 'Please enter a valid email';
      }

      if (!values.firstName?.trim()) {
        errors.firstNameErr = 'Please enter valid name';
      }
      if (!values.lastName?.trim()) {
        errors.lastNameErr = 'Please enter valid name';
      }
      if (!/^[\d]{10}$/gi.test(values.number)) {
        errors.numberErr = 'Please enter valid number';
      }
      if (values.password.length < 8) {
        errors.passwordErr = 'Please enter a valid password containing atleast 8 alphanumic characters';
      }
      if (values.confirmPassword != values.password) {
        errors.confirmPasswordErr = "Password didn't match";
      }
      return errors;
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    const referCode = new URLSearchParams(location.search).get('referCode');
    if (referCode) {
      formik.setFieldValue('referredBy', referCode);
    }
  }, []);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={Boolean(formik.errors.firstNameErr)}
                helperText={formik.errors.firstNameErr}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={Boolean(formik.errors.lastNameErr)}
                helperText={formik.errors.lastNameErr}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.emailErr)}
                helperText={formik.errors.emailErr}
              />
            </Grid>
            <Grid container sx={{ mt: 2, ml: 1 }} spacing={1}>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel required id="countryCode">
                    Country Code
                  </InputLabel>
                  <Select
                    labelId="countryCode"
                    id="country_code"
                    label="Country Code"
                    onChange={(e) => formik.setFieldValue('country_code', e.target.value)}
                    value={formik.values.country_code}
                  >
                    {COUNTRIES_CODE_JSON.map((_, i) => (
                      <MenuItem key={i} value={_.dial_code}>
                        {_.code} {_.dial_code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="number"
                  required
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={formik.values.number}
                  error={Boolean(formik.errors.numberErr)}
                  helperText={formik.errors.numberErr ? formik.errors.numberErr : null}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={Boolean(formik.errors.passwordErr)}
                helperText={formik.errors.passwordErr}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={Boolean(formik.errors.confirmPasswordErr)}
                helperText={formik.errors.confirmPasswordErr}
              />
            </Grid>

            <Grid item xs={12}></Grid>

            <Grid item xs={12}>
              <Typography>
                By continuing, you agree to our company's <RRLink to="/terms-and-conditions">Terms of Use</RRLink> and{' '}
                <RRLink to="/privacy-policy">Privacy Policy</RRLink>.
              </Typography>
            </Grid>
          </Grid>

          <Button
            disabled={formik.isSubmitting}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography>
                Already have an account? <RRLink to="/login">Sign in</RRLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
