
function Principal({ children }) {
  return (
     <>
      <sidenav>
        <a>Lista</a>
        <a>Crear</a>

        <h1 className="text-4xl font-bold underline">
      Hello world!
    </h1>
      </sidenav>
      <main>
        {children}
      </main>
     </>
  );
}

export default Principal;
