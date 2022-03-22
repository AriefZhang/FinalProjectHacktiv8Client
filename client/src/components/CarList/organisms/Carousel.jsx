import React from "react";

export default function Carousel({ photos }) {
  return (
    <div class="carousel h-48 object-cover overflow-hidden">
      <div class="relative w-full">
        <img
          src="https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/1459816624-1954-mercedes-300sl-gullwing-a.jpg"
          class="object-cover w-full self-center"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
      <img
          src="https://www.autos.id/wp-content/uploads/2019/04/unnamed-8.jpg"
          class="object-cover w-full self-center"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
          class="object-cover w-full self-center"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
          class="object-cover w-full self-center"
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
