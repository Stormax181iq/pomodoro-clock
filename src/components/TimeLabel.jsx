import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TimeLabel({
  title,
  timeLength,
  setTimeLength,
  isDisabled,
}) {
  return (
    <>
      <p className="text-2xl">{title} Length</p>
      <div className="flex justify-around">
        <button
          className="px-2 py-1 hover:bg-red-300 disabled:cursor-default disabled:hover:bg-inherit"
          onClick={() => setTimeLength(timeLength + 1)}
          disabled={isDisabled}
        >
          <FontAwesomeIcon size="2xl" icon={faArrowUp} />
        </button>
        <p className="text-2xl">{timeLength}</p>
        <button
          className="px-2 py-1 hover:bg-red-300 disabled:cursor-default"
          onClick={() => setTimeLength(timeLength - 1)}
          disabled={isDisabled}
        >
          <FontAwesomeIcon size="2xl" icon={faArrowDown} />
        </button>
      </div>
    </>
  );
}

TimeLabel.propTypes = {
  title: PropTypes.string.isRequired,
  timeLength: PropTypes.number.isRequired,
  setTimeLength: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
