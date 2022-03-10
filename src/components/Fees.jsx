import React from "react";

const Fees = ({ fees, className = "" }) => {
  return (
    <div className={className}>
      <p className="md:leading-7 md:text-xl text-gray-700">
        At least one author per accepted paper must pay the registration fee and present the paper in the conference session where the paper is scheduled.
      </p>
      <p className="md:leading-7 md:text-xl text-gray-700 mt-8">
        Registration fees are waived for invited keynote speakers. Please note, that once the registration payment is
        done, <span className="text-red-800 font-bold">no refund is available</span>.
      </p>
      <p className="md:leading-7 md:text-xl text-gray-700 mt-8">
        Payment details will be available later.
      </p>
      <FeesTable fees={fees} className="my-12" />
    </div>
  )
};

export const FeesTable = ({ fees, className = "" }) => {
  // First we need to order prices by IEEE membership:
  for (const record of fees) {
    record.prices.sort((a, b) => (!a.ieeeMember && b.ieeeMember) ? -1 : (!!a.ieeeMember === !!b.ieeeMember) ? 0 : 1);
  }

  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                  <th
                    className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    PARTICIPANTS
                  </th>
                  <th
                    className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    NO IEEE MEMBERSHIP
                  </th>
                  <th
                    className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                    IEEE MEMBER
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {
                  fees.map(fee => (
                    <FeeTableRow fee={fee} key={fee.order} />
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeeTableRow = ({ fee }) => {
  const regularPrice = fee.prices[0];
  const ieeePrice = fee.prices[1];
  const discount = regularPrice.price > 0 ? (1 - ieeePrice.price / regularPrice.price) * 100 : undefined;

  return (
    <tr>
      <td className="px-6 py-4 text-gray-700 leading-tight md:text-lg">
        {fee.category}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap font-bold">
        {regularPrice.price} {regularPrice.currency}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap font-bold text-center">
        <div className="text-green-700">
          {ieeePrice.price} {ieeePrice.currency}
        </div>
        {
          discount !== undefined && (
            <div className="font-medium text-sm text-green-500 font-bold">
              -{discount.toFixed(0)}%
            </div>
          )
        }
      </td>
    </tr>
  );
}

export default Fees;
