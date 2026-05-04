"use client";
import React from "react";
import Coffeecart from "./coffeecart";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Container from "./container";

export default function Specialcoffee() {
  const images = [
    "images/c1.png",
    "images/c2.png",
    "images/c3.png",
    "images/c4.png",
    "images/c1.png",
    "images/c2.png",
    "images/c3.png",
    "images/c4.png",
  ];

  const imagesSec = [
    "images/sc1.png",
    "images/sc2.png",
    "images/sc3.png",
    "images/sc4.png",
    "images/sc1.png",
    "images/sc2.png",
    "images/sc3.png",
    "images/sc4.png",
  ];

  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const controls1 = usePrevNextButtons(emblaApi1);
  const controls2 = usePrevNextButtons(emblaApi2);

  return (
    <section className="bg-primary pb-16">
      <Container>
        <h3 className="text-[32px] text-center pt-20 pb-16">
          our special coffee
        </h3>

        <div className="relative px-10">
          <div className="overflow-hidden" ref={emblaRef1}>
            <div className="flex">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
                >
                  <Coffeecart src={img} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start items-center ml-2 gap-4 mt-6">
            <PrevButton
              onClick={controls1.onPrevButtonClick}
              disabled={controls1.prevBtnDisabled}
            />
            <NextButton
              onClick={controls1.onNextButtonClick}
              disabled={controls1.nextBtnDisabled}
            />
          </div>
        </div>

        {/* DESSERT */}
        <h3 className="text-[32px] text-center pt-20 pb-16">
          our special dessert
        </h3>

        <div className="relative px-10">
          <div className="overflow-hidden" ref={emblaRef2}>
            <div className="flex">
              {imagesSec.map((img, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
                >
                  <Coffeecart src={img} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start items-center ml-2 gap-4 mt-6">
            <PrevButton
              onClick={controls2.onPrevButtonClick}
              disabled={controls2.prevBtnDisabled}
            />
            <NextButton
              onClick={controls2.onNextButtonClick}
              disabled={controls2.nextBtnDisabled}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
