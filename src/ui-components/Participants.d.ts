/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ParticipantsOverridesProps = {
    Participants?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "See All"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 52871584"?: PrimitiveOverrideProps<IconProps>;
    "Esther Howard"?: PrimitiveOverrideProps<TextProps>;
    "esthar.howard@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871587?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871631"?: PrimitiveOverrideProps<IconProps>;
    "Leslie Alexander"?: PrimitiveOverrideProps<TextProps>;
    "leslie.alexandar@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871635?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871641"?: PrimitiveOverrideProps<IconProps>;
    "Guy Hawkins"?: PrimitiveOverrideProps<TextProps>;
    "guy.hawkins@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871645?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871650"?: PrimitiveOverrideProps<IconProps>;
    "Cameron Williamson"?: PrimitiveOverrideProps<TextProps>;
    "cameron.williamson@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871654?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871659"?: PrimitiveOverrideProps<IconProps>;
    "Robert Fox"?: PrimitiveOverrideProps<TextProps>;
    "robert.fox@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871663?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871668"?: PrimitiveOverrideProps<IconProps>;
    "Albert Flores"?: PrimitiveOverrideProps<TextProps>;
    "albert.flores@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871672?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 52871677"?: PrimitiveOverrideProps<IconProps>;
    "Bessie Cooper"?: PrimitiveOverrideProps<TextProps>;
    "bessie.cooper@example.com"?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical871681?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ParticipantsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ParticipantsOverridesProps | undefined | null;
}>;
export default function Participants(props: ParticipantsProps): React.ReactElement;
