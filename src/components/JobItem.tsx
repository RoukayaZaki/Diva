import { IoIosArrowRoundForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

type JobItemProps = {
    id: number,
    title: string,
    types: string[],
};

const JobItem = ({ id, title, types }: JobItemProps) => {
    id++;
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    let formattedNumber = id.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    const isMobile = useMediaQuery({ maxWidth: 1050 });
    return (
        <Link to={`/careers/${id}`} onClick={handleClick}>
        <div className="job-item">
            {!isMobile && (

                <div className="job-item-data">
                    <div className="job-item-left">
                        <p>
                            {formattedNumber}
                        </p>

                    </div>
                    <div className="job-item-right">
                        <div className="job-item-details">
                            <h1>
                                {title}
                            </h1>
                            {types.map((type) => (
                                <span>
                                    ({type})
                                </span>
                            ))}
                        </div>
                        <div className="job-item-arrow">

                            <IoIosArrowRoundForward />

                        </div>

                    </div>
                </div>
            )}
            {isMobile && (
                <div className="job-item-data">
                    <p>
                        {formattedNumber}
                    </p>
                    <div className="job-item-details">
                        <h1>
                            {title}
                        </h1>
                        <div>

                        {types.map((type) => (
                            <span>
                                ({type})
                            </span>
                        ))}
                        </div>
                    </div>
                    <div className="job-item-arrow">

                        <IoIosArrowRoundForward />

                    </div>

                </div>
            )}
            <div className="job-item-line" />
        </div>
        </Link>
    );
};

export default JobItem;
