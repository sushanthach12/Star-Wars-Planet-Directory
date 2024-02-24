'use client'

import { fetchAPI } from "@/utils/fetch"
import { Dispatch, FC, SetStateAction, createContext, useContext, useEffect, useState } from "react"

type PlanetProviderProps = {
    children: React.ReactNode
}

type IPlanetContextType = {
    planets: PlanetResult
    planet: Planet | undefined
    residents: any
    films: any
    isLoading: boolean
    pages: number
    setPages: Dispatch<SetStateAction<number>>
    getPlanets: (url?: string) => void
    getPlanet: (planetId: string) => void
    getResidents: (urls: string[]) => void
    getFilms: (urls: string[]) => void
}

const PlanetContext = createContext<IPlanetContextType | null>(null);

export const BASE_URL = "https://swapi.dev/api";

export const usePlanetContext = () => {
    const state = useContext(PlanetContext);
    if (!state) throw new Error('Undefined State');

    return state;
}

export const PlanetProvider: FC<PlanetProviderProps> = ({ children }) => {
    const [pages, setPages] = useState(10)
    const [planets, setPlanets] = useState<PlanetResult>({ count: "", next: "", previous: "", results: [] });
    const [residents, setResidents] = useState<Array<any>>([])
    const [films, setFilms] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(false)

    const [planet, setPlanet] = useState<Planet | undefined>(undefined)

    const getPlanets = async (url?: string) => {
        setIsLoading(true)
        const URL = url ? url : `${BASE_URL}/planets/?format=json&page=1`

        const res = await fetchAPI(URL);
        setPlanets(res)
        setIsLoading(false)
    }

    const getPlanet = async (planetId: string) => {
        setIsLoading(true)
        const URL = `${BASE_URL}/planets/${planetId}/`
        const res = await fetchAPI(URL) as Planet
        setPlanet(res)
        setIsLoading(false)
        getResidents(res?.residents)
        getFilms(res?.films)
    }

    const getResidents = async (urls: string[]) => {
        const values = await Promise.all(urls.map(url => fetchAPI(url)))
        setResidents(values)
    }

    const getFilms = async (urls: string[]) => {
        const values = await Promise.all(urls.map(url => fetchAPI(url)))
        setFilms(values)
    }

    return (
        <PlanetContext.Provider value={{ pages, planets, planet, residents, isLoading,films, setPages, getFilms, getPlanets, getPlanet, getResidents }}>
            {children}
        </PlanetContext.Provider>
    )
}