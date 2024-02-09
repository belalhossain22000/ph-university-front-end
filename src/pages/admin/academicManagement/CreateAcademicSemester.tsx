import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PhSelect";
import { semesterOptions } from "../../../constants/semester";
import {  monthOptions } from "../../../constants/global";
import { academicSemesterSchema } from "../../../Schema/academicManagement.schema";
import { zodResolver } from '@hookform/resolvers/zod';
const CreateAcademicSemester = () => {
  const currentYear = new Date().getFullYear();
  const yearOptions = [1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
  }));

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    console.log(semesterData);
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHForm onSubmit={onsubmit}   resolver={zodResolver(academicSemesterSchema)}>
          <PHSelect label="Name" name="name" options={semesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
