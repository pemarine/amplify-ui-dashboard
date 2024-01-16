/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsLineGorizontalProps } from "./ElementsLineGorizontal";
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
export declare type BGGrids2OverridesProps = {
    "100"?: PrimitiveOverrideProps<TextProps>;
    "200"?: PrimitiveOverrideProps<TextProps>;
    "300"?: PrimitiveOverrideProps<TextProps>;
    "400"?: PrimitiveOverrideProps<TextProps>;
    "500"?: PrimitiveOverrideProps<TextProps>;
    "600"?: PrimitiveOverrideProps<TextProps>;
    "700"?: PrimitiveOverrideProps<TextProps>;
    BGGrids2?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Lines?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0296"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0297"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0298"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0299"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0300"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0301"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0302"?: ElementsLineGorizontalProps;
    "Elements / Line / Vertical0303"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0304"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0305"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0306"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0307"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0308"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0309"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0310"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0311"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0312"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0313"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0314"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical0315"?: ElementsLineVerticalProps;
    Horizontal?: PrimitiveOverrideProps<ViewProps>;
    "1 / 12"?: PrimitiveOverrideProps<TextProps>;
    "2 / 12"?: PrimitiveOverrideProps<TextProps>;
    "3 / 12"?: PrimitiveOverrideProps<TextProps>;
    "4 / 12"?: PrimitiveOverrideProps<TextProps>;
    "5 / 12"?: PrimitiveOverrideProps<TextProps>;
    "6 / 12"?: PrimitiveOverrideProps<TextProps>;
    "7 / 12"?: PrimitiveOverrideProps<TextProps>;
    "8 / 12"?: PrimitiveOverrideProps<TextProps>;
    "9 / 12"?: PrimitiveOverrideProps<TextProps>;
    "10 / 12"?: PrimitiveOverrideProps<TextProps>;
    "11 / 12"?: PrimitiveOverrideProps<TextProps>;
    "12 / 12"?: PrimitiveOverrideProps<TextProps>;
    Vertical?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type BGGrids2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BGGrids2OverridesProps | undefined | null;
}>;
export default function BGGrids2(props: BGGrids2Props): React.ReactElement;
