import AuthPageImg from "../assets/img/auth_img.png";

function Checkout() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="w-full h-auto flex gap-4">
          <div className="w-4/6 h-auto flex flex-col gap-4">
            <div className="w-full h-[350px] rounded-xl flex flex-col gap-12 py-8 px-8 border-2 ">
              <h1 className="text-2xl font-bold">Review Item And Shipping</h1>
              <div className="flex">
                <img src={AuthPageImg} width='200px' height='200px' alt="" />
                <div className="w-full py-12 flex justify-between">
                  <div>
                    <h1 className="font-bold text-2xl">AirPod-Max</h1>
                    <h1 className="text-sm">Colors: Pink </h1>
                  </div>
                  <div>
                    <h1 className="text-2xl">$549.00</h1>
                    <h1 className="text-lg">Quantity: 01 </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[555px] rounded-xl border-2 flex flex-col gap-12 py-8 px-8">
              <h1 className="text-2xl font-bold">Delivery Information</h1>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between ">
                  <div className="w-full" >
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    Address*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="firstname"
                    className="rounded-lg w-[95%] h-[48px] px-4 border-2"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      City/Town*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                </div >
                <div className="flex justify-between">
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      Mobile*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-lg font-semibold">
                      Email*
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="firstname"
                      className="rounded-lg w-[90%] h-[48px] px-4 border-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-[1050px] rounded-xl flex flex-col gap-7 py-8 px-8 border-2">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="h-[1px] bg-gray-500 "></div>
            <h1 className="text-xl ">Payment Details</h1>
            <div className="flex flex-col gap-4">
              <div class="flex items-center">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4  focus:ring-2 " />
                <label for="default-radio-1" class="ml-2 text-sm font-medium ">Cash on Delivery</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4  focus:ring-2 " />
                <label for="default-radio-2" class="ml-2 text-sm font-medium ">QR Code</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4  focus:ring-2 " />
                <label for="default-radio-2" class="ml-2 text-sm font-medium ">Credit or Debit Card</label>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[75px] h-[40px] bg-gray-500 mx-1"></div>
              <div className="w-[75px] h-[40px] bg-gray-500 mx-1"></div>
              <div className="w-[75px] h-[40px] bg-gray-500 mx-1"></div>
            </div>
            <div className="w-full">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Email*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[48px] px-4 border-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Card Holder Name*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[48px] px-4 border-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Card Number*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[48px] px-4 border-2"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-full">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Expiry*
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="firstname"
                  className="rounded-lg w-[95%] h-[48px] px-4 border-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  CVV*
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="firstname"
                  className="rounded-lg w-full h-[48px] px-4 border-2"
                />
              </div>
            </div >
            <div className="flex justify-between ">
              <div className="font-bold flex flex-col gap-2">
                <h1>Sub Total</h1>
                <h1>Tax(10%)</h1>
                <h1>Shipping Cost</h1>
              </div>
              <div className="text-right flex flex-col gap-2">
                <h1>$549.00</h1>
                <h1>$54.90</h1>
                <h1>$0.00</h1>
              </div>
            </div>
            <div className="h-[1px] bg-gray-500 "></div>
            <div className="flex justify-between">
              <div className="font-bold">
                <h1>Total</h1>
              </div>
              <div className="text-right">
                <h1>$603.90</h1>
              </div>
            </div>
            <div className="w-full border-2 bg-gray-400 text-center rounded-3xl p-2">
                <h1>Pay $603.90</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Checkout;