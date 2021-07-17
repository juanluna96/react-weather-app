import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const clouds = [
    { width: '203px', height: '150px', left: '230px', top: '90px' },
    { width: '147px', height: '109px', top: '260px', left: '255px' },
    { width: '203px', height: '150px', left: '-70px', top: '80px' },
    { width: '248px', height: '183px', left: '-70px', top: '225px' },
]

const WeatherImage = () => {
    return (
        <Fragment>
            {
                clouds.map((cloud, index) => (
                    <LazyLoadImage
                        alt={ `cloud-${index}` }
                        height={ cloud.height }
                        className="clouds-color"
                        style={ { position: 'absolute', left: cloud.left, top: cloud.top } }
                        src={ '/static/img/HeavyCloud.png' }
                        width={ cloud.height }
                    />
                ))
            }
            <LazyLoadImage
                alt={ `weather-img` }
                height={ 150 }
                className="mx-auto mt-36"
                src={ '/static/img/Shower.png' }
                width={ 150 }
            />
        </Fragment>
    )
}

export default WeatherImage
