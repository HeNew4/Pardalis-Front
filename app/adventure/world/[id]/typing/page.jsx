const Page = ({ params }) => {
  return (
  <div className="h-svh fondo-especial text-center grid place-content-center">
    <h1>Tecleado</h1>
    <p>Nivel con el ID: {params.id}</p>
  </div>
  );
}

export default Page