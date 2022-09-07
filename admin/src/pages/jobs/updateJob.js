import { Button, Card, CardContent, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { updateJob, UploadFileToS3 } from 'src/services';

function UpdateJobForm({ data }) {
  const formRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (values) => {
    try {
      const new_values = {
        ...values,
        application_fee_dis: values.applicationFeeDisc,
        application_fee: values.applicationFee,
        exam_date: values.examDate,
        number_of_vacancies: values.noOfVacancies,
        syllabus_url: values.syllabusUrl,
      };
      await updateJob(new_values);
      toast.success('Successfully updated!');
      formik.resetForm();
      formRef.current.reset();
    } catch (error) {
      alert(error.message); 
    } finally {
      formik.setSubmitting();
    }
  };

  const handleUploadImage = async (image) => {
    try {
      const res = await UploadFileToS3(image);
      formik.setFieldValue('icon', res.data.file);
      imageRef.current.reset();
    } catch (error) {
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      icon: '',
      title: '',
      description: '',
      examDate: '',
      applicationFeeDisc: '',
      applicationFee: '',
      url1: '',
      url2: '',
      qualification: '',
      noOfVacancies: '',
      salary: '',
      syllabusUrl: '',
    },
    validate: (values) => {
      const errors = {};
      // for (const key in values) {
      //   if (!values[key] || values[key]?.toString().trim().length === 0) {
      //     errors[key] = 'Field is required';
      //   }
      // }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      //   handleSubmit(values);
    },
  });

  useEffect(() => {
    formik.setValues({
      icon: data.icon,
      title: data.title,
      description: data.description,
      examDate: data.examDate,
      applicationFeeDisc: data.applicationFeeDisc,
      applicationFee: data.applicationFee,
      url1: data.url1,
      url2: data.url2,
      qualification: data.qualification,
      noOfVacancies: data.noOfVacancies,
      salary: data.salary,
      syllabusUrl: data.syllabusUrl,
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <FormGroup>
              <Typography>Image</Typography>
              <img src={formik.values.icon} />
              <TextField
                name="icon"
                onChange={(e) => handleUploadImage(e.target.files[0])}
                type="file"
                ref={imageRef}
                inputProps={{
                  accept: 'image/*',
                }}
              />
            </FormGroup>
            <FormGroup>
              <Typography>Job Title</Typography>
              <TextField
                {...formik.getFieldProps('title')}
                helperText={formik.errors.title}
                disabled={formik.isSubmitting}
                error={formik.errors.title}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Description</Typography>
              <TextField
                {...formik.getFieldProps('description')}
                rows={4}
                multiline
                helperText={formik.errors.description}
                disabled={formik.isSubmitting}
                error={formik.errors.description}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Exam Date</Typography>
              <TextField
                {...formik.getFieldProps('examDate')}
                type="date"
                helperText={formik.errors.date}
                disabled={formik.isSubmitting}
                error={formik.errors.date}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Qualification</Typography>
              <TextField
                {...formik.getFieldProps('qualification')}
                rows={2}
                multiline
                helperText={formik.errors.qualification}
                disabled={formik.isSubmitting}
                error={formik.errors.qualification}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Number Of Vacancies</Typography>
              <TextField
                {...formik.getFieldProps('noOfVacancies')}
                type="number"
                helperText={formik.errors.noOfVacancies}
                disabled={formik.isSubmitting}
                error={formik.errors.noOfVacancies}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Salary</Typography>
              <TextField
                {...formik.getFieldProps('salary')}
                type="number"
                helperText={formik.errors.salary}
                disabled={formik.isSubmitting}
                error={formik.errors.salary}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Application Fee Discount (for SC,ST,physical handicapped)</Typography>
              <TextField
                {...formik.getFieldProps('applicationFeeDisc')}
                type="number"
                helperText={formik.errors.applicationFeeDisc}
                disabled={formik.isSubmitting}
                error={formik.errors.applicationFeeDisc}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Application Fee</Typography>
              <TextField
                {...formik.getFieldProps('applicationFee')}
                type="number"
                helperText={formik.errors.applicationFee}
                disabled={formik.isSubmitting}
                error={formik.errors.applicationFee}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Syllabus Url</Typography>
              <TextField
                {...formik.getFieldProps('syllabusUrl')}
                helperText={formik.errors.syllabusUrl}
                disabled={formik.isSubmitting}
                error={formik.errors.syllabusUrl}
              />
            </FormGroup>

            <FormGroup>
              <Typography>URL 1</Typography>
              <TextField
                {...formik.getFieldProps('url1')}
                helperText={formik.errors.url1}
                disabled={formik.isSubmitting}
                error={formik.errors.url1}
              />
            </FormGroup>

            <FormGroup>
              <Typography>URL 2</Typography>
              <TextField
                {...formik.getFieldProps('url2')}
                helperText={formik.errors.url2}
                disabled={formik.isSubmitting}
                error={formik.errors.url2}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" disabled={formik.isSubmitting} variant="contained" size="large">
                Update
              </Button>
            </FormGroup>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}

export default UpdateJobForm;
