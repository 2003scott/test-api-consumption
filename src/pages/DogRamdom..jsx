import { useRamdom } from "../hooks/useRamdom"

export const DogRamdom = () => {

    const { dog, error, loading } = useRamdom()

    console.log(dog)

    const changeDog = () => {
        window.location.reload()
    }
    // console.log(getDogRandom)

    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-center text-xl font-bold pb-10">Dog Ramdom</h2>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center">Error...</p>}
            {dog && !loading && !error &&( 
                <>
                    <img src={dog} alt="Random Dog" className="h-64 px-5 rounded-xl md:px-0"/>
                    <button onClick={changeDog} className="text-xl font-mono font-bold p-3 bg-blue-700 rounded-xl mt-5 hover:bg-blue-500">
                        Ver otro
                    </button>
                </> 
            )}
            <a href="/tipo">
                <button className="mt-8 text-md font-mono font-bold p-2 bg-green-700 rounded-lg hover:bg-green-600">
                    Buscar Por Raza
                </button>
            </a>
        </section>
    )
}