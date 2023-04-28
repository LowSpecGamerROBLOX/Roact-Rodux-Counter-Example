import Roact from "@rbxts/roact";
import App from "./app/app";
import { withHookDetection } from "@rbxts/roact-hooked";

withHookDetection(Roact);

Roact.mount(Roact.createElement(App), game.GetService("Players").LocalPlayer.WaitForChild("PlayerGui"));
