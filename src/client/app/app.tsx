import Roact from "@rbxts/roact";

import { store } from "./rodux/store";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";

import CounterFrame from "./components/counter-frame";
import CounterLabel from "./components/counter-label";

function App() {
    return (
        <StoreProvider store={store}>
            <screengui ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}>
                <CounterLabel />
                <CounterFrame />
            </screengui>
        </StoreProvider>
    );
}

export default App;
