import { ArticleType } from "../../types/articleType";

interface ArticleProps {
	article: ArticleType;
}

export function Article({ article }: ArticleProps) {
	return (
		<div
			className="alura-card"
		>
			<h3
				className="alura-card-title"
			>{article.title}</h3>

			{/* tags */}
			<div className="w-full sm:justify-end sm:gap-2 pr-5 hidden sm:flex">
				{article.tags.map((tag) => (
					<span
						className="text-xs uppercase font-bold text-gray-200 bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full hover:bg-alura-200 hover:scale-110 transition-all"
						key={tag}
					>{tag}</span>
				))}
			</div>

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
