import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductsForYouSm = () => {
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4, // Número de elementos visibles por slide
    //     slidesToScroll: 2,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: false,
    //                 dots: false,
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2.5,
    //                 slidesToScroll: 2.5,
    //                 initialSlide: 2.5,
    //             },
    //         },
    //         {
    //             breakpoint: 393,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2,
    //             },
    //         },
    //     ],
    // };

    const products = [
        {
            id: 1,
            imgUrl: "/img_publics/para-estudiar-desktop.png",
        },
        {
            id: 2,
            imgUrl: "/img_publics/para-trabajar-desktop.png",
        },
        {
            id: 3,
            imgUrl: "/img_publics/accesorios-desktop.png",
        },
        {
            id: 4,
            imgUrl: "/img_publics/para-jugar-desktop.png",
        },
        {
            id: 5,
            imgUrl: "/img_publics/comunidad-gamer-desktop.png",
        },
    ];

    const firstTwoProducts = products.slice(0, 2);
    const remainingProducts = products.slice(2);

    return (
        <div className="pd-for-you">
            <div className="txt-center padding-categories-titles">
                <div className="txt-semibold font-family-montserrat font18">
                    Los productos ideales para ti
                </div>
            </div>

            <div className="flex-container-wrap-sm">
                {firstTwoProducts.map((c) => (
                    <div key={c.id}>
                        <img
                            src={c.imgUrl}
                            alt={`Producto ${c.id}`}
                            className="img-responsive mgb177 br9 pointer"
                        />
                    </div>
                ))}
            </div>

            <div className="flex-container-wrap-sm">
                {remainingProducts.map((c) => (
                    <div key={c.id}>
                        <img
                            src={c.imgUrl}
                            alt={`Producto ${c.id}`}
                            className="img-responsive mgb177 br9 pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};