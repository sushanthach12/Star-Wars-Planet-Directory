'use client'

import { FC, Ref, useEffect, useState } from "react"
import { usePlanetContext } from "@/context/PlanetContext";
import PlanetCard from "@/components/PlanetCard";
import Pagination from "@/components/Pagination";
import { motion } from 'framer-motion';
import { LogoAnimation, characterAnimation } from "@/utils/framer";
import { cn } from "@/lib/utils";
import { poller } from "@/utils/google-font";
import Image from "next/image";
import Link from "next/link";

interface SearchPageProps { }

const SearchPage: FC<SearchPageProps> = ({ }) => {
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    const { planets, residents, getPlanets, getResidents, isLoading } = usePlanetContext()

    useEffect(() => {
        getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }, [])

    const filteredPlanets = planets?.results?.filter((planet: any) =>
        planet.name.toLowerCase().includes(searchQuery)
    );


    return <section
        id="main"
        className="h-full flex justify-center items-center"
    >
        <motion.div
            initial="hidden"
            animate="visible"
            className=" relative container h-full py-6 pt-10 transition-all">

            <Link href={'/'}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={LogoAnimation}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                    className='absolute h-20 w-20 top-0 left-10'
                >
                    <Image
                        fill
                        src={'/logo2.png'}
                        alt={"logo"}
                        sizes='(max-width: 100%)'
                        className='object-contain object-center'
                    />
                </motion.div>
            </Link>

            <div className="pb-6">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={characterAnimation}
                    className={cn(poller.className, "text-center text-3xl text-yellow-500")}
                >
                    Planets Directory
                </motion.h1>
            </div>

            <Pagination next={planets.next} previous={planets.previous} count={planets.count} />
            <div className="container h-full w-full px-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {planets && planets.results.map((planet: any, index) => (
                        <PlanetCard key={index} planetId={index + 1} planet={planet} />
                    ))}
                    {isLoading && <p className="col-span-1 w-full text-center italic font-starwar font-bold text-yellow-400">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                        Loading...
                    </p>}
                </div>
            </div>
            {filteredPlanets.length > 8 && <Pagination next={planets.next} previous={planets.previous} count={planets.count} />}
        </motion.div>
    </section>
}

export default SearchPage;