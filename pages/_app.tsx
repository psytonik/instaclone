import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {RecoilRoot} from "recoil";


const App = ({Component, pageProps: {session, ...pageProps}}: AppProps) =>
	<RecoilRoot>
		<Component {...pageProps} />
	</RecoilRoot>


export default App;
