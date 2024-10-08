import { Bottom } from "./components/Home/Bottom";
import { Top } from "./components/Home/Top";

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto flex flex-col items-center gap-20">
              <Top />
              <Bottom />
            </div>
        </div>
    );
}
