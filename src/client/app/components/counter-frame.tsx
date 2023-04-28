import Roact from "@rbxts/roact";
import { store } from "../rodux/store";

function CounterFrame() {
	return (
		<frame AnchorPoint={new Vector2(0.5, 0.5)} Size={UDim2.fromScale(1, 1)} Position={UDim2.fromScale(0.5, 0.5)}>
			<textbutton Text="increment" Event={{ MouseButton1Click: () => store.dispatch({ type: "increment" }) }} />
			<textbutton Text="decrement" Event={{ MouseButton1Click: () => store.dispatch({ type: "decrement" }) }} />
			<uigridlayout
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
		</frame>
	);
}

export default CounterFrame;
