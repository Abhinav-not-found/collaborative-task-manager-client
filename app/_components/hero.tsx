"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

import { motion } from "motion/react"
const Hero = () => {
  return (
    <div>
      <div className='mt-20 relative'>
        <motion.div
          initial={{ gap: "0.25rem" }}
          animate={{ gap: "2rem" }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
          className='flex justify-center items-center'
        >
          <motion.h1
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-6xl font-medium tracking-tighter'
          >
            Manage Your
          </motion.h1>

          <Badge />

          <motion.h1
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-6xl font-medium tracking-tighter'
          >
            Team's
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className='flex justify-center gap-4 mt-8'
        >
          <Card />
          <motion.h1
            className='relative text-6xl text-center font-medium tracking-tighter text-[#FD4E29]'
            initial='hidden'
            animate='visible'
          >
            Productivity
            <motion.span
              className='absolute left-0 top-1/2 h-1 w-full bg-[#FD4E29] origin-left'
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
            />
          </motion.h1>
        </motion.div>
      </div>
      <div className='w-full '>
        <p className='w-full mt-8 text-center text-lg tracking-tight text-shadow-sm text-shadow-black/5'>
          Plan projects, stay on track, and deliver on time without
        </p>
        <p className='w-full text-center text-lg tracking-tight text-shadow-sm text-shadow-black/5'>
          overworking your team.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Button size={"lg"} className='rounded-full px-8'>
          Try Now
        </Button>
      </div>
    </div>
  )
}

export default Hero
const cardVariants = {
  rest: {},
  hover: {},
}

const frontVariants = {
  rest: { rotate: 3 },
  hover: { rotate: 0 },
}

const backVariants = {
  rest: { rotate: -1 },
  hover: { rotate: 0 },
}
const Card = () => {
  return (
    <motion.div
      className='relative inline-block'
      initial='rest'
      whileHover='hover'
      variants={cardVariants}
    >
      <motion.div
        variants={frontVariants}
        style={{ transformOrigin: "right center" }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className='relative h-16 w-68 rounded-xs ring-4 ring-black flex items-center justify-center gap-4 z-50 bg-white'
      >
        <div className=' size-3 rounded-full ring-3 ring-black'></div>
        <div>
          <p className='font-bold tracking-tight'>UX Copywrite</p>
          <div className='flex items-center gap-1.5 tracking-tight text-muted-foreground font-medium'>
            <p className='text-xs'>Task</p>
            <div className='bg-black/60 size-1 rounded-full'></div>
            <p className='text-xs'>0 of 7</p>
            <div className='bg-black/60 size-1 rounded-full'></div>
            <div className=' flex items-center gap-1 '>
              <Calendar className='size-3 text-purple-500' />
              <p className='text-xs text-purple-500 font-medium'>Today</p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div
            className='size-6 bg-neutral-100 rounded-full ring ring-white'
            style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww')`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className='size-6 bg-neutral-100 rounded-full ring ring-white -ml-2'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D')`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className='size-6 bg-neutral-100 rounded-full ring ring-white -ml-2 flex items-center justify-center'>
            <p className='text-xs font-bold'>3+</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={backVariants}
        style={{ transformOrigin: "right center" }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className='h-16 w-62 absolute bg-black top-2 left-3 rounded-xs z-0 ring-4 ring-black'
      ></motion.div>
    </motion.div>
  )
}

const Badge = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "5rem", opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      className='relative inline-block'
    >
      <motion.div
        initial={{ rotate: 6 }}
        whileHover={{ rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className='bg-white h-10 mt-5 overflow-hidden rounded-full flex justify-center items-center z-50 relative rotate-6'
        style={{ transformOrigin: "right center" }}
      >
        <div
          className='size-7 bg-neutral-200 rounded-full ring ring-white'
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className='size-7 bg-neutral-200 rounded-full -ml-2 ring ring-white'
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className='size-7 bg-white/10 rounded-full -ml-2 backdrop-blur-3xl flex items-center justify-center ring ring-white'>
          <p className='text-xs font-bold'>2+</p>
        </div>
      </motion.div>
      <div
        style={{ transformOrigin: "right center" }}
        className='bg-black h-10 w-20 overflow-hidden rounded-full absolute top-6 right-0 z-0'
      ></div>
    </motion.div>
  )
}
