import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RequestBook from '../components/RequestBook';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <RequestBook/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
