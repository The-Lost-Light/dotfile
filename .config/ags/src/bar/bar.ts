import Launcher from "@bar/modules/launcher";
import Workspaces from "@bar/modules/workspaces";
import ClientTitle from "@bar/modules/title";

import Indicator from "@bar/modules/arch_updates";
import Clock from "@bar/modules/clock";
import PowerButton from "@bar/modules/power_button";
// import Notification from "@bar/modules/notifications";
import Media from "@bar/modules/media";

import Net from "@bar/modules/net_speed";
import Battery from "@bar/modules/battery";
import Backlight from "@bar/modules/backlight";
import Volume from "@bar/modules/audio";
import SystemTray from "@bar/modules/system_tray";

const Left = () =>
	Widget.Box({
		spacing: 8,
		children: [Launcher(), Workspaces(), ClientTitle()],
	});

const Center = () =>
	Widget.Box({
		spacing: 8,
		children: [
			Indicator(),
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
		children: [Net(), Battery(), Backlight(), Volume(), SystemTray()],
	});

export default (monitor = 0) =>
	Widget.Window({
		name: `bar-${monitor}`,
		class_name: "bar",
		monitor,
		anchor: ["top", "left", "right"],
		exclusivity: "exclusive",
		child: Widget.CenterBox({
			start_widget: Left(),
			center_widget: Center(),
			end_widget: Right(),
		}),
	});
