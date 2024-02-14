/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium11grayProps } from "./Textmedium11gray";
import { IconmenutoggleProps } from "./Iconmenutoggle";
import { Textmedium13darkblueProps } from "./Textmedium13darkblue";
import { IconmenusettingsProps } from "./Iconmenusettings";
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenuchatProps } from "./Iconmenuchat";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenuemailactiveProps } from "./Iconmenuemailactive";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
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
export declare type SidebaremailOverridesProps = {
    Sidebaremail?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray13169774"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169777"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169780"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169783"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169786"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/email-active"?: IconmenuemailactiveProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169792"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue13169795"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray13169801"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
    email_statuses?: PrimitiveOverrideProps<ViewProps>;
    draft_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse13169805?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue13169806"?: Textregular13darkblueProps;
    scheduled_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse13169808?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue13169809"?: Textregular13darkblueProps;
    sent_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse13169811?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue13169812"?: Textregular13darkblueProps;
    archived_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse13169814?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue13169815"?: Textregular13darkblueProps;
} & EscapeHatchProps;
export declare type SidebaremailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebaremailOverridesProps | undefined | null;
}>;
export default function Sidebaremail(props: SidebaremailProps): React.ReactElement;
