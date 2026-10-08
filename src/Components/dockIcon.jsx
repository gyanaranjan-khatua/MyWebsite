"use client";

import React from "react";
import { Dock, DockIcon } from "./ui/dock";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export function DockDemo() {
  return (
    <div className="relative">
      <Dock direction="middle">
        {/* WhatsApp */}
        <DockIcon>
          <a
            href="https://wa.me/9040738633"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="size-10 text-[#25D366]" />
          </a>
        </DockIcon>

     
       
      </Dock>
    </div>
  );
}