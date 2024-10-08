import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex justify-between bg-gradient-to-b  from-project-base-profile to-project-blue1 py-8">
            <Image src="/effect-left.svg" alt="" width={371} height={236} priority />
            <Image src="/Logo.svg" alt="" width={148} height={98} />
            <Image src="/effect-right.svg" alt="" width={371} height={236} />
        </header>
    )
}