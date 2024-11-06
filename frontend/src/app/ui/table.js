import StatusIcon from './status';

export default async function StatusTable({ query }) {
  //const invoices = await fetchFilteredInvoicesData(query, currentPage);

  var dummyData;
  if (query == "gold") {
    dummyData = {
      rows: [
        {id: 1, name: "Doji", status: "up"},
        {id: 2, name: "PNJ", status: "down"},
        {id: 3, name: "SJC", status: "up"},
      ],
    }
  } else {
    dummyData = {
      rows: [
        {id: 1, name: "Vietcombank", status: "down"},
        {id: 2, name: "Techcombank", status: "up"},
        {id: 3, name: "BIDV", status: "down"},
        {id: 4, name: "Agribank", status: "up"},
        {id: 5, name: "Vietinbank", status: "up"},
        {id: 6, name: "TPBank", status: "down"},
      ],
    }
  }

  const data = dummyData.rows;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-[#fff8f7] p-2 md:pt-0 w-10/12 mx-auto">
          <div className="md:hidden">
            {data?.map((data) => (
              <div
                key={data.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <p>{data.name}</p>
                    </div>

                  <StatusIcon status={data.status} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full max-w-3xl mx-auto text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-[#3b080f]">
                  Endpoint Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium text-right text-[#3b080f]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((data) => (
                <tr
                  key={data.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3 text-[#3b080f]">
                      <p>{data.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 pl-3 pr-6 text-right">
                    <StatusIcon status={data.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
