import React, { useContext} from "react";
import { View, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";
import './BasicTable.css'

// const demoUsers = [{ name: "hello" }, { name: "hello" }];
import { ThemeContext } from "../../themes/ThemeContext";

interface TableVesselsProps {
  setSelectedMarker: (marker: any) => void;
  isInfoBarOpen: boolean;
  setSelectedVesselId: (id: string) => void;
  selectedVesselId: string | null;
  
}
const TableVessels: React.FC<TableVesselsProps> = ({ setSelectedVesselId, setSelectedMarker }) => {

  const { theme } = useContext(ThemeContext);
  

  const handleRowClick = (marker) => {
    setSelectedMarker(marker);
    setSelectedVesselId(marker.id);

    //setSelectedMarkerIndex(index);
    //isInfoBarOpen = true;

    
  };


  return (
    <>
    

      <View
        className={`amplify-card ${theme}`}

        backgroundColor="TRANSPARENT"
        
        borderRadius="6px"
        width="100%"
        padding="0"
        minHeight="80vh"
      >
    
        <ScrollView width="100%">
          <BasicTable onRowClick={handleRowClick} />
        </ScrollView>
      </View>
    </>
  );
};

export default TableVessels;
