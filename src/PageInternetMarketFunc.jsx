import "./main.css"
import PropTypes from "prop-types"

function InfoPage({ item: { brand, title, description, descriptionFull, price, currency } }) {
	return (
		<div className="main-content">
			<h2>{brand}</h2>
			<h1>{title}</h1>
			<h3>{description}</h3>
			<div className="description">{descriptionFull}</div>
			<div className="highlight-window mobile">
				<div className="highlight-overlay"></div>
			</div>
			<div className="divider"></div>
			<div className="purchase-info">
				<div className="price">
					{currency} {price}.00
				</div>
				<button>Добавить в корзину</button>
			</div>
		</div>
	)
}

InfoPage.propTypes = {
	item: PropTypes.shape({
		brand: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		descriptionFull: PropTypes.string,
		price: PropTypes.number,
		currency: PropTypes.oneOf(["£", "₽", "€", "$"])
	})
}

function PageInternetMarketFunc({ item }) {
	return (
		<div className="content">
			<div className="highlight-blue">
				<div className="highlight-black"></div>
			</div>
			<div className="window">
				<InfoPage item={item} />
			</div>
		</div>
	)
}

export default PageInternetMarketFunc
