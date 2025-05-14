import Image from "next/image";

export const Overlay = () => {
    return (
        <div className="fixed -top-10 left-0">
            <Image src="logo.svg" width={200} height={200} alt="high-house logo"/>
        </div>
    );
}
