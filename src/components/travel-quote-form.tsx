import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepLabel,
  Stepper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  CalendarToday as CalendarIcon,
  AccessTime as ClockIcon,
} from "@mui/icons-material";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  marginTop: theme.spacing(4),
}));

const StepContent = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StepperContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const TotalPrice = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontWeight: "bold",
}));

export default function TravelQuoteForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasStopover, setHasStopover] = useState(false);
  const [prices, setPrices] = useState({
    flight: 0,
    accommodation: 0,
    additionalServices: 0,
  });

  const steps = [
    "Personal Information",
    "Destination Details",
    "Flight Details",
    "Accommodation Preferences",
    "Additional Services",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updatePrice = (category, value) => {
    setPrices((prev) => ({
      ...prev,
      [category]: parseFloat(value) || 0,
    }));
  };

  const totalPrice = Object.values(prices).reduce(
    (sum, price) => sum + price,
    0
  );

  return (
    <LocalizationProvider>
      <StyledCard>
        <CardHeader
          title="Travel Quote Calculator"
          subheader={`Step ${activeStep + 1} of ${steps.length}`}
        />
        <CardContent>
          <StepperContainer>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </StepperContainer>

          <StepContent>
            {activeStep === 0 && (
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            )}

            {activeStep === 1 && (
              <Grid container spacing={2}>
                <Grid size={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Destination</InputLabel>
                    <Select label="Destination">
                      <MenuItem value="europe">Europe</MenuItem>
                      <MenuItem value="asia">Asia</MenuItem>
                      <MenuItem value="northAmerica">North America</MenuItem>
                      <MenuItem value="southAmerica">South America</MenuItem>
                      <MenuItem value="africa">Africa</MenuItem>
                      <MenuItem value="australia">Australia</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={6}>
                  <DatePicker label="Departure Date" />
                </Grid>
                <Grid size={6}>
                  <DatePicker label="Return Date" />
                </Grid>
                <Grid size={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Number of Travelers</InputLabel>
                    <Select label="Number of Travelers">
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value="5+">5 or more</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            )}

            {activeStep === 2 && (
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Departure Airport"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Arrival Airport"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <DatePicker label="Flight Departure Date" />
                </Grid>
                <Grid size={6}>
                  <TimePicker label="Flight Departure Time" />
                </Grid>
                <Grid size={6}>
                  <DatePicker label="Flight Arrival Date" />
                </Grid>
                <Grid size={6}>
                  <TimePicker label="Flight Arrival Time" />
                </Grid>
                <Grid size={6}>
                  <TextField fullWidth label="Airline" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Flight Class</InputLabel>
                    <Select label="Flight Class">
                      <MenuItem value="economy">Economy</MenuItem>
                      <MenuItem value="premium">Premium Economy</MenuItem>
                      <MenuItem value="business">Business</MenuItem>
                      <MenuItem value="first">First Class</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={hasStopover}
                        onChange={(e) => setHasStopover(e.target.checked)}
                      />
                    }
                    label="Stopover Required"
                  />
                </Grid>
                {hasStopover && (
                  <Grid container size={12} spacing={2}>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Stopover Airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={12}>
                      <DatePicker label="Stopover Arrival Date" />
                    </Grid>
                    <Grid size={12}>
                      <TimePicker label="Stopover Arrival Time" />
                    </Grid>
                    <Grid size={12}>
                      <DatePicker label="Stopover Departure Date" />
                    </Grid>
                    <Grid size={12}>
                      <TimePicker label="Stopover Departure Time" />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Stopover Airline"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Stopover Flight Class</InputLabel>
                        <Select label="Stopover Flight Class">
                          <MenuItem value="economy">Economy</MenuItem>
                          <MenuItem value="premium">Premium Economy</MenuItem>
                          <MenuItem value="business">Business</MenuItem>
                          <MenuItem value="first">First Class</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Flight Price"
                    type="number"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    onChange={(e) => updatePrice("flight", e.target.value)}
                  />
                </Grid>
              </Grid>
            )}

            {activeStep === 3 && (
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField fullWidth label="Hotel Name" variant="outlined" />
                </Grid>
                <Grid size={12}>
                  <FormControl component="fieldset">
                    <Typography variant="subtitle1">
                      Accommodation Type
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="hotel"
                        control={<Radio />}
                        label="Hotel"
                      />
                      <FormControlLabel
                        value="apartment"
                        control={<Radio />}
                        label="Apartment"
                      />
                      <FormControlLabel
                        value="hostel"
                        control={<Radio />}
                        label="Hostel"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Room Type</InputLabel>
                    <Select label="Room Type">
                      <MenuItem value="single">Single Room</MenuItem>
                      <MenuItem value="double">Double Room</MenuItem>
                      <MenuItem value="suite">Suite</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Accommodation Price (total stay)"
                    type="number"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      updatePrice("accommodation", e.target.value)
                    }
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Special Requests"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
            )}

            {activeStep === 4 && (
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Typography variant="subtitle1">
                    Additional Services
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Airport Transfer"
                  />
                  <FormControlLabel control={<Checkbox />} label="Car Rental" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Travel Insurance"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Guided Tours"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Additional Services Price"
                    type="number"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      updatePrice("additionalServices", e.target.value)
                    }
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Additional Information"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
            )}
          </StepContent>

          <TotalPrice variant="h6">Total: ${totalPrice.toFixed(2)}</TotalPrice>

          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? () => {} : handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {activeStep === steps.length - 1 ? "Get Quote" : "Next"}
            </Button>
          </div>
        </CardContent>
      </StyledCard>
    </LocalizationProvider>
  );
}
