const Battery = await Service.import("battery");

const status = Utils.merge([Battery.bind("percent"), Battery.bind("charging")], (p, c) => `${p}%` + (c ? " " : ""));

export default () =>
	Widget.Box({
		visible: Battery.bind("available"),
		children: [
			Widget.Icon({
				icon: Battery.bind("icon_name"),
			}),
			Widget.Label({ label: status }),
		],
	});
