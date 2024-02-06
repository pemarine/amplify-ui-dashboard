import { VesselsProvider } from "../../utils/VesselsContext";

import VesselPage from "./VesselPage";

//export default Fleet;

const VesselWithProvider = () => {
    return (
        <VesselsProvider>
            <VesselPage/>
        </VesselsProvider>
    );
};

export default VesselWithProvider;