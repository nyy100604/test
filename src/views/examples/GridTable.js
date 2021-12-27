import React, { useState } from "react";
import { UncontrolledAlert } from "reactstrap";
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
      document.querySelector(".pp1").innerText = `正確`;
    } else {
      document.querySelector(
        ".pp1"
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=Lc7DzsKQaNw&list=RDLc7DzsKQaNw&start_radio=1">錯誤，請看教學</a>`;
    }
  };
  // <div className="vedio1"></div>

  const inputTwo = (e) => {
    setTwo(e.target.value);
    if (e.target.value == isBlockchain.T) {
      document.querySelector(".pp2").innerText = `正確`;
    } else {
      document.querySelector("a.learning").innerText = "教學資源";
      setTwo("http://doyouneedablockchain.com/");
    }
  };
  const inputThree = (e) => {
    setThree(e.target.value);
    if (e.target.value == isBlockchain.Th) {
      setThree("正確");
    } else {
      setThree("不正確");
    }
  };
  const inputFour = (e) => {
    setFour(e.target.value);
    if (e.target.value == isBlockchain.F) {
      setFour("正確");
    } else {
      setFour("不正確");
    }
  };
  const inputFive = (e) => {
    setFive(e.target.value);
    if (e.target.value == isBlockchain.Fi) {
      setFive("正確");
    } else {
      setFive("不正確");
    }
  };
  const inputSix = (e) => {
    setSix(e.target.value);
    if (e.target.value == isBlockchain.S) {
      setSix("正確");
    } else {
      setSix("不正確");
    }
  };
  const inputSeven = (e) => {
    setSeven(e.target.value);
    if (e.target.value == isBlockchain.Se) {
      setSeven("正確");
    } else {
      setSeven("不正確");
    }
  };
  const inputEight = (e) => {
    setEight(e.target.value);
    if (e.target.value == isBlockchain.E) {
      setEight("正確");
    } else {
      setEight("不正確");
    }
  };
  const inputNine = (e) => {
    setNine(e.target.value);
    if (e.target.value == isBlockchain.N) {
      setNine("正確");
    } else {
      setNine("不正確");
    }
  };
  const inputTen = (e) => {
    setTen(e.target.value);
    if (e.target.value == isBlockchain.Te) {
      setTen("正確");
    } else {
      setTen("不正確");
    }
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (One !== isBlockchain.O) {
  //     let learnResources = document.querySelector("td", "a");
  //     learnResources.innerText = "Hi";
  //   }
  // };
  return (
    <div class="aaa">
      <form action="" method="">
        <h1>你的專案真的需要區塊鏈嗎？</h1> <br />
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
              <p className="pp1"></p>
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
              <p className="pp2"></p>
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
