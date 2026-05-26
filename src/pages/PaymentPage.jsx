import React from 'react'

const PaymentPageheader = () => {
  return (
    <header className="bg-secondary shadow">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <div
          className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl shadow"
        >
          <span className="font-semibold">ROYAL</span>
        </div>
        <h1 className="hidden md:block font-semibold text-lg">
          ROYAL STAY HOTEL
        </h1>
      </div>
    </header>
  )
}

const PaymentBody = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-6">Booking Summary</h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">HOTEL</span>
                <span className="font-medium">ROYAL STAY HOTEL</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">ROOM</span>
                <span className="font-medium">SINGLE ROOM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">11 Jan 2026</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Time Slot</span>
                <span className="font-medium">12:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">USER :- </span>
                <span className="font-medium">Vedant Chaudhari</span>
              </div>

              <hr />

              <div className="flex justify-between text-base font-semibold">
                <span>Total Amount</span>
                <span className="text-primary">₹8000</span>
              </div>
            </div>
          </div>


          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-6">Choose Payment Method</h2>

            <div className="space-y-4">
              <label
                className="flex items-start gap-4 border rounded-xl p-5 cursor-pointer hover:border-primary transition"
              >
                <input
                  type="radio"
                  name="payment"
                  className="mt-1 accent-purple-500"
                  defaultChecked
                />
                <div>
                  <p className="font-medium">UPI</p>
                  <p className="text-sm text-gray-500">
                    Google Pay, PhonePe, Paytm
                  </p>
                </div>
              </label>

              <label
                className="flex items-start gap-4 border rounded-xl p-5 cursor-pointer hover:border-primary transition"
              >
                <input
                  type="radio"
                  name="payment"
                  className="mt-1 accent-purple-500"
                />
                <div>
                  <p className="font-medium">Debit / Credit Card</p>
                  <p className="text-sm text-gray-500">Visa, Mastercard, RuPay</p>
                </div>
              </label>

              <label
                className="flex items-start gap-4 border rounded-xl p-5 cursor-pointer hover:border-primary transition"
              >
                <input
                  type="radio"
                  name="payment"
                  className="mt-1 accent-purple-500"
                />
                <div>
                  <p className="font-medium">Net Banking</p>
                  <p className="text-sm text-gray-500">All major banks supported</p>
                </div>
              </label>
            </div>


            <button
              className="w-full mt-8 bg-primary hover:bg-purple-600 text-white py-3 rounded-full font-semibold transition"
            >
              Pay ₹8000
            </button>

            <p className="text-center text-sm text-gray-500 mt-3">
               100% secure payment
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

const PaymentPage = () => {
  return (
    <>
      <PaymentPageheader />
      <PaymentBody />
    </>
  )
}

export default PaymentPage