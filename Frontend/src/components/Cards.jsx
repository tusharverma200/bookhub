import React from "react";

function Cards({ item }) {

  const handleBuyNowClick = () => {
    const link = document.createElement("a");
    // Set the href attribute to the PDF URL
    link.href = item.download;
    // Set the download attribute with a suggested filename (optional)
    link.setAttribute("download", item.name + ".pdf");
    // Set the target attribute to _blank to avoid opening in the same tab
    link.target = "_blank";
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically trigger a click event on the link to start the download
    link.click();
    // Remove the link from the document body
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="">Author: {item.authors}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200" onClick={handleBuyNowClick}>
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
