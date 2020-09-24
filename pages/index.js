import { Button, Input, Table, Row, Col, Select } from "antd";
import StudentControls from "../components/StudentControls";
import StudentModal from "../components/studentModal";
import StudentTable from "../components/studentTable";

export default function Home() {
  return (
    <div className="container">
      <div>
        <h1>Students</h1>
        <StudentControls />
        <StudentTable />
        <StudentModal />
      </div>
    </div>
  );
}
