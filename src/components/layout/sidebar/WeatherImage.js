import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const clouds = [
    { width: '203px', height: '150px', left: 'none', top: '90px', right: '-40px' },
    { width: '147px', height: '109px', left: 'none', top: '260px', right: '-10px' },
    { width: '203px', height: '150px', left: '-70px', top: '80px', right: 'none' },
    { width: '248px', height: '183px', left: '-70px', top: '225px', right: 'none' },
]

const WeatherImage = ({ image }) => {
    return (
        <Fragment>
            {
                clouds.map((cloud, index) => (
                    <LazyLoadImage
                        key={ index }
                        alt={ `cloud-${index}` }
                        height={ cloud.height }
                        className="clouds-color"
                        style={ { position: 'absolute', left: cloud.left, right: cloud.right, top: cloud.top } }
                        src={ '/static/img/few-clouds.png' }
                        width={ cloud.height }
                    />
                ))
            }
            <LazyLoadImage
                alt={ `${image}` }
                height={ 150 }
                className="mx-auto mb-20 mt-36"
                src={ `/static/img/${image}.png` }
                width={ 150 }
            />
        </Fragment>
    )
}

export default WeatherImage
