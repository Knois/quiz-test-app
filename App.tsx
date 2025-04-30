import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";

//Just for expo snack

export default function ExpoRouterApp() {
  return (
    <Head.Provider>
      <ExpoRoot context={require.context("./app", true)} location="/" />
    </Head.Provider>
  );
}