import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack, Row } from "react-bootstrap";
import { truncateAddress } from "../../../utils";
import Identicon from "../../ui/Identicon";



const NftCard = ({ nft, buyNft }) => {
  const { contractOwner, price, image, description, name, index, attributes } = nft;
  return (
    <Col key={index}>
      <Card className="h-100" id={"nft-card"}>
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <Identicon address={contractOwner} size={28} />
            <span className="font-monospace text-secondary">
              {truncateAddress(contractOwner)}
            </span>
            <Badge bg="secondary" className="ms-auto">
              {index} ID
            </Badge>
            <Badge bg="secondary" className="ms-auto">
              {price / 10 ** 18} CELO
            </Badge>
          </Stack>
        </Card.Header>

        <div className=" ratio ratio-4x3">
          <img src={image} alt={description} style={{ objectFit: "cover" }} />
        </div>

        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>
          <div>
            <Row className="mt-2">
              {attributes.map((attribute, key) => (
                <Col key={key}>
                  <div className="border rounded bg-light">
                    <div className="text-secondary fw-lighter small text-capitalize">
                      {attribute.trait_type}
                    </div>
                    <div className="text-secondary text-capitalize font-monospace">
                      {attribute.value}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="d-flex m-2 justify-content-center">
              <button onClick={buyNft} className="btn btn-primary" id={"buy-button"}>Buy</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

NftCard.propTypes = {
  // props passed into this component
  nft: PropTypes.instanceOf(Object).isRequired,
};

export default NftCard;