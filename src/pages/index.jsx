import Layout from '../components/layout';
import React from "react";
import Hero from '../components/Hero';
import CommitteeMembersList from "../components/CommitteeMembersList";
import {getAllCommitteeMembers} from "../libs/committee";
import getAllTracks from "../libs/tracks";
import About from "../components/About";
import getTopics from "../libs/topics";
import Timeline from "../components/Timeline";
import {getDeadlines} from "../libs/deadlines";

export default function Home({committeeMembers, tracks, topics, deadlines}) {
  return (
    <Layout pageTitle={"DCCN'2022"} active="conference">
      <div className="lg:pb-12">
        <Hero/>
      </div>

      <section id="about" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 lg:w-1/2">

          <h2 className="h2">About</h2>
          <div className="py-12 text-gray-600">
            <About topics={topics}/>
          </div>

        </div>
      </section>

      {/*<section id="keynotes" className="mt-12">*/}
      {/*  <div className="container mx-auto px-4 pb-12 lg:w-3/4">*/}
      {/*    <h2 className="h2">Keynote Speakers</h2>*/}
      {/*    <KeynoteSpeakers*/}
      {/*        className="mt-12"*/}
      {/*        speakers={speakers}*/}
      {/*    />*/}
      {/*  </div>*/}

      {/*</section>*/}

      <section id="timeline" className="pt-12">
        <h2 className="h2">Timeline</h2>
        <div className="container mx-4 md:mx-auto py-12 xl:w-1/2 lg:w-2/3">
          <Timeline deadlines={deadlines}/>
        </div>
      </section>

      {/*<section id="fees" className="pt-12 bg-purple-100">*/}
      {/*  <div className="container mx-auto px-4 pb-12 lg:w-1/2">*/}
      {/*    <h2 className="h2">Registration & Fees</h2>*/}
      {/*    <Fees className="mt-8"*/}
      {/*        fees={fees}*/}
      {/*    />*/}
      {/*    <p className="text-xl">*/}
      {/*      <Link href={"/support"} as="/support#payment">*/}
      {/*        <a className="text-blue-500 hover:underline">Read more...</a>*/}
      {/*      </Link>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section id="committee" className="pt-120">
        <div className="container mx-auto px-4 pb-12 lg:w-3/4">

          <div className="mb-8">
            <h2 className="h2">Organizers</h2>
            <h3 className="h3 mt-12">Organizing committee</h3>
            <CommitteeMembersList
              members={committeeMembers}
              className="container mt-2 md:mx-auto lg:w-3/4"
            />
          </div>

          {/*<div>*/}
          {/*  <h3 className="h3">Organizers & sponsors</h3>*/}
          {/*  <SponsorsImageGallery*/}
          {/*    organizations={organizations}*/}
          {/*    className="mt-8 mb-12 container mx-auto md:w-3/5"*/}
          {/*  />*/}
          {/*</div>*/}

          {/*<div className="mt-12 mb-12">*/}
          {/*  <h3 className="h3">Technical Sponsors</h3>*/}
          {/*  <TechnicalsSponsors/>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*  <h3 className="h3">Technical Program Committee</h3>*/}
          {/*  <TpcMembersList*/}
          {/*    members={tpcMembers}*/}
          {/*    className="container mt-8 mx-auto lg:w-3/4"*/}
          {/*  />*/}
          {/*</div>*/}

        </div>
      </section>

      <section id="previous-events" className="pt-12 bg-gray-100">
        <div className="container mx-auto px-4 pb-12 xl:w-1/2">
          <h2 className="h2">Previous Events</h2>
          <div className="flex flex-col-reverse justify-center align-center xl:flex-row">
            <div className="py-12 text-gray-600 xl:w-1/2 ">
              <ul className="text-center list-disc ml-8 mt-8 m-auto text-xl xl:text-justify">
                <li className="mb-4">
                  <a target="_blank" href="https://2021.dccn.ru" className="text-blue-500 hover:underline">24th International Conference on Distributed Computer and Communication Networks DCCN 2021</a>
                </li>
                <li className="mb-4">
                  <a target="_blank" href="https://2020.dccn.ru" className="text-blue-500 hover:underline">23rd International Conference on Distributed Computer and Communication Networks DCCN 2020</a>
                </li>
                <li>
                  <a target="_blank" href="http://2019.dccn.ru" className="text-blue-500 hover:underline">22nd International Conference on Distributed Computer and Communication Networks DCCN 2019</a>
                </li>
              </ul>
            </div>
            <div className="self-center w-1/4	xl:w-1/4 ml-4 shrink-0">
              <img src="/images/dccn-logo.png" alt="DCCN logotype"/>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export const getStaticProps = async () => {
  const committeeMembers = getAllCommitteeMembers();
  const tracks = getAllTracks();
  const topics = getTopics();
  const deadlines = getDeadlines();

  return {
    props: {
      deadlines,
      committeeMembers,
      tracks,
      topics
    }
  }
};
