import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <Skeleton circle={true} height={50} width={50} />
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={150} />
        </div>
    );
};

export default Loading;
