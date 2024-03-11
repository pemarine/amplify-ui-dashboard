/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { VesselsAISHistory } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function VesselsAISHistoryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    imo: "",
    vessel_name: "",
    timestamp: "",
    latitude: "",
    longitude: "",
  };
  const [imo, setImo] = React.useState(initialValues.imo);
  const [vessel_name, setVessel_name] = React.useState(
    initialValues.vessel_name
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImo(initialValues.imo);
    setVessel_name(initialValues.vessel_name);
    setTimestamp(initialValues.timestamp);
    setLatitude(initialValues.latitude);
    setLongitude(initialValues.longitude);
    setErrors({});
  };
  const validations = {
    imo: [],
    vessel_name: [],
    timestamp: [],
    latitude: [],
    longitude: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          imo,
          vessel_name,
          timestamp,
          latitude,
          longitude,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new VesselsAISHistory(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VesselsAISHistoryCreateForm")}
      {...rest}
    >
      <TextField
        label="Imo"
        isRequired={false}
        isReadOnly={false}
        value={imo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imo: value,
              vessel_name,
              timestamp,
              latitude,
              longitude,
            };
            const result = onChange(modelFields);
            value = result?.imo ?? value;
          }
          if (errors.imo?.hasError) {
            runValidationTasks("imo", value);
          }
          setImo(value);
        }}
        onBlur={() => runValidationTasks("imo", imo)}
        errorMessage={errors.imo?.errorMessage}
        hasError={errors.imo?.hasError}
        {...getOverrideProps(overrides, "imo")}
      ></TextField>
      <TextField
        label="Vessel name"
        isRequired={false}
        isReadOnly={false}
        value={vessel_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imo,
              vessel_name: value,
              timestamp,
              latitude,
              longitude,
            };
            const result = onChange(modelFields);
            value = result?.vessel_name ?? value;
          }
          if (errors.vessel_name?.hasError) {
            runValidationTasks("vessel_name", value);
          }
          setVessel_name(value);
        }}
        onBlur={() => runValidationTasks("vessel_name", vessel_name)}
        errorMessage={errors.vessel_name?.errorMessage}
        hasError={errors.vessel_name?.hasError}
        {...getOverrideProps(overrides, "vessel_name")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={false}
        isReadOnly={false}
        value={timestamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imo,
              vessel_name,
              timestamp: value,
              latitude,
              longitude,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        value={latitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imo,
              vessel_name,
              timestamp,
              latitude: value,
              longitude,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={false}
        isReadOnly={false}
        value={longitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imo,
              vessel_name,
              timestamp,
              latitude,
              longitude: value,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
