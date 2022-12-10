import React from "react";
import "./CopyRight.css";
import {GrFacebookOption } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { TiSocialDribbbleCircular } from 'react-icons/ti';
import { Link } from "react-router-dom";
const CopyRight = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <section className="copyright">
      <div>
        <p className=" text-white mb-4 lg:mb-0">
          Copyright {""}
           <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{year}
          <span className=" font-semibold ml-2 text-xl">figgas</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
     <button className="bg-black p-1 mr-1 social-btn">
     <Link className="text-2xl text-white" > <GrFacebookOption /> </Link>
     </button>
    <button className="bg-black p-1 mr-1 social-btn">
    <Link className="text-2xl text-white"> <GrTwitter /> </Link>
    </button>
    <button className="bg-black p-1 mr-1 social-btn">  <Link className="text-2xl text-white"> <GrInstagram /> </Link></button>
     <button className="bg-black p-1 social-btn"> <Link className="text-2xl text-white"> <TiSocialDribbbleCircular /> </Link></button>
      </div>
    </section>
  );
};

export default CopyRight;
