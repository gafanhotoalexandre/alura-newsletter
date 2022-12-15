import { ArticleType } from "../../types/articleType";

interface ArticleProps {
	article: ArticleType;
}

export function Article({ article }: ArticleProps) {
	return (
		<div
			className="p-5 bg-gray-200 flex flex-col gap-2 items-center dark:bg-dark-200 sm:rounded-xl sm:shadow-lg"
		>
			<h3
				className="text-xl text-alura-200 dark:text-gray-200 font-bold"
			>{article.title}</h3>

			{/* tags */}
			<div className="w-full sm:justify-end sm:gap-2 pr-5 hidden sm:flex">
				{article.tags.map((tag) => (
					<span
						className="text-xs uppercase font-bold text-gray-200 bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full"
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
