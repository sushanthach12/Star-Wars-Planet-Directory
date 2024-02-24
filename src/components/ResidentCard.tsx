import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { characterAnimation } from "@/utils/framer";
import { poller } from "@/utils/google-font";
import { motion } from "framer-motion";
import { FC } from "react"


interface ResidentCardProps {
    residentId: number
    resident: any
}

const ResidentCard: FC<ResidentCardProps> = ({ resident, residentId }) => {

    return <motion.div initial="hidden" animate="visible" variants={characterAnimation} transition={{ delay: 1 }} className="flex flex-col bg-gray-900 rounded-lg shadow-md p-4 bg-[url('/card-back.jpeg')] bg-cover bg-opacity-75 bg-blend-multiply border border-gray-800 transition-all duration-700 hover:scale-105 ">
            <div className="flex flex-row items-start justify-between">
                <h1 className={cn(poller.className, "text-2xl font-bold text-yellow-400")}>{resident?.name}</h1>
            </div>
            <div className="flex flex-row mt-4 text-sm">
                <div className="mr-4">
                    <span className="text-yellow-400 font-bold">Gender</span>
                    <p className="text-gray-400">{capitalizeFirstLetter(resident.gender)}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-yellow-400 font-bold">Birth year</span>
                    <p className="text-gray-400 inline-flex text-wrap">{resident.birth_year}</p>
                </div>
                
            </div>
            <div className="flex flex-row mt-4 text-sm">
                <div className="mr-4">
                    <span className="text-yellow-400 font-bold">Mass</span>
                    <p className="text-gray-400">{resident.mass}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-yellow-400 font-bold">Skill Color</span>
                    <p className="text-gray-400 inline-flex text-wrap">{capitalizeFirstLetter(resident.skin_color)}</p>
                </div>
            </div>
            <div className="flex flex-row mt-4 text-sm">
                <div className="mr-4">
                    <span className="text-yellow-400 font-bold">Films</span>
                    <p className="text-gray-400">{resident.films.length}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-yellow-400 font-bold">Vehicles</span>
                    <p className="text-gray-400 inline-flex text-wrap">{resident.vehicles.length}</p>
                </div>
            </div>
    </motion.div>
}

export default ResidentCard;