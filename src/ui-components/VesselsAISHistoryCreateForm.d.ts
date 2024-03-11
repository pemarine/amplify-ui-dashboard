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
export declare type VesselsAISHistoryCreateFormInputValues = {
    imo?: string;
    vessel_name?: string;
    timestamp?: string;
    latitude?: string;
    longitude?: string;
};
export declare type VesselsAISHistoryCreateFormValidationValues = {
    imo?: ValidationFunction<string>;
    vessel_name?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    latitude?: ValidationFunction<string>;
    longitude?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VesselsAISHistoryCreateFormOverridesProps = {
    VesselsAISHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imo?: PrimitiveOverrideProps<TextFieldProps>;
    vessel_name?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VesselsAISHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: VesselsAISHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VesselsAISHistoryCreateFormInputValues) => VesselsAISHistoryCreateFormInputValues;
    onSuccess?: (fields: VesselsAISHistoryCreateFormInputValues) => void;
    onError?: (fields: VesselsAISHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VesselsAISHistoryCreateFormInputValues) => VesselsAISHistoryCreateFormInputValues;
    onValidate?: VesselsAISHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function VesselsAISHistoryCreateForm(props: VesselsAISHistoryCreateFormProps): React.ReactElement;
