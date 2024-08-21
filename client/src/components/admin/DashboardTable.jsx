import TableHOC from "./TableHOC";

const columns = [
  {
    Header: "Name",
    accessor: "user.name",
  },
  {
    Header: "Quantity",
    accessor: "items.length",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Amount",
    accessor: "subTotal",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data }) => {
  return TableHOC(
    columns,
    data,
    "transaction-box",
    "Top Orders",
    data.length > 6
  )();
};

export default DashboardTable;
