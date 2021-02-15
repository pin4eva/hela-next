import React from "react";
import styled from "styled-components";
import { Grid } from "theme-ui";

const PricingComp = () => {
  return (
    <Wrapper id="pricing">
      <div className="pricing">
        <div className="pricing-wrapper">
          <Grid className="grid" columns={[1, null, 3]}>
            <div className="grid-item">
              <div className="grid-item-heading bg-secondary text-center py-3">
                <h6 className="m-0">Basic plan</h6>
              </div>
              <div className="text-content text-center mt-3">
                <p className="thin">
                  Eu tristique quis dignissim lorem. Consectetur iaculis vitae
                  odio pulvinar.
                </p>
                <p>Monthly Price</p>
              </div>
              <h2 className="text-center">FREE</h2>
            </div>
            {pricingList.map((item, i) => (
              <div className="grid-item" key={i}>
                <div className="grid-item-heading bg-secondary text-center py-3">
                  <h6 className="m-0">{item.plan}</h6>
                </div>
                <div className="text-content text-center mt-3">
                  <p className="thin">{item.desc}</p>
                  <p>Monthly Price</p>
                </div>
                <h2 className="text-center grid-item-amount">
                  N{item.price}
                  <span> / Mo</span>
                </h2>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pricing {
    &-wrapper {
      .grid-item {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.06);
        &-heading {
          border-radius: 25px 25px 0px 0px;
        }
        &-amount span {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
export default PricingComp;

const pricingList = [
  {
    plan: "Student",
    desc: `Eu tristique quis dignissim lorem. Consectetur iaculis vitae odio pulvinar.`,
    price: 1800,
  },
  {
    plan: "Pro",
    desc: `Eu tristique quis dignissim lorem. Consectetur iaculis vitae odio pulvinar.`,
    price: 3500,
  },
];
