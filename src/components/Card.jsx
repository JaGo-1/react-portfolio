import { Link } from "react-router-dom";

const Card = ({ title, type, images, id }) => {
  return (
    <Link to={`/work/${id}`}>
      <div
        data-cursor-text="Ver"
        className="cursor-none group w-full max-w-5xl flex flex-col gap-5"
      >
        <div className="uppercase font-srcpro text-text-primary flex justify-between">
          <p>{title}</p>
          <p>{type}</p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            className="w-full aspect-video object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            src={images && images[0]}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
