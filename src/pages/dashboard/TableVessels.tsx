import React from "react";
import { View, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const TableVessels = () => {
  return (
    <>
    

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="0"
        minHeight="80vh"
      >
    
        <ScrollView width="100%">
          <BasicTable />
        </ScrollView>
      </View>
    </>
  );
};

export default TableVessels;
