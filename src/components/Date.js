import React from "react";
import moment from "moment";
import styled from "@emotion/styled";

const Styled = styled.p`
  color: white;
  opacity: 60%;
`;

function Date(){

return(
    <Styled>{moment().format("DD-MM-YYYY")}</Styled>
)
}

export default Date;