import data from '../../../articles.json';
import { Article } from '../Article';

export function ArticleList() {
	return (
		<div
			className="mt-5 m-auto max-w-2xl lg:max-w-[1000px] grid gap-5 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3"
		>
			{data.map(article => (
				<Article
					key={article.id}
					article={article}
				/>
			))}
		</div>
	);
}
