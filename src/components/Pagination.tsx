'use client'
import { FC } from "react"

import { motion } from "framer-motion"
import { LogoAnimation, characterAnimation } from "@/utils/framer"
import { usePlanetContext } from "@/context/PlanetContext"
import { useRouter } from "next/navigation"

interface PaginationProps { 
    next: string | null;
    previous: string | null;
    count: string;
}

const Pagination: FC<PaginationProps> = ({ count, next, previous }) => {

    const { planets, pages, setPages, getPlanets } = usePlanetContext();
    const router = useRouter()

    const handlePrevious = async () => {
        if(previous !== null){
            getPlanets(previous)
            setPages(prev => prev - 10)
            router.refresh()
        }
    }

    const handleNext = async () => {
        if(next !== null){
            getPlanets(next)
            setPages(prev => prev + 10)
            router.refresh()
        }
    }

    return <motion.div initial="hidden" animate="visible" variants={characterAnimation} className="flex items-center justify-between bg-transparent px-4 my-6 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center gap-x-4">
            <div>
                <nav className="isolate inline-flex items-center justify-center space-x-3 rounded-md shadow-sm" aria-label="Pagination">
                    <button type="button" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-800 focus:z-20 focus:outline-offset-0" onClick={handlePrevious}>
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div >
                        <p className="text-sm text-white">
                            Showing
                            <span className="font-medium mx-1">{pages}</span>
                            of
                            <span className="font-medium mx-1">{count}</span>
                            results
                        </p>
                    </div>
                    <button type="button" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-800 focus:z-20 focus:outline-offset-0" onClick={handleNext}>
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </motion.div>

}

export default Pagination;