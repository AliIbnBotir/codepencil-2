import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Editor from "./Editor";

import Settings from "./Settings";
import useLocalStorage from "../hooks/useLocalStorage";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Resizable } from "re-resizable";
import MainHeader from "./mainHeader";
// import ResizePanel from "react-resize-panel";
//import ResizePanel from "../../src/ResizePanel";

function App() {
	const { height, width } = useWindowDimensions();
	const [html, setHtml] = useLocalStorage("html", "");
	const [css, setCss] = useLocalStorage("css", "");
	const [js, setJs] = useLocalStorage("js", "");
	const [srcDoc, setSrcDoc] = useState("");
	const [userName, setUserName] = useState("");
	const [penSetting, setPenSetting] = useState(false);
	const [htmlSetting, setHtmlSetting] = useState(true);
	const [cssSetting, setCssSetting] = useState(false);
	const [jsSetting, setJsSetting] = useState(false);
	const [htmlClass, setHtmlClass] = useLocalStorage("htmlClass", "");
	const [ProjectTitle, setProjectTitle] = useLocalStorage("Document", "");
	const [Link, setLink] = useLocalStorage("link", "");
	const [script, setScript] = useLocalStorage("script", "");

	//Css va Js kutubxonalari uchun o'zgaruvchilar

	/*Css uchun kutubxonalar*/
	const [bootstrapCss, setBootstrapCss] = useLocalStorage("bootstrapCss", "");
	const [bootstrapJs, setBootstrapJs] = useLocalStorage("bootstrapJs", "");
	const [tailWindCss, setTailwindCss] = useLocalStorage("tailWindCss", "");
	const [animateCss, setAnimateCss] = useLocalStorage("animateCss", "");
	const [fontAwesomeCss, setFontAwesomeCss] = useLocalStorage(
		"fontAwesomeCss",
		""
	);

	/*Js uchun kutubxonalar*/

	const [jquery, setJquery] = useLocalStorage("jquery", "");
	const [animateJs, setAnimateJs] = useLocalStorage("animateJs", "");
	const [videoJs, setVideoJs] = useLocalStorage("videoJs", "");
	const [videoCss, setVideoCss] = useLocalStorage("videoCss", "");
	const [chartJs, setChartJs] = useLocalStorage("chartJs", "");

	//Checkboxlar uchun ozgaruvchilar

	/*css sozlash checkboxlari*/

	const [bootstrapcheck, setBootstrapCheck] = useLocalStorage(
		"bootstrapcheck",
		""
	);
	const [tailwindCheck, setTailwindCheck] = useLocalStorage(
		"tailwindCheck",
		""
	);
	const [animateCssCheck, setAnimateCssCheck] = useLocalStorage(
		"animateCssCheck",
		""
	);
	const [fontAwesomeCheck, setFontAwesomeCheck] = useLocalStorage(
		"fontAwesomeCheck",
		""
	);

	/*js sozlash checkboxlari*/

	const [jqueryCheck, setJqueryCheck] = useLocalStorage("jqueryCheck", "");
	const [animateJsCheck, setAnimateJsCheck] = useLocalStorage(
		"animatejsCheck",
		""
	);
	const [videoJsCheck, setVideoJsCheck] = useLocalStorage("videoJsCheck", "");
	const [chartJsCheck, setChartJsCheck] = useLocalStorage("chartJsCheck", "");

	//editorlar uchun resizing husisiyatlari
	const [top, setTop] = useState(true);
	const [blockedTop, setBlockedTop] = useState(false);

	//mobilnida editor navbar uchun buttonlar

	const [HtmlWrapperCollapse, setHtmlWrapperCollapse] = useState(true);

	const [CssWrapperCollapse, setCssWrapperCollapse] = useState(true);
	const [JsWrapperCollapse, setJsWrapperCollapse] = useState(true);
	const [mobileHtmlWrapperVisible, setMobileHtmlWrapperVisble] = useState(true);

	const [mobileCssWrapperVisible, setMobileCssWrapperVisible] = useState(true);

	const [mobileJsWrapperVisible, setMobileJsWrapperVisible] = useState(true);

	const [mobileResultVisible, setMobileResultVisible] = useState(true);
	const [editorPaneVisible, setEditorPaneVisible] = useState(true);

	//outputni vaqt intervali bilan chiqarish uchun UseEffect
	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
        <html class="${htmlClass}">
			<head>
				<meta charset="UTF-8">
    			<meta http-equiv="X-UA-Compatible" content="IE=edge">
    			<meta name="viewport" content="width=device-width, initial-scale=1.0">
    			<title>${ProjectTitle}</title>
				${Link}
				${bootstrapCss}
				${tailWindCss}
				${animateCss}
				${fontAwesomeCss}
				${videoCss}
			</head>
        	<body>${html} 	${bootstrapJs} ${jquery} ${chartJs} ${videoJs} ${animateJs} </body>
          	<style>${css}</style>
          	<script >${js}</script>
		  
			
        </html>
      `);
		}, 500);

		return () => clearTimeout(timeout);
	}, [
		html,
		css,
		js,
		htmlClass,
		Link,
		bootstrapCss,
		tailWindCss,
		animateCss,
		fontAwesomeCss,
		bootstrapJs,
	]);
	// const ClassName = () => {
	// 	if (!open) {
	// 		return "collapsed";
	// 	} else if (mobileEditorNavHtml) {
	// 		return "closed-html";
	// 	} else if (mobileEditorNavCss) {
	// 		return "closed-css";
	// 	} else if (mobileEditorNavJs) {
	// 		return "closed-js";
	// 	}
	// };
	const visibleAndCollapseClassNameForHtmlWrapper = () => {
		if (!HtmlWrapperCollapse) {
			return "collapsed";
		} else if (!mobileHtmlWrapperVisible) {
			return "unvisible";
		}
	};
	const visibleAndCollapseClassNameForCssWrapper = () => {
		if (!CssWrapperCollapse) {
			return "collapsed";
		} else if (!mobileCssWrapperVisible) {
			return "unvisible";
		}
	};
	const visibleAndCollapseClassNameForJsWrapper = () => {
		if (!JsWrapperCollapse) {
			return "collapsed";
		} else if (!mobileJsWrapperVisible) {
			return "unvisible";
		}
	};
	const visibleClassNameForResult = () => {
		if (!mobileResultVisible) {
			return "unvisible";
		}
	};
	const [countHtml, setCountHtml] = useState(1);
	const [countCss, setCountCss] = useState(1);
	const [countJs, setCountJs] = useState(1);
	const counterHtml = () => {
		setCountHtml(countHtml + 1);
	};
	const counterCss = () => {
		setCountCss(countCss + 1);
	};
	const counterJs = () => {
		setCountJs(countJs + 1);
	};
	window.addEventListener("resize", () => {
		if (width <= 767 && width >= 600) {
			setMobileHtmlWrapperVisble(true);
			setMobileCssWrapperVisible(false);
			setMobileJsWrapperVisible(false);
		} else if (width >= 768 && width <= 900) {
			setMobileHtmlWrapperVisble(true);
			setMobileCssWrapperVisible(true);
			setMobileJsWrapperVisible(true);
		}
		console.log(width);
	});
	window.addEventListener("load", () => {
		if (width <= 767) {
			setMobileHtmlWrapperVisble(true);
			setMobileCssWrapperVisible(false);
			setMobileJsWrapperVisible(false);
		} else if (width >= 767) {
			setMobileHtmlWrapperVisble(true);
			setMobileCssWrapperVisible(true);
			setMobileJsWrapperVisible(true);
		}
		console.log(width);
	});
	return (
		<div className="App">
			<MetaTags>
				<title>{ProjectTitle}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
			</MetaTags>
			<div
				onClick={() => {
					setPenSetting(!penSetting);
				}}
				className={`settings-outer ${penSetting ? "" : "closed"}`}
			></div>
			<Settings
				setPenSetting={setPenSetting}
				setHtmlSetting={setHtmlSetting}
				setCssSetting={setCssSetting}
				setJsSetting={setJsSetting}
				setProjectTitle={setProjectTitle}
				setHtmlClass={setHtmlClass}
				setLink={setLink}
				setScript={setScript}
				//kutubxona ornatuvchilari

				/*Css kutubxona ornatuvchilari */
				setBootstrapCss={setBootstrapCss}
				setBootstrapJs={setBootstrapJs}
				setTailwindCss={setTailwindCss}
				setAnimateCss={setAnimateCss}
				setFontAwesomeCss={setFontAwesomeCss}
				/*Js kutubxona ornatuvchilari */
				setJquery={setJquery}
				setAnimateJs={setAnimateJs}
				setVideoJs={setVideoJs}
				setVideoCss={setVideoCss}
				setChartJs={setChartJs}
				//

				penSetting={penSetting}
				htmlSetting={htmlSetting}
				cssSetting={cssSetting}
				jsSetting={jsSetting}
				ProjectTitle={ProjectTitle}
				htmlClass={htmlClass}
				Link={Link}
				script={script}
				//checkboxlar uchun prop

				/*css sozlash checkboxlari*/
				bootstrapcheck={bootstrapcheck}
				tailwindCheck={tailwindCheck}
				animateCssCheck={animateCssCheck}
				fontAwesomeCheck={fontAwesomeCheck}
				setBootstrapCheck={setBootstrapCheck}
				setTailwindCheck={setTailwindCheck}
				setAnimateCssCheck={setAnimateCssCheck}
				setFontAwesomeCheck={setFontAwesomeCheck}
				/*js sozlash checkboxlari*/
				jqueryCheck={jqueryCheck}
				animateJsCheck={animateJsCheck}
				videoJsCheck={videoJsCheck}
				chartJsCheck={chartJsCheck}
				setJqueryCheck={setJqueryCheck}
				setAnimateJsCheck={setAnimateJsCheck}
				setVideoJsCheck={setVideoJsCheck}
				setChartJsCheck={setChartJsCheck}
			/>
			<MainHeader
				setPenSetting={setPenSetting}
				setHtmlSetting={setHtmlSetting}
				setCssSetting={setCssSetting}
				setJsSetting={setJsSetting}
				penSetting={penSetting}
				htmlSetting={htmlSetting}
				cssSetting={cssSetting}
				jsSetting={jsSetting}
			/>

			<div className="container">
				<button
					className={`btn-for-visible-editor-pane ${
						editorPaneVisible ? "unvisible" : ""
					}`}
					onClick={() => {
						setEditorPaneVisible(true);
						// setCountCss(countCss + 1);
						// setCountHtml(countHtml + 1);
						// setCountJs(countJs + 1);
					}}
				>
					Code
				</button>
				<Resizable
					className={`resize-panel ${editorPaneVisible ? "" : "unvisible"}`}
					minWidth={"200px"}
					maxHeight={"100%"}
					minHeight={"100%"}
					defaultSize={{ width: "50%" }}
					enable={{ bottom: false, right: true }}
				>
					<div className="pane editor-pane">
						<div style={{ display: "none" }} className="mobile-editor-nav">
							<div className="mobile-editor-nav-wrapper">
								<button
									className={`mobile-editor-wrap-btn ${
										mobileHtmlWrapperVisible ? "active-btn" : ""
									}`}
									onClick={() => {
										counterHtml();
										setCountCss(1);
										setCountJs(1);
										console.log("html " + countHtml);
										if (countHtml % 2 === 1) {
											setMobileHtmlWrapperVisble(true);
											setMobileCssWrapperVisible(false);
											setMobileJsWrapperVisible(false);
										} else {
											setEditorPaneVisible(false);
										}
									}}
								>
									HTML
								</button>
								<button
									className={`mobile-editor-wrap-btn ${
										mobileCssWrapperVisible ? "active-btn" : ""
									}`}
									onClick={() => {
										counterCss();
										setCountHtml(1);
										setCountJs(1);
										console.log("css " + countCss);
										if (countCss % 2 === 1) {
											setMobileCssWrapperVisible(true);
											setMobileHtmlWrapperVisble(false);
											setMobileJsWrapperVisible(false);
										} else {
											setEditorPaneVisible(false);
										}
									}}
								>
									CSS
								</button>
								<button
									className={`mobile-editor-wrap-btn ${
										mobileJsWrapperVisible ? "active-btn" : ""
									}`}
									onClick={() => {
										counterJs();
										setCountHtml(1);
										setCountCss(1);
										console.log("js " + countJs);
										if (countJs % 2 === 1) {
											setMobileJsWrapperVisible(true);
											setMobileCssWrapperVisible(false);
											setMobileHtmlWrapperVisble(false);
										} else {
											setEditorPaneVisible(false);
										}
									}}
								>
									JS
								</button>
								<button
									className={`mobile-editor-wrap-btn ${
										mobileResultVisible ? "active-btn" : ""
									}`}
									onClick={() => {
										setMobileResultVisible(!mobileResultVisible);
									}}
								>
									Result
								</button>
							</div>
						</div>
						<div
							className={`editor-wrapper html-editor-wrapper ${visibleAndCollapseClassNameForHtmlWrapper()}`}
						>
							<Editor
								language="xml"
								displayName="HTML"
								value={html}
								onChange={setHtml}
								top={blockedTop}
								HtmlWrapperCollapse={HtmlWrapperCollapse}
								CssWrapperCollapse={CssWrapperCollapse}
								JsWrapperCollapse={JsWrapperCollapse}
								setHtmlWrapperCollapse={setHtmlWrapperCollapse}
								setCssWrapperCollapse={setCssWrapperCollapse}
								setJsWrapperCollapse={setJsWrapperCollapse}
								// ClassName={ClassName()}
							/>
						</div>
						<div
							className={`editor-wrapper css-editor-wrapper ${visibleAndCollapseClassNameForCssWrapper()}`}
						>
							<Editor
								language="css"
								displayName="CSS"
								value={css}
								onChange={setCss}
								top={top}
								HtmlWrapperCollapse={HtmlWrapperCollapse}
								CssWrapperCollapse={CssWrapperCollapse}
								JsWrapperCollapse={JsWrapperCollapse}
								setHtmlWrapperCollapse={setHtmlWrapperCollapse}
								setCssWrapperCollapse={setCssWrapperCollapse}
								setJsWrapperCollapse={setJsWrapperCollapse}
								// ClassName={ClassName()}
							/>
						</div>
						<div
							className={`editor-wrapper js-editor-wrapper ${visibleAndCollapseClassNameForJsWrapper()}`}
						>
							<Editor
								language="javascript"
								displayName="JS"
								value={js}
								onChange={setJs}
								className="js-editor"
								top={top}
								HtmlWrapperCollapse={HtmlWrapperCollapse}
								CssWrapperCollapse={CssWrapperCollapse}
								JsWrapperCollapse={JsWrapperCollapse}
								setHtmlWrapperCollapse={setHtmlWrapperCollapse}
								setCssWrapperCollapse={setCssWrapperCollapse}
								setJsWrapperCollapse={setJsWrapperCollapse}
								// ClassName={ClassName()}
							/>
						</div>
					</div>
				</Resizable>
				<div className={`pane output-pane ${visibleClassNameForResult()}`}>
					<iframe
						srcDoc={srcDoc}
						title="output"
						sandbox="allow-scripts"
						frameBorder="0"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
