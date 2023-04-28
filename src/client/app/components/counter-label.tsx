import Roact from "@rbxts/roact";
import { useSelector } from "@rbxts/roact-rodux-hooked";
import { countState } from "../rodux/store";

function CounterLabel() {
    const count = useSelector<countState>((state: countState) => state.count);

    return (
        <textlabel
            Text={`Counter: ${count}`}
            TextScaled={true}
            AnchorPoint={new Vector2(0.5, 0.125)}
            Position={new UDim2(0.5, 0, 0, 30)}
            Size={UDim2.fromScale(0.5, 0.25)}
            BackgroundTransparency={1}
            ZIndex={2}
        />
    );
}

export default CounterLabel;
