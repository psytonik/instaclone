import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
	secret: process.env.SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
		}),
		EmailProvider({
			server: process.env.MAIL_SERVER,
			from: "<no-reply@example.com>",
		}),
	]
})
