import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Box, Stepper, Step, StepLabel, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';

// Customized StepConnector for the Stepper
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
  [`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg, rgb(123,31,162) 0%, rgb(0,0,0) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

// Customized StepIcon for the Stepper
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#ffffff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 95deg, rgb(123,31,162) 0%, rgb(50,5,50) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 95deg, rgb(123,31,162) 0%, rgb(20,20,20) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) setFormData(savedData);
  }, []);

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    setErrors({ ...errors, [input]: '' });
    localStorage.setItem('formData', JSON.stringify({ ...formData, [input]: e.target.value }));
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = {};

    if (activeStep === 0) {
      if (!formData.name) { newErrors.name = 'Name is required'; valid = false; }
      if (!formData.email) { newErrors.email = 'Email is required'; valid = false; }
      else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Email is invalid'; valid = false; }
      if (!formData.phone) { newErrors.phone = 'Phone is required'; valid = false; }
    } else if (activeStep === 1) {
      if (!formData.address1) { newErrors.address1 = 'Address Line 1 is required'; valid = false; }
      if (!formData.city) { newErrors.city = 'City is required'; valid = false; }
      if (!formData.state) { newErrors.state = 'State is required'; valid = false; }
      if (!formData.zip) { newErrors.zip = 'Zip Code is required'; valid = false; }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    localStorage.removeItem('formData');
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo formData={formData} errors={errors} handleChange={handleChange} />;
      case 1:
        return <AddressInfo formData={formData} errors={errors} handleChange={handleChange} />;
      case 2:
        return <Confirmation formData={formData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={4} mb={4}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel variant='standard' StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <div>
        {activeStep === steps.length ? (
          <Typography variant="h5" align="center">
            Your form has been filled successfully!!!
          </Typography>
        ) : (
          <>
            {getStepContent(activeStep)}
            <div style={{ marginTop: '20px' }}>
              <Button color='secondary' disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color='secondary' onClick={handleNext} sx={{ ml: 2 }}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StepperForm;
