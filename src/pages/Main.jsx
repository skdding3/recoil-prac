import React from 'react';
import styled from "styled-components";
import dummyData from "../model/dummyData";

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`

const MyComponent = () => {
    return (
        <ListWrapper>
            {dummyData.map((e) => {
                return (
                    <div key={e.id}>
                        dummy
                    </div>
                )
            })}
        </ListWrapper>
    );
};



export default MyComponent;
