import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListBooks from "../components/ListBooks"

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ListBooks/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
