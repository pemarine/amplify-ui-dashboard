/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconmenutoggleactiveProps } from "./Iconmenutoggleactive";
import { IconmenusettingsProps } from "./Iconmenusettings";
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenuchatProps } from "./Iconmenuchat";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardactiveProps } from "./Iconmenudashboardactive";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
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
export declare type SidebartoggledashboardOverridesProps = {
    Sidebartoggledashboard?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    "icon/menu/toggle-active"?: IconmenutoggleactiveProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    "icon/menu/deals"?: IconmenudealsProps;
    "icon/menu/chat"?: IconmenuchatProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    "icon/menu/email"?: IconmenuemailProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    "icon/menu/dashboard-active"?: IconmenudashboardactiveProps;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    Saas?: PrimitiveOverrideProps<TextProps>;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebartoggledashboardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebartoggledashboardOverridesProps | undefined | null;
}>;
export default function Sidebartoggledashboard(props: SidebartoggledashboardProps): React.ReactElement;
