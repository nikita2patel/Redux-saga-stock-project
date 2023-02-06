import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { ListGroup, ProgressBar, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../../Redux/Stock/StockActione";
import "./Stock.css";

const Stock = () => {
  const dispatch = useDispatch();

  const stockList = useSelector(
    (state) => state?.StockReducer?.stockData?.data
  );
  console.log("55", stockList);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    // <div className="container">
  <div className="row">
    <div className="col-8">
   
      <ListGroup.Item as="li" className="mb-4">
        {stockList?.map((val) => {
          return (
            <>
              <div className="d-flex justify-content-between align-items-center stock-left-data">
                <div className="d-flex justify-content-between left-container w-20 me-4 align-items-center">
                  <div className="me-2">
                    <AiOutlineMenu />
                  </div>

                  <div className="mx-2 fund-type text-center">
                    <span className="text-muted small">{val.type}</span>
                    <p>
                      $<span>{val.total_amount}</span>
                    </p>
                  </div>
                  <div className="flex-grow-1 share-type">
                    <p className="company-name">iShares</p>
                    <p className="script-name">{val.script}</p>
                    <span className="small">{val.stock_type}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between right-container flex-grow-1 w-80 ms-4 align-items-center stock-right-data">
                  <div className="stock-detail small d-flex stock-right-1">
                    <div className="text-muted me-4 m-width-50">
                      <p>
                        <FaCoins />
                        Quantity
                      </p>
                      <p>
                        <MdAlternateEmail />
                        Avg. Cost
                      </p>
                      <p>
                        <GrCurrency />
                        Invested Amt
                      </p>
                    </div>
                    <div className="d-flex flex-column m-width-50">
                      <span>${val.quantity}</span>
                      <span>${val.avg_cost}</span>
                      <span>${val.invasted_amt}</span>
                    </div>
                  </div>
                  <div className="stock-right-2">
                    <div className="d-flex small">
                      <div className="me-2 m-width-50">
                        <p className="mb-1 fw-bold">Market Value</p>
                        <p className="mb-2 text-muted">% of profit value</p>
                      </div>
                      <div className="d-flex flex-column m-width-50">
                        <span className="mb-1 fw-bold">${val.price}</span>
                        <span className="mb-2 fw-semibold">
                          {val.portfoli_percent} %
                        </span>
                      </div>
                    </div>
                    <ProgressBar
                      className="progressbar"
                      now={val.portfoli_percent}
                    />
                  </div>
                  <div className="stock-right-3">
                    <div className="d-flex small">
                      <div className="me-2 m-width-50">
                        <p className="mb-1 fw-bold">Unrealized P/L</p>
                        <p className="mb-2 text-muted">%Return</p>
                      </div>
                      <div className="d-flex flex-column m-width-50">
                        <span className="mb-1 fw-bold">
                          ${val.unrealizedPL}
                        </span>
                        <span className="mb-2 fw-semibold">
                          {/* {val.unrealizedPL} % */}
                        </span>
                        

                        <span className="mb-2 fw-semibold">
                          {val.return < 0 ? (
                            <IoMdArrowDropdown color="red" size={25}/>
                          ) : (
                            <IoMdArrowDropup color="green" size={25}/>
                          )}
                          {val.return} %
                        </span>
                      </div>
                    </div>
                    
                        
                    <div className="unrealized-progress">
                      <div className="progress-bg">
                        {val?.return > 0 ? (
                          <div
                            className="positive"
                            style={{ width: val.return / 2 + "%" }}
                          />
                        ) : (
                          <div
                            className="negative"
                            style={{
                              width: Math.abs(val.return) / 2 + "%",
                              marginLeft:
                                50 - Math.abs(val.return) / 2 + "%",
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                        className="progressbar"
                        now={val.unrealizedPL}
                        />  

                  <div className="d-flex flex-column ">
                    <Button variant="outline-danger mb-1">Buy</Button>
                    <Button variant="outline-danger mt-1">Sell</Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </ListGroup.Item>
      </div>
      <div class="col-4">
     
    </div>
  
      </div>
      
    
  );
};
export default Stock;
