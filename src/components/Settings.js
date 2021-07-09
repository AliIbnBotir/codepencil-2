import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Settings(props) {
	const {
		setPenSetting,
		setHtmlSetting,
		setCssSetting,
		setJsSetting,
		penSetting,
		htmlSetting,
		cssSetting,
		jsSetting,
	} = props;
	return (
		<div className="settings">
			<header className="settings-header">
				<h1 className="settings-header-title">Pen Settings</h1>
				<div className="settings-close-save-button">
					<button>
						<FontAwesomeIcon icon={faWindowClose} />
					</button>
				</div>
			</header>
			<div className="tabs settings-tabs-wrapper">
				<nav className="tabs-nav">
					<div className="tabs-group">
						<a href="#setting-html" className="tab-html">
							HTML
						</a>
						<a href="#setting-css" className="tab-css">
							CSS
						</a>
						<a href="#setting-js" className="tab-js">
							JS
						</a>
					</div>
				</nav>
				<div className="setting tab-page-html" id="setting-html">
					<div className="setting-row">
						<h4>
							<span>&#60;</span> html <span>&#62;</span> ga class qo'shish
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
