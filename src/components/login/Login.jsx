import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Button,
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
  Link,
  Divider,
  Col,
} from "@nextui-org/react";
import { FcGoogle, FcLock } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
const Login = () => {
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const handler = () => {
    setLogin(true);
    setRegister(false)
  }
  const closeHandler = () => {
    setLogin(false);
    setRegister(false)
  };
  return (
    <div>
      <Button auto shadow onClick={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={login}
        onClose={closeHandler}
        animated
        preventClose
        blur
      
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<AccountCircleIcon />}
          />
          <Input.Password
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            contentLeft={<FcLock />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link href="#" color="primary" underline>
              Forgot Password?
            </Link>
          </Row>
          <Row justify="center">
            <Link
              href="#"
              color="warning"
              underline
              onClick={() => {
                setRegister(true);
              }}
            >
              Create your ... new account
            </Link>
          </Row>
          <Row justify="center">
            <Button fullWidth size="md" color="primary" onClick={closeHandler}>
              <Text b size={18} css={{ color: "#ffffff" }}>
                Log in
              </Text>
            </Button>
          </Row>
        </Modal.Body>
        <Divider />
        <Modal.Footer justify="center">
          <Text>Sign in with: </Text>
          <Row justify="center" gap={0} fullWidth css={{ marginTop: "20px" }}>
            <Col>
              <FcGoogle size={50} />
            </Col>
            <Col>
              <BsFacebook size={50} color="3b5998" />
            </Col>
            <Col>
              <BsTwitter size={50} color="00acee" />
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={register}
        onClose={closeHandler}
       
        animated
        preventClose
        blur
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Register
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row justify="space-between">
            <Input placeholder="First name" css={{ marginRight: "30px" }} />
            <Input placeholder="Last name" />
          </Row>
          <Input
            clearable
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<AccountCircleIcon />}
          />
          <Input.Password
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            contentLeft={<FcLock />}
          />
          <Input.Password
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Confirm your password"
            contentLeft={<FcLock />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>I accept your privacy </Text>
            </Checkbox>
          </Row>
          <Row justify="center">
            <Button fullWidth size="md" color="success" onClick={closeHandler}>
              <Text b size={18} css={{ color: "#ffffff" }}>
                Register
              </Text>
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
