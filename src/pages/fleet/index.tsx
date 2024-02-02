//import { VesselsProvider } from "../dashboard/VesselsContext";
import { VesselsProvider } from "../../utils/VesselsContext";

import Fleet from "./Fleet";

//export default Fleet;

const FleetWithProvider = () => {
    return (
        <VesselsProvider>
            <Fleet/>
        </VesselsProvider>
    );
};

export default FleetWithProvider;