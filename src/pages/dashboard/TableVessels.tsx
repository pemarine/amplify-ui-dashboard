import React from "react";
import { View, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const TableVessels = () => {
  return (
    <>
    

      <View
        backgroundColor="TRANSPARENT"
        
        borderRadius="6px"
        width="100%"
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
