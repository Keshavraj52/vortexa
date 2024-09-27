import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      
      <div
          class="document-uploadcard-container document-uploadcard-root-class-name"
        >
          <div class="document-uploadcard-feature-card">
            <div class="document-uploadcard-container1">
              <svg viewBox="0 0 1024 1024" class="document-uploadcard-icon">
                <path
                  d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
                ></path>
              </svg>
            </div>
            <h2 class="document-uploadcard-text">Document 1 Uploaded</h2>
            <span class="document-uploadcard-text1">Hash:<a href="https://jade-careful-jackal-460.mypinata.cloud/ipfs/QmXFRNuVCX1Rq9pX3rLTD49x2dUE7TVAGwpy7FkQ4F7ANk?pinataGatewayToken=Uz0ZMDjQW4QTtHQxhEGmpgmQtACehLUI9hk6NA8otowE4030-nijfjkUntftX8l_&_gl=1*3pixzz*_ga*MTI3MTQ2MTAxLjE2OTUyNzA3OTQ.*_ga_5RMPXG14TE*MTY5NjAwNTQ4Ny44LjEuMTY5NjAwNjA1OS41Ni4wLjA.">8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405</a>
            </span>
          </div>
          <div class="document-uploadcard-feature-card1">
            <div class="document-uploadcard-container2">
              <svg viewBox="0 0 1024 1024" class="document-uploadcard-icon2">
                <path
                  d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
                ></path>
              </svg>
            </div>
            <h2 class="document-uploadcard-text2">Document 2 Uploaded</h2>
            <span class="document-uploadcard-text3">
              Transaction Id :
              8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405
            </span>
          </div>
          <div class="document-uploadcard-feature-card2">
            <div class="document-uploadcard-container3">
              <svg viewBox="0 0 1024 1024" class="document-uploadcard-icon4">
                <path
                  d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
                ></path>
              </svg>
            </div>
            <h2 class="document-uploadcard-text4">Document 3 Uploaded</h2>
            <span class="document-uploadcard-text5">
              Transaction Id :
              8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405
            </span>
          </div>
        </div>
        <ul class="documents-ul list">
          <li class="documents-li list-item">
            <svg viewBox="0 0 1024 1024" class="documents-icon04">
              <path
                d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
              ></path>
            </svg>
            <span class="documents-text3">Document 1 Uploaded</span>
            <span class="documents-text4">
              Hash : 8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405
            </span>
          </li>
          <li class="documents-li1 list-item">
            <svg viewBox="0 0 1024 1024" class="documents-icon06">
              <path
                d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
              ></path>
            </svg>
            <span class="documents-text5">Document 1 Uploaded</span>
            <span class="documents-text6">
              Hash : 8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405
            </span>
          </li>
          <li class="documents-li2 list-item">
            <svg viewBox="0 0 1024 1024" class="documents-icon08">
              <path
                d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
              ></path>
            </svg>
            <span class="documents-text7">Document 1 Uploaded</span>
            <span class="documents-text8">
              Hash : 8y5th4rowih8rc48nr84n9xxu49uc904u9m404cmjc495imc405
            </span>
          </li>
        </ul>
    </>
  );
};
export default Display;
