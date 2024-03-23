import React from 'react'
import "./HeaderSection.css"

export default function HeaderSection() {
    return (
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="wrapper">

                        <div className="section left">
                            <img src="./images/nike-logo.png" alt="Nike" />
                        </div>
                        <div className="section lines">
                            <img
                                src="./images/line-1.png"
                                alt="Nike"
                                className='line mx-2'
                            />
                            <img
                                src="./images/line-2.png"
                                alt="Nike"
                                className='line mx-2'
                            />
                            <img
                                src="./images/line-3.png"
                                alt="Nike"
                                className='line mx-2'
                            />
                        </div>
                        <div className="section right">
                            <h6>
                                Shop for the newest releases & for Retro Jordans. Shipped straight to your home from our warehouses in 3 - 5 day.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
