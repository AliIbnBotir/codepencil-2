import React, { useState, useEffect } from "react";
import Editor from "./Editor";

import Settings from "./Settings";
import useLocalStorage from "../hooks/useLocalStorage";
import { Resizable } from "re-resizable";
import MainHeader from "./mainHeader";
// import ResizePanel from "react-resize-panel";
//import ResizePanel from "../../src/ResizePanel";

function App() {
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

	//Css va Js uchun kutubxonalar

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

	{
		//checkboxlar uchun ozgaruvchilar
	}

	{
		/*css sozlash checkboxlari*/
	}

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

	{
		/*js sozlash checkboxlari*/
	}

	const [jqueryCheck, setJqueryCheck] = useLocalStorage("jqueryCheck", "");
	const [animateJsCheck, setAnimateJsCheck] = useLocalStorage(
		"animatejsCheck",
		""
	);
	const [videoJsCheck, setVideoJsCheck] = useLocalStorage("videoJsCheck", "");
	const [chartJsCheck, setChartJsCheck] = useLocalStorage("chartJsCheck", "");

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

	return (
		<div className="App">
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
				<Resizable
					className="resize-panel"
					minWidth={"200px"}
					maxHeight={"100%"}
					minHeight={"100%"}
					defaultSize={{ width: "50%" }}
					enable={{ bottom: false, right: true }}
				>
					<div className="pane editor-pane">
						<Editor
							language="xml"
							displayName="HTML"
							value={html}
							onChange={setHtml}
						/>
						<Editor
							language="css"
							displayName="CSS"
							value={css}
							onChange={setCss}
						/>
						<Editor
							language="javascript"
							displayName="JS"
							value={js}
							onChange={setJs}
							className="js-editor"
						/>
					</div>
				</Resizable>
				<div className="pane output-pane">
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
