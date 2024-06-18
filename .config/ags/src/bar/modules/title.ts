const Hyprland = await Service.import("hyprland");

export default () =>
	Widget.Label({
		class_name: "client-title",
		label: Hyprland.active.client.bind("title").as(s => s.slice(0, 50)),
	});
