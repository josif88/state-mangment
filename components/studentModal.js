import { Modal, Row, Col, Select, Input } from "antd";
import { useStudentStore } from "../store/studentStore";

export default function StudentModal() {
  const {
    key,
    setKey,
    showModal,
    setShowModal,
    age,
    setAge,
    name,
    setName,
    address,
    setAddress,
    gender,
    setGender,
    data,
    setData,
    
  } = useStudentStore();

  const addStudent = () => {
    setKey(Date.now());
    setData([...data, { key, age, name, address, gender }]);
    //setKey(null);
    setName(null);
    setAge(null);
    setAddress(null);
    setGender(null);
    setShowModal(false);
  };

  return (
    <Modal
      title="Student information"
      visible={showModal}
      onOk={addStudent}
      onCancel={() => setShowModal(false)}
    >
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <Input
            placeholder="Student Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
        <Col span={6}>
          <Input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={16}>
          <Input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Select style={{ width: "100%" }} onChange={setGender}>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Col>
      </Row>
    </Modal>
  );
}
