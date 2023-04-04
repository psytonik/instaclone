import React from 'react';
import {Posts, Stories} from "@/components";

const Feed = () => {
	return (
		<main>
			<section>
				{/* STORIES */}
				<Stories />
				{/* POSTS */}
				<Posts/>
			</section>

			<section>
				{/* MINI PROFILE */}
				{/* SUGGESTIONS */}
			</section>
		</main>
	);
};

export default Feed;
