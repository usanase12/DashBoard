import React, { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";

export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <CiSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray rounded-sm pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 mr">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 "
                )}
              >
                <IoChatboxEllipsesOutline fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      this is the message panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 "
                )}
              >
                <FaRegBell fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notification
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      this is the notification panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
  <div className="inline-flex">
    <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral">
      <span className="sr-only">Open user menu</span>
      <div
        className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center object-cover"
        style={{
          backgroundImage:
            'url("https://envato-shoebox-0.imgix.net/24f3/5f75-0758-4d79-a7ff-bfa103080192/18.09.2023_0013.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=46dbbe26fb3a0738158e864527c8cb08")',
        }}
      >
        <span className="sr-only">Admin</span>
      </div>
    </Menu.Button>
  </div>
  <Transition 
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Item className="origin-top-right z-10 absolutely right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none">
      <Menu.Item>
        {({active})=>(
          <button className="{'{
            active ? 'bg-violet-500 text-white': 'text-gray-900'
          }group flex w-full items-center rounded-md px-2 py-2 text-sm'}
            ">

          </button>
        )}
      </Menu.Item>
    </Menu.Item>

  </Transition>
</Menu>

       
      </div>
    </div>
  );
}
