import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import { LoginForm } from '../sections/auth/login';
import AuthSocial from '../sections/auth/AuthSocial';
import logo from '../components/assets/image/logo.jpg';
import seller from '../components/assets/image/seller.jpg';
// component
import Iconify from '../components/Iconify';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        alignItems: 'center',
        padding: theme.spacing(7, 5, 0, 7),
    },
    "& img": {
        width: 50,
        marginRight: 10
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function SellerLogin() {
    const smUp = useResponsive('up', 'sm');
    const mdUp = useResponsive('up', 'md');
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('User Name is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            remember: true,
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    return (
        <Page title="Login">
            <RootStyle>
                <HeaderStyle>
                    <img src={logo} alt='logo' />
                    <h1>Martcues.in</h1>
                </HeaderStyle>

                {mdUp && (
                    <SectionStyle>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, }}>
                            Hi, Welcome Back
                        </Typography>
                        <img src={seller} alt="login" />
                    </SectionStyle>
                )}

                <Container maxWidth="sm">
                    <ContentStyle>
                        <Typography variant="h4" gutterBottom>
                            Sign in to Martcues Seller
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

                        <AuthSocial />
                        <FormikProvider value={formik}>
                            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        autoComplete="username"
                                        label="User Name"
                                        error={Boolean(touched.userName && errors.userName)}
                                        helperText={touched.userName && errors.userName}
                                    />

                                    <TextField
                                        fullWidth
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        {...getFieldProps('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword} edge="end">
                                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={Boolean(touched.password && errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Stack>

                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                                    <FormControlLabel
                                        control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
                                        label="Remember me"
                                    />

                                    <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
                                        Forgot password?
                                    </Link>
                                </Stack>

                                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                                    Login
                                </LoadingButton>
                            </Form>
                        </FormikProvider>

                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
