import { Button, Card, CardContent, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { CreateCenter, UploadFileToS3 } from 'src/services';
import Center from './Center';

function CreateCenterForm() {
  const formRef = useRef();
  const handleSubmit = async (values) => {
    try {
      // const fileres = await UploadFileToS3(values.icon);
      const new_values = {
        ...values,
        // SrNo: fileres.data.SrNo,
        state: values.state,
        District: values.District,
        TPName: values.TPName,
        Sector: values.Sector,
        JobRole: values.JobRole,
      };
      await CreateCenter(new_values);
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
      SrNo: '',
      state: '',
      District: '',
      TPName: '',
      TCName: '',
      Sector: '',
      JobRole: '',
      TCSPOCName: '',
      TCSPOCEmailID: '',
      TCSpocMobile: '',
      TCAddress: '',
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
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <FormGroup>
              <Typography>Sr.No.</Typography>
              <TextField
                name="Sr.no"
                onChange={(e) => formik.setFieldValue('number', e.target.number[0])}
                type="number"
                inputProps={{
                  accept: 'number',
                }}
              />
            </FormGroup>
            <FormGroup>
              <Typography>State</Typography>
              <TextField
                {...formik.getFieldProps('state')}
                helperText={formik.errors.state}
                disabled={formik.isSubmitting}
                error={formik.errors.state}
              />
            </FormGroup>

            <FormGroup>
              <Typography> District</Typography>
              <TextField
                {...formik.getFieldProps('District')}
                rows={1}
                multiline
                helperText={formik.errors.District}
                disabled={formik.isSubmitting}
                error={formik.errors.District}
              />
            </FormGroup>

            <FormGroup>
              <Typography> TP Name</Typography>
              <TextField
                {...formik.getFieldProps('TP Name')}
                type=""
                helperText={formik.errors.Name}
                disabled={formik.isSubmitting}
                error={formik.errors.Name}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC Name</Typography>
              <TextField
                {...formik.getFieldProps('TC Name')}
                rows={1}
                multiline
                helperText={formik.errors.TCName}
                disabled={formik.isSubmitting}
                error={formik.errors.TCName}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Sector</Typography>
              <TextField
                {...formik.getFieldProps('Sector')}
                type="number"
                helperText={formik.errors.Sector}
                disabled={formik.isSubmitting}
                error={formik.errors.Sector}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Job Role</Typography>
              <TextField
                {...formik.getFieldProps('Job Role')}
                type=""
                helperText={formik.errors.JobRole}
                disabled={formik.isSubmitting}
                error={formik.errors.JobRole}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC SPOC Name (TC SPOC Name)</Typography>
              <TextField
                {...formik.getFieldProps('TC SPOC Name')}
                type=""
                helperText={formik.errors.TCSPOCName}
                disabled={formik.isSubmitting}
                error={formik.errors.TCSPOCName}
              />
            </FormGroup>

            {/* <FormGroup>
              <Typography>Application Fee</Typography>
              <TextField
                {...formik.getFieldProps('applicationFee')}
                type="number"
                helperText={formik.errors.applicationFee}
                disabled={formik.isSubmitting}
                error={formik.errors.applicationFee}
              />
            </FormGroup> */}

            <FormGroup>
              <Typography> TC SPOC Email ID</Typography>
              <TextField
                {...formik.getFieldProps('TC SPOC Email ID')}
                helperText={formik.errors.TCSPOCEmailID}
                disabled={formik.isSubmitting}
                error={formik.errors.TCSPOCEmailID}
              />
            </FormGroup>

            <FormGroup>
              <Typography> TC Spoc Mobile</Typography>
              <TextField
                {...formik.getFieldProps('TC Spoc Mobile')}
                helperText={formik.errors.TCSpocMobile}
                disabled={formik.isSubmitting}
                error={formik.errors.TCSpocMobile}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC Address</Typography>
              <TextField
                {...formik.getFieldProps('TC Address')}
                helperText={formik.errors.TCAddress}
                disabled={formik.isSubmitting}
                error={formik.errors.TCAddress}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" disabled={formik.isSubmitting} variant="contained" size="large">
                Submit
              </Button>
            </FormGroup>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}

export default CreateCenterForm;
