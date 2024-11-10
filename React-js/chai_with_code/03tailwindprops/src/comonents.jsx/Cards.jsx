import React from "react";

function Card({username,btnTxt="visit"}) {

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p dark:bg-slate-800 mb-4 mt-4">
      <img
        className="w-24 h-24 rounded-full mx-auto "
        src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {btnTxt}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
export default Card;
