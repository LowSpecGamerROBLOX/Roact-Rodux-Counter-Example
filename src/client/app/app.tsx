import Roact from "@rbxts/roact";

// counter components
import CounterFrame from "./components/counter-frame";
import CounterLabel from "./components/counter-label";
import { store } from "./rodux/store";
import { useEffect } from "@rbxts/roact-hooked";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";

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
