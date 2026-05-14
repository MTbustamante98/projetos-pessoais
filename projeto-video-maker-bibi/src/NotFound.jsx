const NotFound = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center gap-3 text-white mt-60 *:text-neutral-4">
        <p className="italic uppercase text-2xl font-display paragraphNotFound md:text-4xl">
          Bibiana Bustamante Filmmaker
        </p>
        <p className="text-2xl text-center md:text-4xl">Erro 404: Página não encontrada!</p>
        <ul className="list-disc text-sm ml-8 md:ml-15 mt-4">
          <li className="mb-2">
            Há um erro na URL inserida no seu navegador. Por favor, verifique o
            URL e tente novamente.
          </li>
          <li>A página que você está procurando não existe.</li>
        </ul>
      </div>
    </section>
  );
};

export default NotFound;
