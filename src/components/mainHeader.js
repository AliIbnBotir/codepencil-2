import React, { useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser, faCloud } from "@fortawesome/free-solid-svg-icons";

export default function mainHeader(props) {
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
		<div className="main-header">
			<div className="header-wrap">
				<div className="logo-box">
					<h1 className="logo-root">
						<a href="/" className="logo-for-desktop">
							logo
						</a>
					</h1>
				</div>
				<div className="project-info">
					<div className="project-name">
						<h1 className="editable-title">
							<a href="">Untitled</a>
						</h1>
					</div>
					<div className="username">
						<a href="/">Arabbek</a>
					</div>
				</div>
				<div className="editor-action-menu">
					<div className="nav-wrap">
						<button
							className="setting-btn"
							onClick={() => {
								setPenSetting(true);
							}}
						>
							<FontAwesomeIcon icon={faCog} className="menu-bar-icon" />

							<h1 className="unvis-mobile">Setting</h1>
						</button>
						<button className="save-btn">
							<FontAwesomeIcon icon={faCloud} className="menu-bar-icon" />
							<h1 className="unvis-mobile">Save</h1>
						</button>
						<button className="account-btn">
							<FontAwesomeIcon
								icon={faUser}
								className="menu-bar-icon user-icon"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
