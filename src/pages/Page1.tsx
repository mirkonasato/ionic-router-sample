import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { PageProps } from './PageProps';

const Page1: React.FC<PageProps> = ({ counter, onIncrement }) => {
  console.log('rendering Page1');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonButton routerLink="/page2" fill="clear">Page 2</IonButton><br />
        <IonButton routerLink="/page3" fill="clear">Page 3</IonButton><br />
        <IonButton onClick={onIncrement}>Counter: {counter}</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
