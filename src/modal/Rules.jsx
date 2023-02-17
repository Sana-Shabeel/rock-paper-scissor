import React from "react";

const Rules = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="right-4 bottom-4 mx-auto h-10 w-32 rounded-md border border-white text-center  uppercase text-white lg:absolute"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Rules
      </button>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden border-blue bg-white outline-none focus:outline-none">
          <div>
            <img src="/images/image-rules.svg" alt="" />
          </div>
          <button
            className="absolute bottom-6 text-4xl"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Rules;
