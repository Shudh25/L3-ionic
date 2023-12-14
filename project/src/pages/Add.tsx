import {
  IonContent,
  IonHeader,
  IonButtons,
  IonButton,
  IonIcon,
  IonSelectOption,
  IonSelect,
  IonItem,
  IonPage,
  IonInput,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Add.css";

import { useState } from "react";

const Add: React.FC = () => {
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <IonPage>
      <IonContent>
        <div className="add-exp-container">
          <div>
            <IonImg
              class="img"
              src="./add.png"
              alt="logo"
              className="img"
            ></IonImg>

            <h1>
              <strong>Expense Tracker</strong> <br />
              <span>Add your expenses here</span>
            </h1>
          </div>

          <IonTitle>Add Expense</IonTitle>
          <IonItem>
            <IonInput placeholder="Rs.100" fill="outline"></IonInput>
          </IonItem>

          <IonTitle>Select Category</IonTitle>
          <IonItem>
            <IonSelect
              placeholder="Category"
              interface="popover"
              fill="outline"
            >
              <IonSelectOption value="Food">Food</IonSelectOption>
              <IonSelectOption value="Commute">Commute</IonSelectOption>
              <IonSelectOption value="Clothes">Clothes</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton fill="solid" style={{ width: "80%" }}>
            Contact
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Add;
