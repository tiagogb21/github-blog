'use server';

import Link from "next/link";
import { Search } from "../Search";

interface IItem {
    id: number;
    number: number;
    title: string;
    body: number;
    created_at: string;
}

export async function Bottom() {
    const response = await fetch("https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge");

    const {items, total_count} = await response.json();

    return (
        <div className="w-[54rem] flex flex-col gap-12">
            <Search totalCount={total_count} />
            <div className="grid grid-cols-2 gap-8">
                {
                    items.map(({ id, number, title, body, created_at } : IItem) => (
                        <Link href={`/issues/${number}`} key={id} className="bg-project-base-post flex flex-col rounded-lg p-8 gap-5 border-2 border-solid border-transparent hover:border-project-base-border cursor-pointer">
                            <div className="flex justify-between">
                                <h2 className="text-xl text-project-base-title font-bold">{title}</h2>
                                <p className="text-project-base-span">{created_at}</p>
                            </div>
                            <p className="line-clamp-6 text-project-base-text">{body}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}