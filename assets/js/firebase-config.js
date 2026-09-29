/* =========================================================
   Mercado Bom Preço (modelo) — ligação com o servidor de pedidos
   Criasiteweb

   MODELO SEM SERVIDOR LIGADO. Enquanto "projectId" estiver vazio,
   o pedido segue normalmente pelo WhatsApp e nada é enviado ao
   painel. Quando um mercado fechar, cria-se o projeto dele e
   preenchem-se estas linhas — leva poucos minutos.
   ========================================================= */

export const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

/* conta usada pelo balcão para entrar no painel */
export const CONTA_LOJA = "";
