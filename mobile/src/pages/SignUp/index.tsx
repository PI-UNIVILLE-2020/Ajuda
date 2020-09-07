import React, { useState } from 'react';
import {
  Platform,
  View,
  StyleSheet
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../../contexts/theme";
import { ArrowLeftButton, Button, InputLabel } from "../../components";
import {
  Container,
  Head,
  BackgroundContent,
  BackgroundColumn,
  TitleContainer,
  Title,
  Footer,
  FooterBorder,
  FooterContent,
  Form,
  Anchor,
  AnchorText
} from "./styles";

export default function Login({ navigation }) {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  const [step, setStep] = useState(0);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [WhatsApp, setWhatsApp] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <Head backgroundColor={theme.PrimaryColor}>
        <BackgroundContent>
          <BackgroundColumn>
            <ArrowLeftButton onPress={() => navigate("Landing")} />
          </BackgroundColumn>
         </BackgroundContent>
         <TitleContainer>
            <Title>
              Criar Conta
            </Title>
          </TitleContainer>
      </Head>
      <Footer>
        <FooterBorder
          backgroundColor={theme.PrimaryColor}
          style={{ ...StyleSheet.absoluteFillObject}}
        />
        <FooterContent>
          {

            step == 0 ? (
              <>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: theme.PrimaryColor,
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      margin: 4,
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: theme.SecondColor,
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      margin: 4,
                    }}
                  />
                </View>
                <Form>
                  <InputLabel value={name} onChangeText={setName} label="Nome" placeholder="Seu nome" marginBotom={20}/>
                  <InputLabel value={cpf} onChangeText={setCpf} label="CPF" placeholder="000.000.00-00" marginBotom={20}/>
                  <InputLabel value={WhatsApp} onChangeText={setWhatsApp} label="WhatsApp" placeholder="(  ) 0000-0000" marginBotom={40}/>
                  <Button text="Proxímo" disabled={[name, cpf, WhatsApp].includes("")} onPress={ () => setStep(1) } />
                </Form>
              </>
            ) : (
              <>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: theme.SecondColor,
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      margin: 4,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: theme.PrimaryColor,
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      margin: 4,
                    }}
                  />
                </View>
                <Form>
                  <InputLabel keyboardType="email-address" value={email} onChangeText={setEmail} label="Email" placeholder="Seu email" marginBotom={20}/>
                  <InputLabel value={password} onChangeText={setPassword} label="Senha" placeholder="Sua senha" marginBotom={40}/>
                  <Button text="Criar conta" onPress={ () => setStep(0) } />
                  <Anchor onPress={ () => setStep(0) }>
                    <AnchorText>
                      Voltar para o passo anteriror.
                    </AnchorText>
                  </Anchor>
                </Form>
              </>
            )

          }
          
        </FooterContent>
      </Footer>
    </Container>
  );
}
