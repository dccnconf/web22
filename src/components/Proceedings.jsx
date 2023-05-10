import React from 'react';

export default function Proceedings() {
  return (
    <>
      <div className="md:leading-7 md:text-xl">
        <p className="">
          We are pleased to announce that both of the DCCN 2022 post-proceedings books (LNCS, volume 13766, and CCIS, volume 1748) have been published by Springer Nature.
          The books are available online.
        </p>
        <div className="flex mt-6 flex-col-reverse sm:flex-row items-center sm:items-start">
          <div className="mr-5" style={{maxWidth: "140px", minWidth: "120px"}}>
            <img src="/images/lncs_cover.png" alt="LNCS Volume cover"/>
          </div>
          <div className="text-center sm:text-left" style={{wordBreak: "break-word"}}>
            <p className="font-semibold">
              LNCS 13766
              <br />
              <a className="text-blue-500 hover:underline" target="_blank" href="https://link.springer.com/book/10.1007/978-3-031-23207-7">https://link.springer.com/book/10.1007/978-3-031-23207-7</a>
            </p>
            {/*<p className="sm:mt-8">*/}
            {/*  The conference participants are granted the four weeks free online access to the e-book of the LNCS proceedings.*/}
            {/*</p>*/}
          </div>
        </div>

        <div className="flex mt-6 flex-col-reverse sm:flex-row items-center sm:items-start">
          <div className="mr-5" style={{maxWidth: "140px", minWidth: "120px"}}>
            <img src="/images/ccis_cover.png" alt="CCIS Volume cover"/>
          </div>
          <div className="text-center sm:text-left" style={{wordBreak: "break-word"}}>
            <p className="font-semibold">
              CCIS 1748:
              <br />
              <a className="text-blue-500 hover:underline" target="_blank" href="http://link.springer.com/openurl.asp?genre=issue&issn=1865-0929&volume=1748">http://link.springer.com/openurl.asp?genre=issue&issn=1865-0929&volume=1748</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
