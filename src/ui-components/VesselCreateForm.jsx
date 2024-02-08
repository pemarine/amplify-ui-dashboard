/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Vessel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function VesselCreateForm(props) {
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
    IMO: "",
    MMSI: "",
    SHIPNAME: "",
    FLAG: "",
    MARKET: "",
    TYPE_NAME: "",
    LAT: "",
    LON: "",
    LAST_PORT: "",
    CURRENT_PORT: "",
    NEXT_PORT: "",
    NEXT_PORT_NAME: "",
    DISTANCE_TO_GO: "",
    DISTANCE_TRAVELLED: "",
    DESTINATION: "",
    SPEED: "",
    AVG_SPEED: "",
    MAX_SPEED: "",
  };
  const [IMO, setIMO] = React.useState(initialValues.IMO);
  const [MMSI, setMMSI] = React.useState(initialValues.MMSI);
  const [SHIPNAME, setSHIPNAME] = React.useState(initialValues.SHIPNAME);
  const [FLAG, setFLAG] = React.useState(initialValues.FLAG);
  const [MARKET, setMARKET] = React.useState(initialValues.MARKET);
  const [TYPE_NAME, setTYPE_NAME] = React.useState(initialValues.TYPE_NAME);
  const [LAT, setLAT] = React.useState(initialValues.LAT);
  const [LON, setLON] = React.useState(initialValues.LON);
  const [LAST_PORT, setLAST_PORT] = React.useState(initialValues.LAST_PORT);
  const [CURRENT_PORT, setCURRENT_PORT] = React.useState(
    initialValues.CURRENT_PORT
  );
  const [NEXT_PORT, setNEXT_PORT] = React.useState(initialValues.NEXT_PORT);
  const [NEXT_PORT_NAME, setNEXT_PORT_NAME] = React.useState(
    initialValues.NEXT_PORT_NAME
  );
  const [DISTANCE_TO_GO, setDISTANCE_TO_GO] = React.useState(
    initialValues.DISTANCE_TO_GO
  );
  const [DISTANCE_TRAVELLED, setDISTANCE_TRAVELLED] = React.useState(
    initialValues.DISTANCE_TRAVELLED
  );
  const [DESTINATION, setDESTINATION] = React.useState(
    initialValues.DESTINATION
  );
  const [SPEED, setSPEED] = React.useState(initialValues.SPEED);
  const [AVG_SPEED, setAVG_SPEED] = React.useState(initialValues.AVG_SPEED);
  const [MAX_SPEED, setMAX_SPEED] = React.useState(initialValues.MAX_SPEED);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIMO(initialValues.IMO);
    setMMSI(initialValues.MMSI);
    setSHIPNAME(initialValues.SHIPNAME);
    setFLAG(initialValues.FLAG);
    setMARKET(initialValues.MARKET);
    setTYPE_NAME(initialValues.TYPE_NAME);
    setLAT(initialValues.LAT);
    setLON(initialValues.LON);
    setLAST_PORT(initialValues.LAST_PORT);
    setCURRENT_PORT(initialValues.CURRENT_PORT);
    setNEXT_PORT(initialValues.NEXT_PORT);
    setNEXT_PORT_NAME(initialValues.NEXT_PORT_NAME);
    setDISTANCE_TO_GO(initialValues.DISTANCE_TO_GO);
    setDISTANCE_TRAVELLED(initialValues.DISTANCE_TRAVELLED);
    setDESTINATION(initialValues.DESTINATION);
    setSPEED(initialValues.SPEED);
    setAVG_SPEED(initialValues.AVG_SPEED);
    setMAX_SPEED(initialValues.MAX_SPEED);
    setErrors({});
  };
  const validations = {
    IMO: [],
    MMSI: [],
    SHIPNAME: [],
    FLAG: [],
    MARKET: [],
    TYPE_NAME: [],
    LAT: [],
    LON: [],
    LAST_PORT: [],
    CURRENT_PORT: [],
    NEXT_PORT: [],
    NEXT_PORT_NAME: [],
    DISTANCE_TO_GO: [],
    DISTANCE_TRAVELLED: [],
    DESTINATION: [],
    SPEED: [],
    AVG_SPEED: [],
    MAX_SPEED: [],
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
          IMO,
          MMSI,
          SHIPNAME,
          FLAG,
          MARKET,
          TYPE_NAME,
          LAT,
          LON,
          LAST_PORT,
          CURRENT_PORT,
          NEXT_PORT,
          NEXT_PORT_NAME,
          DISTANCE_TO_GO,
          DISTANCE_TRAVELLED,
          DESTINATION,
          SPEED,
          AVG_SPEED,
          MAX_SPEED,
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
          await DataStore.save(new Vessel(modelFields));
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
      {...getOverrideProps(overrides, "VesselCreateForm")}
      {...rest}
    >
      <TextField
        label="Imo"
        isRequired={false}
        isReadOnly={false}
        value={IMO}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO: value,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.IMO ?? value;
          }
          if (errors.IMO?.hasError) {
            runValidationTasks("IMO", value);
          }
          setIMO(value);
        }}
        onBlur={() => runValidationTasks("IMO", IMO)}
        errorMessage={errors.IMO?.errorMessage}
        hasError={errors.IMO?.hasError}
        {...getOverrideProps(overrides, "IMO")}
      ></TextField>
      <TextField
        label="Mmsi"
        isRequired={false}
        isReadOnly={false}
        value={MMSI}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI: value,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.MMSI ?? value;
          }
          if (errors.MMSI?.hasError) {
            runValidationTasks("MMSI", value);
          }
          setMMSI(value);
        }}
        onBlur={() => runValidationTasks("MMSI", MMSI)}
        errorMessage={errors.MMSI?.errorMessage}
        hasError={errors.MMSI?.hasError}
        {...getOverrideProps(overrides, "MMSI")}
      ></TextField>
      <TextField
        label="Shipname"
        isRequired={false}
        isReadOnly={false}
        value={SHIPNAME}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME: value,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.SHIPNAME ?? value;
          }
          if (errors.SHIPNAME?.hasError) {
            runValidationTasks("SHIPNAME", value);
          }
          setSHIPNAME(value);
        }}
        onBlur={() => runValidationTasks("SHIPNAME", SHIPNAME)}
        errorMessage={errors.SHIPNAME?.errorMessage}
        hasError={errors.SHIPNAME?.hasError}
        {...getOverrideProps(overrides, "SHIPNAME")}
      ></TextField>
      <TextField
        label="Flag"
        isRequired={false}
        isReadOnly={false}
        value={FLAG}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG: value,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.FLAG ?? value;
          }
          if (errors.FLAG?.hasError) {
            runValidationTasks("FLAG", value);
          }
          setFLAG(value);
        }}
        onBlur={() => runValidationTasks("FLAG", FLAG)}
        errorMessage={errors.FLAG?.errorMessage}
        hasError={errors.FLAG?.hasError}
        {...getOverrideProps(overrides, "FLAG")}
      ></TextField>
      <TextField
        label="Market"
        isRequired={false}
        isReadOnly={false}
        value={MARKET}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET: value,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.MARKET ?? value;
          }
          if (errors.MARKET?.hasError) {
            runValidationTasks("MARKET", value);
          }
          setMARKET(value);
        }}
        onBlur={() => runValidationTasks("MARKET", MARKET)}
        errorMessage={errors.MARKET?.errorMessage}
        hasError={errors.MARKET?.hasError}
        {...getOverrideProps(overrides, "MARKET")}
      ></TextField>
      <TextField
        label="Type name"
        isRequired={false}
        isReadOnly={false}
        value={TYPE_NAME}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME: value,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.TYPE_NAME ?? value;
          }
          if (errors.TYPE_NAME?.hasError) {
            runValidationTasks("TYPE_NAME", value);
          }
          setTYPE_NAME(value);
        }}
        onBlur={() => runValidationTasks("TYPE_NAME", TYPE_NAME)}
        errorMessage={errors.TYPE_NAME?.errorMessage}
        hasError={errors.TYPE_NAME?.hasError}
        {...getOverrideProps(overrides, "TYPE_NAME")}
      ></TextField>
      <TextField
        label="Lat"
        isRequired={false}
        isReadOnly={false}
        value={LAT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT: value,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.LAT ?? value;
          }
          if (errors.LAT?.hasError) {
            runValidationTasks("LAT", value);
          }
          setLAT(value);
        }}
        onBlur={() => runValidationTasks("LAT", LAT)}
        errorMessage={errors.LAT?.errorMessage}
        hasError={errors.LAT?.hasError}
        {...getOverrideProps(overrides, "LAT")}
      ></TextField>
      <TextField
        label="Lon"
        isRequired={false}
        isReadOnly={false}
        value={LON}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON: value,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.LON ?? value;
          }
          if (errors.LON?.hasError) {
            runValidationTasks("LON", value);
          }
          setLON(value);
        }}
        onBlur={() => runValidationTasks("LON", LON)}
        errorMessage={errors.LON?.errorMessage}
        hasError={errors.LON?.hasError}
        {...getOverrideProps(overrides, "LON")}
      ></TextField>
      <TextField
        label="Last port"
        isRequired={false}
        isReadOnly={false}
        value={LAST_PORT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT: value,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.LAST_PORT ?? value;
          }
          if (errors.LAST_PORT?.hasError) {
            runValidationTasks("LAST_PORT", value);
          }
          setLAST_PORT(value);
        }}
        onBlur={() => runValidationTasks("LAST_PORT", LAST_PORT)}
        errorMessage={errors.LAST_PORT?.errorMessage}
        hasError={errors.LAST_PORT?.hasError}
        {...getOverrideProps(overrides, "LAST_PORT")}
      ></TextField>
      <TextField
        label="Current port"
        isRequired={false}
        isReadOnly={false}
        value={CURRENT_PORT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT: value,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.CURRENT_PORT ?? value;
          }
          if (errors.CURRENT_PORT?.hasError) {
            runValidationTasks("CURRENT_PORT", value);
          }
          setCURRENT_PORT(value);
        }}
        onBlur={() => runValidationTasks("CURRENT_PORT", CURRENT_PORT)}
        errorMessage={errors.CURRENT_PORT?.errorMessage}
        hasError={errors.CURRENT_PORT?.hasError}
        {...getOverrideProps(overrides, "CURRENT_PORT")}
      ></TextField>
      <TextField
        label="Next port"
        isRequired={false}
        isReadOnly={false}
        value={NEXT_PORT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT: value,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.NEXT_PORT ?? value;
          }
          if (errors.NEXT_PORT?.hasError) {
            runValidationTasks("NEXT_PORT", value);
          }
          setNEXT_PORT(value);
        }}
        onBlur={() => runValidationTasks("NEXT_PORT", NEXT_PORT)}
        errorMessage={errors.NEXT_PORT?.errorMessage}
        hasError={errors.NEXT_PORT?.hasError}
        {...getOverrideProps(overrides, "NEXT_PORT")}
      ></TextField>
      <TextField
        label="Next port name"
        isRequired={false}
        isReadOnly={false}
        value={NEXT_PORT_NAME}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME: value,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.NEXT_PORT_NAME ?? value;
          }
          if (errors.NEXT_PORT_NAME?.hasError) {
            runValidationTasks("NEXT_PORT_NAME", value);
          }
          setNEXT_PORT_NAME(value);
        }}
        onBlur={() => runValidationTasks("NEXT_PORT_NAME", NEXT_PORT_NAME)}
        errorMessage={errors.NEXT_PORT_NAME?.errorMessage}
        hasError={errors.NEXT_PORT_NAME?.hasError}
        {...getOverrideProps(overrides, "NEXT_PORT_NAME")}
      ></TextField>
      <TextField
        label="Distance to go"
        isRequired={false}
        isReadOnly={false}
        value={DISTANCE_TO_GO}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO: value,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.DISTANCE_TO_GO ?? value;
          }
          if (errors.DISTANCE_TO_GO?.hasError) {
            runValidationTasks("DISTANCE_TO_GO", value);
          }
          setDISTANCE_TO_GO(value);
        }}
        onBlur={() => runValidationTasks("DISTANCE_TO_GO", DISTANCE_TO_GO)}
        errorMessage={errors.DISTANCE_TO_GO?.errorMessage}
        hasError={errors.DISTANCE_TO_GO?.hasError}
        {...getOverrideProps(overrides, "DISTANCE_TO_GO")}
      ></TextField>
      <TextField
        label="Distance travelled"
        isRequired={false}
        isReadOnly={false}
        value={DISTANCE_TRAVELLED}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED: value,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.DISTANCE_TRAVELLED ?? value;
          }
          if (errors.DISTANCE_TRAVELLED?.hasError) {
            runValidationTasks("DISTANCE_TRAVELLED", value);
          }
          setDISTANCE_TRAVELLED(value);
        }}
        onBlur={() =>
          runValidationTasks("DISTANCE_TRAVELLED", DISTANCE_TRAVELLED)
        }
        errorMessage={errors.DISTANCE_TRAVELLED?.errorMessage}
        hasError={errors.DISTANCE_TRAVELLED?.hasError}
        {...getOverrideProps(overrides, "DISTANCE_TRAVELLED")}
      ></TextField>
      <TextField
        label="Destination"
        isRequired={false}
        isReadOnly={false}
        value={DESTINATION}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION: value,
              SPEED,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.DESTINATION ?? value;
          }
          if (errors.DESTINATION?.hasError) {
            runValidationTasks("DESTINATION", value);
          }
          setDESTINATION(value);
        }}
        onBlur={() => runValidationTasks("DESTINATION", DESTINATION)}
        errorMessage={errors.DESTINATION?.errorMessage}
        hasError={errors.DESTINATION?.hasError}
        {...getOverrideProps(overrides, "DESTINATION")}
      ></TextField>
      <TextField
        label="Speed"
        isRequired={false}
        isReadOnly={false}
        value={SPEED}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED: value,
              AVG_SPEED,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.SPEED ?? value;
          }
          if (errors.SPEED?.hasError) {
            runValidationTasks("SPEED", value);
          }
          setSPEED(value);
        }}
        onBlur={() => runValidationTasks("SPEED", SPEED)}
        errorMessage={errors.SPEED?.errorMessage}
        hasError={errors.SPEED?.hasError}
        {...getOverrideProps(overrides, "SPEED")}
      ></TextField>
      <TextField
        label="Avg speed"
        isRequired={false}
        isReadOnly={false}
        value={AVG_SPEED}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED: value,
              MAX_SPEED,
            };
            const result = onChange(modelFields);
            value = result?.AVG_SPEED ?? value;
          }
          if (errors.AVG_SPEED?.hasError) {
            runValidationTasks("AVG_SPEED", value);
          }
          setAVG_SPEED(value);
        }}
        onBlur={() => runValidationTasks("AVG_SPEED", AVG_SPEED)}
        errorMessage={errors.AVG_SPEED?.errorMessage}
        hasError={errors.AVG_SPEED?.hasError}
        {...getOverrideProps(overrides, "AVG_SPEED")}
      ></TextField>
      <TextField
        label="Max speed"
        isRequired={false}
        isReadOnly={false}
        value={MAX_SPEED}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IMO,
              MMSI,
              SHIPNAME,
              FLAG,
              MARKET,
              TYPE_NAME,
              LAT,
              LON,
              LAST_PORT,
              CURRENT_PORT,
              NEXT_PORT,
              NEXT_PORT_NAME,
              DISTANCE_TO_GO,
              DISTANCE_TRAVELLED,
              DESTINATION,
              SPEED,
              AVG_SPEED,
              MAX_SPEED: value,
            };
            const result = onChange(modelFields);
            value = result?.MAX_SPEED ?? value;
          }
          if (errors.MAX_SPEED?.hasError) {
            runValidationTasks("MAX_SPEED", value);
          }
          setMAX_SPEED(value);
        }}
        onBlur={() => runValidationTasks("MAX_SPEED", MAX_SPEED)}
        errorMessage={errors.MAX_SPEED?.errorMessage}
        hasError={errors.MAX_SPEED?.hasError}
        {...getOverrideProps(overrides, "MAX_SPEED")}
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
