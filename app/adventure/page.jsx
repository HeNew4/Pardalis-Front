import { useEffect, useState } from "react";
// ... (otros imports)

export default function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectWorld, setSelectWorld] = useState(null);
    const [selectedWorldImage, setSelectedWorldImage] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // ... (fetch data)
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (selectWorld) {
            setSelectedWorldImage(selectWorld.imagen);
        }
    }, [selectWorld]);

    if (loading) return <_Skeleton />;

    return (
        <div className="min-h-screen flex flex-col fondo">
            <NavBar />

            <main className="grid place-content-center grid-cols-2 p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4 ">
                <div className="grid grid-cols-1">
                    {data.map((mundo, index) => (
                        <button
                            key={index}
                            className="focus:outline-none text-white bg-primary hover:bg-secundary focus:ring-4 focus:ring-secundary font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-primary m-3 w-9/12 mb-10 border-dashed border-2 border-black"
                            onClick={() => setSelectWorld(mundo)}
                        >
                            {mundo.nombre}
                        </button>
                    ))}
                </div>

                <div>
                    {selectedWorldImage && (
                        <Link href={"/adventure/world/" + selectWorld.id}>
                            <Image
                                src={selectedWorldImage}
                                alt={selectWorld.descripcion}
                                width={500}
                                height={500}
                                className="rounded-xl"
                            />
                        </Link>
                    )}
                </div>
            </main>
        </div>
    );
}