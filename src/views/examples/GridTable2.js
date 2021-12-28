import React, { useState } from "react";
import { UncontrolledTooltip, Button } from "reactstrap";

const GridTable2 = () => {
  const isBlockchain = {
    O: 5,
    Two: 3,
    Th: 1,
    F: 5,
    Fi: 3,
    S: 1,
    Se: 5,
    E: 3,
    N: 1,
    T: 5,
    El: 3,
    Te: 1,
    Thr: 1,
    Fo: 1,
    Fif: 1,
  };

  let [One, setOne] = useState("");
  let [Two, setTwo] = useState("");
  let [Three, setThree] = useState("");
  let [Four, setFour] = useState("");
  let [Five, setFive] = useState("");
  let [Six, setSix] = useState("");
  let [Seven, setSeven] = useState("");
  let [Eight, setEight] = useState("");
  let [Nine, setNine] = useState("");
  let [Ten, setTen] = useState("");

  const inputOne = (e) => {
    if (e.target.value == isBlockchain.O) {
      document.querySelector(".pp11").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp11"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=n5FleMt5dlQ">✗ 請看教學</a>`;
    }
  };
  // <div className="vedio1"></div>

  const inputTwo = (e) => {
    setTwo(e.target.value);
    if (e.target.value == isBlockchain.Two) {
      document.querySelector(".pp12").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp12"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=n5FleMt5dlQ">✗ 請看教學</a>`;
    }
  };
  const inputThree = (e) => {
    setThree(e.target.value);
    if (e.target.value == isBlockchain.Th) {
      document.querySelector(".pp13").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp13"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=_8JSdGuLBlc">✗ 請看教學</a>`;
    }
  };
  const inputFour = (e) => {
    setFour(e.target.value);
    if (e.target.value == isBlockchain.F) {
      document.querySelector(".pp14").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp14"
      ).innerHTML = `<a href="hhttps://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputFive = (e) => {
    setFive(e.target.value);
    if (e.target.value == isBlockchain.Fi) {
      document.querySelector(".pp15").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp15"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputSix = (e) => {
    setSix(e.target.value);
    if (e.target.value == isBlockchain.S) {
      document.querySelector(".pp16").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp16"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputSeven = (e) => {
    setSeven(e.target.value);
    if (e.target.value == isBlockchain.Se) {
      document.querySelector(".pp17").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp17"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputEight = (e) => {
    setEight(e.target.value);
    if (e.target.value == isBlockchain.E) {
      document.querySelector(".pp18").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp18"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputNine = (e) => {
    setNine(e.target.value);
    if (e.target.value == isBlockchain.N) {
      document.querySelector(".pp19").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp19"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputTen = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.T) {
      document.querySelector(".pp20").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp20"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputEl = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.El) {
      document.querySelector(".pp21").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp21"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputTe = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.Te) {
      document.querySelector(".pp22").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp22"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputThr = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.Thr) {
      document.querySelector(".pp23").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp23"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputFo = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.Fo) {
      document.querySelector(".pp24").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp24"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  const inputFif = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.Fif) {
      document.querySelector(".pp25").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp25"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=CyLYaQXZCxo">✗ 請看教學</a>`;
    }
  };
  return (
    <div class="aaa">
      <div className="space"></div>

      <form action="" method="GET">
        <Button
          color="secondary"
          id="top"
          style={{ width: "50%", paddingTop: "1rem" }}
        >
          <span style={{ fontSize: "1.5rem" }}>判斷用何種類型的區塊鏈</span>
        </Button>
        {` `}
        <UncontrolledTooltip placement="top" target="top" delay={0}>
          1 為正面，5 為反面
        </UncontrolledTooltip>
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
              <span className="pp11">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="One"
                onChange={inputOne}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp12">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Two"
                onChange={inputTwo}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <span className="pp13">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Three"
                onChange={inputThree}
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
              <span className="pp14">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Four"
                onChange={inputFour}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp15">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Five"
                onChange={inputFive}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <span className="pp16">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Six"
                onChange={inputSix}
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
              <span className="pp17">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Seven"
                onChange={inputSeven}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp18">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Eight"
                onChange={inputEight}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <span className="pp19">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Nine"
                onChange={inputNine}
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
              <span className="pp20">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Ten"
                onChange={inputTen}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp21">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Eleven"
                onChange={inputEl}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <span className="pp22">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Twelve"
                onChange={inputTe}
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
              <span className="pp23">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Thirteen"
                onChange={inputThr}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp24">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Fourteen"
                onChange={inputFo}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </td>{" "}
            <td>
              <span className="pp25">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Fifteen"
                onChange={inputFif}
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
