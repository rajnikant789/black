import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../slices/themeSlice';
import { GiCardBurn } from 'react-icons/gi';
import {
  MdChatBubble,
  MdGroups2,
  MdKeyboardArrowDown,
  MdSearch,
  MdSettings,
} from 'react-icons/md';
import avatar from '../dummy/Images/1.jpg';
import { Link } from 'react-router-dom';

export default function AppLayout({ children, activePage }) {
  const themes = [
    'light',
    'dark',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'forest',
    'luxury',
    'dracula',
    'night',
  ];

  const dispatch = useDispatch();

  return (
    <div
      className="bg-base-300 w-screen h-screen flex-col hidden md:flex select-none"
      onContextMenu={(e) => {
        //e.preventDefault();
      }}>
      <div
        title="Change Themes"
        className="dropdown dropdown-end absolute right-28">
        <label
          tabIndex={0}
          className="btn btn-ghost normal-case text-base btn-sm">
          <GiCardBurn className="pr-1 text-2xl" />
          <span className="hidden md:block">Themes</span>
          <MdKeyboardArrowDown className="pl-1 text-lg md:text-xl" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box max-h-96 h-[50vh] w-48 overflow-y-scroll shadow-2xl mt-4 justify-start p-3 scrollbar-hide">
          {themes.map((theme, i) => {
            return (
              <li
                key={i}
                onClick={() => dispatch(changeTheme(theme))}
                data-theme={theme}
                className="rounded-box font-bold text-primary-content h-9 pl-3 flex items-center mb-2 last:mb-0 hover:cursor-pointer bg-primary hover:bg-primary-focus">
                <a>{theme}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-8 w-full text-right pr-3 pt-1 font-semibold">
        Black
      </div>
      <div className="h-[calc(100vh-2rem)] w-full flex flex-row">
        <div className="w-12 h-full min-w-[3%] flex flex-col justify-center items-center pb-12">
          <Link
            to="/personalchat"
            className={`btn btn-circle btn-ghost text-2xl no-animation  ${
              activePage === 'pc' && 'text-info'
            }`}>
            <MdChatBubble />
          </Link>
          <Link
            to="/groupchat"
            className={`btn btn-circle btn-ghost text-2xl no-animation ${
              activePage === 'gc' && 'text-info'
            }`}>
            <MdGroups2 />
          </Link>
          <Link
            to="/search"
            className={`btn btn-circle btn-ghost text-2xl no-animation ${
              activePage === 'se' && 'text-info'
            }`}>
            <MdSearch />
          </Link>
          <Link
            to="/profile"
            className="btn btn-circle btn-ghost p-2 no-animation">
            <div className="avatar">
              <div
                className={`w-full rounded-full ${
                  activePage === 'pr' && 'outline outline-info outline-[0.2rem]'
                }`}>
                <img src={avatar} />
              </div>
            </div>
          </Link>
          <Link
            to="/settings"
            className={`btn btn-circle btn-ghost text-2xl no-animation ${
              activePage === 'si' && 'text-info'
            }`}>
            <MdSettings />
          </Link>
        </div>
        <div className="w-[calc(100vw-3rem)] h-full flex flex-row rounded-tl-[var(--rounded-btn)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
