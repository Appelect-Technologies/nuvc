import { Button, Card, CardContent, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { createNews, UploadFileToS3 } from 'src/services';

function CreateNews() {
  const formRef = useRef();
  const handleSubmit = async (values) => {
    try {
      //  await
      const fileres = await UploadFileToS3(values.image);
      const new_values = {
        ...values,
        image: fileres.data.file,
      };
      await createNews(new_values);
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
      title: '',
      description: '',
      date: '',
    },
    validate: (values) => {
      const errors = {};
      for (const key in values) {
        if (!values[key] || values[key]?.toString().trim().length === 0) {
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
              <Typography>Title</Typography>
              <TextField
                {...formik.getFieldProps('title')}
                error={formik.errors.title}
                helperText={formik.errors.title}
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
              <Typography>Date</Typography>
              <TextField
                {...formik.getFieldProps('date')}
                error={formik.errors.date}
                helperText={formik.errors.date}
                disabled={formik.isSubmitting}
                type="date"
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

export default CreateNews;
