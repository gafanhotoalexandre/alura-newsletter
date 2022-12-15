import data from '../../../articles.json';

export function ArticleList() {
	return (
		<div>
			{data.map(item => (
				<p key={item.id}>{item.title}</p>
			))}
		</div>
	);
}
