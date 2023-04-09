interface Session {
	data: {
		expires?: Date,
		user: {
			email:string,
			username: string;
			image: string;
			name:string,
			uid:string
		};
	};
}
