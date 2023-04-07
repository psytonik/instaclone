import React, {useState, useEffect, FC} from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

const Suggestions:FC = () => {
	const [suggestions, setSuggestions] = useState<[]>([]);

	useEffect(() => {
		const suggestion:any = minifaker.array(5,(index:number)=>({
			userName: minifaker.username({locale:'en'}).toLowerCase(),
			jobTitle: minifaker.jobTitle(),
			id: index,
		}))
		setSuggestions(suggestion);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between mb-5 text-sm">
				<h3 className="font-bold text-gray-400">Suggestion for you</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>
			{suggestions && suggestions.map((suggestion:any)=>(
				<div key={suggestion.id} className="flex items-center justify-between mt-3">
					<img
						src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
						alt={suggestion.userName}
						className="rounded-full h-10 p-[2px] border cursor-pointer hover:scale-110
						transition-transform duration-200 ease-out"
					/>
					<div className="flex-1 ml-4">
						<h2 className="font-semibold text-sm">{suggestion.userName}</h2>
						<h3 className="text-sm text-gray-400 truncate w-[230px]">{suggestion.jobTitle}</h3>
					</div>
					<button className="text-blue-400 font-semibold text-sm">Follow</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
