import Workspaces from "./modules/workspaces";
import ClientTitle from "./modules/title";
import Clock from "./modules/clock";
import PowerButton from "./modules/power_button";
import Notification from "./modules/notifications";
import Media from "./modules/media";
import Battery from "./modules/battery";
import Volume from "./modules/audio";
import SystemTray from "./modules/system_tray";

const Left = () =>
	Widget.Box({
		spacing: 8,
		children: [Workspaces(), ClientTitle()],
	});

const Center = () =>
	Widget.Box({
		spacing: 8,
		children: [
			Clock(),
			PowerButton(),
			// Notification(),
			// Media(),
		],
	});

const Right = () =>
	Widget.Box({
		hpack: "end",
		spacing: 8,
		children: [Battery(), Volume(), SystemTray()],
	});

export default (monitor = 0) =>
	Widget.Window({
		name: `bar-${monitor}`,
		class_name: "bar",
		monitor,
		// visible: false,
		anchor: ["top", "left", "right"],
		exclusivity: "exclusive",
		child: Widget.CenterBox({
			start_widget: Left(),
			center_widget: Center(),
			end_widget: Right(),
		}),
	});