import { Button, Card, CardContent, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { createCourse, UploadFileToS3 } from 'src/services';

function CreateCourse() {
  const formRef = useRef();
  const handleSubmit = async (values) => {
    try { 
      //  await
      const new_values = { 
        ...values, 
      };
      if (values.image) {
        const fileres = await UploadFileToS3(values.image);
        new_values.icon = fileres.data.file;
      } 
      await createCourse(new_values);
       toast.success('Successfully created');
      formik.resetForm();
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      toast.error('Error occured');
    } finally {
      formik.setSubmitting();
    }
  };

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      description: '',
      qualification: '',
      language: '',
      duration: '',
      sector: '',
      price: '',
      availability: '',
      certificationProgram: '',
      certificationPartner: '',
    },
    validate: (values) => {
      const includes = ['name', 'description', 'price'];
      const errors = {};
      for (const key in values) {
        if (includes.includes(key) && (!values[key] || values[key]?.toString().trim().length === 0)) {
          errors[key] = 'Field is required';
        }
      }
      return errors;
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <FormGroup>
              <Typography>Image</Typography>
              <TextField
                name="image"
                onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
                type="file"
                inputProps={{
                  accept: 'image/*',
                }}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Name</Typography>
              <TextField
                {...formik.getFieldProps('name')}
                error={formik.errors.name}
                helperText={formik.errors.name}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Description</Typography>
              <TextField
                {...formik.getFieldProps('description')}
                error={formik.errors.description}
                helperText={formik.errors.description}
                rows={3}
                disabled={formik.isSubmitting}
                multiline
              />
            </FormGroup>

            <FormGroup>
              <Typography>Qualification</Typography>
              <TextField
                {...formik.getFieldProps('qualification')}
                error={formik.errors.qualification}
                helperText={formik.errors.qualification}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Language</Typography>
              <TextField
                {...formik.getFieldProps('language')}
                error={formik.errors.language}
                helperText={formik.errors.language}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Duration</Typography>
              <TextField
                {...formik.getFieldProps('duration')}
                error={formik.errors.duration}
                helperText={formik.errors.duration}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Sector</Typography>
              <TextField
                {...formik.getFieldProps('sector')}
                error={formik.errors.sector}
                helperText={formik.errors.sector}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Price</Typography>
              <TextField
                {...formik.getFieldProps('price')}
                error={formik.errors.price}
                helperText={formik.errors.price}
                disabled={formik.isSubmitting}
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Typography>Availability</Typography>
              <TextField
                {...formik.getFieldProps('availability')}
                error={formik.errors.availability}
                helperText={formik.errors.availability}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Certification Program</Typography>
              <TextField
                {...formik.getFieldProps('certificationProgram')}
                error={formik.errors.certificationProgram}
                helperText={formik.errors.certificationProgram}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Certification Partner</Typography>
              <TextField
                {...formik.getFieldProps('certificationPartner')}
                error={formik.errors.certificationPartner}
                helperText={formik.errors.certificationPartner}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" variant="contained" disabled={formik.isSubmitting} size="large">
                Submit
              </Button>
            </FormGroup>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}

export default CreateCourse;
