/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Vessel } from "../models";
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
export declare type VesselUpdateFormInputValues = {
    clientID?: string;
    outsideTemp?: string;
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
};
export declare type VesselUpdateFormValidationValues = {
    clientID?: ValidationFunction<string>;
    outsideTemp?: ValidationFunction<string>;
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
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VesselUpdateFormOverridesProps = {
    VesselUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientID?: PrimitiveOverrideProps<TextFieldProps>;
    outsideTemp?: PrimitiveOverrideProps<TextFieldProps>;
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
} & EscapeHatchProps;
export declare type VesselUpdateFormProps = React.PropsWithChildren<{
    overrides?: VesselUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vessel?: Vessel;
    onSubmit?: (fields: VesselUpdateFormInputValues) => VesselUpdateFormInputValues;
    onSuccess?: (fields: VesselUpdateFormInputValues) => void;
    onError?: (fields: VesselUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VesselUpdateFormInputValues) => VesselUpdateFormInputValues;
    onValidate?: VesselUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VesselUpdateForm(props: VesselUpdateFormProps): React.ReactElement;
