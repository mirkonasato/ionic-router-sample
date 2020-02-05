import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { PageProps } from './PageProps';

const Page2: React.FC<PageProps> = ({ counter, onIncrement }) => {
  console.log('rendering Page2');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonButton routerLink="/page1" fill="clear">Page 1</IonButton><br />
        <IonButton routerLink="/page3" fill="clear">Page 3</IonButton><br />
        <IonButton onClick={onIncrement}>Counter: {counter}</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
