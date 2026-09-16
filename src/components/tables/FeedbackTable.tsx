import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const FeedbackTable = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const heads = ["Invoices", "Status", "Method", "Amount"];

  const renderHeads = () => {
    return heads.map(head => (
      <TableHead
        className="border-e"
        key={head}
      >
        {head}
      </TableHead>
    ));
  };

  const renderCell = (cellValue: string) => {
    return <TableCell className="border-e">{cellValue}</TableCell>;
  };

  const renderRecords = () => {
    return invoices.map(invoice => (
      <TableRow>
        {renderCell(invoice.invoice)}
        {renderCell(invoice.paymentStatus)}
        {renderCell(invoice.paymentMethod)}
        {renderCell(invoice.totalAmount)}
      </TableRow>
    ));
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>{renderHeads()}</TableRow>
      </TableHeader>

      <TableBody>{renderRecords()}</TableBody>
    </Table>
  );
};
