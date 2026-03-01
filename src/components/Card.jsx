const Card = ({ title, type, img }) => {
  return (
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
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
