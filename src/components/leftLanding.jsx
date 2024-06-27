import Button from "./button";

export default function LeftLanding(props) {
    return(
        <div className="left relative mt-48 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col">
            <h1 className=" text-7xl font-bold mb-3">{props.h1Text}</h1>
            <p className="mb-5">{props.pText}</p>

            <Button rounded={"full"} py={"2"} text={"Order Now"}  />
        </div>
    );
}