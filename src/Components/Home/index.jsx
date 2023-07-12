import { Button, Card, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [fakesUsers, setFakesUsers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = () => {
    axios
      .get(
        `https://randomuser.me/api/?results=100&inc=name,gender,email,nat,picture&noinfo`
      )
      .then((response) => {
        console.log("response", response);
        setFakesUsers(response.data.results);
        setIsFetch(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container p-2">
      <div className="row mt-2">
        <div className="col-6">
          <h5>Hello guy !</h5>
        </div>
        <div className="col-6 text-end">
          <Button onClick={() => navigate("/login")} type="primary">
            Connectez-vous
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h6>Bienvenue sur notre plateforme test</h6>
        </div>
      </div>

      {!isFetch ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="row">
          {fakesUsers.map((item) => (
            <div className="col-lg-4 col-md-6 col-xs-12 mb-3">
              <Card
                hoverable
                cover={<img alt="example" src={item.picture.large} />}
              >
                <Card.Meta
                  title={
                    <>
                      {item.name.first} {item.name.last}
                    </>
                  }
                  description={item.email}
                />
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
