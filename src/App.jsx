import React from "react"
import ReactDOM from "react-dom/client"
import PageInternetMarketFunc from "./PageInternetMarketFunc"
import PageInternetMarketClass from "./PageInternetMarketClass"

const item = {
	brand: "Tiger of Sweden",
	title: "Leonard coat",
	description: "Minimalistic coat in cotton-blend",
	descriptionFull:
		"Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
	price: 399,
	currency: "£"
}

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<div className="container">
			<div className="background-element"></div>
			<PageInternetMarketFunc item={item} />
			<PageInternetMarketClass item={item} />
		</div>
	</React.StrictMode>
)
