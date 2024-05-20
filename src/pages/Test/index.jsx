import { Text } from "@fluentui/react";
import { DetailsListLayoutMode, SelectionMode, ShimmeredDetailsList } from "@triquetra/ui";

const Test = () => {

  const columns = [
    {
      key: "column1",
      name: "column1",
      fieldName: "column1",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column1",
      isPadded: true,
    },
    {
      key: "column2",
      name: "column2",
      fieldName: "column2",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column2",
      isPadded: true,
    },
    {
      key: "column3",
      name: "column3",
      fieldName: "column3",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column3",
      isPadded: true,
    },
    {
      key: "column4",
      name: "column4",
      fieldName: "column4",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column4",
      isPadded: true,
    },
    {
      key: "column5",
      name: "column5",
      fieldName: "column5",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column5",
      isPadded: true,
    },
    {
      key: "column6",
      name: "column6",
      fieldName: "column6",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column6",
      isPadded: true,
    },
    {
      key: "column7",
      name: "column7",
      fieldName: "column7",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column7",
      isPadded: true,
    },
    {
      key: "column8",
      name: "column8",
      fieldName: "column8",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column8",
      isPadded: true,
    },
    {
      key: "column9",
      name: "column9",
      fieldName: "column9",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column9",
      isPadded: true,
    },
    {
      key: "column10",
      name: "column10",
      fieldName: "column10",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column10",
      isPadded: true,
    },
    {
      key: "column11",
      name: "column11",
      fieldName: "column11",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column11",
      isPadded: true,
    },
    {
      key: "column12",
      name: "column12",
      fieldName: "column12",
      // isSorted: true,
      isSortedDescending: true,
      minWidth: 100,
      maxWidth: 100,
      // isResizable: true,
      // fontWeight: 800,
      fontSize: "12px",
      data: "string",
      onRender: () => "column12",
      isPadded: true,
    },
  ];

  return (
    <ShimmeredDetailsList
      enableShimmer={false}
      // className={detaillisttable table ${className}}
      items={[
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ]}
      compact={true}
      columns={columns}
      // selectionMode={SelectionMode?.multiple}
      styles={{ root: { cursor: "pointer" } }}
      // getKey={getKey}
      setKey="multiple"
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
      // selection={selection}
      selectionPreservedOnEmptyClick={true}
      // onItemInvoked={props.handleColumnClick}
      enterModalSelectionOnTouch={true}
      checkboxVisibility={true}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      checkButtonAriaLabel="select row"
      // onColumnHeaderClick={onColumnClick}
    />
  );
};

export default Test;
