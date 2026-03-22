import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Button, Container } from "react-bootstrap";

export default function Payment() {
  const { t } = useTranslation();

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="text-center shadow-sm p-3"
        style={{ width: "26rem", borderRadius: "18px" }}
      >
        <Card.Body>
          <Card.Title className="mb-3">
            {t("paytitle")}
          </Card.Title>

          <div
            style={{
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "12px",
              display: "inline-block",
            }}
          >
            <img
              src="/images/qr.png" 
              alt="QR оплата"
              className="img-fluid"
              style={{ maxWidth: "350px" }}
            />
          </div>

          <Card.Text className="mt-3">
            {t("paytext")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}