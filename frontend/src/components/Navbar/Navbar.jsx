// Third Party Imports
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Inner Imports
import { Button } from "./styled-components/Button";
import { InputText } from "./styled-components/InputText";
import { NavSelect } from "./styled-components/NavSelect";
import { locations } from "./locations";
import { openPopup } from "../../store/LoginPopup/actions";

// Styles
import "./styles/nav.global.scss";

export const Navbar = () => {
	const [selectClick, setSelectClick] = useState(false);
	const [location, setLocation] = useState("");
	const locationRef = useRef();
	const dispatch = useDispatch();
	const { isPopupOn } = useSelector((store) => store.popupReducer);

	const toggleClick = () => {
		setSelectClick(!selectClick);
	};

	return (
		<div className="wrapper">
			<nav className="navbar">
				<NavSelect isSelect={selectClick} isPopup={isPopupOn}>
					<i className="material-icons location">location_on</i>
					<i className="material-icons down_arrow">arrow_drop_down</i>
					<div
						onClick={() => {
							toggleClick();
						}}
						className="location_option"
					>
						<p ref={locationRef}>{location ? location : "Select Location"}</p>

						<div className="l_options">
							<Button fs="12px">Use my current location</Button>
							{locations.map((oneLocation) => {
								return (
									<p
										onClick={() => {
											setLocation(oneLocation);
										}}
										className="oneLocation"
										key={oneLocation}
									>
										{oneLocation}
									</p>
								);
							})}
						</div>
					</div>
				</NavSelect>
				<span className="inputSpan">
					<i className="material-icons">search</i>
					<InputText
						type="search"
						isPopup={isPopupOn}
						placeholder="Search for Restraunts, Offers, Deals or Events..."
					/>
					<Button>Search</Button>
				</span>

				<Button onClick={() => dispatch(openPopup())}>Login</Button>
			</nav>

			<ul className="bottom_search_options">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">Book A Table</Link>
				</li>
				<li>
					<Link to="/">Dineout Pay</Link>
				</li>
				<li>
					<Link to="/">Dineout Passport</Link>
				</li>
				<li>
					<Link to="/">Super Saver</Link>
				</li>
			</ul>
		</div>
	);
};