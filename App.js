import { SQLiteProvider } from 'expo-sqlite';
import { IniciarBD } from './databases/iniciarBD';
import { Index } from './index';
import { useState } from 'react';

export default function App() {
  return (
    <SQLiteProvider databaseName="meusDados.db" onInit={IniciarBD}>
      <Index />
    </SQLiteProvider>
  );
};