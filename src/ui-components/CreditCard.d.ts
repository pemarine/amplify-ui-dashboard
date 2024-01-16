/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconsWiFiOnProps } from "./IconsWiFiOn";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreditCardOverridesProps = {
    CreditCard?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    mc_hrz_rgb_pos?: PrimitiveOverrideProps<ViewProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    "Fill 2"?: PrimitiveOverrideProps<IconProps>;
    "Fill 3"?: PrimitiveOverrideProps<IconProps>;
    Path01259?: PrimitiveOverrideProps<IconProps>;
    Path01260?: PrimitiveOverrideProps<IconProps>;
    Path01262?: PrimitiveOverrideProps<IconProps>;
    "Fill 4"?: PrimitiveOverrideProps<IconProps>;
    Path01263?: PrimitiveOverrideProps<IconProps>;
    Path01264?: PrimitiveOverrideProps<IconProps>;
    Path01266?: PrimitiveOverrideProps<IconProps>;
    Path01267?: PrimitiveOverrideProps<IconProps>;
    Path01268?: PrimitiveOverrideProps<IconProps>;
    Path01269?: PrimitiveOverrideProps<IconProps>;
    Path01270?: PrimitiveOverrideProps<IconProps>;
    Path01271?: PrimitiveOverrideProps<IconProps>;
    Path01272?: PrimitiveOverrideProps<IconProps>;
    Path01273?: PrimitiveOverrideProps<IconProps>;
    Path01274?: PrimitiveOverrideProps<IconProps>;
    Path01275?: PrimitiveOverrideProps<IconProps>;
    Path01276?: PrimitiveOverrideProps<IconProps>;
    Path01277?: PrimitiveOverrideProps<IconProps>;
    Path01278?: PrimitiveOverrideProps<IconProps>;
    Path01279?: PrimitiveOverrideProps<IconProps>;
    Path01280?: PrimitiveOverrideProps<IconProps>;
    Path01281?: PrimitiveOverrideProps<IconProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Number?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Icons / WiFi / On"?: IconsWiFiOnProps;
    CraftworkBank?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreditCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreditCardOverridesProps | undefined | null;
}>;
export default function CreditCard(props: CreditCardProps): React.ReactElement;
