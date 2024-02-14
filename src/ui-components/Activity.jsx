/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Activity(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="735px"
      height="380px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Activity")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="28.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36px"
        left="42px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Activity"
        {...getOverrideProps(overrides, "Overall Sales")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="29px"
        left="555px"
        border="1px SOLID rgba(197,197,211,1)"
        borderRadius="12px"
        padding="11px 15px 11px 15px"
        {...getOverrideProps(overrides, "Dropdown")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(139,139,167,1)"
          lineHeight="19.600000381469727px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This Month"
          {...getOverrideProps(overrides, "This Month")}
        ></Text>
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "CaretDown")}
        ></View>
      </Flex>
      <Icon
        width="232px"
        height="232px"
        viewBox={{ minX: 0, minY: 0, width: 232, height: 232 }}
        paths={[
          {
            d: "M203.672 172.683C209.052 176.161 216.291 174.641 219.215 168.941C231.254 145.471 234.987 118.473 229.578 92.4204C223.38 62.5637 205.674 36.3484 180.293 19.4475C154.912 2.5465 123.897 -3.68076 93.959 2.11325C64.0212 7.90725 37.5688 25.2565 20.326 50.4066C3.08327 75.5568 -3.56298 106.485 1.8255 136.498C7.21398 166.512 24.2038 193.196 49.1184 210.778C74.033 228.359 104.868 235.423 134.952 230.441C161.203 226.094 185.039 212.88 202.591 193.189C206.854 188.406 205.662 181.106 200.478 177.342L200.478 177.342C195.294 173.578 188.089 174.789 183.708 179.463C169.83 194.27 151.392 204.203 131.162 207.553C107.095 211.539 82.4264 205.887 62.4947 191.822C42.563 177.757 28.9712 156.409 24.6604 132.399C20.3496 108.388 25.6666 83.6454 39.4608 63.5253C53.255 43.4052 74.4169 29.5258 98.3672 24.8906C122.317 20.2554 147.13 25.2372 167.434 38.758C187.739 52.2787 201.904 73.2509 206.863 97.1363C211.031 117.214 208.413 137.993 199.605 156.276C196.824 162.047 198.292 169.205 203.672 172.683L203.672 172.683Z",
            fill: "rgba(255,224,102,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="102px"
        left="42px"
        {...getOverrideProps(overrides, "Ellipse 14")}
      ></Icon>
      <Icon
        width="232px"
        height="232px"
        viewBox={{ minX: 0, minY: 0, width: 232, height: 232 }}
        paths={[
          {
            d: "M217.377 140.943C223.598 142.474 227.455 148.785 225.311 154.822C218.028 175.328 205.092 193.454 187.891 207.037C167.644 223.025 142.645 231.808 116.847 231.997C91.0492 232.185 65.9245 223.768 45.4464 208.077C24.9682 192.386 10.3052 170.316 3.77619 145.357C-2.75282 120.398 -0.775249 93.9747 9.39617 70.2657C19.5676 46.5568 37.3524 26.9151 59.9381 14.4468C82.5238 1.97844 108.621 -2.60493 134.104 1.42144C155.753 4.84203 175.908 14.3107 192.299 28.6244C197.125 32.8383 196.852 40.2299 192.177 44.6107L192.177 44.6107C187.502 48.9915 180.202 48.6876 175.273 44.5956C162.49 33.9847 147.032 26.952 130.483 24.3372C110.097 21.1161 89.219 24.7828 71.1505 34.7574C53.0819 44.7321 38.8541 60.4454 30.7169 79.4126C22.5798 98.3798 20.9977 119.518 26.221 139.485C31.4442 159.452 43.1745 177.109 59.5571 189.662C75.9396 202.215 96.0394 208.948 116.678 208.798C137.316 208.647 157.315 201.62 173.513 188.829C186.662 178.446 196.696 164.745 202.645 149.234C204.94 143.252 211.156 139.412 217.377 140.943L217.377 140.943Z",
            fill: "rgba(66,189,83,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="102px"
        left="42px"
        {...getOverrideProps(overrides, "Ellipse 16")}
      ></Icon>
      <Icon
        width="232px"
        height="232px"
        viewBox={{ minX: 0, minY: 0, width: 232, height: 232 }}
        paths={[
          {
            d: "M217.377 140.943C223.598 142.474 227.455 148.784 225.311 154.821C220.323 168.867 212.662 181.855 202.713 193.051C190.19 207.145 174.42 217.974 156.768 224.6C139.117 231.226 120.116 233.45 101.412 231.079C82.7074 228.708 64.8628 221.813 49.4232 210.992C33.9835 200.171 21.4143 185.75 12.8037 168.977C4.19309 152.204 -0.199263 133.584 0.00693756 114.731C0.213138 95.8783 5.01168 77.3597 13.9871 60.779C21.1168 47.6077 30.7116 35.9747 42.2122 26.4937C47.1555 22.4186 54.4038 23.8914 57.9651 29.2169L57.9651 29.2169C61.5264 34.5423 60.0382 41.6955 55.1983 45.893C46.7815 53.1926 39.7234 61.9699 34.3896 71.8232C27.2093 85.0878 23.3705 99.9027 23.2055 114.985C23.0406 130.067 26.5545 144.963 33.4429 158.381C40.3314 171.8 50.3868 183.337 62.7385 191.994C75.0902 200.651 89.3659 206.166 104.329 208.063C119.293 209.96 134.493 208.181 148.615 202.88C162.736 197.579 175.352 188.916 185.371 177.641C192.813 169.265 198.655 159.636 202.645 149.233C204.939 143.252 211.156 139.412 217.377 140.943L217.377 140.943Z",
            fill: "rgba(255,102,102,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="102px"
        left="42px"
        {...getOverrideProps(overrides, "Ellipse 15")}
      ></Icon>
      <Icon
        width="232px"
        height="232px"
        viewBox={{ minX: 0, minY: 0, width: 232, height: 232 }}
        paths={[
          {
            d: "M217.377 140.943C223.598 142.474 227.455 148.785 225.311 154.822C218.049 175.269 205.166 193.35 188.036 206.922C167.865 222.903 142.952 231.723 117.218 231.994C91.4842 232.264 66.3912 223.969 45.8886 208.414C28.4783 195.206 15.2177 177.399 7.52819 157.108C5.25789 151.118 8.98207 144.727 15.1695 143.066L15.1695 143.066C21.357 141.405 27.6523 145.113 30.0717 151.046C36.3266 166.382 46.6035 179.836 59.9109 189.931C76.3129 202.375 96.3873 209.011 116.974 208.795C137.561 208.579 157.492 201.523 173.629 188.737C186.722 178.364 196.714 164.698 202.645 149.234C204.94 143.252 211.156 139.412 217.377 140.943L217.377 140.943Z",
            fill: "rgba(0,106,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="102px"
        left="42px"
        {...getOverrideProps(overrides, "Ellipse 13")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="32px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-1.45px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="195px"
        left="88px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$239,991"
        {...getOverrideProps(overrides, "$239,991")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(110,110,145,1)"
        lineHeight="22.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="234px"
        left="114px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Total Spent"
        {...getOverrideProps(overrides, "Total Spent")}
      ></Text>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="122px"
        left="337px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container293491")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Income293492")}
        >
          <Icon
            width="10px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
            paths={[
              {
                d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
                fill: "rgba(0,106,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 3293493")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(22,22,29,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Subscription"
            {...getOverrideProps(overrides, "Subscription")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="122px"
        left="648px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="45%"
        {...getOverrideProps(overrides, "45%")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="178px"
        left="648px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="24%"
        {...getOverrideProps(overrides, "24%")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="234px"
        left="652px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="15%"
        {...getOverrideProps(overrides, "15%293515")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(22,22,29,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="290px"
        left="652px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="15%"
        {...getOverrideProps(overrides, "15%293516")}
      ></Text>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="178px"
        left="337px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container293501")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Income293502")}
        >
          <Icon
            width="10px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
            paths={[
              {
                d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
                fill: "rgba(255,102,102,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 3293503")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(22,22,29,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Investing"
            {...getOverrideProps(overrides, "Investing")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="234px"
        left="337px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container293505")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Income293506")}
        >
          <Icon
            width="10px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
            paths={[
              {
                d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
                fill: "rgba(66,189,83,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 3293507")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(22,22,29,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Groceries"
            {...getOverrideProps(overrides, "Groceries")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="290px"
        left="337px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container293509")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Income293510")}
        >
          <Icon
            width="10px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
            paths={[
              {
                d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
                fill: "rgba(255,204,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 3293511")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(22,22,29,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Online Shop"
            {...getOverrideProps(overrides, "Online Shop")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
