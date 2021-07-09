import React, { useState, useEffect } from "react";
import Editor from "./Editor";
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
	const [htmlSetting, setHtmlSetting] = useState(false);
	const [cssSetting, setCssSetting] = useState(false);
	const [jsSetting, setJsSetting] = useState(false);
	const [htmlClass, setHtmlClass] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
        <html class=${htmlClass}>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<div className="App">
			<div className="settings-outer"></div>
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
					minWidth={"200px"}
					maxHeight={"100%"}
					minHeight={"100%"}
					defaultSize={{ width: "50%" }}
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
