import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - XIIA">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="We are creative, smart and hardworking people"
            description={`Several creative people gather in the same place - that's XIIA. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields.`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/armin.jfif"
              job="CEO"
              name="Armin Kavousi"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/tanvir.jfif"
              job="CTO"
              name="Tanvir Alam"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/ana.jfif"
              job="UI/UX Designer"
              name="Ana Sofia Castellanos"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/udara.jfif"
              job="Tech Team Lead"
              name="Udara Damitha"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/numan.jfif"
              job="Full Stack Developer"
              name="Abdullah AL Numan"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/ashish.jfif"
              job="Senior Software Engineer"
              name="Ashish Kumar"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
