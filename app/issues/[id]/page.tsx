import Link from "next/link";
import moment from "moment";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaCalendar, FaComment, FaGithub } from "react-icons/fa6";

interface IssueProp {
    params: {
        id: number;
    };
}

export default async function Issue({ params: { id } }: IssueProp) {
    const response = await fetch(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
    );

    const {
        title,
        created_at,
        body,
        user: { login },
        comments,
    } = await response.json();

    const formatBody = (text: string) => {
        return text
            .replace(/\n{2,}/g, "</p><p>")
            .replace(/\n/g, "<br>")
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    };

    return (
        <div className="w-[54rem] mx-auto flex flex-col items-center -mt-20">
            <div className="w-[54rem] bg-project-base-profile p-8 flex flex-col gap-4 rounded-lg">
                <div className="flex justify-between text-project-blue">
                    <Link href="/" className="flex items-center">
                        <MdKeyboardArrowLeft /> voltar
                    </Link>
                    <Link href="">ver no github</Link>
                </div>
                <h1 className="text-project-base-title">{title}</h1>
                <ul className="flex gap-8 text-project-base-label">
                    <li className="flex items-center gap-2">
                        <FaGithub />
                        {login}
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCalendar />
                        {moment(created_at).fromNow()}
                    </li>
                    <li className="flex items-center gap-2">
                        <FaComment />
                        {comments === 0 ? "nenhum" : comments}{" "}
                        {`comentário${comments > 1 ? "s" : ""}`}
                    </li>
                </ul>
            </div>
            <div
                className="text-project-base-text px-8 py-10"
                dangerouslySetInnerHTML={{ __html: formatBody(body) }}
            />
        </div>
    );
}
