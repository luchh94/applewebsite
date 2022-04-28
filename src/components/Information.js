import React from "react";

const Information = () => {
  return (
    <div className="max-w-[2560px] h-full bg-[#fbfbfb] border-b-2">
      <div className="max-w-[1000px] h-full items-center justify-around md:justify-center m-auto text-left flex flex-col md:flex-row">
        <div className="flex flex-col md:h-full w-full items-center justify-center text-left py-10 px-10">
          <p className="text-[12px] font-extralight w-full py-1">
            1. Apple Watch required. New subscribers only. $9.99/month after
            trial. Plan automatically renews until cancelled.
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            A subscription is required for Apple Fitness+.
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            Apple Fitness+ requires iOS 14.3 or later, iPADOS 14.3 or later,
            watchOS 7.2 or later, and tvOS 14.3 or later.
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            To get the newest features, make sure your devices are running the
            latest software version
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            $4.99/month after free trial. Only one offer per Apple ID and only
            one offer per family if you’re part of a Family Sharing group,
            regardless of the number of devices you or your family purchases.
            This offer is not available if you or your Family have previously
            accepted an Apple TV+ one year free offer. Offer good for 3 months
            after eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other terms apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
