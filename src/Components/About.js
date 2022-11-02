import React from "react";
import pro from "./profile.png";

export default function About() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="about">
        <h1 className="mb-4 ms-5 heading">&lt;About&gt;</h1>
        <div
          className="d-flex justify-content-around align-items-center flex-wrap-reverse"
        >
          <div className="about py-5 px-4 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            similique quae saepe dolor iure aperiam amet necessitatibus ducimus,
            omnis dolores eum nihil reiciendis esse quo molestias id nobis
            tempora ipsam enim facilis accusantium vel animi. Nesciunt, cumque!
            Libero distinctio illo sint facilis quae eaque, error perspiciatis
            ipsum nihil. Accusantium accusamus ab rem, maiores reiciendis magni,
            rerum fugiat ducimus possimus excepturi doloribus quaerat, nisi id
            iste error ipsum quis ut in harum debitis doloremque inventore
            libero! Tempora autem nostrum numquam, harum nobis cum velit quaerat
            similique dolores, odit veniam, quam rem adipisci natus amet nemo.
            Doloribus voluptatibus dolore consequuntur soluta quam?
          </div>

          <img src={pro} className="abtPic" alt="Profile Pic" width={"30%"} />
        </div>
        <h1 className="mt-4 ms-5 heading">&lt;/About&gt;</h1>
      </div>
    </>
  );
}
