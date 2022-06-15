export const graph = (value: number) =>{
	const size = 200;
	const pi = 3.1415;
	const perimeter = 2*pi*(size/2);

	const graphBackground: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const graph: SVGCircleElement = document.createElementNS("http://www.w3.org/2000/svg","circle");
	const style: HTMLStyleElement = document.createElement("style");

	graphBackground.style.width = "200px";
	graphBackground.style.height = "200px";
	graphBackground.style.backgroundColor = "#ccc";
	graphBackground.style.borderRadius = "50%";
	graphBackground.style.rotate = "-90deg";

	graph.setAttribute("cx", (size/2).toString());
	graph.setAttribute("cy", (size/2).toString());
	graph.setAttribute("r", (size/2).toString());
	graph.style.stroke = "RGB(74, 207, 238)";
	graph.style.fill = "none";
	graph.style.strokeWidth = size.toString();
	graph.style.strokeDasharray = perimeter.toString();
	graph.style.strokeDashoffset = perimeter.toString();
	graph.style.animation = "animation 2s forwards";

	style.textContent += `
		@keyframes animation{
			100%{
				stroke-dashoffset: ${perimeter - (perimeter*value)/100};
			}
		}
	`;

	document.head.appendChild(style);
	graphBackground.appendChild(graph);

	return graphBackground;
}