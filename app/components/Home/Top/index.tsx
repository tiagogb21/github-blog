"use server";

import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";

export async function Top() {
    const response = await fetch("https://api.github.com/users/tiagogb21");

    const {
        name,
        bio,
        url,
        login,
        company,
        followers,
        avatar_url,
    } = await response.json();

    return (
        <div className="w-[54rem] -mt-20 bg-project-base-profile flex px-10 py-8 gap-8 rounded-lg">
            <Image className="rounded-lg" src={avatar_url} alt="Avatar" width={100} height={100} />
            <div className="flex-1 flex flex-col justify-between">
                <div className="w-full flex justify-between">
                    <h1 className="text-2xl text-project-base-title">{name}</h1>
                    <Link className="text-project-blue flex items-center uppercase gap-2" href={url}>github <FaArrowUpRightFromSquare /></Link>
                </div>
                <p className="text-project-base-text">{bio}</p>
                <ul className="flex gap-6">
                    <li className="flex gap-2 items-center text-project-base-subtitle">
                        <FaGithub />
                        {login}
                    </li>
                    <li className="flex gap-2 items-center text-project-base-subtitle">
                        <FaBuilding />
                        {company}
                    </li>
                    <li className="flex gap-2 items-center text-project-base-subtitle">
                        <HiUsers />
                        {followers}
                    </li>
                </ul>
            </div>
        </div>
    );
}
