import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { characterAnimation } from "@/utils/framer";
import { poller } from "@/utils/google-font";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react"


interface PlanetCardProps {
    planetId: number
    planet: Planet
}

const PlanetCard: FC<PlanetCardProps> = ({ planet, planetId }) => {

    return <motion.div initial="hidden" animate="visible" variants={characterAnimation} transition={{ delay: 1 }} className="flex flex-col bg-gray-900 rounded-lg shadow-md p-4 bg-[url('/card-back.jpeg')] bg-cover bg-opacity-75 bg-blend-multiply border border-gray-800 transition-all duration-700 hover:scale-105 ">
        <Link href={`/planet/${planetId}`}>
            <div className="flex flex-row items-center justify-between">
                <h1 className={cn(poller.className, "text-2xl font-bold text-yellow-400")}>{planet?.name}</h1>
            </div>
            <div className="mt-4 text-white text-sm">
                <p>A harsh desert world with two suns.</p>
                <p>Home to moisture farms, Jawa scavengers, and the infamous Hutt crime syndicate.</p>
            </div>
            <div className="flex flex-row mt-4">
                <div className="mr-4">
                    <span className="text-yellow-400 font-bold">Climate</span>
                    <p className="text-gray-400">{capitalizeFirstLetter(planet.climate)}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-yellow-400 font-bold">Terrain</span>
                    <p className="text-gray-400 inline-flex text-wrap">{capitalizeFirstLetter(planet.terrain)}</p>
                </div>
            </div>
        </Link>
    </motion.div>
}

export default PlanetCard;