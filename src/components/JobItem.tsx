import { IoIosArrowRoundForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

type JobItemProps = {
    id: number,
    title: string,
    types: string[],
};

const JobItem = ({ id, title, types }: JobItemProps) => {
    let formattedNumber = id.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    const isMobile = useMediaQuery({ maxWidth: 1050 });
    return (

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
            )}
            <div className="job-item-line" />
        </div>
    );
};

export default JobItem;
