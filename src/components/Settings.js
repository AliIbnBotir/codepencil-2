import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes, faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Settings(props) {
	const {
		setPenSetting,
		setHtmlSetting,
		setCssSetting,
		setJsSetting,
		setProjectTitle,
		setHtmlClass,
		setLink,
		setScript,

		//kutubxona ornatuvchilari
		/*css kutubxona ornatuvchilari */
		setBootstrapCss,

		setBootstrapJs,
		setTailwindCss,
		setAnimateCss,
		setFontAwesomeCss,
		/*js kutubxona ornatuvchilari*/
		setJquery,
		setAnimateJs,
		setVideoJs,
		setVideoCss,
		setChartJs,

		//
		penSetting,
		htmlSetting,
		cssSetting,
		jsSetting,
		ProjectTitle,
		htmlClass,
		Link,
		script,

		//checkboxlar uchun prop

		/*css sozlash checkboxlari */
		bootstrapcheck,
		tailwindCheck,
		animateCssCheck,
		fontAwesomeCheck,
		setBootstrapCheck,
		setTailwindCheck,
		setAnimateCssCheck,
		setFontAwesomeCheck,

		/*Js sozlash checkboxlari */
		jqueryCheck,
		animateJsCheck,
		videoJsCheck,
		chartJsCheck,
		setJqueryCheck,
		setAnimateJsCheck,
		setVideoJsCheck,
		setChartJsCheck,
	} = props;
	const [understandInfoHtmlClassAdd, setUnderstandInfoHtmlClassAdd] =
		useState(false);
	const [understandInfoHeadStuffAdd, setUnderstandHeadStuffAdd] =
		useState(false);
	const [understandInfoProjectTitleAdd, setUnderstandInfoProjectTitleAdd] =
		useState(false);

	{
		//checkboxlar uchun ozgaruvchilar
	}
	//Kutubxonalar uchun object
	const LibrariesContainerObject = {
		/*Css uchun kutubconalar */
		Bootstrap: {
			check: bootstrapcheck,
			onChange: () => {
				setBootstrapCheck(!bootstrapcheck);
				if (!bootstrapcheck) {
					setBootstrapCss(
						'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'
					);

					setBootstrapJs(
						'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>'
					);
				} else if (bootstrapcheck) {
					setBootstrapCss("");
					setBootstrapJs("");
				}
			},
		},
		TailWind: {
			check: tailwindCheck,
			onChange: () => {
				setTailwindCheck(!tailwindCheck);
				if (!tailwindCheck) {
					setTailwindCss(
						'<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">'
					);
				} else if (tailwindCheck) {
					setTailwindCss("");
				}
			},
		},
		Animate: {
			checkCss: animateCssCheck,
			onChangeCss: () => {
				setAnimateCssCheck(!animateCssCheck);
				if (!animateCssCheck) {
					setAnimateCss(
						'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>'
					);
				} else if (animateCssCheck) {
					setAnimateCss("");
				}
			},
			checkJs: animateJsCheck,
			onChangeJs: () => {
				setAnimateJsCheck(!animateJsCheck);
				if (!animateJsCheck) {
					setAnimateJs("");
				}
			},
		},
		FontAwesome: {
			check: fontAwesomeCheck,
			onChange: () => {
				setFontAwesomeCheck(!fontAwesomeCheck);
				if (!fontAwesomeCheck) {
					setFontAwesomeCss(
						'<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">'
					);
				} else if (fontAwesomeCheck) {
					setFontAwesomeCss("");
				}
			},
		},

		/*Js uchun kutubxonalar */
		Jquery: {
			check: jqueryCheck,
			onChange: () => {
				setJqueryCheck(!jqueryCheck);
				if (!jqueryCheck) {
					setJquery(
						'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'
					);
				} else if (jqueryCheck) {
					setJquery("");
				}
			},
		},
		ChartJs: {
			check: chartJsCheck,
			onChange: () => {
				setChartJsCheck(!chartJsCheck);
				if (!chartJsCheck) {
					setChartJs(
						'<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>'
					);
				} else if (chartJsCheck) {
					setChartJs("");
				}
			},
		},
		VideoJs: {
			checkJS: videoJsCheck,
			onChangeJs: () => {
				setVideoJsCheck(!videoJsCheck);
				if (!videoJsCheck) {
					setVideoJs(
						'<script src="//vjs.zencdn.net/5.4.6/video.min.js"></script>'
					);
					setVideoCss(
						'<link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet">'
					);
				} else if (videoJsCheck) {
					setVideoJs("");
					setVideoCss("");
				}
			},
		},
	};
	return (
		<div className={`settings ${penSetting ? "" : "closed"}`}>
			<header className="settings-header">
				<div className="title">
					<h2>Pen Settings</h2>
				</div>
				<div className="settings-close-save-btn">
					<button
						onClick={() => {
							setPenSetting(!penSetting);
						}}
					>
						<FontAwesomeIcon icon={faTimes} className="x-btn" />
					</button>
				</div>
			</header>
			<div className="tabs settings-tabs-wrapper">
				<nav className="tabs-nav">
					<div className="tabs-group">
						<a
							onClick={() => {
								if (htmlSetting || !htmlSetting) {
									setHtmlSetting(true);
								}
								if (cssSetting) {
									setCssSetting(!cssSetting);
								}
								if (jsSetting) {
									setJsSetting(!jsSetting);
								}
								// setCssSetting(!cssSetting);
								// setJsSetting(!jsSetting);
							}}
							className={`tab-html ${htmlSetting ? "active-nav-html" : ""}`}
						>
							HTML
						</a>
						<a
							onClick={() => {
								// setHtmlSetting(!htmlSetting);
								if (htmlSetting) {
									setHtmlSetting(!htmlSetting);
								}
								if (jsSetting) {
									setJsSetting(!jsSetting);
								}
								if (cssSetting || !cssSetting) {
									setCssSetting(true);
								}
								// setJsSetting(!jsSetting);
							}}
							className={`tab-css ${cssSetting ? "active-nav-css" : ""}`}
						>
							CSS
						</a>
						<a
							onClick={() => {
								if (htmlSetting) {
									setHtmlSetting(!htmlSetting);
								}
								if (cssSetting) {
									setCssSetting(!cssSetting);
								}
								if (jsSetting || !jsSetting) {
									setJsSetting(true);
								}
							}}
							className={`tab-js ${jsSetting ? "active-nav-js" : ""}`}
						>
							JS
						</a>
					</div>
				</nav>
				{
					//Html uchun sozlamalar
				}
				<div
					className={`setting tab-page-html ${
						htmlSetting ? "active-html" : ""
					}`}
					id="setting-html"
				>
					<div className="setting-row">
						{
							//Adding Class to Html
						}
						<h4>
							<label htmlFor="html-class-adder">
								<span>&#60;</span>html<span>&#62;</span> ga class qo'shish
							</label>
						</h4>
						<div
							className="help-understand-class-add"
							onMouseEnter={() => {
								setUnderstandInfoHtmlClassAdd(true);
							}}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className="help-understand icon-class-add"
							/>
						</div>
						<div
							className={`understand-info ${
								understandInfoHtmlClassAdd ? "active-info-html-class-add" : ""
							}`}
						>
							<FontAwesomeIcon
								onClick={() => {
									setUnderstandInfoHtmlClassAdd(false);
								}}
								icon={faTimes}
								className="info-close-btn"
							/>
							<h4>Class qo'shish</h4>
							<p>
								CodePen-da, HTML muharririda nima yozsangiz, asosiy HTML5
								shablonidagi <span>&#60;</span>body<span>&#62;</span> teglari
								tarkibiga kiradi. Shunday qilib, siz <span>&#60;</span>html
								<span>&#62;</span> yorlig'i kabi yuqoriroq elementlarga kirish
								huquqiga ega emassiz. Agar siz u erda butun hujjatga ta'sir
								qilishi mumkin bo'lgan sinflarni qo'shishni xohlasangiz, unda
								buni qilishingiz kerak.
							</p>
						</div>
						<div className="class-adder">
							<input
								type="text"
								value={htmlClass}
								onChange={(e) => {
									setHtmlClass(e.target.value);
								}}
								id="html-class-adder"
								className="class-adder-input"
							/>
						</div>
					</div>
					<div className="setting-row">
						{
							//adding Project Title
						}
						<h4>
							<label htmlFor="project-title-adder">
								<span>&#60;</span>title<span>&#62;</span> ga nom berish
							</label>
						</h4>
						<div
							className="help-understand-title-add"
							onMouseEnter={() => {
								setUnderstandInfoProjectTitleAdd(true);
							}}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className="help-understand project-title-add"
							/>
						</div>
						<div
							className={`understand-info ${
								understandInfoProjectTitleAdd
									? "active-info-project-title-add"
									: ""
							}`}
						>
							<FontAwesomeIcon
								onClick={() => {
									setUnderstandInfoProjectTitleAdd(false);
								}}
								icon={faTimes}
								className="info-close-btn"
							/>
							<h4>Class qo'shish</h4>
							<p>
								CodePen-da, HTML muharririda nima yozsangiz, asosiy HTML5
								shablonidagi <span>&#60;</span>body<span>&#62;</span> teglari
								tarkibiga kiradi. Shunday qilib, siz <span>&#60;</span>html
								<span>&#62;</span> yorlig'i kabi yuqoriroq elementlarga kirish
								huquqiga ega emassiz. Agar siz u erda butun hujjatga ta'sir
								qilishi mumkin bo'lgan sinflarni qo'shishni xohlasangiz, unda
								buni qilishingiz kerak.
							</p>
						</div>
						<div className="project-title-adder">
							<input
								type="text"
								value={ProjectTitle}
								onChange={(e) => {
									setProjectTitle(e.target.value);
								}}
								placeholder="Example"
								id="project-title-adder"
								className="project-title-input"
							/>
						</div>
					</div>

					<div className="setting-row">
						{
							//Additional Libraries
						}
						<h4>
							<label htmlFor="head-stuff-adder">
								<span>&#60;</span>link<span>&#62;</span> boshqa kutubxonalar
							</label>
						</h4>
						<div
							className="help-understand-class-add"
							onMouseEnter={() => {
								setUnderstandHeadStuffAdd(true);
							}}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className="help-understand icon-stuff-add"
							/>
						</div>
						<div
							className={`understand-info ${
								understandInfoHeadStuffAdd ? "active-info-head-stuff-add" : ""
							}`}
						>
							<FontAwesomeIcon
								onClick={() => {
									setUnderstandHeadStuffAdd(false);
								}}
								icon={faTimes}
								className="info-close-btn"
							/>
							<h4>Class qo'shish</h4>
							<p>
								CodePen-da, HTML muharririda nima yozsangiz, asosiy HTML5
								shablonidagi <span>&#60;</span>body<span>&#62;</span> teglari
								tarkibiga kiradi. Shunday qilib, siz <span>&#60;</span>html
								<span>&#62;</span> yorlig'i kabi yuqoriroq elementlarga kirish
								huquqiga ega emassiz. Agar siz u erda butun hujjatga ta'sir
								qilishi mumkin bo'lgan sinflarni qo'shishni xohlasangiz, unda
								buni qilishingiz kerak.
							</p>
						</div>
						<div className="stuff-adder">
							<textarea
								type="text"
								value={Link}
								onChange={(e) => {
									setLink(e.target.value);
								}}
								id="head-stuff-adder"
								className="stuff-adder-input"
								placeholder="<link rel=styleshit href=https://yourwebsite.com>"
							/>
						</div>
					</div>
				</div>
				{
					//Css uchun sozlamalar
				}
				<div
					className={`setting tab-page-css ${cssSetting ? "active-css" : ""}`}
				>
					<div className="setting-row">
						<h4>Add CSS libraries</h4>
						<form action="" className="setting-form css-setting-form">
							{
								//Bootstrap uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.Bootstrap.check}
									onChange={LibrariesContainerObject.Bootstrap.onChange}
									name="css-library"
									id="bootstrapCss"
								/>
								<label htmlFor="bootstrapCss">Bootstrap</label>
							</div>
							{
								//TailWind uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.TailWind.check}
									onChange={LibrariesContainerObject.TailWind.onChange}
									name="css-libraries"
									id="tailwindCss"
								/>
								<label htmlFor="tailwindCss">TailWindCss</label>
							</div>
							{
								//AnimateCss uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.Animate.checkCss}
									onChange={LibrariesContainerObject.Animate.onChangeCss}
									name="css-libraries"
									id="animateCss"
								/>
								<label htmlFor="animateCss">AnimateCss</label>
							</div>
							{
								//FontAwesome uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.FontAwesome.check}
									onChange={LibrariesContainerObject.FontAwesome.onChange}
									name="css-libraries"
									id="fontAwesome"
								/>
								<label htmlFor="fontAwesome">FontAwesome</label>
							</div>
						</form>
					</div>
					<div className="setting-row">
						{
							//Additional Libraries
						}
						<h4>
							<label htmlFor="head-stuff-adder">
								<span>&#60;</span>link<span>&#62;</span> boshqa kutubxonalar
							</label>
						</h4>
						<div
							className="help-understand-class-add"
							onMouseEnter={() => {
								setUnderstandHeadStuffAdd(true);
							}}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className="help-understand icon-stuff-add"
							/>
						</div>
						<div
							className={`understand-info ${
								understandInfoHeadStuffAdd ? "active-info-head-stuff-add" : ""
							}`}
						>
							<FontAwesomeIcon
								onClick={() => {
									setUnderstandHeadStuffAdd(false);
								}}
								icon={faTimes}
								className="info-close-btn"
							/>
							<h4>Class qo'shish</h4>
							<p>
								CodePen-da, HTML muharririda nima yozsangiz, asosiy HTML5
								shablonidagi <span>&#60;</span>body<span>&#62;</span> teglari
								tarkibiga kiradi. Shunday qilib, siz <span>&#60;</span>html
								<span>&#62;</span> yorlig'i kabi yuqoriroq elementlarga kirish
								huquqiga ega emassiz. Agar siz u erda butun hujjatga ta'sir
								qilishi mumkin bo'lgan sinflarni qo'shishni xohlasangiz, unda
								buni qilishingiz kerak.
							</p>
						</div>
						<div className="stuff-adder">
							<textarea
								type="text"
								value={Link}
								onChange={(e) => {
									setLink(e.target.value);
								}}
								id="head-stuff-adder"
								className="stuff-adder-input"
								placeholder="<link rel=styleshit href=https://yourwebsite.com>"
							/>
						</div>
					</div>
				</div>
				{
					//Js uchun sozlamalar
				}
				<div className={`setting tab-page-js ${jsSetting ? "active-js" : ""}`}>
					<div className="setting-row">
						<h4>Add JS libraries</h4>
						<form action="" className="setting-form js-setting-form">
							{
								//Jquery uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.Jquery.check}
									onChange={LibrariesContainerObject.Jquery.onChange}
									name="css-library"
									id="Jquery"
								/>
								<label htmlFor="Jquery">Jquery</label>
							</div>
							{
								//Chartjs uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.ChartJs.check}
									onChange={LibrariesContainerObject.ChartJs.onChange}
									name="css-libraries"
									id="chartJS"
								/>
								<label htmlFor="chartJs">ChartJs</label>
							</div>
							{
								//AnimateJS uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.Animate.checkJs}
									onChange={LibrariesContainerObject.Animate.onchangeJs}
									name="css-libraries"
									id="animateJS"
								/>
								<label htmlFor="animateJs">AnimateJS</label>
							</div>
							{
								//VideoJS uchun checkbox
							}
							<div className="libraries-selector">
								<input
									type="checkbox"
									checked={LibrariesContainerObject.VideoJs.checkJS}
									onChange={LibrariesContainerObject.VideoJs.onChangeJs}
									name="css-libraries"
									id="videoJs"
								/>
								<label htmlFor="videoJs">VideoJs</label>
							</div>
						</form>
					</div>
					<div className="setting-row">
						{
							//Additional Libraries
						}
						<h4>
							<label htmlFor="head-stuff-adder">
								<span>&#60;</span>link<span>&#62;</span> boshqa kutubxonalar
							</label>
						</h4>
						<div
							className="help-understand-class-add"
							onMouseEnter={() => {
								setUnderstandHeadStuffAdd(true);
							}}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className="help-understand icon-stuff-add"
							/>
						</div>
						<div
							className={`understand-info ${
								understandInfoHeadStuffAdd ? "active-info-head-stuff-add" : ""
							}`}
						>
							<FontAwesomeIcon
								onClick={() => {
									setUnderstandHeadStuffAdd(false);
								}}
								icon={faTimes}
								className="info-close-btn"
							/>
							<h4>Class qo'shish</h4>
							<p>
								CodePen-da, HTML muharririda nima yozsangiz, asosiy HTML5
								shablonidagi <span>&#60;</span>body<span>&#62;</span> teglari
								tarkibiga kiradi. Shunday qilib, siz <span>&#60;</span>html
								<span>&#62;</span> yorlig'i kabi yuqoriroq elementlarga kirish
								huquqiga ega emassiz. Agar siz u erda butun hujjatga ta'sir
								qilishi mumkin bo'lgan sinflarni qo'shishni xohlasangiz, unda
								buni qilishingiz kerak.
							</p>
						</div>
						<div className="stuff-adder">
							<textarea
								type="text"
								value={Link}
								onChange={(e) => {
									setLink(e.target.value);
								}}
								id="head-stuff-adder"
								className="stuff-adder-input"
								placeholder="<link rel=styleshit href=https://yourwebsite.com>"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
