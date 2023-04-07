import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {SessionProvider} from "next-auth/react";
import {RecoilRoot} from "recoil";


const App = ({Component, pageProps: {session, ...pageProps}}: AppProps) =>
	<SessionProvider session={session}>
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	</SessionProvider>


export default App;
