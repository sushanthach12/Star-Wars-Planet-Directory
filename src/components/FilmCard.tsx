import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { characterAnimation } from "@/utils/framer";
import { poller } from "@/utils/google-font";
import { motion } from "framer-motion";
import { FC } from "react"


interface FilmCardProps {
    filmId: number
    film: any
}

const FilmCard: FC<FilmCardProps> = ({ film, filmId }) => {

    return <motion.div initial="hidden" animate="visible" variants={characterAnimation} transition={{ delay: 1 }} className="flex flex-col bg-gray-900 rounded-lg shadow-md p-4 bg-[url('/card-back.jpeg')] bg-cover bg-opacity-75 bg-blend-multiply border border-gray-800 transition-all duration-700 hover:scale-105 ">
            <div className="flex flex-row items-center justify-between">
                <h1 className={cn(poller.className, "text-2xl font-bold text-yellow-400")}>{film?.title}</h1>
            </div>
            <div className="mt-4 text-white text-sm">
                <p>{(film?.opening_crawl).substring(0, 100)}</p>
                
            </div>
            <div className="flex flex-row mt-4">
                <div className="mr-4">
                    <span className="text-yellow-400 font-bold">Director</span>
                    <p className="text-gray-400">{film?.director}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-yellow-400 font-bold">Producer</span>
                    <p className="text-gray-400 inline-flex text-wrap">{film?.producer}</p>
                </div>
            </div>
    </motion.div>
}

export default FilmCard;