const Page = ({ params }) => {
  return (
  <div>
    <h1>Hola Mundo</h1>
    <p>{params.id}</p>
  </div>
  );
}

export default Page