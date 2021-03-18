import React from 'react';
import { IonHeader, IonGrid, IonRow, IonCol, IonPage, IonImg, IonContent, IonButton, IonLabel } from '@ionic/react';
import Logo from '../../components/Logo/Logo'
import './DescriptionPage.css'
import streamer from '../../assets/streamer.png'
import { FiInstagram, FiShare2, FiTwitch, FiTwitter, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Plugins } from '@capacitor/core'
const { Browser } = Plugins;


const DescriptionPage: React.FC = () => {

    async function RedirectPage(linkguy: string) {
        await Browser.open({
            url: linkguy
        });
    }
    // PREPARANDO PARA O BUILD



    return (
        <IonPage>
            <IonContent fullscreen>


                <IonHeader>

                    <IonRow className="ion-justify-content-center ion-align-items-center" style={{ gap: 2, }}>
                        <Logo />
                    </IonRow>

                </IonHeader>

                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-align-items-center ion-margin-horizontal">
                        <IonCol size="2">
                            {/* <Link to="/">
                                <FiArrowLeft color="#fff" size="50px" />
                            </Link> */}
                        </IonCol>
                        <IonCol size="12">

                            <IonImg src={streamer}></IonImg>

                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center  ion-margin-vertical">
                        <IonCol className="description-text">
                            <h1>Felipe Noronha</h1>
                            <p>Felipe Piller Noronha, mais conhecido por seu apelido online YoDa, é um streamer, ex-jogador profissional de League of Legends e empresário brasileiro. Atuou pela última vez no cenário competitivo como mid laner da equipe RED Canids e já atuou na Submarino Stars como jogador e criador de conteúdo.</p>
                        </IonCol>

                    </IonRow>

                    <IonRow className="ion-margin-bottom">
                        <IonCol className="ion-text-center">


                            <Link to="/">

                                <IonButton color="secondary">
                                    <IonRow className="button-description">


                                        <IonLabel>Ver Podcast</IonLabel>

                                        <FiYoutube color="#1E1D1D" />
                                    </IonRow>

                                </IonButton>

                            </Link>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-center social-links">
                            <IonRow className="button-description ion-margin-vertical">


                                <IonButton onClick={() => RedirectPage('https://www.twitch.tv/yoda')}  >
                                    <FiTwitch color="#fff" />
                                </IonButton>

                                <IonButton onClick={() => RedirectPage('https://www.youtube.com/c/YodaSL/videos')}>
                                    <FiYoutube color="#fff" />
                                </IonButton>

                                <IonButton onClick={() => RedirectPage('https://twitter.com/StoneDYooDa')}>
                                    <FiTwitter color="#fff" />
                                </IonButton>

                                <IonButton onClick={() => RedirectPage('https://www.instagram.com/stonedyoda/')}>
                                    <FiInstagram color="#fff" />
                                </IonButton>
                            </IonRow>

                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-center ion-margin-vertical ">
                            <IonButton>
                                <FiShare2 size="50px" color="#fff" />
                            </IonButton>

                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>
        </IonPage >
    );
}

export default DescriptionPage;