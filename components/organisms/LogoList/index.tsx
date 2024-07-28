import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/soundmade.jpg'}
            width={64}
            height={64}
            alt="soundmade logo"
            className='grayscale'
          />
        </div>
        <div className="">
          <Image
            src={'/images/stream-green.jfif'}
            width={64}
            height={64}
            alt="stream green logo"
            className='grayscale'
          />
        </div>
        <div className="">
          <Image
            src={'/images/bring-and-clean.png'}
            width={90}
            height={90}
            alt="bring and clean logo"
            className='grayscale'
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
