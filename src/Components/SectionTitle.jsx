

const SectionTitle = ({subHeading , heading}) => {
    return (
        <div className="mx-auto w-5/12 text-center ">
            <p className="text-yellow-800 text-2xl">{subHeading}</p>
            <h3 className="uppercase text-3xl text-green-300 border-y-4 border-green-500 mb-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;