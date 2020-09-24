import { Button, Table, Tag } from "antd";
import { useStudentStore } from "../store/studentStore";

export default function StudentTable() {
  const { data, setData, searchResult } = useStudentStore();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (value) => {
        return <h4>{value}</h4>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (value) => (
        <Tag color={value === "male" ? "blue" : "yellow"}>{value}</Tag>
      ),
    },
    {
      title: "Delete",
      dataIndex: "key",
      key: "key",
      render: (value) => (
        <Button
          danger
          type="primary"
          onClick={() => {
            setData(data.filter((el) => el.key !== value));
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={searchResult.length ? searchResult : data}
      columns={columns}
    />
  );
}
