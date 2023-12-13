import React, { useState } from "react";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonInput,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function App() {
  const [name, setName] = useState("");
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythmic Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            placeholder="Your Name"
            value={name}
            onIonChange={(e) => setName(e.detail.value)}
          />
        </IonItem>        

        <IonItem>
          <IonLabel position="floating">DOB</IonLabel>
          <IonInput
            placeholder="DOB"
            value={name}
            onIonChange={(e) => setName(e.detail.value)}
          />
        </IonItem>
        <p>
          You entered : <b>{name}</b>{" "}
        </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
