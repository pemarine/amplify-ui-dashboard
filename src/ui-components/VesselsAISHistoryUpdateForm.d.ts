/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { VesselsAISHistory } from "../models";
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
export declare type VesselsAISHistoryUpdateFormInputValues = {
    imo?: string;
    vessel_name?: string;
    timestamp?: string;
    latitude?: string;
    longitude?: string;
};
export declare type VesselsAISHistoryUpdateFormValidationValues = {
    imo?: ValidationFunction<string>;
    vessel_name?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    latitude?: ValidationFunction<string>;
    longitude?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VesselsAISHistoryUpdateFormOverridesProps = {
    VesselsAISHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imo?: PrimitiveOverrideProps<TextFieldProps>;
    vessel_name?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VesselsAISHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: VesselsAISHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vesselsAISHistory?: VesselsAISHistory;
    onSubmit?: (fields: VesselsAISHistoryUpdateFormInputValues) => VesselsAISHistoryUpdateFormInputValues;
    onSuccess?: (fields: VesselsAISHistoryUpdateFormInputValues) => void;
    onError?: (fields: VesselsAISHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VesselsAISHistoryUpdateFormInputValues) => VesselsAISHistoryUpdateFormInputValues;
    onValidate?: VesselsAISHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VesselsAISHistoryUpdateForm(props: VesselsAISHistoryUpdateFormProps): React.ReactElement;
