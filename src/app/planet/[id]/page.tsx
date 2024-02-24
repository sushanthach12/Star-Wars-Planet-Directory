'use client'
import FilmCard from "@/components/FilmCard"
import ResidentCard from "@/components/ResidentCard"
import { usePlanetContext } from "@/context/PlanetContext"
import { capitalizeFirstLetter, cn } from "@/lib/utils"
import { LogoAnimation, characterAnimation } from "@/utils/framer"
import { poller } from "@/utils/google-font"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FC, useEffect } from "react"

interface PlanetPageProps {
    params: {
        id: string
    }
}

const PlanetPage: FC<PlanetPageProps> = ({ params }) => {

    const { planet, residents, films, getPlanet } = usePlanetContext()

    useEffect(() => {
        getPlanet(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <div className="bg-[url('/galaxy.jpg')] bg-fixed bg-opacity-70 bg-gray-950 bg-blend-multiply">
        {planet && <div className="pt-6">
            <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                <div className="lg:col-span-2  lg:pr-8">
                    <motion.h1 initial="hidden" animate="visible" variants={characterAnimation} className={cn(poller.className, "text-2xl font-bold tracking-tight text-yellow-600 sm:text-5xl")}>{planet?.name}</motion.h1>

                </div>

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

                <motion.div initial="initial" animate="animate" variants={LogoAnimation} className="mt-4 lg:row-span-3 lg:mt-0 h-full w-full flex items-center justify-center">
                    <div className="relative h-80 w-80">
                        <Image
                            fill
                            src={'/planet.png'}
                            alt="planet"
                            className="animate-pulse"
                        />
                    </div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={characterAnimation} className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
                    <div className="flex flex-row gap-x-5 mt-4">
                        <div className="mr-4">
                            <span className="text-yellow-400 font-bold text-lg">Total Population</span>
                            <p className="text-gray-400">{planet?.population}</p>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="text-yellow-400 font-bold text-lg">Residents</span>
                            <p className="text-gray-400 inline-flex text-wrap">{planet?.residents.length}</p>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="text-yellow-400 font-bold text-lg">Diameter</span>
                            <p className="text-gray-400 inline-flex text-wrap">{planet?.diameter}</p>
                        </div>
                    </div>

                    <div className="flex flex-row mt-4 space-x-5">
                        <div className="mr-4">
                            <span className="text-yellow-400 font-bold text-lg">Climate</span>
                            <p className="text-gray-400">{capitalizeFirstLetter(planet?.climate)}</p>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="text-yellow-400 font-bold text-lg">Terrain</span>
                            <p className="text-gray-400 inline-flex text-wrap">{capitalizeFirstLetter(planet?.terrain)}</p>
                        </div>
                        <div className="ml-4">
                            <span className="text-yellow-400 font-bold text-lg">Rotation Period</span>
                            <p className="text-gray-400">{planet?.rotation_period}</p>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="text-yellow-400 font-bold text-lg">Orbit Period</span>
                            <p className="text-gray-400 inline-flex text-wrap">{planet?.orbital_period}</p>
                        </div>
                    </div>

                    <div className="flex flex-row mt-4">
                        <div className="mr-4">
                            <span className="text-yellow-400 font-bold text-lg">Films</span>
                            <p className="text-gray-400">{planet?.films.length}</p>
                        </div>
                    </div>

                </motion.div>
            </div>

            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-y-8 lg:px-8  lg:py-6">
                <div className="lg:col-span-2 lg:pr-8">
                    <motion.h1 initial="hidden" animate="visible" variants={characterAnimation} className={cn(poller.className, "text-2xl font-bold tracking-tight text-yellow-600 sm:text-3xl")}>Films</motion.h1>
                </div>
                {films && <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {films.map((film: any, index: number) => (
                        <FilmCard key={index} film={film} filmId={index + 1} />
                    ))}
                    {films.length === 0 && <motion.h1 initial="hidden" animate="visible" variants={characterAnimation} className={cn(poller.className, "text-2xl font-bold tracking-tight text-yellow-600 sm:text-2xl text-left")}>No films done...</motion.h1>}
                </div>}

            </div>
            <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-y-8 lg:px-8 lg:pb-24 lg:py-6">
                <div className="lg:col-span-2 lg:pr-8">
                    <motion.h1 initial="hidden" animate="visible" variants={characterAnimation} className={cn(poller.className, "text-2xl font-bold tracking-tight text-yellow-600 sm:text-3xl")}>Residents</motion.h1>
                </div>
                {residents && <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        residents.map((value: any, index: number) => (
                            <ResidentCard key={index} resident={value} residentId={index + 1} />
                        ))
                    }
                    {residents.length === 0 && <motion.h1 initial="hidden" animate="visible" variants={characterAnimation} className={cn(poller.className, "text-2xl font-bold tracking-tight text-yellow-600 sm:text-2xl text-left")}>No one lives here...</motion.h1>}
                </div>}
            </div>

        </div>}
    </div>
}

export default PlanetPage;