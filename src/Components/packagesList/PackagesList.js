import React from 'react'

function packagesList(){

    const getDummyList = total => {
        let rows = [];
        for (var i = 0; i < 10; i++) {
            rows.push(<div className="col-md-6 col-lg-4">
                <div className="tour-item">
                <a href="#">
                    <div className="img-wrap">
                    <img src={require("../../Assets/Images/distination-3.jpeg")} alt="" width="100%"/>
                    <p className="price">1450 $</p>
                    <span className="badge">New</span>
                    </div>
                </a>
                <div className="caption">
                    <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                    <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                    <p className="time"><span className="ti-time"></span>10 days</p>
                </div>
                </div>
            </div>)
        }
        return rows
    }
    return (
        <div className="row">
          {getDummyList(10)}
        </div>
    )
}

export default packagesList