import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UncontrolledCarousel } from 'reactstrap'

export default function SkillsCarousel() {
    const navigate = useNavigate()

    return (
        <UncontrolledCarousel
            enableTouch={true}


            items={[
                {
                    // altText: 'Marketing Analytics',
                    caption: 'Marketing Analytics',
                    key: 1,
                    // header: 'Marketing Analytics',
                    // description: 'Marketing Analytics',

                    onClick: () => {
                        navigate('/Company/2')

                    }

                },
                {
                    // altText: 'Website Design',
                    caption: 'Website Design',
                    key: 2,
                },
                {
                    // altText: 'slide 3',
                    caption: 'slide 3',
                    key: 3,
                },
                {
                    // altText: 'slide 4',
                    caption: 'slide 4',
                    key: 4,

                }






            ]}
            onItemClick={() => {
                navigate('/Company/2')
            }
            }
            onExiting={() => {
                navigate('/Company/2')
            }
            }

            onExited={() => {
                navigate('/Company/2')
            }
            }

            onItemChange={() => {
                navigate('/Company/2')
            }
            }

            onItemSelect={() => {
                navigate('/Company/2')
            }
            }



            // on carousel-item click navigate to "/Company/2"





            // onClick={() => {
            //     navigate(`/Company/2`)
            // }}


            // svgIcon={true}
            // className="carousel-container"
            darkIndicator={true}
            darkControls={true}
            dark={true}
        // slide={true}
        // showIndicators={true}
        // captionHeader={true}
        // captionText={true}
        // showArrows={true}
        // showStatus={false}
        // interval={5000}
        // keyboard={true}
        // pauseOnHover={true}
        // pauseOnDotsHover={true}
        // fade={true}
        // wrap={true}
        />
    )
}
