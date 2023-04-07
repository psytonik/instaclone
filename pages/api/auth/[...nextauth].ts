import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
	// secret: process.env.SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
	pages: {
		signIn: '/auth/sign-in'
	},
	callbacks: {
		async session({session,token}:any):Promise<any>{
			session.user.username = session.user.name.split(" ").join("").toLowerCase();
			session.user.uid = await token.sub;
			return session;
		}
	}
})
