import React from "react";

export default function CarouselPhoto({ index }) {
  return (
    <div id="slide1" class="carousel-item relative w-full">
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
  );
}
