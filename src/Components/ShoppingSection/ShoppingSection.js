import React from 'react'
import "./ShoppingSection.css"
import ShopBox from '../ShopBox/ShopBox';
import ColorBox from '../ColorBox/ColorBox';

export default function ShoppingSection() {
  return (
    <div className='shopping-section'>
      <div className="container">
        <div className="wrapper row">
          <div className="shop-section col-lg-6 col-md-4 col-11">
            <ShopBox
              price={129}
              title={"Retro Air Jordan 6"}
              img={"./images/products/img-1.png"} >
              <ColorBox background={"red"} />
              <ColorBox background={"orange"} />
              <ColorBox background={"black"} />
              <ColorBox background={"green"} />
            </ShopBox>
          </div>
          <div className="shop-section col-lg-6 col-md-4 col-11">
            <div className="row">
              <div className="col-lg-6">
                <ShopBox
                  price={129}
                  title={"Retro Air Jordan 4"}
                  img={"./images/products/img-2.png"} >
                  <ColorBox background={"red"} />
                  <ColorBox background={"purple"} />
                  <ColorBox background={"pink"} />
                  <ColorBox background={"black"} />
                </ShopBox>
              </div>
              <div className="col-lg-6">
                <ShopBox
                  price={129}
                  title={"Retro Air Jordan 3"}
                  img={"./images/products/img-3.png"} >
                  <ColorBox background={"lightblue"} />
                  <ColorBox background={"white"} />
                  <ColorBox background={"pink"} />
                  <ColorBox background={"green"} />
                </ShopBox>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ShopBox
                  price={129}
                  title={"Retro Air Jordan 6"}
                  img={"./images/products/img-4.png"} >
                  <ColorBox background={"yellow"} />
                  <ColorBox background={"pink"} />
                  <ColorBox background={"lightgreen"} />
                  <ColorBox background={"black"} />
                </ShopBox>
              </div>
              <div className="col-lg-6">
                <ShopBox
                  price={129}
                  title={"Retro Air Jordan 6"}
                  img={"./images/products/img-5.png"} >
                  <ColorBox background={"red"} />
                  <ColorBox background={"orange"} />
                  <ColorBox background={"black"} />
                  <ColorBox background={"green"} />
                </ShopBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
