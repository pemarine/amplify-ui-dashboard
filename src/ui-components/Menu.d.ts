/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { IconsSettingsSetting1Props } from "./IconsSettingsSetting1";
import { IconsPieChartProps } from "./IconsPieChart";
import { IconsFireProps } from "./IconsFire";
import { IconsCalendarProps } from "./IconsCalendar";
import { IconsImageProps } from "./IconsImage";
import { IconsActivityProps } from "./IconsActivity";
import { IconsCloudDownloadProps } from "./IconsCloudDownload";
import { IconsPersonPersonProps } from "./IconsPersonPerson";
import { ElementsLineGorizontalProps } from "./ElementsLineGorizontal";
import { LogoProps } from "./Logo";
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
export declare type MenuOverridesProps = {
    Menu?: PrimitiveOverrideProps<ViewProps>;
    BG?: PrimitiveOverrideProps<ViewProps>;
    "Icon 8"?: IconsSettingsSetting1Props;
    "Icon 7"?: IconsPieChartProps;
    "Icon 6"?: IconsFireProps;
    "Icon 5"?: IconsCalendarProps;
    "Icon 4"?: IconsImageProps;
    "Icon 3"?: IconsActivityProps;
    "Icon 2"?: IconsCloudDownloadProps;
    "Icon 1"?: IconsPersonPersonProps;
    Line?: ElementsLineGorizontalProps;
    Logo?: LogoProps;
} & EscapeHatchProps;
export declare type MenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MenuOverridesProps | undefined | null;
}>;
export default function Menu(props: MenuProps): React.ReactElement;
