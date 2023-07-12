import { Alert, Button, Card, Form, Input, Space } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Soumetre
    </Button>
  );
};

const Login = () => {
  const [form] = Form.useForm();
  const [msg, setMsg] = useState(null);
  const nagigate = useNavigate();

  const handleSubmit = (values) => {
    setMsg(null);
    console.log(values);
    if (values) {
      if (
        values.email !== "formation@gmail.com" ||
        values.password !== "Saluttoi!"
      ) {
        setMsg("Les identifiants sont incorrects");
      } else {
        nagigate("/todo");
      }
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-xs-12 col-md-12">
          <Card title="Connectez-vous ">
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Mot de pase"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <span className="text-danger text-center">{msg}</span>

              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
                  <Button htmlType="reset">Réinitialiser</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </div>

        <div className="col-lg-7 col-md-12 col-xs-12 mt-3">
          <Alert
            message="Informtion de connexion"
            description={
              <>
                <span className="font-weight-bold">Email</span>:
                formation@gmail.com <br />
                <span className="font-weight-bold">Mot de passe</span>:
                Saluttoi! <br />
              </>
            }
            type="info"
            showIcon
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
