import React from "react";
import Link from "next/link";
import siteInfo from "../siteInfo.json";

const Header = () => (
  <header>
    <Link href="/">
      <h1 className="text-2xl mt-4 mb-2 text-center text-gray-800">
        {siteInfo.title}
      </h1>
    </Link>
    <p className="text-center text-gray-500">{siteInfo.description}</p>
  </header>
);

export default Header;
