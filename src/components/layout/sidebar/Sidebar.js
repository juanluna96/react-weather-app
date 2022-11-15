import AnimatedNumber from "animated-number-react";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import TextTransition from "react-text-transition";
import {
  getCitiesNearbyAction,
  showHideSearchBarAction,
} from "../../../actions/SearchAction";
import { getWeatherGeoLocationAction } from "../../../actions/WeatherAction";
import { convertTemperature } from "../../../utils/units";
import { SideBarStyle } from "../../styles/main";
import {
  ButtonGray,
  InfoText,
  TempText,
  WeatherText,
} from "../../styles/sidebar";
import WeatherImage from "./WeatherImage";

const Sidebar = () => {
  const today = useSelector((state) => state.weather.today);
  const city = useSelector((state) => state.weather.city);
  const searchBar = useSelector((state) => state.search.searchBar);
  const currentTemperature = useSelector(
    (state) => state.weather.currentTemperature
  );
  const dispatch = useDispatch();

  const showSearchSideBar = () => {
    dispatch(showHideSearchBarAction(searchBar));
  };

  const getWeatherCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(getWeatherGeoLocationAction(latitude, longitude));
      dispatch(getCitiesNearbyAction(latitude, longitude));
    });
  };

  return (
    <SideBarStyle>
      <div className="flex justify-between px-6">
        <ButtonGray onClick={() => showSearchSideBar()}>
          Search for place
        </ButtonGray>
        <ButtonGray rounded="true" onClick={() => getWeatherCurrentLocation()}>
          <BiCurrentLocation size="2.3rem" />
        </ButtonGray>
      </div>
      <WeatherImage image={today.weather[0].icon}></WeatherImage>
      <TempText>
        <AnimatedNumber
          value={today.main.temp}
          formatValue={(n) => convertTemperature(currentTemperature, n)}
          duration={3500}
        />
        <span className="mt-4 text-6xl text-gray-400">
          {currentTemperature}
        </span>
      </TempText>
      <WeatherText>
        <TextTransition
          text={today.name}
          className="text-center"
          noWrap={false}
        />
      </WeatherText>
      <InfoText>
        Today &#183;{" "}
        <Moment format="ddd, DD MMM" date={today.applicable_date} />
      </InfoText>
      <InfoText city="true">
        <MdLocationOn size="1.8rem" className="mr-2"></MdLocationOn>
        <TextTransition text={city} className="text-center" noWrap={false} />
      </InfoText>
    </SideBarStyle>
  );
};

export default Sidebar;
