import { Row, Col, Button, Input } from "antd";
import { useStudentStore } from "../store/studentStore";

export default function StudentControls() {
  const { setShowModal, setSearchResult, data } = useStudentStore();
  return (
    <Row gutter={[24, 24]}>
      <Col span={6}>
        <Button
          type="primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Student
        </Button>
      </Col>
      <Col span={18}>
        <Input.Search
          placeholder="input Student Name"
          onSearch={(value) => {
            if (!value || value.length == 0) return;
            setSearchResult(
              data.filter((el) => {
                let matcher = new RegExp(value.trim().toLowerCase(), "g");
                return matcher.test(el.name.toLowerCase());
              })
            );
          }}
          onChange={(value) => {
            setSearchResult(
              data.filter((el) => {
                let matcher = new RegExp(value.target.value.toLowerCase(), "g");
                return matcher.test(el.name.toLowerCase());
              })
            );
          }}
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );
}
