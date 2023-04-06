import PropTypes from "prop-types"
import React from "react"
// {
// 	item: {
// 		brand, title, description, descriptionFull, price, currency
// 	}
// }
class InfoPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main-content">
				<h2>{this.props.item.brand}</h2>
				<h1>{this.props.item.title}</h1>
				<h3>{this.props.item.description}</h3>
				<div className="description">{this.props.item.descriptionFull}</div>
				<div className="highlight-window mobile">
					<div className="highlight-overlay"></div>
				</div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">
						{this.props.item.currency} {this.props.item.price}.00
					</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		)
	}
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

class PageInternetMarketClass extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="content">
				<div className="highlight-blue">
					<div className="highlight-black active"></div>
				</div>
				<div className="window">
					<InfoPage item={this.props.item} />
				</div>
			</div>
		)
	}
}

export default PageInternetMarketClass
