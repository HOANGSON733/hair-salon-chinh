"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, X } from "lucide-react";

type FloatingIconsProps = {
  facebookPage: string;
  zaloNumber: string;
  phoneNumber: string;
};

const FloatingIcons: React.FC<FloatingIconsProps> = ({
  facebookPage,
  zaloNumber,
  phoneNumber,
}) => {
  const [open, setOpen] = useState(false);

  const icons = [
    {
      href: `https://m.me/${facebookPage}`,
      img: "/messenger.png",
      label: "Chat Facebook",
      sub: "(8h-22h)",
    },
    {
      href: `tel:${phoneNumber}`,
      img: "/phone1.png",
      label: phoneNumber,
      sub: "(8h-22h)",
    },
    {
      href: `https://zalo.me/${zaloNumber}`,
      img: "/Zalo.png",
      label: "Chat Zalo",
      sub: "(8h-22h)",
    },

  ];

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      {/* Các nút con */}
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative transform transition-all duration-300 ease-out ${open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
            }`}
          style={{
            transitionDelay: `${open ? index * 100 : 0}ms`,
          }}
        >
          <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2 md:p-3 hover:shadow-lg transition-all">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
              <Image
                src={icon.img}
                alt={icon.label}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">{icon.label}</p>
              <p className="text-xs text-gray-500">{icon.sub}</p>
            </div>
          </div>
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
            {icon.label}
          </span>
        </Link>
      ))}

      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-orange-500 text-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-orange-600 transition-all"
      >
        <Plus
          size={20} // size mặc định
          className={`transform transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"
            } sm:w-6 sm:h-6 w-5 h-5`} // thay đổi kích thước icon theo màn hình
        />
      </button>


    </div>
  );
};

export default FloatingIcons;
