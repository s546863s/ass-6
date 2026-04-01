const WebHeading = ({title, description}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold ">{title}</h1>  
            <p className=" opacity-95 mt-4">{description}</p>
        </div>
    );
};

export default WebHeading;