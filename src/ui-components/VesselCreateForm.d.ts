/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VesselCreateFormInputValues = {
    clientID?: string;
    outsideTemp?: string;
    Outside_Temp_LastDay?: string;
    HVAC_P_status?: string;
    En_Vent_P_status?: string;
    Pumps_P_status?: string;
    IMO?: string;
    MMSI?: string;
    SHIPNAME?: string;
    FLAG?: string;
    MARKET?: string;
    TYPE_NAME?: string;
    LAT?: string;
    LON?: string;
    LAST_PORT?: string;
    CURRENT_PORT?: string;
    NEXT_PORT?: string;
    NEXT_PORT_NAME?: string;
    DISTANCE_TO_GO?: string;
    DISTANCE_TRAVELLED?: string;
    DESTINATION?: string;
    SPEED?: string;
    AVG_SPEED?: string;
    MAX_SPEED?: string;
    updatedAt?: string;
    En_Vent_Power?: string;
    En_Vent_Power_Percent?: string;
    HVAC_Power?: string;
    HVAC_Power_Percent?: string;
    Total_Power?: string;
    Saved_CO2_LastDay?: string;
    Saved_Fuel_LastDay?: string;
    Saved_Energy_LastDay?: string;
    Pumps_Power?: string;
    Pumps_Power_Percent?: string;
};
export declare type VesselCreateFormValidationValues = {
    clientID?: ValidationFunction<string>;
    outsideTemp?: ValidationFunction<string>;
    Outside_Temp_LastDay?: ValidationFunction<string>;
    HVAC_P_status?: ValidationFunction<string>;
    En_Vent_P_status?: ValidationFunction<string>;
    Pumps_P_status?: ValidationFunction<string>;
    IMO?: ValidationFunction<string>;
    MMSI?: ValidationFunction<string>;
    SHIPNAME?: ValidationFunction<string>;
    FLAG?: ValidationFunction<string>;
    MARKET?: ValidationFunction<string>;
    TYPE_NAME?: ValidationFunction<string>;
    LAT?: ValidationFunction<string>;
    LON?: ValidationFunction<string>;
    LAST_PORT?: ValidationFunction<string>;
    CURRENT_PORT?: ValidationFunction<string>;
    NEXT_PORT?: ValidationFunction<string>;
    NEXT_PORT_NAME?: ValidationFunction<string>;
    DISTANCE_TO_GO?: ValidationFunction<string>;
    DISTANCE_TRAVELLED?: ValidationFunction<string>;
    DESTINATION?: ValidationFunction<string>;
    SPEED?: ValidationFunction<string>;
    AVG_SPEED?: ValidationFunction<string>;
    MAX_SPEED?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    En_Vent_Power?: ValidationFunction<string>;
    En_Vent_Power_Percent?: ValidationFunction<string>;
    HVAC_Power?: ValidationFunction<string>;
    HVAC_Power_Percent?: ValidationFunction<string>;
    Total_Power?: ValidationFunction<string>;
    Saved_CO2_LastDay?: ValidationFunction<string>;
    Saved_Fuel_LastDay?: ValidationFunction<string>;
    Saved_Energy_LastDay?: ValidationFunction<string>;
    Pumps_Power?: ValidationFunction<string>;
    Pumps_Power_Percent?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VesselCreateFormOverridesProps = {
    VesselCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientID?: PrimitiveOverrideProps<TextFieldProps>;
    outsideTemp?: PrimitiveOverrideProps<TextFieldProps>;
    Outside_Temp_LastDay?: PrimitiveOverrideProps<TextFieldProps>;
    HVAC_P_status?: PrimitiveOverrideProps<TextFieldProps>;
    En_Vent_P_status?: PrimitiveOverrideProps<TextFieldProps>;
    Pumps_P_status?: PrimitiveOverrideProps<TextFieldProps>;
    IMO?: PrimitiveOverrideProps<TextFieldProps>;
    MMSI?: PrimitiveOverrideProps<TextFieldProps>;
    SHIPNAME?: PrimitiveOverrideProps<TextFieldProps>;
    FLAG?: PrimitiveOverrideProps<TextFieldProps>;
    MARKET?: PrimitiveOverrideProps<TextFieldProps>;
    TYPE_NAME?: PrimitiveOverrideProps<TextFieldProps>;
    LAT?: PrimitiveOverrideProps<TextFieldProps>;
    LON?: PrimitiveOverrideProps<TextFieldProps>;
    LAST_PORT?: PrimitiveOverrideProps<TextFieldProps>;
    CURRENT_PORT?: PrimitiveOverrideProps<TextFieldProps>;
    NEXT_PORT?: PrimitiveOverrideProps<TextFieldProps>;
    NEXT_PORT_NAME?: PrimitiveOverrideProps<TextFieldProps>;
    DISTANCE_TO_GO?: PrimitiveOverrideProps<TextFieldProps>;
    DISTANCE_TRAVELLED?: PrimitiveOverrideProps<TextFieldProps>;
    DESTINATION?: PrimitiveOverrideProps<TextFieldProps>;
    SPEED?: PrimitiveOverrideProps<TextFieldProps>;
    AVG_SPEED?: PrimitiveOverrideProps<TextFieldProps>;
    MAX_SPEED?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    En_Vent_Power?: PrimitiveOverrideProps<TextFieldProps>;
    En_Vent_Power_Percent?: PrimitiveOverrideProps<TextFieldProps>;
    HVAC_Power?: PrimitiveOverrideProps<TextFieldProps>;
    HVAC_Power_Percent?: PrimitiveOverrideProps<TextFieldProps>;
    Total_Power?: PrimitiveOverrideProps<TextFieldProps>;
    Saved_CO2_LastDay?: PrimitiveOverrideProps<TextFieldProps>;
    Saved_Fuel_LastDay?: PrimitiveOverrideProps<TextFieldProps>;
    Saved_Energy_LastDay?: PrimitiveOverrideProps<TextFieldProps>;
    Pumps_Power?: PrimitiveOverrideProps<TextFieldProps>;
    Pumps_Power_Percent?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VesselCreateFormProps = React.PropsWithChildren<{
    overrides?: VesselCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VesselCreateFormInputValues) => VesselCreateFormInputValues;
    onSuccess?: (fields: VesselCreateFormInputValues) => void;
    onError?: (fields: VesselCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VesselCreateFormInputValues) => VesselCreateFormInputValues;
    onValidate?: VesselCreateFormValidationValues;
} & React.CSSProperties>;
export default function VesselCreateForm(props: VesselCreateFormProps): React.ReactElement;
