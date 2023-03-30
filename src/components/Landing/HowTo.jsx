import React from 'react'

const HowTo = () => {
    return (
        <>
            <div className="row mt-5 justify-content-center mb-5 text-center">
                <div><h3 className="sblue fw-bold text-center mb-3">How-to Videos</h3></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div className="text-center mb-3">
                        <iframe width={210} height={150}
                            src="https://www.youtube.com/embed/IllozEqZi-A"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                       <br /> <a className="fw-bold sblue" href="https://youtu.be/IllozEqZi-A" target="_blank" rel="noreferrer">How to Blast Algae Off your Pontoons</a>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div className="text-center mb-3">
                        <iframe width={210} height={150}
                            src="https://www.youtube.com/embed/84av5o4HlRM"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <br /><a className="fw-bold sblue" href="https://youtu.be/84av5o4HlRM" target="_blank" rel="noreferrer">How to Buff Your Pontoons in Less than 1 Hour</a>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div className="text-center mb-3">
                        <iframe width={210} height={150}
                            src="https://www.youtube.com/embed/HzqTJmJ6n8U"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <br /><a className="fw-bold sblue" href="https://youtu.be/HzqTJmJ6n8U" target="_blank" rel="noreferrer">Protective Clear Coat for Aluminum Pontoon Boats</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowTo