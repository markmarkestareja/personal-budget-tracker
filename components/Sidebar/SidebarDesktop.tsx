"use client";

import Image from "next/image";
import BtnSidebar from "../BtnSidebar";

export default function SidebarDesktop() {

  return (
    <div className="h-lvh sticky flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="h-15 w-15 rounded-full relative">
              <Image
                src="/profile.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold">John Doe</span>
          </div>
          <div>
            <span className="text-[12px] opacity-75">
              Personal Budget Tracker
            </span>
          </div>
        </div>

        <div className="px-6 flex flex-col justify-start items-start pt-6">
          <BtnSidebar 
            name="Dashboard" 
            href="/"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"
                />
              </svg>
            }
          />

          <BtnSidebar 
            name="Reports" 
            href="/Report"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 13H2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1m16-4h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m-8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1"
                />
              </svg>
            }
          />

        </div>
      </div>

      <div>
        <div className="flex gap-2 p-6 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8z"
            />
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
}
