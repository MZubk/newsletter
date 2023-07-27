const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="article__container-alura article__container-dark">
      <h3 className="text-xl pb-3 text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="flex-row justify-end gap-2 p-2 hidden sm:flex">
        {tags.map((tag) => (
          <span key={tag} className="article__tags-alura article__tags-dark">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-300">
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" src={image}></img>}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
