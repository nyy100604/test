import React, { useState } from "react";
import { UncontrolledTooltip, Button } from "reactstrap";
const GridTable = () => {
  const isBlockchain = {
    O: 1,
    T: 5,
    Th: 1,
    F: 5,
    Fi: 5,
    S: 1,
    Se: 5,
    E: 1,
    N: 1,
    T: 5,
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
      document.querySelector(".pp1").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp1"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  // <div className="vedio1"></div>

  const inputTwo = (e) => {
    setTwo(e.target.value);
    if (e.target.value == isBlockchain.T) {
      document.querySelector(".pp2").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp2"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputThree = (e) => {
    setThree(e.target.value);
    if (e.target.value == isBlockchain.Th) {
      document.querySelector(".pp3").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp3"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputFour = (e) => {
    setFour(e.target.value);
    if (e.target.value == isBlockchain.F) {
      document.querySelector(".pp4").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp4"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputFive = (e) => {
    setFive(e.target.value);
    if (e.target.value == isBlockchain.Fi) {
      document.querySelector(".pp5").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp5"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputSix = (e) => {
    setSix(e.target.value);
    if (e.target.value == isBlockchain.S) {
      document.querySelector(".pp6").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp6"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputSeven = (e) => {
    setSeven(e.target.value);
    if (e.target.value == isBlockchain.Se) {
      document.querySelector(".pp7").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp7"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputEight = (e) => {
    setEight(e.target.value);
    if (e.target.value == isBlockchain.E) {
      document.querySelector(".pp8").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp8"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputNine = (e) => {
    setNine(e.target.value);
    if (e.target.value == isBlockchain.N) {
      document.querySelector(".pp9").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp9"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };
  const inputTen = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.T) {
      document.querySelector(".pp10").innerText = `✓正確`;
    } else {
      document.querySelector(
        ".pp10"
      ).innerHTML = `<a href="https://www.twblogs.net/a/5ef693c3df18513b27376d3b/?lang=zh-cn">✗ 請看教學</a>`;
    }
  };

  return (
    <div class="aaa">
      <form action="" method="">
        <Button
          color="secondary"
          id="top"
          style={{ width: "50%", paddingTop: "1rem" }}
        >
          <span style={{ fontSize: "1.5rem" }}>你的專案真的需要區塊鏈嗎？</span>
        </Button>
        {` `}
        <UncontrolledTooltip placement="top" target="top" delay={0}>
          1 為正面，5 為反面
        </UncontrolledTooltip>

        <table>
          <tr>
            <th></th>
            <th>
              <span>需</span>要區塊鏈
            </th>
            <th>
              <span>不需</span>要區塊鏈
            </th>
            <th></th>
          </tr>
          <tr>
            <td>
              {" "}
              <span>需</span>要資料庫
            </td>
            <td>
              <span className="pp1">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="One"
                onChange={inputOne}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              {" "}
              <span className="pp2">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Two"
                onChange={inputTwo}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              {" "}
              <span>不需</span>要資料庫
            </td>
          </tr>
          <tr>
            <td>
              <span>可</span>有多人來紀錄與存取
            </td>
            <td>
              <span className="pp3">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Three"
                onChange={inputThree}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp4">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Four"
                onChange={inputFour}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>不可</span>多人（即1人）來紀錄或是存取
            </td>
          </tr>
          <tr>
            <td>
              使用者<span>有</span>可信的第三方
            </td>
            <td>
              <span className="pp5">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Five"
                onChange={inputFive}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp6">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Six"
                onChange={inputSix}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              使用者<span>沒有</span>可信的第三方
            </td>
          </tr>
          <tr>
            <td>
              系統參與者<span>相信</span>彼此
            </td>
            <td>
              <span className="pp7">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Seven"
                onChange={inputSeven}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp8">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Eight"
                onChange={inputEight}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              系統參與者<span>不相信</span>彼此
            </td>
          </tr>
          <tr>
            <td>
              <span>接受</span>數據被公開驗證
            </td>
            <td>
              <span className="pp9">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Nine"
                onChange={inputNine}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span className="pp10">作答</span>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="Ten"
                onChange={inputTen}
              >
                <option selected>Drop down and select a number</option>
                <option value="1">1</option>
                <option value="5">5</option>
              </select>
            </td>
            <td>
              <span>不接受</span>數據被公開驗證
            </td>
          </tr>
        </table>
        <br />
      </form>
    </div>
  );
};

export default GridTable;
