import { VesselsProvider } from "../../utils/VesselsContext";

import VesselPage from "./[vessel]";

//export default Fleet;

const VesselWithProvider = () => {
    return (
        <VesselsProvider>
            <VesselPage/>
        </VesselsProvider>
    );
};

export default VesselWithProvider;