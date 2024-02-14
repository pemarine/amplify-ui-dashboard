/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium13darkblueProps } from "./Textmedium13darkblue";
import { IconmenuchatProps } from "./Iconmenuchat";
import { Textmedium11grayProps } from "./Textmedium11gray";
import { IconmenutoggleProps } from "./Iconmenutoggle";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
import { IconmenusettingsProps } from "./Iconmenusettings";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenutasksactiveProps } from "./Iconmenutasksactive";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { Textregular13darkblueProps } from "./Textregular13darkblue";
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
export declare type SidebartasksOverridesProps = {
    Sidebartasks?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610010"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray131610013"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray131610020"?: Textmedium11grayProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610022"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610025"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/tasks-active"?: IconmenutasksactiveProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610031"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610034"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue131610037"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    task_statuses?: PrimitiveOverrideProps<ViewProps>;
    active_status?: PrimitiveOverrideProps<ViewProps>;
    active_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue131610042"?: Textregular13darkblueProps;
    Group?: PrimitiveOverrideProps<ViewProps>;
    completed_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue131610045"?: Textregular13darkblueProps;
    ended_status?: PrimitiveOverrideProps<ViewProps>;
    ended_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue131610048"?: Textregular13darkblueProps;
} & EscapeHatchProps;
export declare type SidebartasksProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebartasksOverridesProps | undefined | null;
}>;
export default function Sidebartasks(props: SidebartasksProps): React.ReactElement;
