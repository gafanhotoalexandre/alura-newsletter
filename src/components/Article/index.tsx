import { ArticleType } from "../../types/articleType";

interface ArticleProps {
	article: ArticleType;
}

export function Article({ article }: ArticleProps) {
	return (
		<div
			className="p-5 bg-gray-200 flex flex-col items-center dark:bg-dark-200 sm:rounded-xl sm:shadow-lg"
		>
			<h3
				className="text-xl text-alura-200 dark:text-gray-200 font-bold"
			>{article.title}</h3>

			<div
				className="flex flex-col gap-1"
			>
				{article.text.map((content, index) => (
					<p
						className="text-alura-200 dark:text-gray-300"
						key={index}
					>{content}</p>
				))}
			</div>

			{ article.image &&
				<img
					className="sm:p-4"
					src={article.image}
					alt={article.alt}
				/>
			}
			{ article.image && article.alt &&
				<span className="sr-only">{article.alt}</span>
			}
		</div>
	);
}
