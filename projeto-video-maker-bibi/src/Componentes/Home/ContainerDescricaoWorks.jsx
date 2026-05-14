const ContainerDescricaoWorks = ({ spanOne, spanTwo }) => {
  return (
    <div className="*:flex ml-1 mb-4 lg:mt-2 md:ml-2 lg:ml-0">
      <span className="text-white font-sans text-sm mb-2">{spanOne}</span>
      <span className="decLocationSpan"></span>
      <span className="text-white font-sans text-sm ml-6">{spanTwo}</span>
    </div>
  );
};

export default ContainerDescricaoWorks;
