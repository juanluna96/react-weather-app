import AnimatedNumber from "animated-number-react";
import moment from "moment";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import TextTransition from "react-text-transition";
import { convertTemperature } from "../../../../utils/units";
import { DayContainer, DayText } from "../../../styles/weather";

const DayDetail = ({ day, index }) => {
  const currentTemperature = useSelector(
    (state) => state.weather.currentTemperature
  );
  const {
    dt_txt,
    weather: [current],
    main: { temp_max, temp_min },
  } = day;

  const arrayYellowIcons = ["50d", "01n"];

  return (
    <DayContainer>
      <DayText title="true">
        {index === 0 ? (
          "Tomorrow"
        ) : (
          <TextTransition
            text={moment(dt_txt).format("ddd, DD MMM")}
            className="text-center"
            noWrap={false}
          />
        )}
      </DayText>
      <LazyLoadImage
        alt={`${current.description.replace(" ", "-")}`}
        width={90}
        height={90}
        className={`mx-auto mt-2 mb-8 ${
          arrayYellowIcons.includes(current.icon) ? "icon-weather" : ""
        }`}
        src={`${process.env["REACT_APP_WEATHER_ICONS_URL"]}/${current.icon}@4x.png`}
      />
      <div className="flex items-center justify-between">
        <DayText>
          <AnimatedNumber
            value={temp_max}
            formatValue={(n) => convertTemperature(currentTemperature, n)}
            duration={3000}
          />
          {currentTemperature}
        </DayText>
        <DayText mintemp="true">
          <AnimatedNumber
            value={temp_min}
            formatValue={(n) => convertTemperature(currentTemperature, n)}
            duration={3000}
          />
          {currentTemperature}
        </DayText>
      </div>
    </DayContainer>
  );
};

export default DayDetail;
