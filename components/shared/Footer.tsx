import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={60}
            height={38}
          />
          <h1 className="text-2xl font-semibold">Click-it</h1>
        </Link>

        <p>&copy;2024 Click-it. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
