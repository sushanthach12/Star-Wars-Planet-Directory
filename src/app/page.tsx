'use client'

import { cn } from '@/lib/utils';
import { LogoAnimation, characterAnimation } from '@/utils/framer';
import { poller } from '@/utils/google-font';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/search')
		}, 2000)
	}, [router])

	return (
		<div className="mx-auto w-full px-4 py-8 min-h-screen bg-[url('/background.jpg')] bg-fixed bg-opacity-55 bg-gray-950 bg-blend-multiply">
			<section id='hero' className="container mx-auto flex flex-col gap-y-2 justify-center items-center h-screen transition-all delay-150">
				<motion.div
					initial="initial"
					animate="animate"
					variants={LogoAnimation}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					className="flex flex-col justify-center items-center gap-y-2"
				>
					<div className='relative h-[14.5rem] w-[35rem]h-[14.5rem] w-[35rem]'>
						<Image
							fill
							src={'/logo.png'}
							alt={"logo"}
							sizes='(max-width: 100%)'
							className='object-contain object-center animate-pulse'
						/>
					</div>

					<motion.h1
						initial="hidden"
						animate="visible"
						variants={characterAnimation}
						className={cn(poller.className, 'text-4xl tracking-wider uppercase font-bold font-starwar text-gray-300 animate-pulse inline-block text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 via-slate-500 to-violet-900')}
					>
						Planets
					</motion.h1>
				</motion.div>
			</section>
		</div>
	);
}