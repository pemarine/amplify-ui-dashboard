import { VesselsProvider } from "../dashboard/VesselsContext";
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