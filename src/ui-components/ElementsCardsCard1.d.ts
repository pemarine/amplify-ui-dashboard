/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsUserPhotoProps } from "./ElementsUserPhoto";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsCardsCard1OverridesProps = {
    ElementsCardsCard1?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Users?: PrimitiveOverrideProps<ViewProps>;
    "Elements / User01858"?: ElementsUserPhotoProps;
    "Elements / User01859"?: ElementsUserPhotoProps;
    "Elements / User01860"?: ElementsUserPhotoProps;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ElementsCardsCard1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsCardsCard1OverridesProps | undefined | null;
}>;
export default function ElementsCardsCard1(props: ElementsCardsCard1Props): React.ReactElement;
