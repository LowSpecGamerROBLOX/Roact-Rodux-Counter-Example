import Roact from "@rbxts/roact";
import { useDispatch } from "@rbxts/roact-rodux-hooked";

function CounterFrame() {
    const dispatch = useDispatch();
    return (
        <frame AnchorPoint={new Vector2(0.5, 0.5)} Size={UDim2.fromScale(1, 1)} Position={UDim2.fromScale(0.5, 0.5)}>
            <textbutton
                Text="Click me"
                Event={{
                    MouseButton1Click: () => dispatch({ type: "increment" }),
                    MouseButton2Click: () => dispatch({ type: "decrement" }),
                }}
            />
            <uigridlayout
                HorizontalAlignment={Enum.HorizontalAlignment.Center}
                VerticalAlignment={Enum.VerticalAlignment.Center}
            />
        </frame>
    );
}

export default CounterFrame;
