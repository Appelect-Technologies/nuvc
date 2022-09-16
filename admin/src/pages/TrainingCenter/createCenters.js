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
        // srNo: fileres.data.srNo,
        state: values.state,
        district: values.district,
        tpName: values.tpName,
        sector: values.Sector,
        jobRole: values.jobRole,
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
      srNo: '',
      state: '',
      district: '',
      tpName: '',
      tcName: '',
      sector: '',
      jobRole: '',
      tcSpocName: '',
      tcSpocEmail: '',
      tcSpocMobile: '',
      tcAddress: '',
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
              <Typography>District</Typography>
              <TextField
                {...formik.getFieldProps('district')}
                rows={1}
                multiline
                helperText={formik.errors.district}
                disabled={formik.isSubmitting}
                error={formik.errors.district}
              />
            </FormGroup>

            <FormGroup>
              <Typography> TP Name</Typography>
              <TextField
                {...formik.getFieldProps('tpName')}
                error={formik.errors.tpName}
                helperText={formik.errors.tpName}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC Name</Typography>
              <TextField
                {...formik.getFieldProps('tcName')}
                error={formik.errors.tcName}
                helperText={formik.errors.tcName}
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
              <Typography>Job Role</Typography>
              <TextField
                {...formik.getFieldProps('jobRole')}
                helperText={formik.errors.jobRole}
                error={formik.errors.jobRole}
                disabled={formik.isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC SPOC Name</Typography>
              <TextField
                {...formik.getFieldProps('tcSpocName')}
                helperText={formik.errors.tcSpocName}
                disabled={formik.isSubmitting}
                error={formik.errors.tcSpocName}
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
                {...formik.getFieldProps('tcSpocEmail')}
                helperText={formik.errors.tcSpocEmail}
                disabled={formik.isSubmitting}
                error={formik.errors.tcSpocEmail}
              />
            </FormGroup>

            <FormGroup>
              <Typography> TC Spoc Mobile</Typography>
              <TextField
                {...formik.getFieldProps('tcSpocMobile')}
                helperText={formik.errors.tcSpocMobile}
                disabled={formik.isSubmitting}
                error={formik.errors.tcSpocMobile}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC Address</Typography>
              <TextField
                {...formik.getFieldProps('tcAddress')}
                helperText={formik.errors.tcAddress}
                disabled={formik.isSubmitting}
                error={formik.errors.tcAddress}
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
