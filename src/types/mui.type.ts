import { TableCellProps } from "@mui/material";
import { ReactNode } from "react";

export interface Column<T> extends TableCellProps {
  header: ReactNode;
  row: (data: T ) => ReactNode;
  classRow?: string
  key?: string
}
