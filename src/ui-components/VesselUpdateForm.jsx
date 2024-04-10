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
export default function VesselUpdateForm(props) {
  const {
    id: idProp,
    vessel: vesselModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    clientID: "",
    fleet: "",
    ip: "",
    outsideTemp: "",
    Outside_Temp_LastDay: "",
    HVAC_P_status: "",
    En_Vent_P_status: "",
    Pumps_P_status: "",
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
    updatedAt: "",
    En_Vent_Power: "",
    En_Vent_Power_Percent: "",
    HVAC_Power: "",
    HVAC_Power_Percent: "",
    Total_Power: "",
    Saved_CO2_LastDay: "",
    Saved_Fuel_LastDay: "",
    Saved_Energy_LastDay: "",
    Pumps_Power: "",
    Pumps_Power_Percent: "",
    HVAC_Avg_Power: "",
    Energy_Last_Day: "",
  };
  const [clientID, setClientID] = React.useState(initialValues.clientID);
  const [fleet, setFleet] = React.useState(initialValues.fleet);
  const [ip, setIp] = React.useState(initialValues.ip);
  const [outsideTemp, setOutsideTemp] = React.useState(
    initialValues.outsideTemp
  );
  const [Outside_Temp_LastDay, setOutside_Temp_LastDay] = React.useState(
    initialValues.Outside_Temp_LastDay
  );
  const [HVAC_P_status, setHVAC_P_status] = React.useState(
    initialValues.HVAC_P_status
  );
  const [En_Vent_P_status, setEn_Vent_P_status] = React.useState(
    initialValues.En_Vent_P_status
  );
  const [Pumps_P_status, setPumps_P_status] = React.useState(
    initialValues.Pumps_P_status
  );
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
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [En_Vent_Power, setEn_Vent_Power] = React.useState(
    initialValues.En_Vent_Power
  );
  const [En_Vent_Power_Percent, setEn_Vent_Power_Percent] = React.useState(
    initialValues.En_Vent_Power_Percent
  );
  const [HVAC_Power, setHVAC_Power] = React.useState(initialValues.HVAC_Power);
  const [HVAC_Power_Percent, setHVAC_Power_Percent] = React.useState(
    initialValues.HVAC_Power_Percent
  );
  const [Total_Power, setTotal_Power] = React.useState(
    initialValues.Total_Power
  );
  const [Saved_CO2_LastDay, setSaved_CO2_LastDay] = React.useState(
    initialValues.Saved_CO2_LastDay
  );
  const [Saved_Fuel_LastDay, setSaved_Fuel_LastDay] = React.useState(
    initialValues.Saved_Fuel_LastDay
  );
  const [Saved_Energy_LastDay, setSaved_Energy_LastDay] = React.useState(
    initialValues.Saved_Energy_LastDay
  );
  const [Pumps_Power, setPumps_Power] = React.useState(
    initialValues.Pumps_Power
  );
  const [Pumps_Power_Percent, setPumps_Power_Percent] = React.useState(
    initialValues.Pumps_Power_Percent
  );
  const [HVAC_Avg_Power, setHVAC_Avg_Power] = React.useState(
    initialValues.HVAC_Avg_Power
  );
  const [Energy_Last_Day, setEnergy_Last_Day] = React.useState(
    initialValues.Energy_Last_Day
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vesselRecord
      ? { ...initialValues, ...vesselRecord }
      : initialValues;
    setClientID(cleanValues.clientID);
    setFleet(cleanValues.fleet);
    setIp(cleanValues.ip);
    setOutsideTemp(cleanValues.outsideTemp);
    setOutside_Temp_LastDay(cleanValues.Outside_Temp_LastDay);
    setHVAC_P_status(cleanValues.HVAC_P_status);
    setEn_Vent_P_status(cleanValues.En_Vent_P_status);
    setPumps_P_status(cleanValues.Pumps_P_status);
    setIMO(cleanValues.IMO);
    setMMSI(cleanValues.MMSI);
    setSHIPNAME(cleanValues.SHIPNAME);
    setFLAG(cleanValues.FLAG);
    setMARKET(cleanValues.MARKET);
    setTYPE_NAME(cleanValues.TYPE_NAME);
    setLAT(cleanValues.LAT);
    setLON(cleanValues.LON);
    setLAST_PORT(cleanValues.LAST_PORT);
    setCURRENT_PORT(cleanValues.CURRENT_PORT);
    setNEXT_PORT(cleanValues.NEXT_PORT);
    setNEXT_PORT_NAME(cleanValues.NEXT_PORT_NAME);
    setDISTANCE_TO_GO(cleanValues.DISTANCE_TO_GO);
    setDISTANCE_TRAVELLED(cleanValues.DISTANCE_TRAVELLED);
    setDESTINATION(cleanValues.DESTINATION);
    setSPEED(cleanValues.SPEED);
    setAVG_SPEED(cleanValues.AVG_SPEED);
    setMAX_SPEED(cleanValues.MAX_SPEED);
    setUpdatedAt(cleanValues.updatedAt);
    setEn_Vent_Power(cleanValues.En_Vent_Power);
    setEn_Vent_Power_Percent(cleanValues.En_Vent_Power_Percent);
    setHVAC_Power(cleanValues.HVAC_Power);
    setHVAC_Power_Percent(cleanValues.HVAC_Power_Percent);
    setTotal_Power(cleanValues.Total_Power);
    setSaved_CO2_LastDay(cleanValues.Saved_CO2_LastDay);
    setSaved_Fuel_LastDay(cleanValues.Saved_Fuel_LastDay);
    setSaved_Energy_LastDay(cleanValues.Saved_Energy_LastDay);
    setPumps_Power(cleanValues.Pumps_Power);
    setPumps_Power_Percent(cleanValues.Pumps_Power_Percent);
    setHVAC_Avg_Power(cleanValues.HVAC_Avg_Power);
    setEnergy_Last_Day(cleanValues.Energy_Last_Day);
    setErrors({});
  };
  const [vesselRecord, setVesselRecord] = React.useState(vesselModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Vessel, idProp)
        : vesselModelProp;
      setVesselRecord(record);
    };
    queryData();
  }, [idProp, vesselModelProp]);
  React.useEffect(resetStateValues, [vesselRecord]);
  const validations = {
    clientID: [],
    fleet: [],
    ip: [],
    outsideTemp: [],
    Outside_Temp_LastDay: [],
    HVAC_P_status: [],
    En_Vent_P_status: [],
    Pumps_P_status: [],
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
    updatedAt: [],
    En_Vent_Power: [],
    En_Vent_Power_Percent: [],
    HVAC_Power: [],
    HVAC_Power_Percent: [],
    Total_Power: [],
    Saved_CO2_LastDay: [],
    Saved_Fuel_LastDay: [],
    Saved_Energy_LastDay: [],
    Pumps_Power: [],
    Pumps_Power_Percent: [],
    HVAC_Avg_Power: [],
    Energy_Last_Day: [],
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
          clientID,
          fleet,
          ip,
          outsideTemp,
          Outside_Temp_LastDay,
          HVAC_P_status,
          En_Vent_P_status,
          Pumps_P_status,
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
          updatedAt,
          En_Vent_Power,
          En_Vent_Power_Percent,
          HVAC_Power,
          HVAC_Power_Percent,
          Total_Power,
          Saved_CO2_LastDay,
          Saved_Fuel_LastDay,
          Saved_Energy_LastDay,
          Pumps_Power,
          Pumps_Power_Percent,
          HVAC_Avg_Power,
          Energy_Last_Day,
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
          await DataStore.save(
            Vessel.copyOf(vesselRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VesselUpdateForm")}
      {...rest}
    >
      <TextField
        label="Client id"
        isRequired={false}
        isReadOnly={false}
        value={clientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID: value,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.clientID ?? value;
          }
          if (errors.clientID?.hasError) {
            runValidationTasks("clientID", value);
          }
          setClientID(value);
        }}
        onBlur={() => runValidationTasks("clientID", clientID)}
        errorMessage={errors.clientID?.errorMessage}
        hasError={errors.clientID?.hasError}
        {...getOverrideProps(overrides, "clientID")}
      ></TextField>
      <TextField
        label="Fleet"
        isRequired={false}
        isReadOnly={false}
        value={fleet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet: value,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.fleet ?? value;
          }
          if (errors.fleet?.hasError) {
            runValidationTasks("fleet", value);
          }
          setFleet(value);
        }}
        onBlur={() => runValidationTasks("fleet", fleet)}
        errorMessage={errors.fleet?.errorMessage}
        hasError={errors.fleet?.hasError}
        {...getOverrideProps(overrides, "fleet")}
      ></TextField>
      <TextField
        label="Ip"
        isRequired={false}
        isReadOnly={false}
        value={ip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip: value,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.ip ?? value;
          }
          if (errors.ip?.hasError) {
            runValidationTasks("ip", value);
          }
          setIp(value);
        }}
        onBlur={() => runValidationTasks("ip", ip)}
        errorMessage={errors.ip?.errorMessage}
        hasError={errors.ip?.hasError}
        {...getOverrideProps(overrides, "ip")}
      ></TextField>
      <TextField
        label="Outside temp"
        isRequired={false}
        isReadOnly={false}
        value={outsideTemp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp: value,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.outsideTemp ?? value;
          }
          if (errors.outsideTemp?.hasError) {
            runValidationTasks("outsideTemp", value);
          }
          setOutsideTemp(value);
        }}
        onBlur={() => runValidationTasks("outsideTemp", outsideTemp)}
        errorMessage={errors.outsideTemp?.errorMessage}
        hasError={errors.outsideTemp?.hasError}
        {...getOverrideProps(overrides, "outsideTemp")}
      ></TextField>
      <TextField
        label="Outside temp last day"
        isRequired={false}
        isReadOnly={false}
        value={Outside_Temp_LastDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay: value,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Outside_Temp_LastDay ?? value;
          }
          if (errors.Outside_Temp_LastDay?.hasError) {
            runValidationTasks("Outside_Temp_LastDay", value);
          }
          setOutside_Temp_LastDay(value);
        }}
        onBlur={() =>
          runValidationTasks("Outside_Temp_LastDay", Outside_Temp_LastDay)
        }
        errorMessage={errors.Outside_Temp_LastDay?.errorMessage}
        hasError={errors.Outside_Temp_LastDay?.hasError}
        {...getOverrideProps(overrides, "Outside_Temp_LastDay")}
      ></TextField>
      <TextField
        label="Hvac p status"
        isRequired={false}
        isReadOnly={false}
        value={HVAC_P_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status: value,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.HVAC_P_status ?? value;
          }
          if (errors.HVAC_P_status?.hasError) {
            runValidationTasks("HVAC_P_status", value);
          }
          setHVAC_P_status(value);
        }}
        onBlur={() => runValidationTasks("HVAC_P_status", HVAC_P_status)}
        errorMessage={errors.HVAC_P_status?.errorMessage}
        hasError={errors.HVAC_P_status?.hasError}
        {...getOverrideProps(overrides, "HVAC_P_status")}
      ></TextField>
      <TextField
        label="En vent p status"
        isRequired={false}
        isReadOnly={false}
        value={En_Vent_P_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status: value,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.En_Vent_P_status ?? value;
          }
          if (errors.En_Vent_P_status?.hasError) {
            runValidationTasks("En_Vent_P_status", value);
          }
          setEn_Vent_P_status(value);
        }}
        onBlur={() => runValidationTasks("En_Vent_P_status", En_Vent_P_status)}
        errorMessage={errors.En_Vent_P_status?.errorMessage}
        hasError={errors.En_Vent_P_status?.hasError}
        {...getOverrideProps(overrides, "En_Vent_P_status")}
      ></TextField>
      <TextField
        label="Pumps p status"
        isRequired={false}
        isReadOnly={false}
        value={Pumps_P_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status: value,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Pumps_P_status ?? value;
          }
          if (errors.Pumps_P_status?.hasError) {
            runValidationTasks("Pumps_P_status", value);
          }
          setPumps_P_status(value);
        }}
        onBlur={() => runValidationTasks("Pumps_P_status", Pumps_P_status)}
        errorMessage={errors.Pumps_P_status?.errorMessage}
        hasError={errors.Pumps_P_status?.hasError}
        {...getOverrideProps(overrides, "Pumps_P_status")}
      ></TextField>
      <TextField
        label="Imo"
        isRequired={false}
        isReadOnly={false}
        value={IMO}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
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
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt: value,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="En vent power"
        isRequired={false}
        isReadOnly={false}
        value={En_Vent_Power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power: value,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.En_Vent_Power ?? value;
          }
          if (errors.En_Vent_Power?.hasError) {
            runValidationTasks("En_Vent_Power", value);
          }
          setEn_Vent_Power(value);
        }}
        onBlur={() => runValidationTasks("En_Vent_Power", En_Vent_Power)}
        errorMessage={errors.En_Vent_Power?.errorMessage}
        hasError={errors.En_Vent_Power?.hasError}
        {...getOverrideProps(overrides, "En_Vent_Power")}
      ></TextField>
      <TextField
        label="En vent power percent"
        isRequired={false}
        isReadOnly={false}
        value={En_Vent_Power_Percent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent: value,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.En_Vent_Power_Percent ?? value;
          }
          if (errors.En_Vent_Power_Percent?.hasError) {
            runValidationTasks("En_Vent_Power_Percent", value);
          }
          setEn_Vent_Power_Percent(value);
        }}
        onBlur={() =>
          runValidationTasks("En_Vent_Power_Percent", En_Vent_Power_Percent)
        }
        errorMessage={errors.En_Vent_Power_Percent?.errorMessage}
        hasError={errors.En_Vent_Power_Percent?.hasError}
        {...getOverrideProps(overrides, "En_Vent_Power_Percent")}
      ></TextField>
      <TextField
        label="Hvac power"
        isRequired={false}
        isReadOnly={false}
        value={HVAC_Power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power: value,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.HVAC_Power ?? value;
          }
          if (errors.HVAC_Power?.hasError) {
            runValidationTasks("HVAC_Power", value);
          }
          setHVAC_Power(value);
        }}
        onBlur={() => runValidationTasks("HVAC_Power", HVAC_Power)}
        errorMessage={errors.HVAC_Power?.errorMessage}
        hasError={errors.HVAC_Power?.hasError}
        {...getOverrideProps(overrides, "HVAC_Power")}
      ></TextField>
      <TextField
        label="Hvac power percent"
        isRequired={false}
        isReadOnly={false}
        value={HVAC_Power_Percent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent: value,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.HVAC_Power_Percent ?? value;
          }
          if (errors.HVAC_Power_Percent?.hasError) {
            runValidationTasks("HVAC_Power_Percent", value);
          }
          setHVAC_Power_Percent(value);
        }}
        onBlur={() =>
          runValidationTasks("HVAC_Power_Percent", HVAC_Power_Percent)
        }
        errorMessage={errors.HVAC_Power_Percent?.errorMessage}
        hasError={errors.HVAC_Power_Percent?.hasError}
        {...getOverrideProps(overrides, "HVAC_Power_Percent")}
      ></TextField>
      <TextField
        label="Total power"
        isRequired={false}
        isReadOnly={false}
        value={Total_Power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power: value,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Total_Power ?? value;
          }
          if (errors.Total_Power?.hasError) {
            runValidationTasks("Total_Power", value);
          }
          setTotal_Power(value);
        }}
        onBlur={() => runValidationTasks("Total_Power", Total_Power)}
        errorMessage={errors.Total_Power?.errorMessage}
        hasError={errors.Total_Power?.hasError}
        {...getOverrideProps(overrides, "Total_Power")}
      ></TextField>
      <TextField
        label="Saved co2 last day"
        isRequired={false}
        isReadOnly={false}
        value={Saved_CO2_LastDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay: value,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Saved_CO2_LastDay ?? value;
          }
          if (errors.Saved_CO2_LastDay?.hasError) {
            runValidationTasks("Saved_CO2_LastDay", value);
          }
          setSaved_CO2_LastDay(value);
        }}
        onBlur={() =>
          runValidationTasks("Saved_CO2_LastDay", Saved_CO2_LastDay)
        }
        errorMessage={errors.Saved_CO2_LastDay?.errorMessage}
        hasError={errors.Saved_CO2_LastDay?.hasError}
        {...getOverrideProps(overrides, "Saved_CO2_LastDay")}
      ></TextField>
      <TextField
        label="Saved fuel last day"
        isRequired={false}
        isReadOnly={false}
        value={Saved_Fuel_LastDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay: value,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Saved_Fuel_LastDay ?? value;
          }
          if (errors.Saved_Fuel_LastDay?.hasError) {
            runValidationTasks("Saved_Fuel_LastDay", value);
          }
          setSaved_Fuel_LastDay(value);
        }}
        onBlur={() =>
          runValidationTasks("Saved_Fuel_LastDay", Saved_Fuel_LastDay)
        }
        errorMessage={errors.Saved_Fuel_LastDay?.errorMessage}
        hasError={errors.Saved_Fuel_LastDay?.hasError}
        {...getOverrideProps(overrides, "Saved_Fuel_LastDay")}
      ></TextField>
      <TextField
        label="Saved energy last day"
        isRequired={false}
        isReadOnly={false}
        value={Saved_Energy_LastDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay: value,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Saved_Energy_LastDay ?? value;
          }
          if (errors.Saved_Energy_LastDay?.hasError) {
            runValidationTasks("Saved_Energy_LastDay", value);
          }
          setSaved_Energy_LastDay(value);
        }}
        onBlur={() =>
          runValidationTasks("Saved_Energy_LastDay", Saved_Energy_LastDay)
        }
        errorMessage={errors.Saved_Energy_LastDay?.errorMessage}
        hasError={errors.Saved_Energy_LastDay?.hasError}
        {...getOverrideProps(overrides, "Saved_Energy_LastDay")}
      ></TextField>
      <TextField
        label="Pumps power"
        isRequired={false}
        isReadOnly={false}
        value={Pumps_Power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power: value,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Pumps_Power ?? value;
          }
          if (errors.Pumps_Power?.hasError) {
            runValidationTasks("Pumps_Power", value);
          }
          setPumps_Power(value);
        }}
        onBlur={() => runValidationTasks("Pumps_Power", Pumps_Power)}
        errorMessage={errors.Pumps_Power?.errorMessage}
        hasError={errors.Pumps_Power?.hasError}
        {...getOverrideProps(overrides, "Pumps_Power")}
      ></TextField>
      <TextField
        label="Pumps power percent"
        isRequired={false}
        isReadOnly={false}
        value={Pumps_Power_Percent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent: value,
              HVAC_Avg_Power,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.Pumps_Power_Percent ?? value;
          }
          if (errors.Pumps_Power_Percent?.hasError) {
            runValidationTasks("Pumps_Power_Percent", value);
          }
          setPumps_Power_Percent(value);
        }}
        onBlur={() =>
          runValidationTasks("Pumps_Power_Percent", Pumps_Power_Percent)
        }
        errorMessage={errors.Pumps_Power_Percent?.errorMessage}
        hasError={errors.Pumps_Power_Percent?.hasError}
        {...getOverrideProps(overrides, "Pumps_Power_Percent")}
      ></TextField>
      <TextField
        label="Hvac avg power"
        isRequired={false}
        isReadOnly={false}
        value={HVAC_Avg_Power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power: value,
              Energy_Last_Day,
            };
            const result = onChange(modelFields);
            value = result?.HVAC_Avg_Power ?? value;
          }
          if (errors.HVAC_Avg_Power?.hasError) {
            runValidationTasks("HVAC_Avg_Power", value);
          }
          setHVAC_Avg_Power(value);
        }}
        onBlur={() => runValidationTasks("HVAC_Avg_Power", HVAC_Avg_Power)}
        errorMessage={errors.HVAC_Avg_Power?.errorMessage}
        hasError={errors.HVAC_Avg_Power?.hasError}
        {...getOverrideProps(overrides, "HVAC_Avg_Power")}
      ></TextField>
      <TextField
        label="Energy last day"
        isRequired={false}
        isReadOnly={false}
        value={Energy_Last_Day}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientID,
              fleet,
              ip,
              outsideTemp,
              Outside_Temp_LastDay,
              HVAC_P_status,
              En_Vent_P_status,
              Pumps_P_status,
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
              updatedAt,
              En_Vent_Power,
              En_Vent_Power_Percent,
              HVAC_Power,
              HVAC_Power_Percent,
              Total_Power,
              Saved_CO2_LastDay,
              Saved_Fuel_LastDay,
              Saved_Energy_LastDay,
              Pumps_Power,
              Pumps_Power_Percent,
              HVAC_Avg_Power,
              Energy_Last_Day: value,
            };
            const result = onChange(modelFields);
            value = result?.Energy_Last_Day ?? value;
          }
          if (errors.Energy_Last_Day?.hasError) {
            runValidationTasks("Energy_Last_Day", value);
          }
          setEnergy_Last_Day(value);
        }}
        onBlur={() => runValidationTasks("Energy_Last_Day", Energy_Last_Day)}
        errorMessage={errors.Energy_Last_Day?.errorMessage}
        hasError={errors.Energy_Last_Day?.hasError}
        {...getOverrideProps(overrides, "Energy_Last_Day")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || vesselModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || vesselModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
