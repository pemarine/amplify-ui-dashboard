/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsLineVerticalProps } from "./ElementsLineVertical";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BGGrids3OverridesProps = {
    BGGrids3?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Line / Vertical0100"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0102"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0103"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0104"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0105"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0106"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0107"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0108"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0109"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0110"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0111"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0112"?: ElementsLineVerticalProps;
    Horizontal?: PrimitiveOverrideProps<ViewProps>;
    "1 / 12"?: PrimitiveOverrideProps<TextProps>;
    "2 / 12"?: PrimitiveOverrideProps<TextProps>;
    "3 / 12"?: PrimitiveOverrideProps<TextProps>;
    "4 / 12"?: PrimitiveOverrideProps<TextProps>;
    "5 / 12"?: PrimitiveOverrideProps<TextProps>;
    "6 / 12"?: PrimitiveOverrideProps<TextProps>;
    "7 / 12"?: PrimitiveOverrideProps<TextProps>;
    "8 / 12"?: PrimitiveOverrideProps<TextProps>;
    "10 / 12"?: PrimitiveOverrideProps<TextProps>;
    "11 / 12"?: PrimitiveOverrideProps<TextProps>;
    "9 / 12"?: PrimitiveOverrideProps<TextProps>;
    Vertical?: PrimitiveOverrideProps<ViewProps>;
    "02 Nov 2019"?: PrimitiveOverrideProps<TextProps>;
    "11 Mar 2019"?: PrimitiveOverrideProps<TextProps>;
    "29 May 2019"?: PrimitiveOverrideProps<TextProps>;
    "06 Jan 2019"?: PrimitiveOverrideProps<TextProps>;
    "14 Jan 2019"?: PrimitiveOverrideProps<TextProps>;
    "13 Nov 2019"?: PrimitiveOverrideProps<TextProps>;
    "03 Mar 2019"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BGGrids3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BGGrids3OverridesProps | undefined | null;
}>;
export default function BGGrids3(props: BGGrids3Props): React.ReactElement;
