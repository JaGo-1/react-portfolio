const WorkGallery = ({ project }) => {
  return (
    <main className="w-full xl:w-[65%] p-6 lg:p-12 xl:p-20 bg-background flex flex-col gap-12 lg:gap-20">
      {project.images.slice(1).map((img, index) => (
        <div
          key={index}
          className="animate-img w-full h-auto overflow-hidden rounded-2xl lg:rounded-[2rem] shadow-2xl group"
        >
          <img
            src={img}
            alt={`${project.title}-${index}`}
            className="w-full h-full object-cover lg:grayscale lg:hover:grayscale-0 transition-all duration-1000 ease-in-out scale-[1.01] group-hover:scale-100"
          />
        </div>
      ))}
    </main>
  );
};

export default WorkGallery;
