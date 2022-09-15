import { Button, Card, CardContent, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { UpdateCenter as UpdateCenterService } from 'src/services';

function UpdatecenterComponent({ data }) {
  const formRef = useRef();

  const handleSubmit = async (values) => {
    try {
      await UpdateCenterService(values);
      toast.success('Successfully created!');
      formik.resetForm();
      formRef.current.reset();
    } catch (error) {
      alert(error.message);
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
      // console.log(values);
      handleSubmit(values);
    },
  });
  useEffect(() => {
    if (data) {
      formik.setValues(data);
    }
  }, []);

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
                {...formik.getFieldProps('district')}
                helperText={formik.errors.district}
                disabled={formik.isSubmitting}
                error={formik.errors.district}
              />
            </FormGroup>

            <FormGroup>
              <Typography> TP Name</Typography>
              <TextField
                {...formik.getFieldProps('TP Name')}
                helperText={formik.errors.tpName}
                disabled={formik.isSubmitting}
                error={formik.errors.tpName}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC Name</Typography>
              <TextField
                {...formik.getFieldProps('TC Name')}
                helperText={formik.errors.tcName}
                disabled={formik.isSubmitting}
                error={formik.errors.tcName}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Sector</Typography>
              <TextField
                {...formik.getFieldProps('sector')}
                helperText={formik.errors.sector}
                disabled={formik.isSubmitting}
                error={formik.errors.sector}
              />
            </FormGroup>

            <FormGroup>
              <Typography>Job Role</Typography>
              <TextField
                {...formik.getFieldProps('jobRole')}
                helperText={formik.errors.jobRole}
                disabled={formik.isSubmitting}
                error={formik.errors.jobRole}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC SPOC Name (TC SPOC Name)</Typography>
              <TextField
                {...formik.getFieldProps('tcSpocName')}
                helperText={formik.errors.tcSpocName}
                disabled={formik.isSubmitting}
                error={formik.errors.tcSpocName}
              />
            </FormGroup>

            <FormGroup>
              <Typography>TC SPOC Email ID</Typography>
              <TextField
                {...formik.getFieldProps('tcSpocEmailID')}
                helperText={formik.errors.tcSpocEmailID}
                disabled={formik.isSubmitting}
                error={formik.errors.tcSpocEmailID}
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
                Update
              </Button>
            </FormGroup>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}

export default UpdatecenterComponent;
