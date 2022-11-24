import {
  Avatar,
  Button,
  Card,
  Text,
  Row,
  Modal,
  Divider,
  Col,
  Grid,
} from "@nextui-org/react";
import BKLogo from '../../images/logoBK.png'
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
const MemberCard = (props) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div className="memberCard">
      <Card hoverable animated clickable>
        <Card.Body css={{ py: "$10", gap: "12px" }}>
          <Row justify="center">
            <Avatar
              size="xl"
              zoomed
              stacked
              src={props.src}
              color="gradient"
              bordered
            />
          </Row>
          <Row justify="center">
            <Text b size={"1.5rem"}>
              {props.name}
            </Text>
          </Row>
          <Row justify="center">
            <Text
              b
              css={{
                textGradient: "45deg, $yellow500 -20%, $red500 100%",
              }}
            >
              {props.role}
            </Text>
          </Row>

          <Button
            shadow
            onClick={handler}
            icon={<BiCamera />}
            rounded
            bordered
            color="gradient"
          >
            See Info
          </Button>
        </Card.Body>
      </Card>

      <Modal
        blur
        scroll
        animated
        closeButton
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Avatar
            src={props.src}
            size="xl"
            zoomed
            bordered
            color={props.color}
          />
          <Col>
            <Text h1 size={24} color={props.color} weight="bold">
              {props.name}
            </Text>
            <Text b size={18}>
              {props.ID}
            </Text>
          </Col>
          <Text
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
            }}
            weight="bold"
          >
            {props.khoa}
          </Text>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          <Grid.Container gap={2} justify="center">
            <Grid justify="center" xs={6}>
              <Button
                onClick={() => window.open(props.fbURL)}
                shadow
                color="primary"
                icon={<FaFacebook />}
                auto
              >
                Facebook
              </Button>
            </Grid>
            <Grid justify="center" xs={6}>
              <Button
                shadow
                color="secondary"
                icon={<GrGithub />}
                auto
                onClick={() => window.open(props.gitURL)}
              >
                Github
              </Button>
            </Grid>
            <Grid justify="center" xs={6}>
              <Button
                shadow
                color="gradient"
                icon={<FaInstagram />}
                auto
                onClick={() => window.open(props.instagramURL)}
              >
                Instagram
              </Button>
            </Grid>
            <Grid justify="center" xs={6}>
              <Button
                shadow
                color="warning"
                icon={<BsTwitter />}
                auto
                onClick={() => window.open(props.twitterURL)}
              >
                Twiiter
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Divider />
        <Modal.Footer justify="center">
          <Row justify="center">
            <Text css={{ marginRight: "10px" }}>
              Trường Đại học Bách Khoa - TP Hồ Chí Minh
            </Text>
            <Avatar src={BKLogo} squared />
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MemberCard;
