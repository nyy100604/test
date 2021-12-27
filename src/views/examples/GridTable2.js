import React from "react";

const GridTable2 = () => {
  return (
    <div class="aaa">
      <div className="space"></div>

      <form action="" method="GET">
        <h1>判斷用何種類型的區塊鏈</h1> <br />
        <table>
          <tr>
            <th></th>
            <th>公有鏈</th>
            <th>聯盟鏈</th>
            <th>私有鏈</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <span>任何人</span>皆可發送交易或存取資料
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="One"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Two"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Three"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>非任何人</span>皆可發送交易或存取資料
            </td>
          </tr>
          <tr>
            <td>
              <span>單</span>個機構參與管理
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Four"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Five"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Six"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>非單</span>個機構參與管理
            </td>
          </tr>
          <tr>
            <td>
              隱私性較<span>高</span>的業務
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Seven"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Eight"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Nine"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              隱私性較<span>低</span>的業務
            </td>
          </tr>
          <tr>
            <td>
              <span>要求</span>速度快
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Ten"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Eleven"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Twelve"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>不要求</span>速度快
            </td>
          </tr>
          <tr>
            <td>
              <span>具</span>能合約功能
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Thirteen"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Fourteen"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <select
                class="form-select"
                aria-label="Default select example"
                name="Fifteen"
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>不具</span>能合約功能
            </td>
          </tr>
        </table>
        <br />
      </form>
      <div className="space"></div>
    </div>
  );
};

export default GridTable2;
