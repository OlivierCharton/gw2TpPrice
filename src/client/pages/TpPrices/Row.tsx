import { TableCell, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";

import { Context } from "../../Context";
import { Item } from "../../utils/type";
import Price from "../../components/Price";

const Row = ({ row }: { row: Item }) => {
  const { prices, getPrice } = useContext(Context);

  useEffect(() => {
    getPrice(row.id);
  }, []);

  const price = prices[row.id];

  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell onClick={() => navigator.clipboard.writeText(row.name)}>
        {row.name}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => navigator.clipboard.writeText(row.count.toString())}
      >
        {row.count}
      </TableCell>
      <TableCell align="right">
        <Price price={row.price} />
      </TableCell>
      <TableCell align="right">
        <Price price={price} />
      </TableCell>
      <TableCell align="right">
        <Price price={price ? (row.price - price) * row.count : undefined} />
      </TableCell>
    </TableRow>
  );
};

export default Row;
