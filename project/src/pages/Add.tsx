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
  IonLabel,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Add.css";

import { useState } from "react";

const Add: React.FC = () => {
  const [expense, setExpense] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");

  const handleChange = (e) => {
    // function handleExpenseChange(e){
    // setExpenseCategory(e.target.value);
    console.log("hello");
    // console.log(e);
    // console.log(e.detail.value);
    console.log(expenseCategory);
  };

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
            <IonInput
              placeholder="Rs.100"
              value={expense}
              fill="outline"
              onIonChange={(e: any) => setExpense(e.target.value)}
            ></IonInput>
          </IonItem>

          <IonTitle>Select Category</IonTitle>
          <IonItem>
            <IonSelect
              fill="outline"
              interface="popover"
              placeholder="Category"
              value={expenseCategory}
              onIonChange={(e: any) => setExpenseCategory(e.detail.value)}
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
