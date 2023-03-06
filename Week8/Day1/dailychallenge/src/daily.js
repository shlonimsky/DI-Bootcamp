import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import {Carousel} from 'react-responsive-carousel'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselDaily = () => {
  
        return (
            <Carousel className='Carousel'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-XUOhzR6pw3CEVCRinpLq2xbvYG0hzsHzg&usqp=CAU" />
                    <p className="legend">Kyiv</p>
                </div>
                <div>
                    <img src="https://images.theconversation.com/files/453079/original/file-20220318-22992-4zgt50.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" />
                    <p className="legend">Lviv</p>
                </div>
                <div>
                    <img src="https://ukraine.ua/wp-content/uploads/2020/09/Lviv-market-square.Ruslan-Lytvyn.shutterstock-1536x1024.jpg" />
                    <p className="legend">Lviv</p>
                </div>
                <div>
                <img src="https://www.e-ir.info/wp-content/uploads/2022/01/shutterstock_1743095750.jpg" />
                    <p className="legend">Dnipro</p>
                </div>
            </Carousel>
        );

};
export default CarouselDaily